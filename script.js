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
 * 3. アドバイス判定
 */
function getAdvice(minutes) {
    if (minutes <= 0) return `<span class="green">🔵 0分: 在庫で足りるよ！</span>`;
    
    const roundedMin = Math.round(minutes);
    if (minutes > 300) {
        return `<span class="red">🔴 ${roundedMin}分: 市場/リクエスト推奨</span>`;
    } else if (minutes > 240) {
        return `<span class="orange">🟡 ${roundedMin}分: ぎりぎり間に合う！</span>`;
    } else {
        return `<span class="green">🔵 ${roundedMin}分: 余裕だね！</span>`;
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
            const maxOrder = orderData.max;
            const minOrder = orderData.min; 
            const shortage = Math.max(0, maxOrder - stock); 
            
            const yieldCount = data.yield || 1;
            const cycles = Math.ceil(shortage / yieldCount);

            let html = `<div class="info">
                最大: <strong>${maxOrder}個</strong> / 最小: <strong>${minOrder}個</strong><br>
                不足分(最大時): <strong>${shortage}個</strong>
            </div>`;
            
            if (shortage === 0) {
                html += `<p class="green" style="font-weight:bold; margin-top:10px;">✅ 在庫でカバー可能です</p>`;
            } else {
                html += `<ul class="advice-list">`;
                [0, 5, 10, 15, 30, 40, 50].forEach(rate => {
                    const totalMin = cycles * (baseMin * (1 - rate / 100));
                    html += `<li><strong>${rate}%</strong>: ${getAdvice(totalMin)}</li>`;
                });
                html += `</ul>`;
            }
            resultDiv.innerHTML = html;
        } else if (name) {
            resultDiv.innerHTML = `<p class='error-text'>候補から選んでください</p>`;
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
    if (!list) return;

    const allNames = new Set();
    const dbRefs = [
        typeof FACTORY_DB !== 'undefined' ? FACTORY_DB : {},
        typeof BASIC_MATERIALS_DB !== 'undefined' ? BASIC_MATERIALS_DB : {},
        typeof ANIMAL_ISLAND_DB !== 'undefined' ? ANIMAL_ISLAND_DB : {},
        typeof BASE3_DB !== 'undefined' ? BASE3_DB : {},
        typeof SUB_MATERIALS_DB !== 'undefined' ? SUB_MATERIALS_DB : {},
        typeof PLANE_ORDER_DB !== 'undefined' ? PLANE_ORDER_DB : {}
    ];

    dbRefs.forEach(db => {
        Object.keys(db).forEach(name => {
            if (name && name !== "undefined") allNames.add(name);
        });
    });

    // 候補リストを作成（あいうえお順）
    Array.from(allNames).sort().forEach(n => {
        const opt = document.createElement('option');
        opt.value = n;
        list.appendChild(opt);
    });

    // --- 改良ポイント ---
    document.querySelectorAll('.item-name').forEach(input => {
        // 入力欄をクリックした際、すでに入っている文字を選択状態にする
        // これにより、そのまま打てば上書き、消したければ消せる
        input.addEventListener('click', function() {
            this.select(); 
        });
    });

    document.addEventListener('input', updateCalculation);
    console.log("シミュレーター正常起動。");
};