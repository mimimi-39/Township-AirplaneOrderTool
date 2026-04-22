/**
 * 飛行機注文数上限データベース
 * キー: 品名
 * 値: { factory, min, max }
 */
const PLANE_ORDER_DB = {
    // 家畜生産
    "牛乳": { factory: "家畜生産", min: 24, max: 60 },
    "卵": { factory: "家畜生産", min: 27, max: 45 },
    "羊毛": { factory: "家畜生産", min: 9, max: 27 },
    "ハチの巣": { factory: "家畜生産", min: 3, max: 21 },
    "ベーコン": { factory: "家畜生産", min: 6, max: 12 },
    "羽毛": { factory: "家畜生産", min: 9, max: 39 },
    "カラフルな羽": { factory: "家畜生産", min: 3, max: 6 },
    "海藻": { factory: "家畜生産", min: 9, max: 15 },
    "ホタテ": { factory: "家畜生産", min: 3, max: 9 },
    "真珠": { factory: "家畜生産", min: 3, max: 6 },
    "キノコ": { factory: "家畜生産", min: 3, max: 9 },

    // 農作物
    "小麦": { factory: "農作物", min: 54, max: 297 },
    "トウモロコシ": { factory: "農作物", min: 135, max: 243 },
    "にんじん": { factory: "農作物", min: 57, max: 120 },
    "サトウキビ": { factory: "農作物", min: 33, max: 81 },
    "綿": { factory: "農作物", min: 24, max: 60 },
    "イチゴ": { factory: "農作物", min: 15, max: 42 },
    "トマト": { factory: "農作物", min: 18, max: 45 },
    "松の木": { factory: "農作物", min: 18, max: 33 },
    "ジャガイモ": { factory: "農作物", min: 15, max: 45 },
    "カカオ": { factory: "農作物", min: 6, max: 18 },
    "ゴムの木": { factory: "農作物", min: 3, max: 18 },
    "絹": { factory: "農作物", min: 3, max: 15 },
    "唐辛子": { factory: "農作物", min: 18, max: 24 },
    "米": { factory: "農作物", min: 33, max: 48 },
    "バラ": { factory: "農作物", min: 18, max: 30 },
    "ジャスミン": { factory: "農作物", min: 15, max: 27 },
    "コーヒーの木": { factory: "農作物", min: 12, max: 24 },
    "ピーナッツ": { factory: "農作物", min: 18, max: 24 },
    "茶の苗": { factory: "農作物", min: 9, max: 9 },
    "リンゴ": { factory: "農作物", min: 12, max: 15 },
    "ミント": { factory: "農作物", min: 27, max: 33 },
    "大豆": { factory: "農作物", min: 30, max: 48 },
    "コルクガシ": { factory: "農作物", min: 6, max: 9 },
    "ラベンダー": { factory: "農作物", min: 24, max: 27 },

    // パン屋
    "パン": { factory: "パン屋", min: 18, max: 42 },
    "クッキー": { factory: "パン屋", min: 15, max: 27 },
    "ベーグル": { factory: "パン屋", min: 6, max: 18 },
    "ピザ": { factory: "パン屋", min: 3, max: 9 },
    "ジャガイモパン": { factory: "パン屋", min: 6, max: 12 },
    "バナナブレッド": { factory: "パン屋", min: 3, max: 9 },
    "シーフードピザ": { factory: "パン屋", min: 3, max: 6 },
    "キノコパイ": { factory: "パン屋", min: 6, max: 6 },
    "アップルシュトゥルーデル": { factory: "パン屋", min: 3, max: 6 },

    // 乳製品工場
    "クリーム": { factory: "乳製品工場", min: 12, max: 33 },
    "チーズ": { factory: "乳製品工場", min: 9, max: 30 },
    "バター": { factory: "乳製品工場", min: 6, max: 18 },
    "ヨーグルト": { factory: "乳製品工場", min: 6, max: 12 },
    "ピーチヨーグルト": { factory: "乳製品工場", min: 3, max: 9 },
    "豆腐": { factory: "乳製品工場", min: 3, max: 6 },
    "植物性ミルク": { factory: "乳製品工場", min: 6, max: 6 },

    // 砂糖工場
    "砂糖": { factory: "砂糖工場", min: 12, max: 33 },
    "シロップ": { factory: "砂糖工場", min: 6, max: 21 },
    "キャラメル": { factory: "砂糖工場", min: 6, max: 12 },
    "ハニーキャラメル": { factory: "砂糖工場", min: 3, max: 6 },

    // 織物工場
    "コットン生地": { factory: "織物工場", min: 12, max: 30 },
    "ウール生地": { factory: "織物工場", min: 3, max: 15 },
    "絹生地": { factory: "織物工場", min: 6, max: 12 },
    "ナイロン糸": { factory: "織物工場", min: 6, max: 6 },

    // 仕立て屋
    "シャツ": { factory: "仕立て屋", min: 6, max: 12 },
    "セーター": { factory: "仕立て屋", min: 3, max: 12 },
    "コート": { factory: "仕立て屋", min: 3, max: 9 },
    "帽子": { factory: "仕立て屋", min: 3, max: 6 },
    "ドレス": { factory: "仕立て屋", min: 3, max: 6 },
    "スーツ": { factory: "仕立て屋", min: 3, max: 6 },
    "チロリアン帽": { factory: "仕立て屋", min: 3, max: 6 },
    "イブニングドレス": { factory: "仕立て屋", min: 3, max: 6 },

    // スナック工場
    "ポップコーン": { factory: "スナック工場", min: 9, max: 30 },
    "コーンチップス": { factory: "スナック工場", min: 6, max: 15 },
    "グラノーラ": { factory: "スナック工場", min: 6, max: 21 },
    "ポテトチップス": { factory: "スナック工場", min: 3, max: 9 },
    "カナッペ": { factory: "スナック工場", min: 3, max: 6 },
    "ペッパーベーコン": { factory: "スナック工場", min: 3, max: 6 },
    "米のポン菓子": { factory: "スナック工場", min: 6, max: 15 },
    "干しキノコ": { factory: "スナック工場", min: 3, max: 6 },
    "塩炒りピーナッツ": { factory: "スナック工場", min: 6, max: 12 },

    // ファストフードレストラン
    "ミルクセーキ": { factory: "ファストフードレストラン", min: 12, max: 33 },
    "チーズバーガー": { factory: "ファストフードレストラン", min: 12, max: 21 },
    "サンドイッチ": { factory: "ファストフードレストラン", min: 6, max: 15 },
    "フライドポテト": { factory: "ファストフードレストラン", min: 6, max: 15 },
    "ベークドポテト": { factory: "ファストフードレストラン", min: 6, max: 12 },
    "フィッシュバーガー": { factory: "ファストフードレストラン", min: 6, max: 9 },
    "フィッシュ・アンド・チップス": { factory: "ファストフードレストラン", min: 6, max: 9 },
    "ピーナッツバタークレープ": { factory: "ファストフードレストラン", min: 6, max: 6 },

    // 製紙工場
    "紙": { factory: "製紙工場", min: 3, max: 12 },
    "ペーパータオル": { factory: "製紙工場", min: 3, max: 12 },
    "壁紙": { factory: "製紙工場", min: 3, max: 6 },
    "本": { factory: "製紙工場", min: 3, max: 6 },
    "ティーバッグ": { factory: "製紙工場", min: 3, max: 9 },

    // アイスクリーム工場
    "アイスクリームコーン": { factory: "アイスクリーム工場", min: 9, max: 30 },
    "アイスキャンディ": { factory: "アイスクリーム工場", min: 6, max: 12 },
    "フローズンヨーグルト": { factory: "アイスクリーム工場", min: 3, max: 6 },
    "アイスクリームバー": { factory: "アイスクリーム工場", min: 3, max: 6 },
    "チョコミントアイスクリーム": { factory: "アイスクリーム工場", min: 6, max: 6 },
    "パイナップルシャーベット": { factory: "アイスクリーム工場", min: 3, max: 6 },
    "ローズ・シャーベット": { factory: "アイスクリーム工場", min: 3, max: 6 },
    "ピーナッツバターパフェ": { factory: "アイスクリーム工場", min: 3, max: 6 },

    // パン菓子工場
    "マフィン": { factory: "パン菓子工場", min: 9, max: 21 },
    "ブラウニー": { factory: "パン菓子工場", min: 6, max: 15 },
    "カップケーキ": { factory: "パン菓子工場", min: 6, max: 9 },
    "ドーナッツ": { factory: "パン菓子工場", min: 6, max: 9 },
    "チーズケーキ": { factory: "パン菓子工場", min: 3, max: 6 },
    "ハニージンジャーブレッド": { factory: "パン菓子工場", min: 6, max: 12 },
    "キーライムパイ": { factory: "パン菓子工場", min: 6, max: 9 },
    "ココナッツマカロン": { factory: "パン菓子工場", min: 3, max: 6 },
    "キャラメルアップル": { factory: "パン菓子工場", min: 3, max: 6 },

    // ジャム工場
    "イチゴジャム": { factory: "ジャム工場", min: 3, max: 12 },
    "ピーチマーマレード": { factory: "ジャム工場", min: 3, max: 9 },
    "スイカジャム": { factory: "ジャム工場", min: 3, max: 9 },
    "プラムジャム": { factory: "ジャム工場", min: 3, max: 9 },
    "グレープゼリー": { factory: "ジャム工場", min: 3, max: 9 },
    "ローズ・ジャム": { factory: "ジャム工場", min: 6, max: 9 },
    "キノコのソテー": { factory: "ジャム工場", min: 3, max: 6 },
    "ピーナッツバター": { factory: "ジャム工場", min: 6, max: 6 },
    "リンゴジャム": { factory: "ジャム工場", min: 6, max: 6 },

    // ゴム工場
    "ゴム": { factory: "ゴム工場", min: 6, max: 12 },
    "プラスチック": { factory: "ゴム工場", min: 6, max: 9 },
    "接着剤": { factory: "ゴム工場", min: 3, max: 9 },
    "ダンベル": { factory: "ゴム工場", min: 3, max: 6 },

    // 食品加工工場
    "生地": { factory: "食品加工工場", min: 12, max: 24 },
    "冷凍野菜": { factory: "食品加工工場", min: 6, max: 9 },
    "ダンプリング": { factory: "食品加工工場", min: 3, max: 6 },
    "シーフードミックス": { factory: "食品加工工場", min: 6, max: 6 },
    "冷凍フルーツ": { factory: "食品加工工場", min: 6, max: 6 },
    "レトルト食品": { factory: "食品加工工場", min: 6, max: 6 },

    // プラスチック工場
    "プラスチックボトル": { factory: "プラスチック工場", min: 6, max: 9 },
    "おもちゃ": { factory: "プラスチック工場", min: 6, max: 9 },
    "ボール": { factory: "プラスチック工場", min: 3, max: 6 },
    "ゴムボート": { factory: "プラスチック工場", min: 3, max: 6 },
    "シャトルコック": { factory: "プラスチック工場", min: 6, max: 9 },
    "粘土": { factory: "プラスチック工場", min: 6, max: 15 },

    // 家庭用品工場
    "スクラブブラシ": { factory: "家庭用品工場", min: 6, max: 6 },
    "ソープディスペンサー": { factory: "家庭用品工場", min: 6, max: 6 },
    "物干しロープと洗濯バサミ": { factory: "家庭用品工場", min: 3, max: 6 },
    "ラバーカップ": { factory: "家庭用品工場", min: 3, max: 6 },
    "羽ぼうき": { factory: "家庭用品工場", min: 3, max: 6 },
    "ゴム手袋": { factory: "家庭用品工場", min: 3, max: 6 },

    // キャンディ工場
    "ゼリービーンズ": { factory: "キャンディ工場", min: 6, max: 9 },
    "アメ菓子": { factory: "キャンディ工場", min: 3, max: 9 },
    "キャンディケイン": { factory: "キャンディ工場", min: 3, max: 6 },
    "チョコレート": { factory: "キャンディ工場", min: 3, max: 6 },
    "アメ玉": { factory: "キャンディ工場", min: 3, max: 6 },
    "ハニーマシュマロ": { factory: "キャンディ工場", min: 3, max: 6 },
    "ミントキャンディ": { factory: "キャンディ工場", min: 6, max: 6 },
    "フルーツゼリーのスライス": { factory: "キャンディ工場", min: 3, max: 6 },
    "チョコレートバー": { factory: "キャンディ工場", min: 3, max: 6 },
    "緑茶キャンディ": { factory: "キャンディ工場", min: 6, max: 9 },

    // メキシカンレストラン
    "チリソース": { factory: "メキシカンレストラン", min: 3, max: 9 },
    "ブリトー": { factory: "メキシカンレストラン", min: 3, max: 6 },
    "ナチョス": { factory: "メキシカンレストラン", min: 3, max: 12 },
    "タコス": { factory: "メキシカンレストラン", min: 6, max: 9 },
    "ハラペーニョのベーコン巻き": { factory: "メキシカンレストラン", min: 6, max: 9 },
    "ガスパチョ": { factory: "メキシカンレストラン", min: 3, max: 6 },
    "コーンスープ": { factory: "メキシカンレストラン", min: 6, max: 6 },
    "モレソース": { factory: "メキシカンレストラン", min: 6, max: 9 },
    "キノコスープ": { factory: "メキシカンレストラン", min: 6, max: 6 },

    // 文房具工場
    "消しゴム": { factory: "文房具工場", min: 3, max: 6 },
    "付箋": { factory: "文房具工場", min: 3, max: 6 },
    "掲示板": { factory: "文房具工場", min: 3, max: 6 },
    "蛍光ペン": { factory: "文房具工場", min: 3, max: 6 },

    // 家具工場
    "テーブル": { factory: "家具工場", min: 3, max: 6 },
    "いす": { factory: "家具工場", min: 3, max: 6 },
    "ソファー": { factory: "家具工場", min: 3, max: 6 },
    "ベッド": { factory: "家具工場", min: 3, max: 6 },
    "フロアランプ": { factory: "家具工場", min: 3, max: 6 },

    // 靴工場
    "サンダル": { factory: "靴工場", min: 6, max: 9 },
    "スニーカー": { factory: "靴工場", min: 3, max: 6 },
    "ブーツ": { factory: "靴工場", min: 3, max: 6 },
    "ハイヒール": { factory: "靴工場", min: 3, max: 6 },
    "あったかブーツ": { factory: "靴工場", min: 3, max: 6 },

    // アジア料理のレストラン
    "巻寿司": { factory: "アジア料理のレストラン", min: 6, max: 18 },
    "ロブスター寿司": { factory: "アジア料理のレストラン", min: 6, max: 9 },
    "海藻エビサラダ": { factory: "アジア料理のレストラン", min: 6, max: 6 },
    "ホタテの寿司": { factory: "アジア料理のレストラン", min: 6, max: 9 },
    "ココナッツスープ": { factory: "アジア料理のレストラン", min: 3, max: 6 },
    "ビーフン": { factory: "アジア料理のレストラン", min: 6, max: 12 },
    "シーフードサラダ": { factory: "アジア料理のレストラン", min: 6, max: 12 },
    "キノコサラダ": { factory: "アジア料理のレストラン", min: 6, max: 6 },
    "ピーナッツソース": { factory: "アジア料理のレストラン", min: 3, max: 6 },

    // グリル屋さん
    "キッシュ": { factory: "グリル屋さん", min: 6, max: 6 },
    "焼きロブスター": { factory: "グリル屋さん", min: 3, max: 6 },
    "ベーコンエッグ": { factory: "グリル屋さん", min: 6, max: 6 },
    "フライドフィッシュ": { factory: "グリル屋さん", min: 3, max: 6 },
    "ドリア": { factory: "グリル屋さん", min: 6, max: 6 },
    "ハチミツ添えパンケーキ": { factory: "グリル屋さん", min: 6, max: 15 },
    "ロブスターオムレツ": { factory: "グリル屋さん", min: 3, max: 6 },
    "ホタテのグリル": { factory: "グリル屋さん", min: 3, max: 6 },
    "ローストミート": { factory: "グリル屋さん", min: 3, max: 6 },

    // 香水工場
    "アロマキャンドル": { factory: "香水工場", min: 6, max: 6 },
    "香水": { factory: "香水工場", min: 3, max: 6 },
    "エアフレッシュナー": { factory: "香水工場", min: 9, max: 18 },
    "香料入りせっけん": { factory: "香水工場", min: 3, max: 6 },
    "ジャスミンオイル": { factory: "香水工場", min: 3, max: 6 },
    "化粧水": { factory: "香水工場", min: 6, max: 6 },
    "マスク": { factory: "香水工場", min: 6, max: 12 },
    "歯磨き粉": { factory: "香水工場", min: 3, max: 6 },

    // 飲料工場
    "フルーツ・カクテル": { factory: "飲料工場", min: 12, max: 27 },
    "グレープ・フィズ": { factory: "飲料工場", min: 6, max: 9 },
    "チョコレート・スムージー": { factory: "飲料工場", min: 6, max: 9 },
    "スイカ・ジュース": { factory: "飲料工場", min: 3, max: 12 },
    "アイスティー": { factory: "飲料工場", min: 3, max: 9 },
    "トロピカル・ミックス": { factory: "飲料工場", min: 3, max: 9 },
    "リンゴジュース": { factory: "飲料工場", min: 3, max: 6 },
    "ミントアイスティー": { factory: "飲料工場", min: 6, max: 9 },

    // ケーキ工場
    "キャロットケーキ": { factory: "ケーキ工場", min: 6, max: 6 },
    "ショートケーキ": { factory: "ケーキ工場", min: 3, max: 6 },
    "コーヒーケーキ": { factory: "ケーキ工場", min: 3, max: 6 },
    "ミントケーキ": { factory: "ケーキ工場", min: 3, max: 6 },
    "チョコレートケーキ": { factory: "ケーキ工場", min: 3, max: 6 },
    "ウェディングケーキ": { factory: "ケーキ工場", min: 3, max: 3 },

    // ホットドッグ工場
    "ホットドッグ": { factory: "ホットドッグ工場", min: 12, max: 12 },
    "アメリカンドッグ": { factory: "ホットドッグ工場", min: 6, max: 6 },
    "コニードッグ": { factory: "ホットドッグ工場", min: 6, max: 6 },
    "ニンジンサンドイッチ": { factory: "ホットドッグ工場", min: 6, max: 9 },

    // フレンチレストラン
    "ラタトゥイユ": { factory: "フレンチレストラン", min: 3, max: 6 },
    "プロフィトロール": { factory: "フレンチレストラン", min: 3, max: 6 },
    "ニース風サラダ": { factory: "フレンチレストラン", min: 6, max: 6 },
    "ブイヤベース": { factory: "フレンチレストラン", min: 3, max: 6 },

    // コーヒー工場
    "エスプレッソ": { factory: "コーヒー工場", min: 15, max: 27 },
    "カプチーノ": { factory: "コーヒー工場", min: 12, max: 27 },
    "カフェモカ": { factory: "コーヒー工場", min: 6, max: 18 },
    "ココア": { factory: "コーヒー工場", min: 6, max: 18 },
    "ココナッツラテ": { factory: "コーヒー工場", min: 6, max: 9 },

    // 羽毛工場
    "枕": { factory: "羽毛工場", min: 6, max: 12 },
    "パーカー": { factory: "羽毛工場", min: 3, max: 6 },
    "ダウンキルト": { factory: "羽毛工場", min: 6, max: 9 },
    "バスローブとスリッパ": { factory: "羽毛工場", min: 6, max: 6 },

    // お人形工場
    "操り人形": { factory: "お人形工場", min: 6, max: 9 },
    "陶器人形": { factory: "お人形工場", min: 3, max: 6 },
    "着せ替え人形": { factory: "お人形工場", min: 6, max: 6 },
    "ぬいぐるみ": { factory: "お人形工場", min: 6, max: 9 },

    // 食器工場
    "カップ": { factory: "食器工場", min: 6, max: 9 },
    "フライパン": { factory: "食器工場", min: 6, max: 9 },
    "ティーポット": { factory: "食器工場", min: 3, max: 6 },
    "カトラリー": { factory: "食器工場", min: 6, max: 21 },
    "お茶会セット": { factory: "食器工場", min: 3, max: 6 },
    "トリベットマット": { factory: "食器工場", min: 3, max: 6 },

    // 音楽工場
    "ウクレレ": { factory: "音楽工場", min: 6, max: 12 },
    "サックス": { factory: "音楽工場", min: 6, max: 9 },
    "ドラム": { factory: "音楽工場", min: 6, max: 9 },
    "アコーディオン": { factory: "音楽工場", min: 6, max: 6 },
    "パンフルート": { factory: "音楽工場", min: 6, max: 6 },

    // 製茶工場
    "紅茶": { factory: "製茶工場", min: 6, max: 18 },
    "ホワイトジャスミンティー": { factory: "製茶工場", min: 12, max: 27 },
    "ローズティー": { factory: "製茶工場", min: 6, max: 12 },
    "バター茶": { factory: "製茶工場", min: 3, max: 6 },
    "アップルティー": { factory: "製茶工場", min: 6, max: 9 },
    "ミルクウーロン茶": { factory: "製茶工場", min: 3, max: 6 },
    "チョコレートカスタード": { factory: "製茶工場", min: 3, max: 6 },

    // ブーケ工場
    "夏のブーケ": { factory: "ブーケ工場", min: 6, max: 9 },
    "野菜のブーケ": { factory: "ブーケ工場", min: 3, max: 6 },
    "ウェディングブーケ": { factory: "ブーケ工場", min: 3, max: 9 },
    "キャンディブーケ": { factory: "ブーケ工場", min: 3, max: 6 },
    "お花のバスケット": { factory: "ブーケ工場", min: 3, max: 6 },
    "ラベンダーのブーケ": { factory: "ブーケ工場", min: 6, max: 6 },
    "お茶とコーヒーのブーケ": { factory: "ブーケ工場", min: 6, max: 6 },

    // イタリア料理店
    "オリーブオイル": { factory: "イタリア料理店", min: 6, max: 6 },
    "ブルスケッタ": { factory: "イタリア料理店", min: 6, max: 6 },
    "パスタ（アラビアッタ）": { factory: "イタリア料理店", min: 6, max: 6 },
    "ラビオリ": { factory: "イタリア料理店", min: 6, max: 6 },
    "ティラミス": { factory: "イタリア料理店", min: 6, max: 6 },
    "ラザーニャ": { factory: "イタリア料理店", min: 6, max: 6 },

    // お祭り工場
    "風船": { factory: "お祭り工場", min: 6, max: 12 },
    "綿あめ": { factory: "お祭り工場", min: 6, max: 15 },
    "シャボン玉": { factory: "お祭り工場", min: 3, max: 6 },
    "レイ": { factory: "お祭り工場", min: 12, max: 30 },
    "ピニャータ": { factory: "お祭り工場", min: 3, max: 6 },

    // 園芸用品工場
    "園芸用具": { factory: "園芸用品工場", min: 6, max: 6 },
    "ガーデン・ノーム": { factory: "園芸用品工場", min: 3, max: 6 },
    "ローンチェア": { factory: "園芸用品工場", min: 6, max: 9 },
    "プランター": { factory: "園芸用品工場", min: 6, max: 9 },
    "ホース": { factory: "園芸用品工場", min: 6, max: 6 },

    // ペット用品工場
    "ゴムの骨": { factory: "ペット用品工場", min: 6, max: 9 },
    "ねじ巻きネズミ": { factory: "ペット用品工場", min: 6, max: 6 },
    "猫砂": { factory: "ペット用品工場", min: 6, max: 9 },
    "ウォーターボウル": { factory: "ペット用品工場", min: 6, max: 12 },
    "ペット用ベッド": { factory: "ペット用品工場", min: 3, max: 6 },

    // ベジタリアンカフェ
    "ファラフェル": { factory: "ベジタリアンカフェ", min: 6, max: 12 },
    "味噌汁": { factory: "ベジタリアンカフェ", min: 3, max: 6 },
    "ベジタリアンチーズケーキ": { factory: "ベジタリアンカフェ", min: 3, max: 6 },
    "大豆フムス": { factory: "ベジタリアンカフェ", min: 6, max: 6 },
    "ワカモレ": { factory: "ベジタリアンカフェ", min: 3, max: 6 },

    // バッグ工場
    "リュックサック": { factory: "バッグ工場", min: 3, max: 6 },
    "編みバッグ": { factory: "バッグ工場", min: 6, max: 9 },
    "小さなハンドバッグ": { factory: "バッグ工場", min: 3, max: 6 },
    "スーツケース": { factory: "バッグ工場", min: 3, max: 3 },
    "キッズバッグ": { factory: "バッグ工場", min: 6, max: 6 },

    // 島商品
    "ピーチ": { factory: "島商品", min: 9, max: 18 },
    "スイカ": { factory: "島商品", min: 3, max: 15 },
    "プラム": { factory: "島商品", min: 3, max: 9 },
    "ブドウ": { factory: "島商品", min: 9, max: 18 },
    "オリーブ": { factory: "島商品", min: 6, max: 15 },
    "キーライム": { factory: "島商品", min: 3, max: 9 },
    "バナナ": { factory: "島商品", min: 6, max: 18 },
    "ココナッツ": { factory: "島商品", min: 3, max: 12 },
    "パイナップル": { factory: "島商品", min: 3, max: 9 },
    "魚": { factory: "島商品", min: 9, max: 18 },
    "エビ": { factory: "島商品", min: 9, max: 15 },
    "ロブスター": { factory: "島商品", min: 3, max: 9 },
    "アボカド": { factory: "島商品", min: 9, max: 12 },
    "マンゴー": { factory: "島商品", min: 9, max: 9 },
    "アロエ": { factory: "島商品", min: 3, max: 9 },

    // 鉱山
    "土": { factory: "鉱山", min: 6, max: 30 }
};