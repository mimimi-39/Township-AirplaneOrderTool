const ANIMAL_ISLAND_DB = {
    // 標準的な畜産
    "牛乳": { category: "畜産物", time: 20, from: "牛舎" },
    "卵": { category: "畜産物", time: 60, from: "ニワトリ小屋" },
    "羊毛": { category: "畜産物", time: 240, from: "羊牧場" },
    "ハチの巣": { category: "畜産物", time: 360, from: "養蜂場" },
    "ベーコン": { category: "畜産物", time: 420, from: "養豚場" },
    "キノコ": { category: "畜産物", time: 300, from: "キノコ農園" },

    // 特殊畜産（エサによって時間が変わるため代表的な時間を設定、または後ほど選択式に）
    "羽毛": { category: "特殊畜産", time: 90, from: "アヒルのえさ場", note: "パン使用時" },
    "カラフルな羽": { category: "特殊畜産", time: 60, from: "アヒルのえさ場", note: "ベーグル使用時" },
    "海藻": { category: "特殊畜産", time: 270, from: "カワウソの池", note: "卵使用時" },
    "ホタテ": { category: "特殊畜産", time: 270, from: "カワウソの池", note: "卵使用時" },
    "真珠": { category: "特殊畜産", time: 240, from: "カワウソの池", note: "ベーコン使用時" },

    // 島特産品
    "ピーチ": { category: "島特産品", time: 240, from: "フルートス島" },
    "スイカ": { category: "島特産品", time: 240, from: "フルートス島" },
    "プラム": { category: "島特産品", time: 240, from: "フルートス島" },
    "ブドウ": { category: "島特産品", time: 420, from: "オリビア島" },
    "オリーブ": { category: "島特産品", time: 420, from: "オリビア島" },
    "キーライム": { category: "島特産品", time: 420, from: "オリビア島" },
    "バナナ": { category: "島特産品", time: 540, from: "トロピカ島" },
    "ココナッツ": { category: "島特産品", time: 540, from: "トロピカ島" },
    "パイナップル": { category: "島特産品", time: 540, from: "トロピカ島" },
    "魚": { category: "島特産品", time: 480, from: "釣り島" },
    "エビ": { category: "島特産品", time: 480, from: "釣り島" },
    "ロブスター": { category: "島特産品", time: 480, from: "釣り島" },
    "アボカド": { category: "島特産品", time: 600, from: "ボニータ島" },
    "マンゴー": { category: "島特産品", time: 600, from: "ボニータ島" },
    "アロエ": { category: "島特産品", time: 600, from: "ボニータ島" },

    // 鉱山
    "銅の鋳塊": { category: "鉱山採掘", time: 90 },
    "銀の鋳塊": { category: "鉱山採掘", time: 120 },
    "金の鋳塊": { category: "鉱山採掘", time: 180 },
    "白金塊": { category: "鉱山採掘", time: 240 },
    "土": { category: "鉱山採掘", time: 10 }
};