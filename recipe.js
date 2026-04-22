/**
 * 工場レシピデータベース (辞書)
 */
const FACTORY_DB = {
    // 飼料工場
    "牛のえさ": { factory: "飼料工場", yield: 3, ingredients: [{ name: "小麦", count: 2 }], time: "5分", price: 3, level: 1 },
    "鶏のえさ": { factory: "飼料工場", yield: 3, ingredients: [{ name: "小麦", count: 1 }, { name: "トウモロコシ", count: 1 }], time: "10分", price: 4, level: 5 },
    "羊のえさ": { factory: "飼料工場", yield: 3, ingredients: [{ name: "トウモロコシ", count: 2 }, { name: "にんじん", count: 1 }], time: "20分", price: 5, level: 12 },
    "蜂のえさ": { factory: "飼料工場", yield: 3, ingredients: [{ name: "小麦", count: 2 }, { name: "サトウキビ", count: 1 }], time: "30分", price: 7, level: 35 },
    "豚 of えさ": { factory: "飼料工場", yield: 3, ingredients: [{ name: "にんじん", count: 2 }, { name: "トウモロコシ", count: 1 }], time: "40分", price: 10, level: 42 },
    "基質": { factory: "飼料工場", yield: 3, ingredients: [{ name: "トウモロコシ", count: 2 }, { name: "米", count: 1 }, { name: "松の木", count: 1 }], time: "25分", price: 23, level: 63 },

    // パン屋
    "パン": { factory: "パン屋", yield: 1, ingredients: [{ name: "小麦", count: 2 }], time: "5分", price: 5, level: 2 },
    "クッキー": { factory: "パン屋", yield: 1, ingredients: [{ name: "小麦", count: 2 }, { name: "卵", count: 2 }], time: "15分", price: 44, level: 5 },
    "ベーグル": { factory: "パン屋", yield: 1, ingredients: [{ name: "小麦", count: 2 }, { name: "砂糖", count: 1 }, { name: "卵", count: 3 }], time: "30分", price: 55, level: 8 },
    "ピザ": { factory: "パン屋", yield: 1, ingredients: [{ name: "小麦", count: 2 }, { name: "チーズ", count: 1 }, { name: "トマト", count: 2 }], time: "2時間", price: 68, level: 22 },
    "ジャガイモパン": { factory: "パン屋", yield: 1, ingredients: [{ name: "小麦", count: 2 }, { name: "ジャガイモ", count: 2 }, { name: "卵", count: 4 }], time: "1時間", price: 158, level: 26 },
    "バナナブレッド": { factory: "パン屋", yield: 1, ingredients: [{ name: "小麦", count: 2 }, { name: "バナナ", count: 3 }, { name: "卵", count: 2 }, { name: "バター", count: 1 }], time: "1時間30分", price: 294, level: 41 },
    "シーフードピザ": { factory: "パン屋", yield: 1, ingredients: [{ name: "小麦", count: 2 }, { name: "チーズ", count: 1 }, { name: "魚", count: 1 }, { name: "エビ", count: 1 }], time: "2時間30分", price: 241, level: 55 },
    "キノコパイ": { factory: "パン屋", yield: 1, ingredients: [{ name: "小麦", count: 3 }, { name: "キノコ", count: 2 }, { name: "ジャガイモ", count: 1 }], time: "1時間15分", price: 195, level: 66 },
    "アップルシュトゥルーデル": { factory: "パン屋", yield: 1, ingredients: [{ name: "小麦", count: 2 }, { name: "砂糖", count: 1 }, { name: "リンゴ", count: 2 }], time: "3時間", price: 168, level: 82 },

    // 乳製品工場
    "クリーム": { factory: "乳製品工場", yield: 1, ingredients: [{ name: "牛乳", count: 1 }], time: "15分", price: 12, level: 4 },
    "チーズ": { factory: "乳製品工場", yield: 1, ingredients: [{ name: "牛乳", count: 2 }], time: "30分", price: 25, level: 6 },
    "バター": { factory: "乳製品工場", yield: 1, ingredients: [{ name: "牛乳", count: 3 }], time: "1時間", price: 39, level: 11 },
    "ヨーグルト": { factory: "乳製品工場", yield: 1, ingredients: [{ name: "牛乳", count: 4 }], time: "1時間30分", price: 53, level: 21 },
    "ピーチヨーグルト": { factory: "乳製品工場", yield: 1, ingredients: [{ name: "牛乳", count: 2 }, { name: "ピーチ", count: 2 }], time: "2時間", price: 157, level: 47 },
    "豆腐": { factory: "乳製品工場", yield: 1, ingredients: [{ name: "大豆", count: 5 }], time: "4時間", price: 104, level: 90 },
    "植物性ミルク": { factory: "乳製品工場", yield: 1, ingredients: [{ name: "大豆", count: 3 }], time: "3時間", price: 60, level: 92 },

    // 砂糖工場
    "砂糖": { factory: "砂糖工場", yield: 1, ingredients: [{ name: "サトウキビ", count: 1 }], time: "20分", price: 14, level: 7 },
    "シロップ": { factory: "砂糖工場", yield: 1, ingredients: [{ name: "サトウキビ", count: 2 }], time: "40分", price: 29, level: 17 },
    "キャラメル": { factory: "砂糖工場", yield: 1, ingredients: [{ name: "サトウキビ", count: 3 }], time: "1時間30分", price: 45, level: 24 },
    "ハニーキャラメル": { factory: "砂糖工場", yield: 1, ingredients: [{ name: "ハチの巣", count: 1 }, { name: "サトウキビ", count: 1 }], time: "2時間30分", price: 68, level: 36 },

    // 織物工場
    "コットン生地": { factory: "織物工場", yield: 1, ingredients: [{ name: "綿", count: 2 }], time: "30分", price: 37, level: 9 },
    "ウール生地": { factory: "織物工場", yield: 1, ingredients: [{ name: "羊毛", count: 2 }], time: "40分", price: 61, level: 10 },
    "絹生地": { factory: "織物工場", yield: 1, ingredients: [{ name: "絹", count: 2 }], time: "1時間30分", price: 140, level: 31 },
    "ナイロン糸": { factory: "織物工場", yield: 1, ingredients: [{ name: "ゴムの木", count: 3 }], time: "2時間", price: 111, level: 36 },

    // 仕立て屋
    "シャツ": { factory: "仕立て屋", yield: 1, ingredients: [{ name: "コットン生地", count: 1 }], time: "1時間", price: 45, level: 12 },
    "セーター": { factory: "仕立て屋", yield: 1, ingredients: [{ name: "ウール生地", count: 1 }], time: "1時間30分", price: 76, level: 14 },
    "コート": { factory: "仕立て屋", yield: 1, ingredients: [{ name: "コットン生地", count: 1 }, { name: "ウール生地", count: 1 }], time: "2時間", price: 125, level: 20 },
    "帽子": { factory: "仕立て屋", yield: 1, ingredients: [{ name: "コットン生地", count: 1 }, { name: "絹生地", count: 1 }], time: "2時間30分", price: 231, level: 31 },
    "ドレス": { factory: "仕立て屋", yield: 1, ingredients: [{ name: "ウール生地", count: 1 }, { name: "絹生地", count: 1 }], time: "3時間", price: 268, level: 33 },
    "スーツ": { factory: "仕立て屋", yield: 1, ingredients: [{ name: "ウール生地", count: 1 }, { name: "コットン生地", count: 1 }, { name: "絹生地", count: 1 }], time: "4時間", price: 330, level: 36 },
    "チロリアン帽": { factory: "仕立て屋", yield: 1, ingredients: [{ name: "コットン生地", count: 1 }, { name: "絹生地", count: 1 }, { name: "カラフルな羽", count: 1 }], time: "2時間45分", price: 274, level: 50 },
    "イブニングドレス": { factory: "仕立て屋", yield: 1, ingredients: [{ name: "絹生地", count: 2 }, { name: "真珠", count: 5 }], time: "3時間30分", price: 815, level: 87 },

    // スナック工場
    "ポップコーン": { factory: "スナック工場", yield: 1, ingredients: [{ name: "トウモロコシ", count: 2 }], time: "30分", price: 12, level: 14 },
    "コーンチップス": { factory: "スナック工場", yield: 1, ingredients: [{ name: "トウモロコシ", count: 3 }], time: "1時間", price: 19, level: 17 },
    "グラノーラ": { factory: "スナック工場", yield: 1, ingredients: [{ name: "小麦", count: 2 }, { name: "イチゴ", count: 2 }], time: "40分", price: 29, level: 19 },
    "ポテトチップス": { factory: "スナック工場", yield: 1, ingredients: [{ name: "ジャガイモ", count: 2 }], time: "2時間", price: 69, level: 22 },
    "ブロシェット": { factory: "スナック工場", yield: 1, ingredients: [{ name: "オリーブ", count: 2 }, { name: "ブドウ", count: 2 }, { name: "チーズ", count: 1 }], time: "15分", price: 307, level: 42 },
    "ペッパーベーコン": { factory: "スナック工場", yield: 1, ingredients: [{ name: "ベーコン", count: 2 }, { name: "シロップ", count: 1 }], time: "1時間20分", price: 115, level: 43 },
    "米のポン菓子": { factory: "スナック工場", yield: 1, ingredients: [{ name: "米", count: 4 }, { name: "シロップ", count: 1 }], time: "45分", price: 103, level: 62 },
    "干しキノコ": { factory: "スナック工場", yield: 1, ingredients: [{ name: "キノコ", count: 3 }], time: "1時間45分", price: 262, level: 64 },
    "塩炒りピーナッツ": { factory: "スナック工場", yield: 1, ingredients: [{ name: "ピーナッツ", count: 3 }], time: "1時間30分", price: 105, level: 76 },

    // ファストフードレストラン
    "ミルクセーキ": { factory: "ファストフードレストラン", yield: 1, ingredients: [{ name: "牛乳", count: 2 }, { name: "イチゴ", count: 1 }], time: "15分", price: 30, level: 16 },
    "チーズバーガー": { factory: "ファストフードレストラン", yield: 1, ingredients: [{ name: "パン", count: 2 }, { name: "チーズ", count: 1 }, { name: "トマト", count: 1 }], time: "30分", price: 57, level: 16 },
    "サンドイッチ": { factory: "ファストフードレストラン", yield: 1, ingredients: [{ name: "パン", count: 1 }, { name: "バター", count: 1 }, { name: "イチゴ", count: 2 }], time: "40分", price: 80, level: 19 },
    "フライドポテト": { factory: "ファストフードレストラン", yield: 1, ingredients: [{ name: "ジャガイモ", count: 2 }, { name: "クリーム", count: 1 }, { name: "トマト", count: 2 }], time: "1時間", price: 88, level: 28 },
    "ベークドポテト": { factory: "ファストフードレストラン", yield: 1, ingredients: [{ name: "ジャガイモ", count: 2 }, { name: "ベーコン", count: 1 }, { name: "チーズ", count: 1 }], time: "50分", price: 111, level: 46 },
    "フィッシュバーガー": { factory: "ファストフードレストラン", yield: 1, ingredients: [{ name: "パン", count: 2 }, { name: "魚", count: 2 }, { name: "唐辛子", count: 1 }], time: "45分", price: 184, level: 53 },
    "フィッシュ・アンド・チップス": { factory: "ファストフードレストラン", yield: 1, ingredients: [{ name: "魚", count: 2 }, { name: "ジャガイモ", count: 2 }], time: "1時間30分", price: 195, level: 69 },
    "ピーナッツバタークレープ": { factory: "ファストフードレストラン", yield: 1, ingredients: [{ name: "小麦", count: 3 }, { name: "ピーナッツバター", count: 1 }, { name: "バナナ", count: 1 }], time: "1時間15分", price: 256, level: 79 },

    // 製紙工場
    "紙": { factory: "製紙工場", yield: 1, ingredients: [{ name: "松の木", count: 1 }], time: "1時間30分", price: 19, level: 18 },
    "ペーパータオル": { factory: "製紙工場", yield: 1, ingredients: [{ name: "松の木", count: 2 }], time: "2時間30分", price: 39, level: 23 },
    "壁紙": { factory: "製紙工場", yield: 1, ingredients: [{ name: "松の木", count: 2 }, { name: "ゴム", count: 1 }], time: "3時間", price: 147, level: 30 },
    "本": { factory: "製紙工場", yield: 1, ingredients: [{ name: "紙", count: 4 }, { name: "コットン生地", count: 1 }, { name: "接着剤", count: 1 }], time: "3時間30分", price: 304, level: 52 },
    "ティーバッグ": { factory: "製紙工場", yield: 1, ingredients: [{ name: "紙", count: 1 }, { name: "茶の苗", count: 1 }], time: "15分", price: 95, level: 85 },

    // アイスクリーム工場
    "アイスクリームコーン": { factory: "アイスクリーム工場", yield: 1, ingredients: [{ name: "牛乳", count: 1 }, { name: "クリーム", count: 1 }, { name: "砂糖", count: 1 }], time: "30分", price: 39, level: 20 },
    "アイスキャンディ": { factory: "アイスクリーム工場", yield: 1, ingredients: [{ name: "イチゴ", count: 2 }, { name: "砂糖", count: 1 }], time: "1時間30分", price: 45, level: 21 },
    "フローズンヨーグルト": { factory: "アイスクリーム工場", yield: 1, ingredients: [{ name: "ヨーグルト", count: 1 }, { name: "クリーム", count: 1 }], time: "3時間", price: 87, level: 23 },
    "アイスクリームバー": { factory: "アイスクリーム工場", yield: 1, ingredients: [{ name: "シロップ", count: 1 }, { name: "カカオ", count: 1 }, { name: "松の木", count: 1 }], time: "4時間", price: 148, level: 25 },
    "チョコミントアイスクリーム": { factory: "アイスクリーム工場", yield: 1, ingredients: [{ name: "ミント", count: 2 }, { name: "チョコレート", count: 1 }, { name: "牛乳", count: 1 }], time: "1時間", price: 214, level: 50 },
    "パイナップルシャーベット": { factory: "アイスクリーム工場", yield: 1, ingredients: [{ name: "シロップ", count: 1 }, { name: "パイナップル", count: 2 }], time: "2時間30分", price: 343, level: 51 },
    "ローズ・シャーベット": { factory: "アイスクリーム工場", yield: 1, ingredients: [{ name: "シロップ", count: 1 }, { name: "バラ", count: 2 }, { name: "牛乳", count: 1 }], time: "2時間", price: 118, level: 66 },
    "ピーナッツバターパフェ": { factory: "アイスクリーム工場", yield: 1, ingredients: [{ name: "卵", count: 1 }, { name: "ピーナッツバター", count: 1 }, { name: "ピーナッツ", count: 1 }, { name: "クリーム", count: 1 }], time: "3時間30分", price: 266, level: 83 },

    // パン菓子工場
    "マフィン": { factory: "パン菓子工場", yield: 1, ingredients: [{ name: "小麦", count: 3 }, { name: "砂糖", count: 1 }, { name: "卵", count: 4 }], time: "30分", price: 68, level: 24 },
    "ブラウニー": { factory: "パン菓子工場", yield: 1, ingredients: [{ name: "カカオ", count: 2 }, { name: "シロップ", count: 1 }, { name: "バター", count: 1 }], time: "40分", price: 128, level: 27 },
    "カップケーキ": { factory: "パン菓子工場", yield: 1, ingredients: [{ name: "砂糖", count: 1 }, { name: "卵", count: 5 }, { name: "クリーム", count: 1 }], time: "1時間", price: 93, level: 30 },
    "ドーナッツ": { factory: "パン菓子工場", yield: 1, ingredients: [{ name: "ベーグル", count: 1 }, { name: "キャラメル", count: 1 }, { name: "カカオ", count: 1 }], time: "1時間30分", price: 149, level: 33 },
    "チーズケーキ": { factory: "パン菓子工場", yield: 1, ingredients: [{ name: "クッキー", count: 1 }, { name: "チーズ", count: 1 }, { name: "シロップ", count: 1 }, { name: "イチゴ", count: 2 }], time: "3時間", price: 160, level: 36 },
    "ハニージンジャーブレッド": { factory: "パン菓子工場", yield: 1, ingredients: [{ name: "小麦", count: 3 }, { name: "ハチの巣", count: 2 }, { name: "卵", count: 1 }], time: "1時間", price: 119, level: 37 },
    "キーライムパイ": { factory: "パン菓子工場", yield: 1, ingredients: [{ name: "小麦", count: 3 }, { name: "キーライム", count: 2 }, { name: "砂糖", count: 1 }, { name: "クリーム", count: 1 }], time: "2時間", price: 285, level: 44 },
    "ココナッツマカロン": { factory: "パン菓子工場", yield: 1, ingredients: [{ name: "ココナッツ", count: 2 }, { name: "卵", count: 2 }, { name: "砂糖", count: 1 }], time: "1時間30分", price: 253, level: 46 },
    "キャラメルアップル": { factory: "パン菓子工場", yield: 1, ingredients: [{ name: "リンゴ", count: 2 }, { name: "キャラメル", count: 1 }], time: "2時間30分", price: 202, level: 90 },

    // ジャム工場
    "イチゴジャム": { factory: "ジャム工場", yield: 1, ingredients: [{ name: "イチゴ", count: 3 }], time: "1時間30分", price: 41, level: 27 },
    "ピーチマーマレード": { factory: "ジャム工場", yield: 1, ingredients: [{ name: "ピーチ", count: 3 }], time: "2時間30分", price: 133, level: 29 },
    "スイカジャム": { factory: "ジャム工場", yield: 1, ingredients: [{ name: "スイカ", count: 3 }], time: "3時間", price: 196, level: 31 },
    "プラムジャム": { factory: "ジャム工場", yield: 1, ingredients: [{ name: "プラム", count: 3 }], time: "4時間", price: 299, level: 32 },
    "グレープゼリー": { factory: "ジャム工場", yield: 1, ingredients: [{ name: "ブドウ", count: 3 }], time: "3時間30分", price: 196, level: 38 },
    "ローズ・ジャム": { factory: "ジャム工場", yield: 1, ingredients: [{ name: "バラ", count: 3 }], time: "2時間", price: 107, level: 61 },
    "キノコのソテー": { factory: "ジャム工場", yield: 1, ingredients: [{ name: "キノコ", count: 3 }, { name: "砂糖", count: 2 }], time: "1時間45分", price: 297, level: 75 },
    "ピーナッツバター": { factory: "ジャム工場", yield: 1, ingredients: [{ name: "ピーナッツ", count: 3 }, { name: "シロップ", count: 1 }], time: "2時間15分", price: 146, level: 78 },
    "リンゴジャム": { factory: "ジャム工場", yield: 1, ingredients: [{ name: "リンゴ", count: 3 }], time: "2時間50分", price: 217, level: 83 },

    // ゴム工場
    "ゴム": { factory: "ゴム工場", yield: 1, ingredients: [{ name: "ゴムの木", count: 1 }], time: "1時間", price: 35, level: 29 },
    "プラスチック": { factory: "ゴム工場", yield: 1, ingredients: [{ name: "ゴムの木", count: 2 }], time: "1時間30分", price: 73, level: 32 },
    "接着剤": { factory: "ゴム工場", yield: 1, ingredients: [{ name: "ゴムの木", count: 3 }], time: "2時間", price: 111, level: 37 },
    "ダンベル": { factory: "ゴム工場", yield: 1, ingredients: [{ name: "ゴム", count: 2 }, { name: "銅の鋳塊", count: 2 }], time: "3時間", price: 114, level: 45 },

    // 食品加工工場
    "生地": { factory: "食品加工工場", yield: 1, ingredients: [{ name: "小麦", count: 3 }], time: "30分", price: 4, level: 31 },
    "冷凍野菜": { factory: "食品加工工場", yield: 1, ingredients: [{ name: "トウモロコシ", count: 1 }, { name: "にんじん", count: 1 }, { name: "トマト", count: 1 }], time: "1時間30分", price: 26, level: 34 },
    "ダンプリング": { factory: "食品加工工場", yield: 1, ingredients: [{ name: "生地", count: 2 }, { name: "ベーコン", count: 2 }], time: "3時間30分", price: 98, level: 42 },
    "シーフードミックス": { factory: "食品加工工場", yield: 1, ingredients: [{ name: "魚", count: 1 }, { name: "ホタテ", count: 1 }, { name: "エビ", count: 1 }], time: "2時間30分", price: 277, level: 58 },
    "冷凍フルーツ": { factory: "食品加工工場", yield: 1, ingredients: [{ name: "マンゴー", count: 1 }, { name: "ピーチ", count: 2 }, { name: "パイナップル", count: 1 }], time: "2時間50分", price: 395, level: 67 },
    "レトルト食品": { factory: "食品加工工場", yield: 1, ingredients: [{ name: "ドリア", count: 1 }], time: "3時間", price: 301, level: 72 },

    // プラスチック工場
    "プラスチックボトル": { factory: "プラスチック工場", yield: 1, ingredients: [{ name: "プラスチック", count: 1 }], time: "1時間30分", price: 91, level: 34 },
    "おもちゃ": { factory: "プラスチック工場", yield: 1, ingredients: [{ name: "プラスチック", count: 1 }, { name: "ゴム", count: 1 }], time: "45分", price: 131, level: 35 },
    "ボール": { factory: "プラスチック工場", yield: 1, ingredients: [{ name: "プラスチック", count: 1 }, { name: "接着剤", count: 1 }], time: "2時間", price: 235, level: 37 },
    "ゴムボート": { factory: "プラスチック工場", yield: 1, ingredients: [{ name: "ゴム", count: 2 }, { name: "接着剤", count: 1 }], time: "2時間30分", price: 236, level: 38 },
    "シャトルコック": { factory: "プラスチック工場", yield: 1, ingredients: [{ name: "羽毛", count: 2 }, { name: "プラスチック", count: 1 }], time: "40分", price: 117, level: 49 },
    "粘土": { factory: "プラスチック工場", yield: 1, ingredients: [{ name: "土", count: 2 }, { name: "ゴムの木", count: 2 }], time: "1時間", price: 169, level: 58 },

    // 家庭用品工場
    "スクラブブラシ": { factory: "家庭用品工場", yield: 1, ingredients: [{ name: "サトウキビ", count: 3 }, { name: "ナイロン糸", count: 1 }], time: "2時間", price: 169, level: 37 },
    "ソープディスペンサー": { factory: "家庭用品工場", yield: 1, ingredients: [{ name: "コルクガシ", count: 1 }, { name: "プラスチックボトル", count: 1 }], time: "2時間20分", price: 150, level: 38 },
    "物干しロープと洗濯バサミ": { factory: "家庭用品工場", yield: 1, ingredients: [{ name: "サトウキビ", count: 5 }, { name: "ナイロン糸", count: 1 }], time: "2時間50分", price: 193, level: 39 },
    "ラバーカップ": { factory: "家庭用品工場", yield: 1, ingredients: [{ name: "ゴム", count: 2 }, { name: "松の木", count: 1 }], time: "3時間10分", price: 114, level: 40 },
    "羽ぼうき": { factory: "家庭用品工場", yield: 1, ingredients: [{ name: "カラフルな羽", count: 3 }, { name: "サトウキビ", count: 1 }], time: "3時間30分", price: 136, level: 49 },
    "ゴム手袋": { factory: "家庭用品工場", yield: 1, ingredients: [{ name: "ゴム", count: 1 }, { name: "アロエ", count: 1 }], time: "4時間", price: 260, level: 89 },

    // キャンディ工場
    "ゼリービーンズ": { factory: "キャンディ工場", yield: 1, ingredients: [{ name: "イチゴ", count: 3 }, { name: "シロップ", count: 1 }], time: "2時間", price: 79, level: 39 },
    "アメ菓子": { factory: "キャンディ工場", yield: 1, ingredients: [{ name: "キャラメル", count: 1 }, { name: "バター", count: 1 }], time: "3時間", price: 112, level: 40 },
    "キャンディケイン": { factory: "キャンディ工場", yield: 1, ingredients: [{ name: "キャラメル", count: 1 }, { name: "クリーム", count: 1 }, { name: "紙", count: 1 }], time: "4時間", price: 105, level: 42 },
    "チョコレート": { factory: "キャンディ工場", yield: 1, ingredients: [{ name: "カカオ", count: 3 }, { name: "クリーム", count: 1 }, { name: "砂糖", count: 1 }], time: "2時間30分", price: 108, level: 45 },
    "アメ玉": { factory: "キャンディ工場", yield: 1, ingredients: [{ name: "イチゴ", count: 2 }, { name: "シロップ", count: 1 }, { name: "松の木", count: 2 }], time: "5時間", price: 117, level: 48 },
    "ハニーマシュマロ": { factory: "キャンディ工場", yield: 1, ingredients: [{ name: "ハニーキャラメル", count: 1 }, { name: "卵", count: 2 }], time: "4時間30分", price: 211, level: 51 },
    "ミントキャンディ": { factory: "キャンディ工場", yield: 1, ingredients: [{ name: "ミント", count: 2 }, { name: "シロップ", count: 1 }], time: "2時間", price: 114, level: 54 },
    "フルーツゼリーのスライス": { factory: "キャンディ工場", yield: 1, ingredients: [{ name: "スイカジャム", count: 1 }, { name: "イチゴジャム", count: 1 }, { name: "キーライム", count: 1 }], time: "2時間30分", price: 436, level: 71 },
    "チョコレートバー": { factory: "キャンディ工場", yield: 1, ingredients: [{ name: "カカオ", count: 2 }, { name: "ピーナッツ", count: 2 }, { name: "ハチの巣", count: 1 }], time: "3時間30分", price: 158, level: 85 },
    "緑茶キャンディ": { factory: "キャンディ工場", yield: 1, ingredients: [{ name: "茶の苗", count: 2 }, { name: "クリーム", count: 1 }, { name: "砂糖", count: 2 }], time: "1時間30分", price: 203, level: 88 },

    // メキシカンレストラン
    "チリソース": { factory: "メキシカンレストラン", yield: 1, ingredients: [{ name: "トマト", count: 3 }, { name: "唐辛子", count: 3 }, { name: "砂糖", count: 1 }], time: "2時間", price: 144, level: 43 },
    "ブリトー": { factory: "メキシカンレストラン", yield: 1, ingredients: [{ name: "小麦", count: 2 }, { name: "ベーコン", count: 2 }, { name: "トマト", count: 1 }], time: "1時間", price: 97, level: 44 },
    "ナチョス": { factory: "メキシカンレストラン", yield: 1, ingredients: [{ name: "コーンチップス", count: 1 }, { name: "チーズ", count: 1 }, { name: "唐辛子", count: 2 }], time: "3時間", price: 112, level: 46 },
    "タコス": { factory: "メキシカンレストラン", yield: 1, ingredients: [{ name: "トウモロコシ", count: 3 }, { name: "クリーム", count: 1 }, { name: "トマト", count: 2 }, { name: "唐辛子", count: 2 }], time: "1時間30分", price: 109, level: 49 },
    "ハラペーニョのベーコン巻き": { factory: "メキシカンレストラン", yield: 1, ingredients: [{ name: "唐辛子", count: 2 }, { name: "ベーコン", count: 1 }, { name: "チーズ", count: 1 }], time: "2時間", price: 124, level: 57 },
    "ガスパチョ": { factory: "メキシカンレストラン", yield: 1, ingredients: [{ name: "トマト", count: 3 }, { name: "唐辛子", count: 2 }, { name: "パン", count: 1 }], time: "2時間30分", price: 110, level: 65 },
    "コーンスープ": { factory: "メキシカンレストラン", yield: 1, ingredients: [{ name: "トウモロコシ", count: 3 }, { name: "にんじん", count: 2 }, { name: "ベーコン", count: 2 }], time: "1時間45分", price: 105, level: 67 },
    "モレソース": { factory: "メキシカンレストラン", yield: 1, ingredients: [{ name: "カカオ", count: 3 }, { name: "唐辛子", count: 3 }], time: "2時間", price: 149, level: 73 },
    "キノコスープ": { factory: "メキシカンレストラン", yield: 1, ingredients: [{ name: "干しキノコ", count: 1 }, { name: "トマト", count: 2 }, { name: "キーライム", count: 1 }, { name: "バター", count: 1 }], time: "3時間30分", price: 576, level: 80 },

    // 文房具工場
    "消しゴム": { factory: "文房具工場", yield: 1, ingredients: [{ name: "ゴムの木", count: 3 }], time: "2時間", price: 111, level: 46 },
    "付箋": { factory: "文房具工場", yield: 1, ingredients: [{ name: "紙", count: 1 }, { name: "接着剤", count: 1 }], time: "1時間", price: 157, level: 48 },
    "掲示板": { factory: "文房具工場", yield: 1, ingredients: [{ name: "コルクガシ", count: 2 }, { name: "紙", count: 1 }], time: "2時間", price: 67, level: 51 },
    "蛍光ペン": { factory: "文房具工場", yield: 1, ingredients: [{ name: "プラスチックボトル", count: 1 }, { name: "絹生地", count: 1 }], time: "1時間30分", price: 286, level: 70 },

    // 家具工場
    "テーブル": { factory: "家具工場", yield: 1, ingredients: [{ name: "松の木", count: 3 }, { name: "プラスチック", count: 1 }], time: "2時間", price: 152, level: 47 },
    "いす": { factory: "家具工場", yield: 1, ingredients: [{ name: "松の木", count: 3 }, { name: "ウール生地", count: 1 }], time: "1時間45分", price: 145, level: 49 },
    "ソファー": { factory: "家具工場", yield: 1, ingredients: [{ name: "松の木", count: 1 }, { name: "ウール生地", count: 2 }, { name: "接着剤", count: 1 }], time: "3時間", price: 277, level: 52 },
    "ベッド": { factory: "家具工場", yield: 1, ingredients: [{ name: "松の木", count: 3 }, { name: "コットン生地", count: 2 }, { name: "絹生地", count: 1 }], time: "4時間", price: 433, level: 54 },
    "フロアランプ": { factory: "家具工場", yield: 1, ingredients: [{ name: "松の木", count: 2 }, { name: "絹生地", count: 1 }, { name: "接着剤", count: 1 }], time: "2時間30分", price: 296, level: 63 },

    // 靴工場
    "サンダル": { factory: "靴工場", yield: 1, ingredients: [{ name: "ゴム", count: 1 }, { name: "絹生地", count: 1 }], time: "1時間", price: 215, level: 50 },
    "スニーカー": { factory: "靴工場", yield: 1, ingredients: [{ name: "ゴム", count: 1 }, { name: "コットン生地", count: 2 }], time: "1時間30分", price: 134, level: 52 },
    "ブーツ": { factory: "靴工場", yield: 1, ingredients: [{ name: "ゴム", count: 2 }, { name: "ウール生地", count: 2 }], time: "2時間", price: 229, level: 54 },
    "ハイヒール": { factory: "靴工場", yield: 1, ingredients: [{ name: "ゴム", count: 1 }, { name: "絹生地", count: 2 }], time: "2時間30分", price: 389, level: 58 },
    "あったかブーツ": { factory: "靴工場", yield: 1, ingredients: [{ name: "ゴム", count: 1 }, { name: "羊毛", count: 3 }, { name: "羽毛", count: 1 }], time: "3時間", price: 121, level: 75 },

    // 宝石店 (価格はリクエスト通り「-」をnull等にせずそのまま文字列、または必要に応じて0等に)
    "ペンダント": { factory: "宝石店", yield: 1, ingredients: [{ name: "銀の鋳塊", count: 1 }], time: "1時間", price: "-", level: 53 },
    "指輪": { factory: "宝石店", yield: 1, ingredients: [{ name: "金の鋳塊", count: 1 }], time: "1時間30分", price: "-", level: 53 },
    "真珠のチョーカー": { factory: "宝石店", yield: 1, ingredients: [{ name: "真珠", count: 1 }, { name: "白金の鋳塊", count: 1 }], time: "1時間", price: "-", level: 53 },
    "イヤリング": { factory: "宝石店", yield: 1, ingredients: [{ name: "金の鋳塊", count: 1 }, { name: "白金の鋳塊", count: 1 }], time: "2時間", price: "-", level: 53 },
    "王冠": { factory: "宝石店", yield: 1, ingredients: [{ name: "金の鋳塊", count: 2 }, { name: "白金の鋳塊", count: 1 }], time: "4時間", price: "-", level: 53 },
    "羽のイヤリング": { factory: "宝石店", yield: 1, ingredients: [{ name: "カラフルな羽", count: 2 }, { name: "銀の鋳塊", count: 1 }], time: "1時間", price: "-", level: 53 },

    // アジア料理のレストラン
    "巻寿司": { factory: "アジア料理のレストラン", yield: 1, ingredients: [{ name: "米", count: 3 }, { name: "魚", count: 1 }, { name: "海藻", count: 1 }], time: "1時間", price: 219, level: 56 },
    "ロブスター寿司": { factory: "アジア料理のレストラン", yield: 1, ingredients: [{ name: "米", count: 3 }, { name: "ロブスター", count: 1 }, { name: "海藻", count: 1 }], time: "1時間30分", price: 308, level: 58 },
    "海藻エビサラダ": { factory: "アジア料理のレストラン", yield: 1, ingredients: [{ name: "海藻", count: 2 }, { name: "エビ", count: 2 }], time: "2時間", price: 258, level: 60 },
    "ホタテの寿司": { factory: "アジア料理のレストラン", yield: 1, ingredients: [{ name: "米", count: 3 }, { name: "ホタテ", count: 1 }, { name: "海藻", count: 1 }], time: "1時間", price: 266, level: 63 },
    "ココナッツスープ": { factory: "アジア料理のレストラン", yield: 1, ingredients: [{ name: "ココナッツ", count: 2 }, { name: "魚", count: 1 }, { name: "唐辛子", count: 1 }], time: "2時間30分", price: 239, level: 66 },
    "ビーフン": { factory: "アジア料理のレストラン", yield: 1, ingredients: [{ name: "米", count: 3 }, { name: "卵", count: 2 }, { name: "トマト", count: 1 }], time: "1時間15分", price: 91, level: 71 },
    "シーフードサラダ": { factory: "アジア料理のレストラン", yield: 1, ingredients: [{ name: "海藻", count: 2 }, { name: "ホタテ", count: 2 }, { name: "エビ", count: 1 }, { name: "魚", count: 1 }], time: "2時間30分", price: 497, level: 77 },
    "キノコサラダ": { factory: "アジア料理のレストラン", yield: 1, ingredients: [{ name: "海藻", count: 1 }, { name: "キノコ", count: 3 }, { name: "ピーナッツ", count: 2 }], time: "1時間45分", price: 309, level: 81 },
    "ピーナッツソース": { factory: "アジア料理のレストラン", yield: 1, ingredients: [{ name: "ピーナッツバター", count: 1 }, { name: "唐辛子", count: 2 }, { name: "シロップ", count: 1 }], time: "3時間", price: 235, level: 86 },

    // グリル屋さん
    "キッシュ": { factory: "グリル屋さん", yield: 1, ingredients: [{ name: "小麦", count: 1 }, { name: "卵", count: 3 }, { name: "チーズ", count: 1 }, { name: "ベーコン", count: 1 }], time: "2時間", price: 125, level: 59 },
    "焼きロブスター": { factory: "グリル屋さん", yield: 1, ingredients: [{ name: "ロブスター", count: 1 }, { name: "バター", count: 1 }, { name: "トマト", count: 2 }], time: "1時間30分", price: 185, level: 60 },
    "ベーコンエッグ": { factory: "グリル屋さん", yield: 1, ingredients: [{ name: "ベーコン", count: 2 }, { name: "卵", count: 4 }], time: "1時間", price: 92, level: 62 },
    "フライドフィッシュ": { factory: "グリル屋さん", yield: 1, ingredients: [{ name: "魚", count: 1 }, { name: "ジャガイモ", count: 2 }], time: "1時間", price: 148, level: 65 },
    "ドリア": { factory: "グリル屋さん", yield: 1, ingredients: [{ name: "米", count: 3 }, { name: "チーズ", count: 1 }, { name: "クリーム", count: 1 }], time: "1時間", price: 122, level: 70 },
    "ハチミツ添えパンケーキ": { factory: "グリル屋さん", yield: 1, ingredients: [{ name: "小麦", count: 2 }, { name: "ハチの巣", count: 2 }, { name: "バター", count: 1 }], time: "1時間30分", price: 165, level: 73 },
    "ロブスターオムレツ": { factory: "グリル屋さん", yield: 1, ingredients: [{ name: "ロブスター", count: 1 }, { name: "卵", count: 3 }, { name: "チーズ", count: 1 }], time: "2時間", price: 183, level: 78 },
    "ホタテのグリル": { factory: "グリル屋さん", yield: 1, ingredients: [{ name: "ホタテ", count: 2 }, { name: "バター", count: 1 }, { name: "唐辛子", count: 1 }], time: "1時間45分", price: 262, level: 83 },
    "ローストミート": { factory: "グリル屋さん", yield: 1, ingredients: [{ name: "ベーコン", count: 3 }, { name: "砂糖", count: 1 }], time: "2時間", price: 78, level: 87 },

    // 香水工場
    "アロマキャンドル": { factory: "香水工場", yield: 1, ingredients: [{ name: "蜂の巣", count: 1 }, { name: "ジャスミン", count: 2 }], time: "2時間", price: 104, level: 61 },
    "香水": { factory: "香水工場", yield: 1, ingredients: [{ name: "ジャスミン", count: 2 }, { name: "バラ", count: 2 }, { name: "シロップ", count: 1 }], time: "1時間30分", price: 179, level: 62 },
    "エアフレッシュナー": { factory: "香水工場", yield: 1, ingredients: [{ name: "松の木", count: 2 }, { name: "キーライム", count: 2 }, { name: "シロップ", count: 1 }], time: "45分", price: 213, level: 64 },
    "香料入りせっけん": { factory: "香水工場", yield: 1, ingredients: [{ name: "ハチの巣", count: 1 }, { name: "バラ", count: 2 }, { name: "粘土", count: 1 }], time: "2時間", price: 316, level: 66 },
    "ジャスミンオイル": { factory: "香水工場", yield: 1, ingredients: [{ name: "ジャスミン", count: 3 }], time: "1時間", price: 69, level: 68 },
    "化粧水": { factory: "香水工場", yield: 1, ingredients: [{ name: "ジャスミン", count: 2 }, { name: "ピーチ", count: 2 }, { name: "ココナッツ", count: 1 }], time: "2時間30分", price: 338, level: 74 },
    "マスク": { factory: "香水工場", yield: 1, ingredients: [{ name: "海藻", count: 2 }, { name: "アロエ", count: 1 }, { name: "粘土", count: 1 }], time: "1時間", price: 450, level: 96 },
    "歯磨き粉": { factory: "香水工場", yield: 1, ingredients: [{ name: "ミント", count: 2 }, { name: "粘土", count: 1 }], time: "1時間45分", price: 255, level: 101 },

    // 飲料工場
    "フルーツ・カクテル": { factory: "飲料工場", yield: 1, ingredients: [{ name: "イチゴ", count: 2 }, { name: "ピーチ", count: 1 }, { name: "スイカ", count: 1 }], time: "15分", price: 128, level: 65 },
    "グレープ・フィズ": { factory: "飲料工場", yield: 1, ingredients: [{ name: "ブドウ", count: 2 }, { name: "シロップ", count: 1 }], time: "30分", price: 159, level: 66 },
    "チョコレート・スムージー": { factory: "飲料工場", yield: 1, ingredients: [{ name: "カカオ", count: 2 }, { name: "牛乳", count: 1 }, { name: "砂糖", count: 1 }], time: "45分", price: 98, level: 67 },
    "スイカ・ジュース": { factory: "飲料工場", yield: 1, ingredients: [{ name: "スイカ", count: 2 }], time: "1時間", price: 131, level: 68 },
    "アイスティー": { factory: "飲料工場", yield: 1, ingredients: [{ name: "茶の苗", count: 1 }, { name: "シロップ", count: 1 }], time: "20分", price: 124, level: 84 },
    "トロピカルミックス": { factory: "飲料工場", yield: 1, ingredients: [{ name: "マンゴー", count: 1 }, { name: "バナナ", count: 1 }, { name: "ココナッツ", count: 1 }, { name: "ピーチ", count: 1 }], time: "1時間15分", price: 358, level: 86 },
    "リンゴジュース": { factory: "飲料工場", yield: 1, ingredients: [{ name: "リンゴ", count: 2 }], time: "1時間30分", price: 112, level: 89 },
    "ミントアイスティー": { factory: "飲料工場", yield: 1, ingredients: [{ name: "ミント", count: 2 }, { name: "茶の苗", count: 1 }, { name: "シロップ", count: 1 }], time: "1時間10分", price: 266, level: 95 },

    // ケーキ工場
    "キャロットケーキ": { factory: "ケーキ工場", yield: 1, ingredients: [{ name: "にんじん", count: 2 }, { name: "卵", count: 2 }, { name: "小麦", count: 2 }], time: "1時間", price: 41, level: 66 },
    "ショートケーキ": { factory: "ケーキ工場", yield: 1, ingredients: [{ name: "イチゴ", count: 3 }, { name: "卵", count: 1 }, { name: "クリーム", count: 1 }, { name: "小麦", count: 2 }], time: "2時間", price: 110, level: 67 },
    "コーヒーケーキ": { factory: "ケーキ工場", yield: 1, ingredients: [{ name: "コーヒーの木", count: 2 }, { name: "卵", count: 1 }, { name: "小麦", count: 2 }], time: "1時間30分", price: 137, level: 76 },
    "ミントケーキ": { factory: "ケーキ工場", yield: 1, ingredients: [{ name: "ミント", count: 2 }, { name: "卵", count: 1 }, { name: "小麦", count: 2 }], time: "2時間", price: 114, level: 80 },
    "チョコレートケーキ": { factory: "ケーキ工場", yield: 1, ingredients: [{ name: "カカオ", count: 2 }, { name: "卵", count: 1 }, { name: "クリーム", count: 1 }, { name: "小麦", count: 2 }], time: "2時間30分", price: 108, level: 85 },
    "ウェディングケーキ": { factory: "ケーキ工場", yield: 1, ingredients: [{ name: "イチゴ", count: 2 }, { name: "卵", count: 3 }, { name: "クリーム", count: 2 }, { name: "小麦", count: 3 }], time: "4時間", price: 170, level: 91 },

    // ホットドッグ工場
    "ホットドッグ": { factory: "ホットドッグ工場", yield: 1, ingredients: [{ name: "パン", count: 1 }, { name: "ベーコン", count: 1 }], time: "45分", price: 59, level: 68 },
    "アメリカンドッグ": { factory: "ホットドッグ工場", yield: 1, ingredients: [{ name: "トウモロコシ", count: 2 }, { name: "ベーコン", count: 1 }], time: "1時間", price: 52, level: 70 },
    "コニードッグ": { factory: "ホットドッグ工場", yield: 1, ingredients: [{ name: "パン", count: 1 }, { name: "ベーコン", count: 1 }, { name: "チリソース", count: 1 }], time: "1時間30分", price: 203, level: 73 },
    "ニンジンサンド": { factory: "ホットドッグ工場", yield: 1, ingredients: [{ name: "パン", count: 1 }, { name: "にんじん", count: 3 }], time: "1時間15分", price: 36, level: 84 },

    // フレンチレストラン
    "ラタトゥイユ": { factory: "フレンチレストラン", yield: 1, ingredients: [{ name: "トマト", count: 3 }, { name: "にんじん", count: 2 }, { name: "ジャガイモ", count: 1 }], time: "2時間", price: 68, level: 69 },
    "プロフィトロール": { factory: "フレンチレストラン", yield: 1, ingredients: [{ name: "クリーム", count: 1 }, { name: "カカオ", count: 1 }, { name: "卵", count: 2 }, { name: "小麦", count: 1 }], time: "1時間30分", price: 89, level: 70 },
    "ニース風サラダ": { factory: "フレンチレストラン", yield: 1, ingredients: [{ name: "オリーブ", count: 3 }, { name: "トマト", count: 2 }, { name: "魚", count: 1 }, { name: "卵", count: 1 }], time: "2時間40分", price: 399, level: 71 },
    "ブイヤベース": { factory: "フレンチレストラン", yield: 1, ingredients: [{ name: "魚", count: 1 }, { name: "エビ", count: 3 }, { name: "ジャガイモ", count: 2 }, { name: "トマト", count: 1 }], time: "3時間10分", price: 535, level: 72 },

    // コーヒー工場
    "エスプレッソ": { factory: "コーヒー工場", yield: 1, ingredients: [{ name: "コーヒーの木", count: 3 }, { name: "砂糖", count: 1 }], time: "15分", price: 187, level: 72 },
    "カプチーノ": { factory: "コーヒー工場", yield: 1, ingredients: [{ name: "コーヒーの木", count: 2 }, { name: "牛乳", count: 2 }, { name: "砂糖", count: 1 }], time: "30分", price: 148, level: 75 },
    "カフェモカ": { factory: "コーヒー工場", yield: 1, ingredients: [{ name: "コーヒーの木", count: 2 }, { name: "カカオ", count: 2 }, { name: "クリーム", count: 1 }], time: "1時間", price: 179, level: 77 },
    "ココア": { factory: "コーヒー工場", yield: 1, ingredients: [{ name: "カカオ", count: 2 }, { name: "牛乳", count: 2 }, { name: "砂糖", count: 1 }], time: "45分", price: 80, level: 80 },
    "ココナッツラテ": { factory: "コーヒー工場", yield: 1, ingredients: [{ name: "コーヒーの木", count: 2 }, { name: "シロップ", count: 1 }, { name: "ココナッツ", count: 2 }], time: "1時間10分", price: 361, level: 83 },

    // 羽毛工場
    "枕": { factory: "羽毛工場", yield: 1, ingredients: [{ name: "羽毛", count: 2 }, { name: "コットン生地", count: 1 }], time: "1時間", price: 75, level: 74 },
    "パーカー": { factory: "羽毛工場", yield: 1, ingredients: [{ name: "羽毛", count: 3 }, { name: "絹生地", count: 1 }], time: "2時間", price: 225, level: 76 },
    "ダウンキルト": { factory: "羽毛工場", yield: 1, ingredients: [{ name: "羽毛", count: 5 }, { name: "コットン生地", count: 2 }], time: "1時間45分", price: 169, level: 80 },
    "バスローブとスリッパ": { factory: "羽毛工場", yield: 1, ingredients: [{ name: "羽毛", count: 2 }, { name: "絹生地", count: 2 }, { name: "カラフルな羽", count: 1 }, { name: "ゴム", count: 1 }], time: "1時間30分", price: 463, level: 102 },

    // お人形工場
    "操り人形": { factory: "お人形工場", yield: 1, ingredients: [{ name: "松の木", count: 2 }, { name: "コットン生地", count: 1 }, { name: "ウール生地", count: 1 }], time: "1時間40分", price: 161, level: 76 },
    "磁器人形": { factory: "お人形工場", yield: 1, ingredients: [{ name: "土", count: 3 }, { name: "絹生地", count: 1 }], time: "2時間30分", price: 339, level: 77 },
    "着せ替え人形": { factory: "お人形工場", yield: 1, ingredients: [{ name: "プラスチック", count: 1 }, { name: "コットン生地", count: 1 }, { name: "接着剤", count: 1 }], time: "1時間", price: 316, level: 79 },
    "ぬいぐるみ": { factory: "お人形工場", yield: 1, ingredients: [{ name: "絹生地", count: 1 }, { name: "コットン生地", count: 1 }, { name: "綿", count: 2 }], time: "2時間", price: 249, level: 81 },

    // 食器工場
    "カップ": { factory: "食器工場", yield: 1, ingredients: [{ name: "土", count: 2 }], time: "1時間45分", price: 101, level: 78 },
    "フライパン": { factory: "食器工場", yield: 1, ingredients: [{ name: "銅の鋳塊", count: 4 }, { name: "松の木", count: 1 }], time: "1時間30分", price: 139, level: 81 },
    "トリベットマット": { factory: "食器工場", yield: 1, ingredients: [{ name: "コルクガシ", count: 3 }, { name: "紙", count: 1 }], time: "4時間", price: 130, level: 82 },
    "ティーポット": { factory: "食器工場", yield: 1, ingredients: [{ name: "土", count: 3 }], time: "2時間15分", price: 155, level: 85 },
    "カトラリー": { factory: "食器工場", yield: 1, ingredients: [{ name: "銀の鋳塊", count: 7 }], time: "40分", price: 174, level: 88 },
    "お茶会セット": { factory: "食器工場", yield: 1, ingredients: [{ name: "土", count: 2 }, { name: "松の木", count: 1 }, { name: "コットン生地", count: 1 }], time: "3時間", price: 172, level: 93 },

    // 音楽工場
    "ウクレレ": { factory: "音楽工場", yield: 1, ingredients: [{ name: "松の木", count: 3 }, { name: "銅の鋳塊", count: 3 }], time: "1時間15分", price: 85, level: 82 },
    "サックス": { factory: "音楽工場", yield: 1, ingredients: [{ name: "プラスチック", count: 1 }, { name: "銅の鋳塊", count: 6 }, { name: "サトウキビ", count: 1 }], time: "1時間30分", price: 160, level: 84 },
    "ドラム": { factory: "音楽工場", yield: 1, ingredients: [{ name: "松の木", count: 3 }, { name: "コットン生地", count: 2 }, { name: "絹生地", count: 1 }], time: "2時間", price: 331, level: 86 },
    "アコーディオン": { factory: "音楽工場", yield: 1, ingredients: [{ name: "プラスチック", count: 2 }, { name: "絹生地", count: 2 }], time: "2時間30分", price: 556, level: 90 },
    "パンフルート": { factory: "音楽工場", yield: 1, ingredients: [{ name: "サトウキビ", count: 5 }, { name: "カラフルな羽", count: 1 }], time: "1時間", price: 81, level: 92 },

    // 製茶工場
    "紅茶": { factory: "製茶工場", yield: 1, ingredients: [{ name: "茶の苗", count: 2 }], time: "45分", price: 190, level: 84 },
    "ホワイトジャスミン": { factory: "製茶工場", yield: 1, ingredients: [{ name: "茶の苗", count: 1 }, { name: "ジャスミン", count: 2 }], time: "1時間", price: 170, level: 85 },
    "ローズティー": { factory: "製茶工場", yield: 1, ingredients: [{ name: "茶の苗", count: 1 }, { name: "バラ", count: 2 }], time: "1時間15分", price: 200, level: 87 },
    "バター茶": { factory: "製茶工場", yield: 1, ingredients: [{ name: "茶の苗", count: 1 }, { name: "バター", count: 1 }], time: "2時間", price: 163, level: 89 },
    "アップルティー": { factory: "製茶工場", yield: 1, ingredients: [{ name: "茶の苗", count: 1 }, { name: "リンゴ", count: 2 }], time: "1時間30分", price: 236, level: 92 },
    "ミルクウーロン": { factory: "製茶工場", yield: 1, ingredients: [{ name: "茶の苗", count: 1 }, { name: "牛乳", count: 2 }], time: "1時間", price: 215, level: 94 },
    "チョコカスタード": { factory: "製茶工場", yield: 1, ingredients: [{ name: "茶の苗", count: 1 }, { name: "カカオ", count: 2 }, { name: "卵", count: 2 }, { name: "牛乳", count: 1 }], time: "2時間30分", price: 305, level: 97 },

    // ブーケ工場
    "夏のブーケ": { factory: "ブーケ工場", yield: 1, ingredients: [{ name: "バラ", count: 2 }, { name: "ジャスミン", count: 1 }], time: "1時間", price: 92, level: 87 },
    "野菜のブーケ": { factory: "ブーケ工場", yield: 1, ingredients: [{ name: "にんじん", count: 3 }, { name: "トマト", count: 2 }], time: "1時間30分", price: 45, level: 88 },
    "ウェディングブーケ": { factory: "ブーケ工場", yield: 1, ingredients: [{ name: "ジャスミン", count: 2 }, { name: "バラ", count: 2 }, { name: "絹", count: 2 }], time: "2時間", price: 179, level: 90 },
    "キャンディブーケ": { factory: "ブーケ工場", yield: 1, ingredients: [{ name: "ゼリービーンズ", count: 1 }, { name: "アメ玉", count: 1 }, { name: "バラ", count: 1 }], time: "1時間45分", price: 250, level: 93 },
    "お花のバスケット": { factory: "ブーケ工場", yield: 1, ingredients: [{ name: "松の木", count: 2 }, { name: "バラ", count: 2 }, { name: "ジャスミン", count: 2 }], time: "2時間30分", price: 185, level: 96 },
    "ラベンダーブーケ": { factory: "ブーケ工場", yield: 1, ingredients: [{ name: "ラベンダー", count: 3 }], time: "1時間15分", price: 135, level: 99 },
    "お茶とコーヒー花": { factory: "ブーケ工場", yield: 1, ingredients: [{ name: "茶の苗", count: 2 }, { name: "コーヒーの木", count: 2 }], time: "2時間", price: 434, level: 103 },

    // イタリア料理店
    "オリーブオイル": { factory: "イタリア料理店", yield: 1, ingredients: [{ name: "オリーブ", count: 2 }], time: "1時間", price: 153, level: 92 },
    "ブルスケッタ": { factory: "イタリア料理店", yield: 1, ingredients: [{ name: "オリーブオイル", count: 1 }, { name: "パン", count: 1 }, { name: "トマト", count: 2 }], time: "1時間30分", price: 240, level: 93 },
    "パスタ": { factory: "イタリア料理店", yield: 1, ingredients: [{ name: "オリーブオイル", count: 1 }, { name: "生地", count: 1 }, { name: "トマト", count: 2 }], time: "2時間", price: 195, level: 94 },
    "ラビオリ": { factory: "イタリア料理店", yield: 1, ingredients: [{ name: "オリーブオイル", count: 1 }, { name: "生地", count: 1 }, { name: "チーズ", count: 1 }], time: "2時間30分", price: 210, level: 95 },
    "ティラミス": { factory: "イタリア料理店", yield: 1, ingredients: [{ name: "チーズ", count: 1 }, { name: "クリーム", count: 1 }, { name: "カカオ", count: 1 }, { name: "砂糖", count: 1 }], time: "3時間", price: 108, level: 97 },
    "ラザーニャ": { factory: "イタリア料理店", yield: 1, ingredients: [{ name: "オリーブオイル", count: 1 }, { name: "生地", count: 1 }, { name: "チーズ", count: 2 }, { name: "ベーコン", count: 1 }], time: "3時間30分", price: 260, level: 100 },

    // お祭り工場
    "風船": { factory: "お祭り工場", yield: 1, ingredients: [{ name: "ゴム", count: 2 }], time: "1時間", price: 70, level: 95 },
    "綿あめ": { factory: "お祭り工場", yield: 1, ingredients: [{ name: "砂糖", count: 2 }, { name: "紙", count: 1 }], time: "1時間30分", price: 47, level: 96 },
    "シャボン bubble": { factory: "お祭り工場", yield: 1, ingredients: [{ name: "シロップ", count: 1 }, { name: "プラスチックボトル", count: 1 }], time: "2時間", price: 120, level: 98 },
    "レイ": { factory: "お祭り工場", yield: 1, ingredients: [{ name: "バラ", count: 2 }, { name: "ジャスミン", count: 2 }], time: "2時間30分", price: 150, level: 101 },
    "ピニャータ": { factory: "お祭り工場", yield: 1, ingredients: [{ name: "紙", count: 2 }, { name: "砂糖", count: 1 }], time: "3時間", price: 52, level: 105 },

    // 園芸用品工場
    "園芸用具": { factory: "園芸用品工場", yield: 1, ingredients: [{ name: "銅の鋳塊", count: 3 }, { name: "松の木", count: 1 }], time: "1時間45分", price: 105, level: 97 },
    "ガーデン・ノーム": { factory: "園芸用品工場", yield: 1, ingredients: [{ name: "粘土", count: 1 }, { name: "銅の鋳塊", count: 1 }], time: "2時間15分", price: 350, level: 98 },
    "ローンチェア": { factory: "園芸用品工場", yield: 1, ingredients: [{ name: "松の木", count: 3 }, { name: "コットン生地", count: 2 }], time: "2時間45分", price: 226, level: 100 },
    "プランター": { factory: "園芸用品工場", yield: 1, ingredients: [{ name: "土", count: 3 }, { name: "粘土", count: 1 }], time: "3時間15分", price: 320, level: 104 },
    "ホース": { factory: "園芸用品工場", yield: 1, ingredients: [{ name: "ゴム", count: 2 }, { name: "プラスチック", count: 1 }], time: "1時間30分", price: 143, level: 111 },

    // ペット用品工場
    "ゴムの骨": { factory: "ペット用品工場", yield: 1, ingredients: [{ name: "ゴム", count: 2 }], time: "1時間", price: 70, level: 100 },
    "ねじ巻きネズミ": { factory: "ペット用品工場", yield: 1, ingredients: [{ name: "プラスチック", count: 1 }, { name: "ゴム", count: 1 }], time: "1時間15分", price: 131, level: 101 },
    "猫砂": { factory: "ペット用品工場", yield: 1, ingredients: [{ name: "粘土", count: 1 }, { name: "紙", count: 1 }], time: "1時間45分", price: 188, level: 103 },
    "ウォーターボウル": { factory: "ペット用品工場", yield: 1, ingredients: [{ name: "プラスチック", count: 2 }, { name: "土", count: 1 }], time: "2時間15分", price: 247, level: 105 },
    "ペット用ベッド": { factory: "ペット用品工場", yield: 1, ingredients: [{ name: "ウール生地", count: 2 }, { name: "コットン生地", count: 1 }], time: "3時間", price: 159, level: 108 },

    // ベジタリアンカフェ
    "ファラフェル": { factory: "ベジタリアンカフェ", yield: 1, ingredients: [{ name: "大豆", count: 3 }, { name: "唐辛子", count: 1 }], time: "1時間", price: 108, level: 103 },
    "味噌汁": { factory: "ベジタリアンカフェ", yield: 1, ingredients: [{ name: "大豆", count: 2 }, { name: "海藻", count: 1 }, { name: "ホタテ", count: 1 }], time: "1時間30分", price: 249, level: 104 },
    "ビーガンチーズ": { factory: "ベジタリアンカフェ", yield: 1, ingredients: [{ name: "大豆", count: 3 }, { name: "ココナッツ", count: 1 }], time: "2時間15分", price: 171, level: 106 },
    "大豆フムス": { factory: "ベジタリアンカフェ", yield: 1, ingredients: [{ name: "大豆", count: 4 }, { name: "オリーブオイル", count: 1 }], time: "2時間45分", price: 337, level: 109 },
    "ワカモレ": { factory: "ベジタリアンカフェ", yield: 1, ingredients: [{ name: "アボカド", count: 2 }, { name: "トマト", count: 1 }, { name: "キーライム", count: 1 }], time: "3時間20分", price: 444, level: 109 },

    // バッグ工場
    "リュックサック": { factory: "バッグ工場", yield: 1, ingredients: [{ name: "コットン生地", count: 3 }, { name: "接着剤", count: 1 }, { name: "ゴム", count: 1 }], time: "2時間", price: 328, level: 107 },
    "編みバッグ": { factory: "バッグ工場", yield: 1, ingredients: [{ name: "小麦", count: 3 }, { name: "サトウキビ", count: 2 }], time: "1時間30分", price: 21, level: 108 },
    "小さなハンドバッグ": { factory: "バッグ工場", yield: 1, ingredients: [{ name: "絹生地", count: 2 }, { name: "真珠", count: 1 }, { name: "サトウキビ", count: 1 }], time: "3時間30分", price: 477, level: 110 },
    "スーツケース": { factory: "バッグ工場", yield: 1, ingredients: [{ name: "プラスチック", count: 3 }, { name: "ゴム", count: 2 }], time: "5時間", price: 416, level: 112 },
    "キッズバッグ": { factory: "バッグ工場", yield: 1, ingredients: [{ name: "コットン生地", count: 1 }, { name: "カラフルな羽", count: 2 }, { name: "羽毛", count: 3 }], time: "1時間15分", price: 167, level: 114 },
};