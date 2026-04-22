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
 */
function updateCalculation() {
    const slots = document.querySelectorAll('.slot');

    slots.forEach(slot => {
        const name = slot.querySelector('.item-name').value;
        const stock = parseInt(slot.querySelector('.item-stock').value) || 0;
        const resultDiv = slot.querySelector('.calc-result');
        
        const data = getItemData(name);
        const orderData = (typeof PLANE_ORDER_DB !== 'undefined') ? PLANE_ORDER_DB[name] : null;

        if (data && orderData) {
            const baseMin = parseTimeToMinutes(data.time);
            const shortage = Math.max(0, orderData.max - stock);
            
            // --- ロジックの肝：畑か工場か ---
            let totalTime;
            const isFarm = data.category === "農作物";
            const isLongProduct = baseMin >= 300; // そもそも1個5時間以上

            if (shortage === 0) {
                totalTime = 0;
            } else if (isFarm) {
                // 農作物は畑で一斉に作るため「1回分の時間」とする
                totalTime = baseMin;
            } else {
                // 工場製品は「サイクル数 × 時間」
                const yieldCount = data.yield || 1;
                const cycles = Math.ceil(shortage / yieldCount);
                totalTime = cycles * baseMin;
            }

            // --- 原材料（レシピ）の生成 ---
            let recipeHtml = "";
            if (data.ingredients) {
                recipeHtml = `<div class="recipe">【必要材料】<br>`;
                for (const [ing, num] of Object.entries(data.ingredients)) {
                    recipeHtml += `・${ing} × ${num * shortage} `;
                }
                recipeHtml += `</div>`;
            }

            let html = `<div class="info">
                最大: ${orderData.max}個 / 最小: ${orderData.min}個<br>
                不足: <strong>${shortage}個</strong> (${isFarm ? '畑で一斉収穫' : '工場で順次作成'})
                ${recipeHtml}
            </div>`;
            
            if (shortage === 0) {
                html += `<p class="green" style="text-align:center;">✅ 在庫十分！</p>`;
            } else {
                html += `<ul class="advice-list">`;
                [0, 5, 10, 15, 30, 40, 50].forEach(rate => {
                    const calcMin = totalTime * (1 - rate / 100);
                    html += `<li><strong>${rate}%</strong>: ${getAdvice(calcMin, isLongProduct)}</li>`;
                });
                html += `</ul>`;
            }
            resultDiv.innerHTML = html;
        } else {
            resultDiv.innerHTML = name ? `<p class='error-text'>データ未登録</p>` : "";
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
