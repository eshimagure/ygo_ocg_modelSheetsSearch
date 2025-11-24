//海外イラスト Overseas account illustration 
//更新日付順
const data = [
{id:'a000',name:'六花精ボタン',ruby:'りっかせいぼたん',date:'2020-04-03',imageUrl:'https://pbs.twimg.com/media/EUofDHyU0AATAH5?format=jpg&name=900x900',url:'https://x.com/YuGiOh_TCG/status/1245842561702301697?s=20',type:'植物',theme:'',theme2:''},
{id:'a001',name:'アーティファクト・ダグザ',ruby:'あーてぃふぁくと・だぐざ',date:'2020-05-05',imageUrl:'https://pbs.twimg.com/media/EXNoHChU8AEFuFy?format=jpg&name=large',url:'https://x.com/YuGiOh_TCG/status/1257466421031759873?s=20',type:'天使',theme:'',theme2:''},
{id:'a002',name:'コアキメイル・サプライヤー',ruby:'こあきめいる・さぷらいやー',date:'2020-07-31',imageUrl:'https://pbs.twimg.com/media/EeOMSIKVoAAw0hM.jpg:large',url:'https://x.com/YuGiOh_TCG/status/1289184033885138947?s=20',type:'岩石',theme:'',theme2:''},
{id:'a003',name:'メルフィー・マミィ',ruby:'めるふぃー・まみぃ',date:'2020-08-05',imageUrl:'https://pbs.twimg.com/media/EeopheMXoAIzXm3.jpg:large',url:'https://x.com/YuGiOhCardEU/status/1290995973288628234?s=20',type:'獣',theme:'',theme2:''},
{id:'a004',name:'夢魔鏡の使徒－ネイロイ',ruby:'ゆめまきょうのしと－ねいろい',date:'2021-01-28',imageUrl:'https://pbs.twimg.com/media/EstpMGwVEAEIIGe.jpg:large',url:'https://x.com/YuGiOh_TCG/status/1354444051848695811?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1354444051848695811%7Ctwgr%5E6ee871276ab3c9faa680cf90572ead3b6ef6dd14%7Ctwcon%5Es1_c10&ref_url=https%3A%2F%2Fyu-gi-oh.xyz%2Fe8a8ade5ae9ae794bbe381aee8bb8ce8b7a1%2Fhikarineiroi%2F',type:'天使',theme:'',theme2:''},
{id:'a005',name:'スプリガンズ・キャプテン サルガス',ruby:'すぷりがんず・きゃぷてんさるがす',date:'2021-01-28',imageUrl:'https://pbs.twimg.com/media/EtQZfq-U4AEnU1x.jpg:large',url:'https://x.com/YuGiOh_TCG/status/1356980766006276096?s=20',type:'機械',theme:'',theme2:''},
{id:'a006',name:'スターダスト・トレイル',ruby:'すたーだすと・とれいる',date:'2021-08-11',imageUrl:'https://pbs.twimg.com/media/E8gwA7PX0AI8Fby?format=jpg&name=900x900',url:'https://x.com/YuGiOhCardEU/status/1425442076255207424?s=20',type:'ドラゴン',theme:'',theme2:''},
{id:'a007',name:'騎甲虫',ruby:'びーとるーぱー',date:'2021-09-07',imageUrl:'https://pbs.twimg.com/media/E-nSeG6WYAIMzaG.jpg:large',url:'https://x.com/YuGiOhCardEU/status/1434909372564525057?s=20',type:'昆虫',theme:'',theme2:''},
{id:'a008',name:'相剣師－莫邪',ruby:'そうけんし－ばくや',date:'2021-10-28',imageUrl:'https://pbs.twimg.com/media/FCt7ne2WEAkfB6R.jpg:large',url:'https://x.com/YuGiOh_TCG/status/1453391224866541578?s=20',type:'幻竜',theme:'',theme2:''},
{id:'a009',name:'相剣軍師－龍淵',ruby:'そうけんぐんし－りゅうえん',date:'2021-11-03',imageUrl:'https://pbs.twimg.com/media/FDNC1jfXMAIwn0H.jpg:large',url:'https://x.com/YuGiOh_TCG/status/1455580596672073732?s=20',type:'幻竜',theme:'',theme2:''},
{id:'a010',name:'No－P.U.N.K.セアミン',ruby:'のう－ぱんくせあみん',date:'2022-01-22',imageUrl:'https://pbs.twimg.com/media/FJpCEReXoAYoFfR.jpg:large',url:'https://x.com/YuGiOh_TCG/status/1484571672455921672?s=20',type:'サイキック',theme:'',theme2:''},
{id:'a011',name:'相剣大邪－七星龍淵',ruby:'そうけんだいじゃ－しちせいりゅうえん',date:'2022-01-27',imageUrl:'https://pbs.twimg.com/media/FKCx-yIWUAYYzhe.jpg:large',url:'https://x.com/YuGiOh_TCG/status/1486383572353179653?s=20',type:'幻竜',theme:'',theme2:''},
{id:'a012',name:'リブロマンサー・ファイアスターター',ruby:'りぶろまんさー・ふぁいあすたーたー',date:'2022-02-03',imageUrl:'https://pbs.twimg.com/media/FKm1G98XwAkw8XS.jpg:large',url:'https://x.com/YuGiOh_TCG/status/1488920285650767878?s=20',type:'サイバース',theme:'',theme2:''},
{id:'a013',name:'ダイノルフィア・レクスターム',ruby:'だいのるふぃあ・れくすたーむ',date:'2022-05-06',imageUrl:'https://pbs.twimg.com/media/FSAZoqvXMAYnyrN.jpg:large',url:'https://x.com/YuGiOhCardEU/status/1522244862904516610?s=20',type:'恐竜',theme:'',theme2:''},
{id:'a014',name:'N・As・H Knight',ruby:'ねふぃる・あさいらむ・へっと・ないと',date:'2022-06-08',imageUrl:'https://pbs.twimg.com/media/FUqWGx4XoAMwne0.jpg:large',url:'https://x.com/YuGiOh_TCG/status/1534203668916051968?s=20',type:'水',theme:'',theme2:''},
{id:'a015',name:'森と目覚の春化精',ruby:'もりとめざめのはるけしょう',date:'2022-07-27',imageUrl:'https://pbs.twimg.com/media/FYmr_c8XwAAvn73?format=jpg&name=large',url:'https://x.com/YuGiOh_TCG/status/1551960655598538754?s=20',type:'天使',theme:'',theme2:''},
{id:'a016',name:'丘と芽吹の春化精',ruby:'おかとめぶきのはるけしょう',date:'2022-07-27',imageUrl:'https://pbs.twimg.com/media/FYmr_c8XwAAvn73?format=jpg&name=large',url:'https://x.com/YuGiOh_TCG/status/1551960655598538754?s=20',type:'天使',theme:'',theme2:''},
{id:'a017',name:'獣の忍者－獏',ruby:'けもののにんじゃ－ばく',date:'2022-10-13',imageUrl:'https://pbs.twimg.com/media/Fe4YCGFXwAEf08S.jpg:large',url:'https://x.com/YuGiOh_TCG/status/1580226946549456896?s=20',type:'獣',theme:'',theme2:''},
{id:'a018',name:'R-ACEファイア・エンジン',ruby:'れすきゅー・えーすふぁいあ・えんじん',date:'2023-01-18',imageUrl:'https://pbs.twimg.com/media/FmsIDE0WAA0SsCu.jpg:large',url:'https://x.com/YuGiOhCardEU/status/1615393742822801409?s=20',type:'機械',theme:'',theme2:''},
{id:'a019',name:'GP－キャプテン・キャリー',ruby:'ごーるど・ぷらいど－きゃぷてん・きゃりー',date:'2023-02-08',imageUrl:'https://pbs.twimg.com/media/FoYRY-BX0AAt_xK.jpg:large',url:'https://x.com/YuGiOhCardEU/status/1623003838868336655?s=20',type:'悪魔',theme:'',theme2:''}
]
export default data;
