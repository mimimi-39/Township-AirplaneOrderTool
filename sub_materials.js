/**
 * 二次加工品・鋳物データベース
 * キー: 品物名
 * 値: { factory, time, ingredients, level }
 */
const SUB_MATERIALS_DB = {
    // 4-1. 鉱石・鋳物工場
    "銅の鋳塊": { factory: "鋳物工場", time: "1時間30分", ingredients: [{ name: "銅鉱", count: 5 }], level: 13 },
    "銀の鋳塊": { factory: "鋳物工場", time: "2時間", ingredients: [{ name: "銀鉱", count: 5 }], level: 13 },
    "金の鋳塊": { factory: "鋳物工場", time: "3時間", ingredients: [{ name: "金鉱", count: 5 }], level: 13 },
    "白金塊": { factory: "鋳物工場", time: "4時間", ingredients: [{ name: "白金鉱", count: 5 }], level: 13 },

    // 4-2. 工場二次加工品
    "クリーム": { factory: "乳製品工場", time: "15分", ingredients: [{ name: "牛乳", count: 1 }], level: 4 },
    "チーズ": { factory: "乳製品工場", time: "30分", ingredients: [{ name: "牛乳", count: 2 }], level: 6 },
    "バター": { factory: "乳製品工場", time: "1時間", ingredients: [{ name: "牛乳", count: 3 }], level: 11 },
    "砂糖": { factory: "砂糖工場", time: "20分", ingredients: [{ name: "サトウキビ", count: 1 }], level: 7 },
    "シロップ": { factory: "砂糖工場", time: "40分", ingredients: [{ name: "サトウキビ", count: 2 }], level: 17 },
    "キャラメル": { factory: "砂糖工場", time: "1時間30分", ingredients: [{ name: "サトウキビ", count: 3 }], level: 24 },
    "コットン生地": { factory: "織物工場", time: "30分", ingredients: [{ name: "綿", count: 2 }], level: 9 },
    "ウール生地": { factory: "織物工場", time: "40分", ingredients: [{ name: "羊毛", count: 2 }], level: 10 },
    "絹生地": { factory: "織物工場", time: "1時間30分", ingredients: [{ name: "絹", count: 2 }], level: 31 },
    "ナイロン糸": { factory: "織物工場", time: "2時間", ingredients: [{ name: "ゴムの木", count: 3 }], level: 36 },
    "紙": { factory: "製紙工場", time: "1時間30分", ingredients: [{ name: "松の木", count: 1 }], level: 18 },
    "ゴム": { factory: "ゴム工場", time: "1時間", ingredients: [{ name: "ゴムの木", count: 1 }], level: 29 },
    "プラスチック": { factory: "ゴム工場", time: "1時間30分", ingredients: [{ name: "ゴムの木", count: 2 }], level: 32 },
    "接着剤": { factory: "ゴム工場", time: "2時間", ingredients: [{ name: "ゴムの木", count: 3 }], level: 37 },
    "生地": { factory: "食品加工工場", time: "30分", ingredients: [{ name: "小麦", count: 3 }], level: 31 },
    "プラスチックボトル": { factory: "プラスチック工場", time: "1時間30分", ingredients: [{ name: "プラスチック", count: 1 }], level: 34 }
};