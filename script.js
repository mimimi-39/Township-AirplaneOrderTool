/**
 * 1. データベース統合検索
 */
function getItemData(name) {
    const dbs = [
        typeof FACTORY_DB !== 'undefined' ? FACTORY_DB : null,
        typeof BASIC_MATERIALS_DB !== 'undefined' ? BASIC_MATERIALS_DB : null,
        typeof ANIMAL_ISLAND_DB !== 'undefined' ? ANIMAL_ISLAND_DB : null,
        typeof BASE3_DB !== 'undefined' ? BASE3_DB : null,
        typeof SUB_MATERIALS_DB !== 'undefined' ? SUB_MATERIALS_DB : null,
        typeof PLANE_ORDER_DB !== 'undefined' ? PLANE_ORDER_DB : null
    ];
    for (const db of dbs) {
        if (db && db[name]) return db[name];
    }
    return null;
}

/**
 * 2. 時間のパース
 */
function parseTimeToMinutes(timeValue) {
    if (!timeValue) return 0;
    if (typeof timeValue === 'number') return timeValue;
    let totalMinutes = 0;
    const hourMatch = timeValue.match(/(\d+)時間/);
    const minMatch = timeValue.match(/(\d+)分/);
    if (hourMatch) totalMinutes += parseInt(hourMatch[1]) * 60;
    if (minMatch) totalMinutes += parseInt(minMatch[1]);
    return totalMinutes;
}

/**
 * 3. アドバイス判定（5時間ルール）
 */
function getAdvice(minutes, isLongProduct) {
    if (minutes <= 0) return `<span class="green">🔵 在庫OK</span>`;
    
    const roundedMin = Math.round(minutes);
    // そもそも1個作るのに5時間かかる、または合計が5時間超え
    if (isLongProduct || minutes > 300) {
        return `<span class="red">🔴 ${roundedMin}分: 市場/リクエスト推奨</span>`;
    } else if (minutes > 240) {
        return `<span class="orange">🟡 ${roundedMin}分: ぎりぎり！</span>`;
    } else {
        return `<span class="green">🔵 ${roundedMin}分: 余裕！</span>`;
    }
}

/**
 * 4. メイン計算ロジック
 * 畑（並列）と工場（順次）を区別し、材料の合計も算出します
 */
function updateCalculation() {
    const slots = document.querySelectorAll('.slot');

    slots.forEach(slot => {
        const nameInput = slot.querySelector('.item-name');
        const stockInput = slot.querySelector('.item-stock');
        const resultDiv = slot.querySelector('.calc-result');
        
        const name = nameInput.value;
        const stock = parseInt(stockInput.value) || 0;
        
        const data = getItemData(name);
        const orderData = (typeof PLANE_ORDER_DB !== 'undefined') ? PLANE_ORDER_DB[name] : null;

        if (data && orderData) {
            const baseMin = parseTimeToMinutes(data.time);
            const maxOrder = orderData.max;
            const minOrder = orderData.min;
            const shortage = Math.max(0, maxOrder - stock); 
            
            // --- 時間計算ロジック ---
            let totalTime;
            const isFarm = (data.category === "農作物");
            const isLongProduct = (baseMin >= 300); // 1個で5時間以上かかるか

            if (shortage === 0) {
                totalTime = 0;
            } else if (isFarm) {
                // 農作物は畑が空いていれば一斉に植えられるので「1回分の時間」
                totalTime = baseMin;
            } else {
                // 工場製品は予約スロットで1つずつ作るので「サイクル数 × 時間」
                const yieldCount = data.yield || 1;
                const cycles = Math.ceil(shortage / yieldCount);
                totalTime = cycles * baseMin;
            }

            // --- 原材料（レシピ）の生成 ---
            let recipeHtml = "";
            if (data.ingredients && shortage > 0) {
                recipeHtml = `<div class="recipe">【必要材料】<br>`;
                
                // オブジェクトの各エントリーをループ
                for (let [key, value] of Object.entries(data.ingredients)) {
                    let itemName = key;
                    let countPerUnit = parseFloat(value);

                    // もし key が数字で value が品名だった場合の入れ替え（念のための保護）
                    if (isNaN(countPerUnit)) {
                        itemName = value;
                        countPerUnit = parseFloat(key);
                    }

                    // 数字が有効なら不足分を掛け算して表示
                    if (!isNaN(countPerUnit)) {
                        const totalNeeded = Math.ceil(countPerUnit * shortage);
                        recipeHtml += `・${itemName} × ${totalNeeded}個<br>`;
                    }
                }
                recipeHtml += `</div>`;
            }

            // --- HTML出力 ---
            let html = `<div class="info">
                最大: <strong>${maxOrder}個</strong> / 最小: <strong>${minOrder}個</strong><br>
                不足: <strong>${shortage}個</strong> (${isFarm ? '畑で一斉収穫' : '工場で順次作成'})
                ${recipeHtml}
            </div>`;
            
            if (shortage === 0) {
                html += `<p class="green" style="text-align:center; font-weight:bold; margin-top:10px;">✅ 在庫でカバー可能です</p>`;
            } else {
                html += `<ul class="advice-list">`;
                // 0%〜50%の時短率をループ
                [0, 5, 10, 15, 30, 40, 50].forEach(rate => {
                    const calcMin = totalTime * (1 - rate / 100);
                    // 1個5時間以上の品、または計算結果が5時間以上の場合は警告が出る仕組み
                    html += `<li><strong>${rate}%</strong>: ${getAdvice(calcMin, isLongProduct)}</li>`;
                });
                html += `</ul>`;
            }
            resultDiv.innerHTML = html;
        } else if (name) {
            resultDiv.innerHTML = `<p class='error-text'>データ未登録です</p>`;
        } else {
            resultDiv.innerHTML = "";
        }
    });
}

// 初期化（前のコードと同じなので省略、最後の input イベント監視は残す）
window.onload = () => {
    const list = document.getElementById('item-list');
    const allNames = new Set();
    const dbRefs = [
        typeof FACTORY_DB !== 'undefined' ? FACTORY_DB : {},
        typeof BASIC_MATERIALS_DB !== 'undefined' ? BASIC_MATERIALS_DB : {},
        typeof ANIMAL_ISLAND_DB !== 'undefined' ? ANIMAL_ISLAND_DB : {},
        typeof BASE3_DB !== 'undefined' ? BASE3_DB : {},
        typeof SUB_MATERIALS_DB !== 'undefined' ? SUB_MATERIALS_DB : {},
        typeof PLANE_ORDER_DB !== 'undefined' ? PLANE_ORDER_DB : {}
    ];
    dbRefs.forEach(db => Object.keys(db).forEach(n => allNames.add(n)));
    Array.from(allNames).sort().forEach(n => {
        const opt = document.createElement('option');
        opt.value = n;
        list.appendChild(opt);
    });
    document.querySelectorAll('.item-name').forEach(input => {
        input.addEventListener('click', function() { this.select(); });
    });
    document.addEventListener('input', updateCalculation);
};
