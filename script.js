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
 * 2. 時間のパース（"1時間30分" または 数値を分に変換）
 */
function parseTimeToMinutes(timeValue) {
    if (!timeValue) return 0;
    if (typeof timeValue === 'number') return timeValue;
    
    let totalMinutes = 0;
    const hourMatch = String(timeValue).match(/(\d+)時間/);
    const minMatch = String(timeValue).match(/(\d+)分/);
    if (hourMatch) totalMinutes += parseInt(hourMatch[1]) * 60;
    if (minMatch) totalMinutes += parseInt(minMatch[1]);
    
    // もし "90" のような数値文字列だった場合のフォールバック
    if (totalMinutes === 0 && !isNaN(timeValue)) return parseFloat(timeValue);
    
    return totalMinutes;
}

/**
 * 3. アドバイス判定（5時間ルール）
 */
function getAdvice(minutes, isLongProduct) {
    if (minutes <= 0) return `<span class="green">🔵 在庫OK</span>`;
    
    const roundedMin = Math.round(minutes);
    // 元々5時間以上かかる品、または計算結果が300分超え
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
            const shortage = Math.max(0, orderData.max - stock);
            
            // --- 時間計算（畑か工場か） ---
            let totalTime;
            const isFarm = (data.category === "農作物");
            const isLongProduct = (baseMin >= 300); 

            if (shortage === 0) {
                totalTime = 0;
            } else if (isFarm) {
                totalTime = baseMin; // 畑は一括
            } else {
                const yieldCount = data.yield || 1;
                const cycles = Math.ceil(shortage / yieldCount);
                totalTime = cycles * baseMin; // 工場は順次
            }

            // --- 原材料（レシピ）表示（エラー対策強化版） ---
            let recipeHtml = "";
            if (data.ingredients && shortage > 0) {
                recipeHtml = `<div class="recipe">【必要材料】<br>`;
                for (let [ingName, amount] of Object.entries(data.ingredients)) {
                    const count = parseFloat(amount);
                    if (!isNaN(count)) {
                        recipeHtml += `・${ingName} × ${Math.ceil(count * shortage)}個<br>`;
                    }
                }
                recipeHtml += `</div>`;
            }

            let html = `<div class="info">
                最大: ${orderData.max}個 / 最小: ${orderData.min}個<br>
                不足: <strong>${shortage}個</strong> (${isFarm ? '畑で一斉収穫' : '工場で順次作成'})
                ${recipeHtml}
            </div>`;
            
            if (shortage === 0) {
                html += `<p class="green" style="text-align:center; font-weight:bold;">✅ 在庫十分！</p>`;
            } else {
                html += `<ul class="advice-list">`;
                [0, 5, 10, 15, 30, 40, 50].forEach(rate => {
                    const calcMin = totalTime * (1 - rate / 100);
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

/**
 * 5. 初期化
 */
window.onload = () => {
    const list = document.getElementById('item-list');
    const allNames = new Set();
    
    // 全DBから品名取得
    const dbRefs = [
        typeof FACTORY_DB !== 'undefined' ? FACTORY_DB : {},
        typeof BASIC_MATERIALS_DB !== 'undefined' ? BASIC_MATERIALS_DB : {},
        typeof ANIMAL_ISLAND_DB !== 'undefined' ? ANIMAL_ISLAND_DB : {},
        typeof BASE3_DB !== 'undefined' ? BASE3_DB : {},
        typeof SUB_MATERIALS_DB !== 'undefined' ? SUB_MATERIALS_DB : {},
        typeof PLANE_ORDER_DB !== 'undefined' ? PLANE_ORDER_DB : {}
    ];
    
    dbRefs.forEach(db => Object.keys(db).forEach(n => {
        if(n !== "undefined") allNames.add(n);
    }));

    Array.from(allNames).sort().forEach(n => {
        const opt = document.createElement('option');
        opt.value = n;
        list.appendChild(opt);
    });

    document.querySelectorAll('.item-name').forEach(input => {
        input.addEventListener('click', function() { this.select(); });
    });

    document.addEventListener('input', updateCalculation);
    console.log("シミュレーター正常起動。アイテム数:", allNames.size);
};
