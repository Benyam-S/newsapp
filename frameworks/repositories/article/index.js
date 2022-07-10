import { v4 } from "uuid";
import createArticle from "../../../entities/article";
import { CATEGORY_ALL } from "../../../entities/constants";

// let storedArticles = []; // Repository for the articles
let storedArticles = [
  {
    id: "8bd590c7-9880-40ac-a8c8-7f9039d1cd37",
    category: "general",
    source: {
      id: null,
      name: "BFMTV",
    },
    author: null,
    title:
      'EN DIRECT - "Avec la motion de censure, la Nupes risque de se brûler les doigts", selon Attal - BFMTV',
    description:
      "Le gouvernement monte au créneau dans la presse ce dimanche matin, avec, entre autres, l'entretien accordé par Gabriel Attal, désormais ministre délégué aux Comptes publics, au Parisien. Côté opposition, Marine Le Pen sera notre invitée à la mi-journée dans B…",
    url: "https://www.bfmtv.com/politique/en-direct-avec-la-motion-de-censure-la-nupes-risque-de-se-bruler-les-doigts-selon-attal_LN-202207100030.html",
    urlToImage:
      "https://images.bfmtv.com/d6D7rJp2CeIEf8uR0rD2ZYPDcLM=/0x107:2048x1259/2048x0/images/attal-1447517.jpg",
    publishedAt: "2022-07-10T08:33:23Z",
    content:
      "La cheffe de file des députés Renaissance Aurore Bergé s'est dite ouverte à des \"compromis\" avec l'opposition sur le projet de loi pouvoir d'achat, mais \"pas à n'importe quel prix\", dimanche dans le … [+601 chars]",
  },
  {
    id: "b20a494c-9ad2-4194-bf95-bee781f11466",
    category: "general",
    source: {
      id: null,
      name: "Fox Sports",
    },
    author: "Catherine Healey",
    title:
      "LIVE AFL: Kennedy hits remarkable milestone as Eagles, Blues locked in ‘stalemate’ - Fox Sports",
    description:
      "LIVE AFL: Kennedy hits remarkable milestone as Eagles, Blues locked in ‘stalemate’",
    url: "https://www.foxsports.com.au/afl/live-afl-scores-west-coast-eagles-vs-carlton-blues-updates-2022-round-17-live-stream-stats-video-result-news-blog/news-story/7647fe3a6ba03784d510399d6a841aaf",
    urlToImage:
      "https://content.api.news/v3/images/bin/e22ac7f1836f7cab4af29003c60a6bbb",
    publishedAt: "2022-07-10T08:30:00Z",
    content:
      "Carlton cant afford an embarrassing slip-up in the west on Sunday, with a win over the West Coast Eagles crucial to the clubs hopes of keeping a top-four berth alive.\r\nThe Eagles (2-13, 57.1%) will b… [+4923 chars]",
  },
  {
    id: "346317e7-d365-46af-9a11-9d568b56a988",
    category: "general",
    source: {
      id: null,
      name: "Www.lsm.lv",
    },
    author: "Ludmila Glazunova",
    title:
      "Kurucs izceļas ar sešiem punktiem Toronto «Raptors» uzvarā - Lsm.lv",
    description:
      "Nacionālās basketbola asociācijas (NBA) Vasaras līgas spēlē Rodiona Kuruca pārstāvētā Toronto “Raptors” sestdien ar 97:77 uzvarēja Filadelfijas “76ers”, liecina organizatoru informācija.",
    url: "https://www.lsm.lv/raksts/sports/futbols/kurucs-izcelas-ar-sesiem-punktiem-toronto-raptors-uzvara.a464801/",
    urlToImage: "https://static.lsm.lv/media/2021/10/large/1/gfwm.jpg",
    publishedAt: "2022-07-10T08:28:39Z",
    content:
      "Kurucs laukumā pavadīja 20 minūtes un 7 sekundes, gūstot sešus punktus. Viņš realizēja divus no četriem divpunktu metieniem un divus soda metienus, kā arī izcīnīja trīs atlēkušās bumbas, atdeva vienu… [+388 chars]",
  },
  {
    id: "23256d52-795a-4532-b790-6b9d39e2e7a8",
    category: "general",
    source: {
      id: null,
      name: "Zdnet.co.kr",
    },
    author: null,
    title:
      "'돌싱맘' 지연수 \"신용불량자였다가 한달 전 빚 다 갚았다\" - ZD넷 코리아",
    description:
      "'자본주의학교' 지연수가 신용불량자였다가 최근 빚을 다 갚게 됐다고 밝혔다.10일 오후 9시20분 방송되는 KBS 2TV '자본주의학교'...",
    url: "https://zdnet.co.kr/view/?no=20220710172827",
    urlToImage:
      "https://image.zdnet.co.kr/2022/07/10/4671161d3f3368bc16e59c084df4ad86.jpg",
    publishedAt: "2022-07-10T08:28:36Z",
    content:
      '\'\' .\r\n10 920 KBS 2TV \'\' 3040 \' \' , .\r\nKBS 2TV \'\'(=1)\r\n. .\r\n " 2 " " " .\r\n " 6 " .\r\n \'\' " . 10, 5 " " " .\r\n " " " " . " , " " " .\r\n\'\' "10 \'\' , " " , " .\r\n(=1)',
  },
  {
    id: "28344d56-dd5d-475a-9a69-edcbf69bea04",
    category: "general",
    source: {
      id: null,
      name: "Cnstock.com",
    },
    author: null,
    title: "洪涛转债15日停止交易-新闻 - 上海证券报",
    description:
      "������֤���й�֤ȯ��Ѷ������ ���ң����ιɷ�10�չ���ƣ�“����תծ”����2022��7��28�յ��ڣ����ݡ�����֤ȯ��������ת����˾ծȯҵ��ʵʩϸ�򡷹涨��“����תծ”����ǰ10��������ֹͣ���ס���������תծֹͣ������ʼ����Ϊ7��15�ա�����“����תծ”��������ֹͣ���׺�ת���ڽ���ǰ������2022��7��15",
    url: "https://news.cnstock.com/news,bwkx-202207-4917487.htm",
    urlToImage: null,
    publishedAt: "2022-07-10T08:25:29Z",
    content: null,
  },
  {
    id: "33b3487c-ebd5-4f0e-ab3d-017b0c33a1bc",
    category: "general",
    source: {
      id: null,
      name: "Globes.co.il",
    },
    author: "The Wall Street Journal",
    title: "העתיד של טוויטר לוט בערפל בעקבות נסיגת מאסק מהעסקה - גלובס",
    description:
      "עובדי הרשת החברתית מביעים בלבול ותסכול לאחר שבועות של תהפוכות בזמן השיחות על רכישה אפשרית בידי המיליארדר",
    url: "https://www.globes.co.il/news/article.aspx?did=1001417516",
    urlToImage:
      "https://res.cloudinary.com/globes/image/upload/t_desktop_article_content_header_800%2A392/v1652959490/direct/shutterstock_2149752817_l2hmti.jpg",
    publishedAt: "2022-07-10T08:25:18Z",
    content:
      '44 , . \r\n  : -\r\n , . , .\r\n, , . : " ".\r\n , 18% , 4.8% .\r\n . , . 90% .\r\n , \' , 2007 2010.\r\n" ", .\r\n" , \' " . , . . .\r\n, .\r\n , 100 , .\r\n , Elliott Management Corp. 7.5 2023, 315 ( ) .\r\n 36.81 , , 45.10… [+161 chars]',
  },
  {
    id: "aecd7687-53b6-4257-bed0-4ed214db54b0",
    category: "general",
    source: {
      id: null,
      name: "Mediapen.com",
    },
    author: null,
    title:
      "지난해 신인왕 송가은, 대보 하우스디 오픈 우승 '통산 2승'…오지현 2위-박민지 10위 - 미디어펜",
    description:
      "[미디어펜=석명 기자] 지난해 신인왕 출신인 송가은(22)이 시즌 첫 승이자 통산 2승을 올렸다.송가은은 10일 경기도 파주시의 서원밸리 컨트리클럽(파72)에서 열린 한국여자프로골",
    url: "http://www.mediapen.com/news/view/737076",
    urlToImage:
      "http://image.mediapen.com/news/202207/news_737076_1657440279_m.jpg",
    publishedAt: "2022-07-10T08:24:29Z",
    content: null,
  },
  {
    id: "303db395-4a90-4a5d-a3f4-9c094e1cfc2e",
    category: "general",
    source: {
      id: null,
      name: "Cnstock.com",
    },
    author: null,
    title: "无锡银行业绩快报：上半年净利润增长超30%-新闻 - 上海证券报",
    description:
      "������֤���й�֤ȯ��Ѷ������ ���ң���������10����¶2022������ҵ���챨��������ʾ�������ϰ���ʵ��Ӫҵ������23.36��Ԫ������6.72%�����������й�˾�ɶ��ľ�����10.20��Ԫ������30.27%���������滹��ʾ������2022��6��30�գ��������ʲ�2,083.86��Ԫ������3.28%�������ܴ���1,247.19��Ԫ������5.86%���ܴ��1,6…",
    url: "https://news.cnstock.com/news,bwkx-202207-4917486.htm",
    urlToImage: null,
    publishedAt: "2022-07-10T08:23:16Z",
    content: null,
  },
  {
    id: "a18c51f8-71b5-4911-9213-89e4cfbc4ba4",
    category: "general",
    source: {
      id: null,
      name: "Hankyung.com",
    },
    author: null,
    title:
      '송옥렬 공정위원장 후보자 사퇴…대통령실 "본인 뜻 존중"(종합2보) - 한국경제',
    description:
      '송옥렬 공정위원장 후보자 사퇴…대통령실 "본인 뜻 존중"(종합2보), 경제',
    url: "https://www.hankyung.com/economy/article/202207108346Y",
    urlToImage: "https://img.hankyung.com/photo/202207/ZK.30583418.1.jpg",
    publishedAt: "2022-07-10T08:22:25Z",
    content:
      "2 2026 2030 43000, 114000 () . · 2 .10 (IB) 5 (IR) 2 . 2024 2 9, (EBITDA) 19000 . 2026 EBITDA 20, 43000 . 2030 41, EBITDA 114000 .2030 2 . 2018 2030 EBITDA 117000, 83000 . “2030 2 9 ” “ 92381 ” . 203… [+24 chars]",
  },
  {
    id: "a46041f0-7159-4f34-83a3-f22edb0fceec",
    category: "general",
    source: {
      id: null,
      name: "Ulifestyle.com.hk",
    },
    author: null,
    title:
      "iPadOS 15.5 爆嚴重問題！部份型號無法充電！ - ezone.hk - 科技焦點- 電腦 - ezone.hk",
    description:
      "生活科技平台，將科技變成生活趣味，提供最新科技情報、影片與各類筍購情報。",
    url: "https://ezone.ulifestyle.com.hk/index",
    urlToImage:
      "https://resource01-proxy.ulifestyle.com.hk/res/v3/image/seo/504.jpg",
    publishedAt: "2022-07-10T08:19:00Z",
    content: "© 2022 e-zone. All Rights Reserved.",
  },
  {
    id: "7dc55b17-0f8a-4523-adcc-87537ad44a4b",
    category: "general",
    source: {
      id: null,
      name: "Haaretz.co.il",
    },
    author: null,
    title:
      '"מרכינים ראש": מכבי חיפה הגיבה לדיווחים על מות סרגיי בלנצ\'וק באוקראינה - הארץ',
    description: null,
    url: "https://www.haaretz.co.il/sport/israel-soccer/2022-07-10/ty-article/00000181-e712-dd1b-abb9-e77bf1be0000",
    urlToImage: null,
    publishedAt: "2022-07-10T08:17:00Z",
    content: null,
  },
  {
    id: "ce06ce58-9027-4d6c-aea4-ef77a165f517",
    category: "general",
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "aptX Lossless - Wann kommen erste Geräte mit verlustfreiem Bluetooth-Audio? - ChinaHandys.net",
    description: null,
    url: "https://news.google.com/__i/rss/rd/articles/CBMiPWh0dHBzOi8vd3d3LmNoaW5haGFuZHlzLm5ldC9hcHR4LWxvc3NsZXNzLWVyc2NoZWludW5nc3Rlcm1pbi_SAQA?oc=5",
    urlToImage: null,
    publishedAt: "2022-07-10T08:15:29Z",
    content: null,
  },
  {
    id: "aa4590d2-048c-49c3-b36a-a4544d256843",
    category: "general",
    source: {
      id: null,
      name: "YouTube",
    },
    author: null,
    title:
      "'손흥민의 친구들'이 왔다…토트넘, 프리시즌 투어 위해 입국(현장영상) / SBS - SBS 뉴스",
    description:
      "잉글랜드 프로축구 프리미어리그(EPL) 득점왕 손흥민(30)의 소속팀 토트넘이 한국을 찾았습니다.2022-2023 프리시즌 투어를 위해 안토니오 콘테 감독이 이끄는 토트넘 선수단이 오늘(10일) 오후 인천국제공항을 통해 입국했습니다. 팬들의 큰 환영 속에 입국한 토트넘 선수단은 이...",
    url: "https://www.youtube.com/watch?v=4hbJ7QsbkD8",
    urlToImage: "https://i.ytimg.com/vi/4hbJ7QsbkD8/hqdefault.jpg",
    publishedAt: "2022-07-10T08:14:54Z",
    content: null,
  },
  {
    id: "4d0ee1ae-a335-4923-9821-b628c4cd641a",
    category: "general",
    source: {
      id: null,
      name: "Yonhapnewstv.co.kr",
    },
    author: null,
    title: "윤대통령, 내일 김주현 금융위원장 후보자 임명안 재가 - 연합뉴스TV",
    description:
      "윤대통령, 내일 김주현 금융위원장 후보자 임명안 재가\n\n윤석열 대통령이 내일(11일) 김주현 금융위원장 후보자 임명안을 재가하기로 했습니다.\n\n강인선 대통령실 대변인은 브리핑에서",
    url: "https://www.yonhapnewstv.co.kr/news/MYH20220710011800038",
    urlToImage:
      "https://yonhapnewstv-prod.s3.ap-northeast-2.amazonaws.com/article/MYH/20220710/MYH20220710011800038_P1.jpg",
    publishedAt: "2022-07-10T08:14:44Z",
    content:
      "<ul><li>()TV 2()\r\n</li><li> : </li><li> : 02-398-7800</li><li> : 101-86-62619</li></ul>\r\nCopyright 2019 © TV :: . 23 All rights reserved.\r\n () , ·· .",
  },
  {
    id: "e3d77310-ac4d-487c-9d71-f1c79e9a37ec",
    category: "general",
    source: {
      id: null,
      name: "Sina.com.cn",
    },
    author: "新浪娱乐",
    title:
      "91岁指挥家李华德去世曾指挥过《红色娘子军》|中央音乐学院|李华德|指挥_新浪娱乐_新浪网 - 手机新浪网",
    description:
      "新浪娱乐讯7月9日，中央音乐学院发布讣告，中国共产党党员，中央音乐学院离休干部、中央音乐学院指挥系原党支部负责人李华德教授于2022年7月8日13：01在北京右安门医院病逝，享年91岁，告别仪式将于7月14日举行。李华德曾担任1964年芭蕾",
    url: "https://ent.sina.com.cn/y/yneidi/2022-07-10/doc-imizmscv0898745.shtml",
    urlToImage: null,
    publishedAt: "2022-07-10T08:14:43Z",
    content: null,
  },
  {
    id: "d13484de-5dbf-420d-a3d7-d6720b33d7c4",
    category: "general",
    source: {
      id: null,
      name: "Gamekapocs.hu",
    },
    author: "RangerFox",
    title:
      "A Playground által készülő Fable rebootnak új narratív vezetője lett - Gamekapocs",
    description:
      "Talán új lendületet vihet a szakember a játék fejlesztésébe, aki olyan projekteken dolgozott eddig, mint a Control, Dishonored: Death of the Outsider, vagy épp a készülő új Avatar játék.",
    url: "https://www.gamekapocs.hu/hir/75750/a_playground_altal_keszulo_fable_rebootnak_uj_narrativ_vezetoje_lett",
    urlToImage: "https://www.gamekapocs.hu/media/hirek/F/fable_600.jpeg",
    publishedAt: "2022-07-10T08:14:23Z",
    content:
      "A díjnyertes író és rendez Anna Megill kapta meg a megtiszteltet feladatot, hogy narratív vezetként tevékenykedjen a Playground stúdiónál készül Fable rebooton. A hölgy a saját Twitter fiókján jelent… [+545 chars]",
  },
  {
    id: "bf909427-4db9-45a5-8def-fd793615e2bc",
    category: "general",
    source: {
      id: null,
      name: "Www.ots.at",
    },
    author: null,
    title:
      "SPÖ-Deutsch - Strompreisdeckel: Mikl-Leitner schwenkt auf SPÖ-Kurs um - APA OTS",
    description:
      "Nehammers „Kopf in den Sand-Politik“ auch in eigener ÖVP immer umstrittener - Bleibt es bei Scheindiskussionen oder wird tatsächlich gehandelt?",
    url: "https://www.ots.at/presseaussendung/OTS_20220710_OTS0010/spoe-deutsch-strompreisdeckel-mikl-leitner-schwenkt-auf-spoe-kurs-um",
    urlToImage: "https://static.ots.at/pressemappe/195/112_fb.gif?t=1436177034",
    publishedAt: "2022-07-10T08:12:35Z",
    content:
      "Wien (OTS/SK) - Die zaghafte und mutlose Kopf in den Sand-Politik von Bundeskanzler Karl Nehammer in der Bekämpfung der Teuerung bekommt immer mehr Kritik auch in den eigenen Reihen der ÖVP, sagt SPÖ… [+1819 chars]",
  },
  {
    id: "81df463e-7dc1-4751-b7e3-0e3ee2c44f4b",
    category: "general",
    source: {
      id: null,
      name: "Meinbezirk.at",
    },
    author: "Peter Zezula",
    title:
      "Viele Gäste in ehemaliger Fabrikantenvilla: Gartenparty der Naturfreunde und der SP-Sektion Nordost - meinbezirk.at",
    description:
      "Windig war es, bei der Gartenparty der Naturfreunde Wiener Neustadt in Kooperation mit der SPÖ Sektion Neustadt Sektion NordOst, doch das tat weder der Stimmung noch dem zahlreichen Besuch einen Abbruch.",
    url: "https://www.meinbezirk.at/wiener-neustadt/c-lokales/gartenparty-der-naturfreunde-und-der-sp-sektion-nordost_a5464987",
    urlToImage:
      "https://media04.meinbezirk.at/article/2022/07/10/0/29989750_XXL.jpg",
    publishedAt: "2022-07-10T08:11:45Z",
    content:
      "Windig war es, bei der Gartenparty der Naturfreunde Wiener Neustadt in Kooperation mit der SPÖ Sektion Neustadt Sektion NordOst, doch das tat weder der Stimmung noch dem zahlreichen Besuch einen Abbr… [+1230 chars]",
  },
  {
    id: "0f3fee9e-4415-4287-b369-6de496943ec3",
    category: "general",
    source: {
      id: null,
      name: "Enorth.com.cn",
    },
    author: null,
    title: "联播+丨习近平“典”论网络空间命运共同体-新闻中心 - 北方网",
    description:
      "����+����ռ������๲ͬ�Ļ�ռ䣬����ռ�ǰ;����Ӧ�����������ͬ���ա�����Ӧ�ü�ǿ��ͨ������ʶ�����������ͬ��������ռ����˹�ͬ�塣\n\r����ʮ�˴�������ϰ��ƽ��ϯ������������ռ����˹�ͬ�壬����������ݵ������һ���������������+����Ŀ������������ݣ�����һ������õ����ʷ�߶Ⱥ�����ں���",
    url: "http://news.enorth.com.cn/system/2022/07/10/052876074.shtml",
    urlToImage: null,
    publishedAt: "2022-07-10T08:10:28Z",
    content:
      "{#if $T.t.abstract!=''}\r\n {$T.t.abstract.substring(0, 50)} ......[] \r\n{#/if}\r\n {$T.t.pub_date}{$T.t.source_name}",
  },
  {
    id: "bce4656a-908b-472c-b425-4636d02a16fe",
    category: "general",
    source: {
      id: null,
      name: "Gamechannel.hu",
    },
    author: "marco",
    title:
      "Egyjátékos Apex Legends-en dolgozik a Respawn | Hírblock | Game Channel - Game Channel",
    description:
      "Sokan várják a Titanfall 3-at, azonban a Respawn már kijelentette, hogy egyelőre nem akar vele foglalkozni, de az utóbbi időben igen sok...",
    url: "https://www.gamechannel.hu/cikk/hirblock/egyjatekos-apex-legendsen-dolgozik-a-respawn",
    urlToImage:
      "https://www.gamechannel.hu/pictures/hirblock/egyjatekos-apex-legendsen-dolgozik-a-respawn_1.jpg",
    publishedAt: "2022-07-10T08:09:07Z",
    content:
      "Sokan várják a Titanfall 3-at, azonban a Respawn már kijelentette, hogy egyelre nem akar vele foglalkozni, de az utóbbi idben igen sok pletyka merült fel, amiknek lehet hogy van is alapja, hiszen val… [+852 chars]",
  },
  {
    id: "3a2f6b5c-c318-4ac2-b2a2-97a0ef8d26d5",
    category: "business",
    source: {
      id: null,
      name: "Kiryatgatim.co.il",
    },
    author: "Caleb",
    title:
      "ניתוח ותובנות של צמיחת שוק מוביל חקלאי , 2022: מגמות, גודל שוק, שיתוף תחזית והזדמנויות לפי סוג, יישום, משתמשי קצה, מדינות וחברות עד 2029| LEDHYDROPONICS,Kessil,Zhicheng,Valoya,Osram - קרית גתים",
    description: null,
    url: "https://kiryatgatim.co.il/%d7%97%d7%93%d7%a9%d7%95%d7%aa/%d7%a0%d7%99%d7%aa%d7%95%d7%97-%d7%95%d7%aa%d7%95%d7%91%d7%a0%d7%95%d7%aa-%d7%a9%d7%9c-%d7%a6%d7%9e%d7%99%d7%97%d7%aa-%d7%a9%d7%95%d7%a7-%d7%9e%d7%95%d7%91%d7%99%d7%9c-%d7%97%d7%a7%d7%9c%d7%90%d7%99/34286/",
    urlToImage: null,
    publishedAt: "2022-07-10T08:36:47Z",
    content:
      '" " , , , , , . 2016 2021 2022 2029 . , . , . 19 -LED .\r\n CAGR 20.4% -2022 2029.\r\n( : 25% )\r\n :\r\nhttps://www.marketintelligencedata.com/reports/4002068/global-agricultural-led-market-report-productio… [+1245 chars]',
  },
  {
    id: "b58931a5-a87c-46fa-9d6b-7e555b04f289",
    category: "business",
    source: {
      id: null,
      name: "Kiryatgatim.co.il",
    },
    author: "Caleb",
    title:
      "טלמטריה לרשתות מים תחזית שוק לפי גודל ענף, נתח, הכנסות, אזורים וניתוח שחקני מפתח מובילים 2022-2029| D r Cymru Cyf,Lindsay Corporation,Xylem Inc,Scadata, Inc - קרית גתים",
    description: null,
    url: "https://kiryatgatim.co.il/%d7%97%d7%93%d7%a9%d7%95%d7%aa/%d7%98%d7%9c%d7%9e%d7%98%d7%a8%d7%99%d7%94-%d7%9c%d7%a8%d7%a9%d7%aa%d7%95%d7%aa-%d7%9e%d7%99%d7%9d-%d7%aa%d7%97%d7%96%d7%99%d7%aa-%d7%a9%d7%95%d7%a7-%d7%9c%d7%a4%d7%99-%d7%92%d7%95%d7%93%d7%9c-%d7%a2/34266/",
    urlToImage: null,
    publishedAt: "2022-07-10T08:36:47Z",
    content:
      '" " , , , , , . " 2016 2021 2022 2029 . , . , . 19 .\r\n CAGR 11.5% -2022 2029.\r\n( : 25% )\r\n :\r\nhttps://www.marketintelligencedata.com/reports/4001982/global-telemetry-for-water-networks-market-report-… [+1264 chars]',
  },
  {
    id: "1c545d55-b26b-4c5a-a3f8-d026a1aaf268",
    category: "business",
    source: {
      id: null,
      name: "Kiryatgatim.co.il",
    },
    author: "Caleb",
    title:
      "Plasma Expander Market מגמות מפתח עתידניות ונוף תחרותי עד 2029| Astrazeneca, Novartis, Pfizer Inc., Sanofi-aventis, CSL Behring - קרית גתים",
    description: null,
    url: "https://kiryatgatim.co.il/%d7%97%d7%93%d7%a9%d7%95%d7%aa/plasma-expander-market-%d7%9e%d7%92%d7%9e%d7%95%d7%aa-%d7%9e%d7%a4%d7%aa%d7%97-%d7%a2%d7%aa%d7%99%d7%93%d7%a0%d7%99%d7%95%d7%aa-%d7%95%d7%a0%d7%95%d7%a3-%d7%aa%d7%97%d7%a8%d7%95%d7%aa%d7%99-%d7%a2/34290/",
    urlToImage: null,
    publishedAt: "2022-07-10T08:36:47Z",
    content:
      '" " , , , , , . 2016 2021 2022 2029 . , . , . 19 .\r\n CAGR 6.5% -2022 2029.\r\n( : 25% )\r\n :\r\nhttps://www.marketintelligencedata.com/reports/4002099/global-plasma-expander-market-report-production-and-c… [+1161 chars]',
  },
  {
    id: "8515d60e-8499-4393-be02-9cdadb2799ec",
    category: "business",
    source: {
      id: null,
      name: "Kiryatgatim.co.il",
    },
    author: "Caleb",
    title:
      "שוק תרופות נגד כיבים נגד כיבים – ניתוח תעשייה גלובלי, גודל, נתח, צמיחה, מגמות ותחזית, 2022-2029| Ask-Pharm,AstraZeneca,Takeda,Yangtze River Pharm (YRPG),Xi'an Janssen - קרית גתים",
    description: null,
    url: "https://kiryatgatim.co.il/%d7%97%d7%93%d7%a9%d7%95%d7%aa/%d7%a9%d7%95%d7%a7-%d7%aa%d7%a8%d7%95%d7%a4%d7%95%d7%aa-%d7%a0%d7%92%d7%93-%d7%9b%d7%99%d7%91%d7%99%d7%9d-%d7%a0%d7%92%d7%93-%d7%9b%d7%99%d7%91%d7%99%d7%9d-%d7%a0%d7%99%d7%aa%d7%95%d7%97-%d7%aa/34262/",
    urlToImage: null,
    publishedAt: "2022-07-10T08:36:47Z",
    content:
      '" " , , , , , . 2016 2021 2022 2029 . , . , . 19 .\r\n CAGR 13.5% -2022 2029.\r\n( : 25% )\r\n :\r\nhttps://www.marketintelligencedata.com/reports/4001967/global-antiptic-ulcer-drugs-market-report-production… [+1155 chars]',
  },
  {
    id: "3f457fcb-2044-4db9-b4dd-0490e87c3c41",
    category: "business",
    source: {
      id: null,
      name: "Kiryatgatim.co.il",
    },
    author: "Caleb",
    title:
      "שוק החיסונים DTaP ו-Tdap – צמיחה, מגמות, השפעות COVID-19 ותחזיות (2022 עד 2029) | Emergent BioSolutions Inc,Pfizer Inc,Merck Sharp and Dohme Corp,Sanofi Pasteur,GlaxoSmithKline - קרית גתים",
    description: null,
    url: "https://kiryatgatim.co.il/%d7%97%d7%93%d7%a9%d7%95%d7%aa/%d7%a9%d7%95%d7%a7-%d7%94%d7%97%d7%99%d7%a1%d7%95%d7%a0%d7%99%d7%9d-dtap-%d7%95-tdap-%d7%a6%d7%9e%d7%99%d7%97%d7%94-%d7%9e%d7%92%d7%9e%d7%95%d7%aa-%d7%94%d7%a9%d7%a4%d7%a2%d7%95%d7%aa-covid-19/34284/",
    urlToImage: null,
    publishedAt: "2022-07-10T08:36:47Z",
    content:
      "DTaP -Tdap , , , , , . DTaP -Tdap 2016 2021 2022 2029 . , . , . Covid 19 DTaP -Tdap .\r\n DTaP -Tdap CAGR 6.5% -2022 2029.\r\n( : 25% )\r\n :\r\nhttps://www.marketintelligencedata.com/reports/4002060/global-… [+1255 chars]",
  },
  {
    id: "2383cdb0-9912-46c9-8166-a1cc6de7163b",
    category: "business",
    source: {
      id: null,
      name: "Kiryatgatim.co.il",
    },
    author: "Caleb",
    title:
      "גודל שוק פתרונות Wi-Fi מנוהלים , הזדמנויות ברחבי העולם, כוחות מניעים, פוטנציאל עתידי 2029| ארובה, Mojo Networks, Ruckus Wireless, Fujitsu, Vodafone - קרית גתים",
    description: null,
    url: "https://kiryatgatim.co.il/%d7%97%d7%93%d7%a9%d7%95%d7%aa/%d7%92%d7%95%d7%93%d7%9c-%d7%a9%d7%95%d7%a7-%d7%a4%d7%aa%d7%a8%d7%95%d7%a0%d7%95%d7%aa-wi-fi-%d7%9e%d7%a0%d7%95%d7%94%d7%9c%d7%99%d7%9d-%d7%94%d7%96%d7%93%d7%9e%d7%a0%d7%95%d7%99%d7%95%d7%aa-%d7%91/34279/",
    urlToImage: null,
    publishedAt: "2022-07-10T08:36:47Z",
    content:
      '" -Wi-Fi " , , , , , . Wi-Fi 2016 2021 2022 2029 . , . , . 19 -Wi-Fi .\r\n -Wi-Fi CAGR 5.7% -2022 2029.\r\n( : 25% )\r\n :\r\nhttps://www.marketintelligencedata.com/reports/4002034/global-managed-wi-fi-solut… [+1172 chars]',
  },
  {
    id: "5df9f988-ce2d-4f29-be85-60bd5cd0aa44",
    category: "business",
    source: {
      id: null,
      name: "Kiryatgatim.co.il",
    },
    author: "Caleb",
    title:
      "Aromatics Solvent גודל שוק, שיתוף, מגמות, שחקנים מובילים ותובנות עד 2029| Royal Dutch Shell Plc.,Reliance Industries Limited, China Petroleum & Chemical Corporation,SK Global Chemical Co., Ltd. - קרית גתים",
    description: null,
    url: "https://kiryatgatim.co.il/%d7%97%d7%93%d7%a9%d7%95%d7%aa/%d7%9e%d7%9e%d7%a1-%d7%90%d7%a8%d7%95%d7%9e%d7%98%d7%99-%d7%92%d7%95%d7%93%d7%9c-%d7%a9%d7%95%d7%a7-%d7%a9%d7%99%d7%aa%d7%95%d7%a3-%d7%9e%d7%92%d7%9e%d7%95%d7%aa-%d7%a9%d7%97%d7%a7%d7%a0%d7%99/34275/",
    urlToImage: null,
    publishedAt: "2022-07-10T08:36:47Z",
    content:
      '" " , , , , , . Aromatics Solvent 2016 2021 2022 2029 . , . , . 19 .\r\n CAGR 2.67% -2022 2029.\r\n( : 25% )\r\n :\r\nhttps://www.marketintelligencedata.com/reports/4001996/global-aromatics-solvent-market-re… [+1275 chars]',
  },
  {
    id: "545bdd57-4449-4b9a-b5dc-fd7a31202a57",
    category: "business",
    source: {
      id: null,
      name: "Kiryatgatim.co.il",
    },
    author: "Caleb",
    title:
      "-bike Drive Market שחקנים מובילים מובילים עם אסטרטגיות ותחזית 2029| COMP DRIVES sro, Brose Fahrzeugteile SE & Co., Yamaha Motor, ZF Friedrichshafen AG, Bosch - קרית גתים",
    description: null,
    url: "https://kiryatgatim.co.il/%d7%97%d7%93%d7%a9%d7%95%d7%aa/bike-drive-market-%d7%a9%d7%97%d7%a7%d7%a0%d7%99%d7%9d-%d7%9e%d7%95%d7%91%d7%99%d7%9c%d7%99%d7%9d-%d7%9e%d7%95%d7%91%d7%99%d7%9c%d7%99%d7%9d-%d7%a2%d7%9d-%d7%90%d7%a1%d7%98%d7%a8%d7%98%d7%92%d7%99/34265/",
    urlToImage: null,
    publishedAt: "2022-07-10T08:36:47Z",
    content:
      ", , , , , . 2016 2021 2022 2029 . , . , . 19 .\r\n CAGR 13.2% -2022 2029.\r\n( : 25% )\r\n :\r\nhttps://www.marketintelligencedata.com/reports/4001974/global-e-bike-drive-market-report-production-and-consump… [+1172 chars]",
  },
  {
    id: "5842d1ce-6da1-4fd5-bd94-e25128a2368d",
    category: "business",
    source: {
      id: null,
      name: "Kiryatgatim.co.il",
    },
    author: "Caleb",
    title:
      "שוק נתב CNC מגמות מפתח עתידניות ונוף תחרותי עד 2029| Lincoln Electric, Axiom Precision, Haas, Bolton Tools, Avid CNC - קרית גתים",
    description: null,
    url: "https://kiryatgatim.co.il/%d7%97%d7%93%d7%a9%d7%95%d7%aa/%d7%a9%d7%95%d7%a7-%d7%a0%d7%aa%d7%91-cnc-%d7%9e%d7%92%d7%9e%d7%95%d7%aa-%d7%9e%d7%a4%d7%aa%d7%97-%d7%a2%d7%aa%d7%99%d7%93%d7%a0%d7%99%d7%95%d7%aa-%d7%95%d7%a0%d7%95%d7%a3-%d7%aa%d7%97%d7%a8%d7%95/34263/",
    urlToImage: null,
    publishedAt: "2022-07-10T08:36:47Z",
    content:
      '" CNC " , , , , , . CNC 2016 2021 2022 2029 . , . , . 19 -CNC .\r\n -CNC CAGR 6.15% -2022 2029.\r\n( : 25% )\r\n :\r\nhttps://www.marketintelligencedata.com/reports/4001969/global-cnc-router-market-report-pr… [+1136 chars]',
  },
  {
    id: "cc71bd5e-edfb-4f05-ace3-6d18882ad14f",
    category: "business",
    source: {
      id: null,
      name: "Kiryatgatim.co.il",
    },
    author: "Caleb",
    title:
      "שוק בקרת הדבקה במגמות מפתח עתידניות ונוף תחרותי עד 2029| Steris Corporation,Belimed AG (A Metall Zug Group Company),Sotera Health,Halyard Health, Inc. (לשעבר חלק מ-Kimberly-Clark) - קרית גתים",
    description: null,
    url: "https://kiryatgatim.co.il/%d7%97%d7%93%d7%a9%d7%95%d7%aa/%d7%a9%d7%95%d7%a7-%d7%91%d7%a7%d7%a8%d7%aa-%d7%94%d7%93%d7%91%d7%a7%d7%94-%d7%91%d7%9e%d7%92%d7%9e%d7%95%d7%aa-%d7%9e%d7%a4%d7%aa%d7%97-%d7%a2%d7%aa%d7%99%d7%93%d7%a0%d7%99%d7%95%d7%aa-%d7%95%d7%a0/34278/",
    urlToImage: null,
    publishedAt: "2022-07-10T08:36:47Z",
    content:
      '" " , , , , , . 2016 2021 2022 2029 . , . , . 19 .\r\n CAGR 13.4% -2022 2029.\r\n( : 25% )\r\n :\r\nhttps://www.marketintelligencedata.com/reports/4002026/global-infection-control-market-report-production-an… [+1296 chars]',
  },
  {
    id: "0ebef4db-0c2d-4299-beae-11a4da241cb1",
    category: "business",
    source: {
      id: null,
      name: "Kiryatgatim.co.il",
    },
    author: "Caleb",
    title:
      "שירותי משלם שירותי בריאות שוק השחקנים המובילים עם אסטרטגיות ותחזית 2029| Hewlett-Packard, Xerox Corporation, ExlService Holdings, Inc., Cognizant Technology Solutions - קרית גתים",
    description: null,
    url: "https://kiryatgatim.co.il/%d7%97%d7%93%d7%a9%d7%95%d7%aa/%d7%a9%d7%99%d7%a8%d7%95%d7%aa%d7%99-%d7%9e%d7%a9%d7%9c%d7%9d-%d7%a9%d7%99%d7%a8%d7%95%d7%aa%d7%99-%d7%91%d7%a8%d7%99%d7%90%d7%95%d7%aa-%d7%a9%d7%95%d7%a7-%d7%94%d7%a9%d7%97%d7%a7%d7%a0%d7%99%d7%9d/34292/",
    urlToImage: null,
    publishedAt: "2022-07-10T08:36:47Z",
    content:
      '" " , , , , , . 2016 2021 2022 2029 . , . , . 19 .\r\n CAGR 12.3% -2022 2029.\r\n( : 25% )\r\n :\r\nhttps://www.marketintelligencedata.com/reports/4002113/global-healthcare-payer-services-market-report-produ… [+1164 chars]',
  },
  {
    id: "54b44b02-9a29-4ac9-8dad-628ce7ad9e28",
    category: "business",
    source: {
      id: null,
      name: "Kiryatgatim.co.il",
    },
    author: "Caleb",
    title:
      "חיישן מגע קיבולי בשוק השחקנים המובילים עם אסטרטגיות ותחזית 2029| טכנולוגיית מיקרו-שבבים, מכשירי טקסס, IDT, מעבדות סיליקון, Ohmite - קרית גתים",
    description: null,
    url: "https://kiryatgatim.co.il/%d7%97%d7%93%d7%a9%d7%95%d7%aa/%d7%97%d7%99%d7%99%d7%a9%d7%9f-%d7%9e%d7%92%d7%a2-%d7%a7%d7%99%d7%91%d7%95%d7%9c%d7%99-%d7%91%d7%a9%d7%95%d7%a7-%d7%94%d7%a9%d7%97%d7%a7%d7%a0%d7%99%d7%9d-%d7%94%d7%9e%d7%95%d7%91%d7%99%d7%9c%d7%99/34280/",
    urlToImage: null,
    publishedAt: "2022-07-10T08:36:47Z",
    content:
      '" " , , , , , . 2016 2021 2022 2029 . , . , . 19 .\r\n CAGR 5.3% -2022 2029.\r\n( : 25% )\r\n :\r\nhttps://www.marketintelligencedata.com/reports/4002040/global-capacitive-touch-sensor-market-report-producti… [+1087 chars]',
  },
  {
    id: "218c527f-7ff2-418d-b0e3-e27038ea3731",
    category: "business",
    source: {
      id: null,
      name: "Kiryatgatim.co.il",
    },
    author: "Caleb",
    title:
      "שוק פתרונות ניהול רכב חשמלי (EV) 2022 מגמות אחרונות, ניתוח מעמיק, גודל ותחזית עד 2029| ChargePoint,Proterra,Driivz,AMPLY POWER,ViriCiti - קרית גתים",
    description: null,
    url: "https://kiryatgatim.co.il/%d7%97%d7%93%d7%a9%d7%95%d7%aa/%d7%a9%d7%95%d7%a7-%d7%a4%d7%aa%d7%a8%d7%95%d7%a0%d7%95%d7%aa-%d7%a0%d7%99%d7%94%d7%95%d7%9c-%d7%a8%d7%9b%d7%91-%d7%97%d7%a9%d7%9e%d7%9c%d7%99-ev-2022-%d7%9e%d7%92%d7%9e%d7%95%d7%aa-%d7%90%d7%97/34282/",
    urlToImage: null,
    publishedAt: "2022-07-10T08:36:47Z",
    content:
      "(EV ) , , , , , . (EV) 2016 2021 2022 2029 . , . , .\r\n (EV) CAGR 4.9% -2022 2029.\r\n( : 25% )\r\n :\r\nhttps://www.marketintelligencedata.com/reports/4002053/global-electric-vehicle-ev-management-solution… [+1203 chars]",
  },
  {
    id: "da6ac05a-e655-4030-af24-b28cc4e43fda",
    category: "business",
    source: {
      id: null,
      name: "Kiryatgatim.co.il",
    },
    author: "Caleb",
    title:
      "מערכות הברגה אוטומטיות גודל שוק, שיתוף, מגמות, שחקנים מובילים ותובנות עד 2029| אוטומציה של הרכבה, DEPRAG Inc., מוצרים תעשייתיים ויזומטיים, כלי עיצוב, Inc - קרית גתים",
    description: null,
    url: "https://kiryatgatim.co.il/%d7%97%d7%93%d7%a9%d7%95%d7%aa/%d7%9e%d7%a2%d7%a8%d7%9b%d7%95%d7%aa-%d7%94%d7%91%d7%a8%d7%92%d7%94-%d7%90%d7%95%d7%98%d7%95%d7%9e%d7%98%d7%99%d7%95%d7%aa-%d7%92%d7%95%d7%93%d7%9c-%d7%a9%d7%95%d7%a7-%d7%a9%d7%99%d7%aa%d7%95%d7%a3/34260/",
    urlToImage: null,
    publishedAt: "2022-07-10T08:28:39Z",
    content:
      '" " , , , , , . 2016 2021 2022 2029 . , . , . 19 .\r\n CAGR 6.8% -2022 2029.\r\n( : 25% )\r\n :\r\nhttps://www.marketintelligencedata.com/reports/4001956/global-automatic-screwdriving-systems-market-report-p… [+1157 chars]',
  },
  {
    id: "4d18cc99-2a50-447f-a05f-bf9946fd2a92",
    category: "business",
    source: {
      id: null,
      name: "Cnstock.com",
    },
    author: null,
    title: "洪涛转债15日停止交易-新闻 - 上海证券报",
    description:
      "������֤���й�֤ȯ��Ѷ������ ���ң����ιɷ�10�չ���ƣ�“����תծ”����2022��7��28�յ��ڣ����ݡ�����֤ȯ��������ת����˾ծȯҵ��ʵʩϸ�򡷹涨��“����תծ”����ǰ10��������ֹͣ���ס���������תծֹͣ������ʼ����Ϊ7��15�ա�����“����תծ”��������ֹͣ���׺�ת���ڽ���ǰ������2022��7��15",
    url: "https://news.cnstock.com/news,bwkx-202207-4917487.htm",
    urlToImage: null,
    publishedAt: "2022-07-10T08:25:29Z",
    content: null,
  },
  {
    id: "174debbe-f3ae-4002-a5b4-e008f57f3b5f",
    category: "business",
    source: {
      id: null,
      name: "Globes.co.il",
    },
    author: "The Wall Street Journal",
    title: "העתיד של טוויטר לוט בערפל בעקבות נסיגת מאסק מהעסקה - גלובס",
    description:
      "עובדי הרשת החברתית מביעים בלבול ותסכול לאחר שבועות של תהפוכות בזמן השיחות על רכישה אפשרית בידי המיליארדר",
    url: "https://www.globes.co.il/news/article.aspx?did=1001417516",
    urlToImage:
      "https://res.cloudinary.com/globes/image/upload/t_desktop_article_content_header_800%2A392/v1652959490/direct/shutterstock_2149752817_l2hmti.jpg",
    publishedAt: "2022-07-10T08:25:18Z",
    content:
      '44 , . \r\n  : -\r\n , . , .\r\n, , . : " ".\r\n , 18% , 4.8% .\r\n . , . 90% .\r\n , \' , 2007 2010.\r\n" ", .\r\n" , \' " . , . . .\r\n, .\r\n , 100 , .\r\n , Elliott Management Corp. 7.5 2023, 315 ( ) .\r\n 36.81 , , 45.10… [+161 chars]',
  },
  {
    id: "dc2ab826-6589-4867-9310-324ca05726fe",
    category: "business",
    source: {
      id: null,
      name: "Investing.com",
    },
    author: "Investing.com",
    title:
      'בורסת ת"א פותחת את השבוע בעליות שערים, מדד הנפט מזנק 2.3% מאת Investing.com - Investing.com ישראל',
    description: 'בורסת ת"א פותחת את השבוע בעליות שערים, מדד הנפט מזנק 2.3%',
    url: "https://il.investing.com/news/stock-market-news/article-233196",
    urlToImage:
      "https://i-invdn-com.investing.com/news/TelAvivStockExchange_800x533_L_1644239116.jpg",
    publishedAt: "2022-07-10T08:24:44Z",
    content:
      '| , Investing.com |\r\n , " , .\r\n , " .\r\n, , ", 4.3%.\r\n 10:40 , " 35 0.9%, " 125 1% 1.1%.\r\n " , " 35 1.4%, " 125 1.7% 2.9%.\r\n , . \' 0.15%, -S&amp;P 500 0.08% " 0.12% 5 .\r\n , 1.5% 21,305 .\r\n 0.1%. (TASE… [+431 chars]',
  },
  {
    id: "ebe42beb-f4f9-411c-9d7e-6aceaf9662a0",
    category: "business",
    source: {
      id: null,
      name: "Cnstock.com",
    },
    author: null,
    title: "无锡银行业绩快报：上半年净利润增长超30%-新闻 - 上海证券报",
    description:
      "������֤���й�֤ȯ��Ѷ������ ���ң���������10����¶2022������ҵ���챨��������ʾ�������ϰ���ʵ��Ӫҵ������23.36��Ԫ������6.72%�����������й�˾�ɶ��ľ�����10.20��Ԫ������30.27%���������滹��ʾ������2022��6��30�գ��������ʲ�2,083.86��Ԫ������3.28%�������ܴ���1,247.19��Ԫ������5.86%���ܴ��1,6…",
    url: "https://news.cnstock.com/news,bwkx-202207-4917486.htm",
    urlToImage: null,
    publishedAt: "2022-07-10T08:23:16Z",
    content: null,
  },
  {
    id: "f26cef97-3371-4ca3-b5bc-9121a5bd2da2",
    category: "business",
    source: {
      id: null,
      name: "Sponser.co.il",
    },
    author: "חדשות ספונסר",
    title: "מגמה מעורבת נרשמה השבוע בשוק האג”ח הממשלתי המקומי - ספונסר",
    description:
      "צמודי המדד רשמו עליית תשואות לאורך העקום כולו בדגש על החלק הקצר – בינוני של העקום לעומת ירידת תשואות קלה בשקלים הלא צמודים למעט בחלק הקצר של העקום שם נרשמה עליית תשואות ברקע הריבית",
    url: "https://www.sponser.co.il/Article.aspx?ArticleId=108965",
    urlToImage: "https://www.sponser.co.il/ItemPics/F721CDF8-12.PNG",
    publishedAt: "2022-07-10T08:20:19Z",
    content:
      '" . , 50 ", , . .\r\n " 1.77%, 2012. . , , 4.50%.\r\n - IRS – . , 2 – 10 55- 65 ".',
  },
  {
    id: "9d80b747-47a1-420e-9c80-f3f758eaee7f",
    category: "business",
    source: {
      id: null,
      name: "Bizportal.co.il",
    },
    author: null,
    title:
      'איי.סי.אל וחברה מטייוואן ינסו להאיץ פיתוח חומר קתודי לסוללות בארה"ב - Bizportal',
    description:
      "מניית אי.סי.אל שזינקה ב-90% בשנה שעברה נמצאת במגמה שלילית מאז חודש מאי, על רקע ירידת מחירי הסחורות בעולם ומחקה מאז 25% מערכה",
    url: "https://www.bizportal.co.il/capitalmarket/news/article/806340",
    urlToImage:
      "https://res.cloudinary.com/bizportal/image/upload/f_auto,q_auto/v1609665178/giflib/news/raviv_zoler_140218.jpg",
    publishedAt: "2022-07-10T08:20:00Z",
    content:
      '..+1.74%..3,224+1.74%:3,169:3,186:3,250:3,186:4,920,963 :   (LFP) ", "     Aleees, , , . -ICL . , .. -30 .\r\n(Philip Brown), ..: " , " "\r\n\'\' (Edward Chang), Aleees: " LFP , , -170 2025, -500   2028.".… [+62 chars]',
  },
  {
    id: "7b8f3f02-726d-4700-820e-20824511da58",
    category: "health",
    source: {
      id: "liberation",
      name: "Libération",
    },
    author: "Violette Vauloup",
    title: "Grippe aviaire: le virus part, les problèmes restent - Libération",
    description:
      "Après l’abattage de millions de volailles en début d’année, les aviculteurs peinent à remplir les élevages et à renflouer les caisses. Alors que le virus menace de revenir à l’automne, la filière se divise sur les mesures à adopter.",
    url: "https://www.liberation.fr/environnement/agriculture/grippe-aviaire-le-virus-part-les-problemes-restent-20220710_BC274F635FEJFEQVMLX7ZD4EAE/",
    urlToImage:
      "https://www.liberation.fr/resizer/afepk6bLEjTkTi1mRuP-UbA5I-s=/1200x630/filters:format(jpg):quality(70):focal(1024x517:1034x527)/cloudfront-eu-central-1.images.arcpublishing.com/liberation/SICCATX6JFEYHBQD52MJ55LIIY.jpg",
    publishedAt: "2022-07-10T08:27:46Z",
    content:
      "Le virus a beau avoir disparu des élevages, langoisse, elle, subsiste. Entre février et mai, un épisode particulièrement sévère dinfluenza (grippe) aviaire a dévasté les cheptels de palmipèdes et de … [+1262 chars]",
  },
  {
    id: "7230bd99-6793-47db-994c-cb1f69cef3e1",
    category: "health",
    source: {
      id: null,
      name: "Fermanaghherald.com",
    },
    author: "Roisin Henderson",
    title:
      "Fermanagh man tells of 'Covid fingers' struggle - The Fermanagh Herald - Fermanagh Herald",
    description:
      "Long Covid was the first real unknown reaction to the virus, but an array of skin conditions are now appearing.",
    url: "https://fermanaghherald.com/2022/07/fermanagh-man-tells-of-covid-fingers-struggle/",
    urlToImage:
      "https://cdn.fermanaghherald.com/wp-content/uploads/2022/07/07162956/covid-fingers-2_1248260.jpg",
    publishedAt: "2022-07-10T08:27:00Z",
    content:
      "By John CarneyTHE RECENT rise in Covid cases shows the need for people to remain vigilant, but its lesser-known side effects remain a mystery to dermatologists.Examples of Covid fingers, Covid toes, … [+2254 chars]",
  },
  {
    id: "9e829d14-fac5-4000-8860-4fc9d3c922a2",
    category: "health",
    source: {
      id: null,
      name: "Pikiran-rakyat.com",
    },
    author: "Asep Efendi",
    title:
      "9 Penyakit Dapat Disembuhkan Sirsak, Tak hanya Buah Bisa Dijus: Daun Sirsak Banyak Manfaat untuk Kesehatan - Media Pakuan - Media Pakuan",
    description:
      "Manfaat Sirsak Bagi Kesehatan, dapat Mengobati Kanker, Malaria, hingga Rematik. Berikut ini merupakan manfaat sirsak bagi kesehatan",
    url: "https://mediapakuan.pikiran-rakyat.com/beja-ti-batur/pr-634969230/9-penyakit-dapat-disembuhkan-sirsak-tak-hanya-buah-bisa-dijus-daun-sirsak-banyak-manfaat-untuk-kesehatan",
    urlToImage:
      "https://assets.pikiran-rakyat.com/crop/0x0:0x0/750x500/photo/2022/06/27/2937396332.jpg",
    publishedAt: "2022-07-10T08:16:40Z",
    content:
      "PT Kolaborasi Mediapreneur NusantaraJl. Asia Afrika No. 75 Bandung - Jawa Barat, 40111, Ph. 022-4241600Email: prmnnewsroom@pikiran-rakyat.com",
  },
  {
    id: "ce35ee84-8d6e-46d0-b35c-613a1082b74c",
    category: "health",
    source: {
      id: null,
      name: "ANI News",
    },
    author: null,
    title:
      "Researchers discover brain circuit that explains how light affects mood - ANI News",
    description:
      "Washington [US], July 10 (ANI): A better knowledge of the neurological network that connects light-sensitive cells in the retina to cortical brain regions involved in mood and cognition has implications for the development of mood-disorder treatments, accordi…",
    url: "https://www.aninews.in/news/science/researchers-discover-brain-circuit-that-explains-how-light-affects-mood20220710134107",
    urlToImage:
      "https://aniportalimages.s3.amazonaws.com/media/details/Untitled-520220710081007.jpg",
    publishedAt: "2022-07-10T08:11:00Z",
    content:
      "Washington [US], July 10 (ANI): A better knowledge of the neurological network that connects light-sensitive cells in the retina to cortical brain regions involved in mood and cognition has implicati… [+4682 chars]",
  },
  {
    id: "eec8d540-e717-43ec-815c-8344098f9b23",
    category: "health",
    source: {
      id: null,
      name: "Haibunda.com",
    },
    author: "HaiBunda",
    title: "Bunda Perlu Tahu, 7 Hal yang Bisa Rusak Sel Otak Anak - HaiBunda",
    description:
      "Ada beberapa hal yang dapat merusak sel otak Si Kecil, Bunda. Apa saja hal tersebut? Segera simak pada video ya!",
    url: "https://www.haibunda.com/parenting/20220708164408-64-278551/bunda-perlu-tahu-7-hal-yang-bisa-rusak-sel-otak-anak",
    urlToImage:
      "https://akcdn.detik.net.id/visual/2022/07/08/bunda-perlu-tahu-7-hal-yang-bisa-rusak-sel-otak-anak_169.jpeg?w=650",
    publishedAt: "2022-07-10T08:08:13Z",
    content:
      "HaiBunda   |   \r\n HaibundaMinggu, 10 Jul 2022 15:08 WIB\r\nPerkembangan otak anak mulai terbentuk sejak masa kehamilan. Jadi, Si Kecil sudah mulai belajar bahkan sebelum mereka lahir, Bunda. Setelah la… [+631 chars]",
  },
  {
    id: "7c633344-7d4c-4688-8adf-759c01cd0bdb",
    category: "health",
    source: {
      id: null,
      name: "Dtnext.in",
    },
    author: "ANI",
    title:
      "New research says eating avocado daily can help lower cholesterol - DTNEXT",
    description:
      "A team of researchers, which included Penn State researchers, also discovered that those who consumed avocados had higher-quality diets throughout the study.",
    url: "https://www.dtnext.in/wellbeing/2022/07/10/new-research-says-eating-avocado-daily-can-help-lower-cholesterol-2",
    urlToImage:
      "https://gumlet.assettype.com/dtnext%2F2022-07%2Fa111a9bb-8adb-4e7d-bd88-5f0a31ea9297%2Fbcdhd_.jpg?w=1200&auto=format%2Ccompress&ogImage=true",
    publishedAt: "2022-07-10T08:08:10Z",
    content:
      "WASHINGTON: A recent study has indicated that consuming one avocado per day for six months had no impact on waist circumference, belly fat, or liver fat in those who were overweight or obese. \r\nIt di… [+1230 chars]",
  },
  {
    id: "b486ef70-acfb-4267-a3d0-e07f0c88acec",
    category: "health",
    source: {
      id: null,
      name: "Le360.ma",
    },
    author: "Le360.ma",
    title:
      "Tribune. Pour tendre à un équilibre entre le bon et le mauvais cholestérol - Le360.ma",
    description:
      "Le poids, l&#039;âge, la consommation d&#039;alcool, le tabagisme, le manque ou l&#039;absence d&#039;activité physique régulière ainsi qu&#039;une mauvaise alimentation  peuvent favoriser l&#039;augmentation du mauvais cholestérol, appelé également cholestér…",
    url: "https://fr.le360.ma/societe/tribune-pour-tendre-a-un-equilibre-entre-le-bon-et-le-mauvais-cholesterol-263383",
    urlToImage:
      "https://i.le360.ma/fr/sites/default/files/styles/image_la_une_on_home_page/public/assets/images/2022/07/cardio.jpeg",
    publishedAt: "2022-07-10T07:59:46Z",
    content:
      "Le poids, l'âge, la consommation d'alcool, le tabagisme, le manque ou l'absence d'activité physique régulière ainsi qu'une mauvaise alimentation peuvent favoriser l'augmentation du mauvais cholestéro… [+6096 chars]",
  },
  {
    id: "abc2479b-a4ac-4142-a248-ef07d505fdc1",
    category: "health",
    source: {
      id: null,
      name: "Business Standard",
    },
    author: "Sohini Das",
    title:
      "Bharat Biotechs Zika vaccine set to go to Phase 2 clinical trials soon - Business Standard",
    description:
      "Doctors point out to lack of testing tools even as they attend to suspected Zika cases",
    url: "https://www.business-standard.com/article/companies/bharat-biotech-s-zika-vaccine-set-to-go-to-phase-2-clinical-trials-soon-122071000223_1.html",
    urlToImage:
      "https://bsmedia.business-standard.com/_media/bs/img/article/2017-06/03/full/1496504981-1795.jpg",
    publishedAt: "2022-07-10T07:56:00Z",
    content:
      "Business Standard has always strived hard to provide up-to-date information and commentary on developments that are of interest to you and have wider political and economic implications for the count… [+1029 chars]",
  },
  {
    id: "eaf0f457-6e1f-4b66-ac3a-0eeaa685a2c9",
    category: "health",
    source: {
      id: "medical-news-today",
      name: "Medical News Today",
    },
    author: "Annie Lennon",
    title:
      "Are supplements really the 'superheroes' of self-care? - Medical News Today",
    description:
      "Are supplements, particularly multivitamins, worth the health hype, or do they not bring that many benefits, after all? MNT asks five nutrition experts.",
    url: "https://www.medicalnewstoday.com/articles/are-supplements-really-the-superheroes-of-self-care",
    urlToImage:
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/07/supplements_superheroes_Stocksy_txp0a0c08172dS300_Medium_3947544_Thumb.jpg",
    publishedAt: "2022-07-10T07:48:13Z",
    content:
      "Dietary supplements and multivitamins are a thriving multi-billion dollar industry, but studies show they have little, if any effect on the health of those who are not nutrient-deficient or pregnant.… [+11025 chars]",
  },
  {
    id: "c8b816ac-6336-4c05-9413-ee3fd44a03ff",
    category: "health",
    source: {
      id: null,
      name: "Grid.id",
    },
    author: null,
    title:
      "Kandungan Gizi Sepotong Tempe dan 5 Manfaat Mengonsumsinya Setiap Hari - Gridhealth",
    description:
      "Dalam sepotong tempe mengandung nutrisi yang penting untuk kesehatan tubuh. Berikut ini manfaat yang didapat dari mengonsumsinya.",
    url: "https://health.grid.id/read/353361918/kandungan-gizi-sepotong-tempe-dan-5-manfaat-mengonsumsinya-setiap-hari",
    urlToImage:
      "https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2022/07/05/kandungan-gizi-tempe-dan-manfaat-20220705065434.jpg",
    publishedAt: "2022-07-10T07:45:00Z",
    content:
      "GridHEALTH.id - Tempe produk olahan kacang kedelai yang jumlah konsumsinya tinggi di Indonesia.\r\nMenurut Badan Standarisasi Nasional, konsumsi tempe di Indonesia rata-rata per tahun mencapai sekitar … [+899 chars]",
  },
  {
    id: "bbe28fda-b2ac-44bf-a55b-81e51379c9c8",
    category: "health",
    source: {
      id: null,
      name: "Dayoo.com",
    },
    author: "佘湘娥",
    title:
      "增设海珠区翠城花园、翡翠轩花园小区为中风险区_广州日报大洋网 - 广州日报大洋网",
    description:
      "即日起，在9日划定的风险区域基础上，增设海珠区翠城花园、翡翠轩花园小区为中风险区，实行“足不出区、错峰取物”管控措施。",
    url: "https://news.dayoo.com/guangzhou/202207/10/139995_54304464.htm",
    urlToImage: null,
    publishedAt: "2022-07-10T07:43:00Z",
    content: null,
  },
  {
    id: "b82f3f57-5c83-43a3-883e-13e801bea4fc",
    category: "health",
    source: {
      id: null,
      name: "Elnuevodia.com.co",
    },
    author: null,
    title: "En medicina legal, en Ibagué - El Nuevo Dia (Colombia)",
    description: null,
    url: "http://www.elnuevodia.com.co/nuevodia/opinion/caricatura/491050-en-medicina-legal-en-ibague",
    urlToImage:
      "http://www.elnuevodia.com.co/nuevodia/sites/default/files/styles/nota_800_x_400_/public/imagenes/2022/07/6a%201.jpg?itok=Aq0kNUx1",
    publishedAt: "2022-07-10T07:31:52Z",
    content: null,
  },
  {
    id: "09374bf4-3dc5-4bfc-9fe3-13ef4d5a08d6",
    category: "health",
    source: {
      id: "the-times-of-india",
      name: "The Times of India",
    },
    author: "ET HealthWorld",
    title:
      "Hospital readmissions for asthma are increasing among children - ETHealthWorld",
    description:
      '"Almost three quarters were discharged without a preventer medication and over 80 per cent did not have a follow-up clinic booked at the hospital, often reserved for children with difficult to control asthma. Most families therefore need to navigate their chi…',
    url: "https://health.economictimes.indiatimes.com/news/diagnostics/hospital-readmissions-for-asthma-are-increasing-among-children/92780096",
    urlToImage:
      "https://etimg.etb2bimg.com/thumb/msid-92780096,imgsize-60014,width-1200,height-628,overlay-ethealthworld/hospital-readmissions-for-asthma-are-increasing-among-children.jpg",
    publishedAt: "2022-07-10T07:30:00Z",
    content:
      "Washington: According to a new study at the Murdoch Children's Research Institute, hospital readmissions for asthma are increasing among children highlighting the gaps in health care for the most com… [+3702 chars]",
  },
  {
    id: "3e4395a8-8150-43bc-b535-a94e6cb5e33f",
    category: "health",
    source: {
      id: null,
      name: "Hindustan Times",
    },
    author: "Parmita Uniyal",
    title:
      "High uric acid: Ayurveda expert on easy lifestyle changes to treat the condition - Hindustan Times",
    description:
      "Ayurveda expert Dr Dixa Bhavsar says making healthy lifestyle changes can reverse hyperuricemia and reduce the high uric acid levels naturally. | Health",
    url: "https://www.hindustantimes.com/lifestyle/health/high-uric-acid-ayurveda-expert-on-easy-lifestyle-changes-to-treat-the-condition-naturally-101657437486058.html",
    urlToImage:
      "https://images.hindustantimes.com/img/2022/07/10/1600x900/uric_acid_1657437626356_1657437635724.jpg",
    publishedAt: "2022-07-10T07:26:42Z",
    content:
      "High uric acid level or hyperuricemia has been affecting people around the world more than ever before and can lead to a number of chronic health conditions. Sedentary lifestyle, poor eating habits, … [+2309 chars]",
  },
  {
    id: "c6c6e682-9a43-4776-818b-a4b4a2ff287d",
    category: "health",
    source: {
      id: null,
      name: "Egeszsegkalauz.hu",
    },
    author: null,
    title:
      "Fáradékony, ingerlékeny? Ezeket a laborértékeket érdemes ellenőriztetnie - Egészségkalauz.hu",
    description:
      "A hangulatingadozás és a fáradékonyság hátterében pajzsmirigyprobléma is állhat.",
    url: "https://www.egeszsegkalauz.hu/orvosnal/laborvizsgalatok/faradekony-ingerlekeny-ezeket-a-laborertekeket-erdemes-ellenoriztetnie/zg6rkxk",
    urlToImage:
      "https://ocdn.eu/images/pulscms/Y2Y7MDA_/7b1e71c8c679cc84c5587cb3fa8ca52c.jpeg",
    publishedAt: "2022-07-10T07:23:16Z",
    content:
      "A hangulatingadozás és a fáradékonyság hátterében pajzsmirigyprobléma is állhat.\r\nA pajzsmirigybetegségek diagnosztizálásának els lépcsfoka a vérvizsgálat, amikor minden esetben ellenrzik a TSH szint… [+2674 chars]",
  },
  {
    id: "cb5df573-36db-447a-beb6-dad3b5fd2dde",
    category: "health",
    source: {
      id: "news-com-au",
      name: "News.com.au",
    },
    author: "Dr Zac Turner",
    title:
      "Health: Dr Zac Turner on why mouth breathing is bad for your health | news.com.au — Australia's leading news site - news.com.au",
    description:
      "<p>Welcome to Ask Doctor Zac, a weekly column from news.com.au. This week, Dr Zac Turner talks about why breathing through your nose is better than breathing through your mouth. <b></b></p>",
    url: "https://www.news.com.au/lifestyle/health/health-problems/dr-zac-turner-on-why-breathing-through-your-mouth-can-do-more-harm-than-good-to-your-overall-health/news-story/ce105f6efafbb6da8fb19a753fc81b54",
    urlToImage:
      "https://content.api.news/v3/images/bin/a86e55a9e37011e34be58b4794f3233a",
    publishedAt: "2022-07-10T07:19:27Z",
    content:
      "Doctor Zac explains why breathing through your nose is more beneficial for your health compared to breathing through your mouth, and its not just to stop bad breath.Welcome to Ask Doctor Zac, a weekl… [+5026 chars]",
  },
  {
    id: "2fec39bd-d01c-43fd-ab9b-de8e85fa9331",
    category: "health",
    source: {
      id: null,
      name: "Santelog.com",
    },
    author: null,
    title:
      "ANTIBIORÉSISTANCE : Une protéine aberrante tueuse de cellule bactérienne - santé log",
    description:
      "La découverte d'une protéine aberrante qui tue « de l’intérieur » les cellules bactériennes pourrait aider à mieux comprendre le mécanisme de certains antibiotiques et ouvrir aussi la voie à de nouveaux antibactériens. Ces scientifiques et biologistes du labo…",
    url: "https://www.santelog.com/actualites/antibioresistance-une-proteine-aberrante-tueuse-de-cellule-bacterienne",
    urlToImage:
      "https://www.santelog.com/sites/santelog.com/www.santelog.com/files/images/accroche/bacteries_adobestock_78527054_4.jpeg",
    publishedAt: "2022-07-10T07:03:09Z",
    content:
      "Une nouvelle stratégie de contrôle de la croissance bactérienne\r\nUne découverte fortuite : au départ, léquipe de Brookhaven, spécialisée dans la recherche liée à l'énergie, était très loin de la sant… [+3889 chars]",
  },
  {
    id: "7e03546a-e10c-456f-b0f2-e5cfbdae9102",
    category: "health",
    source: {
      id: null,
      name: "Francetvinfo.fr",
    },
    author: "France 3 Nouvelle-Aquitaine",
    title:
      "INNOVATION. Mostiglass, une moustiquaire révolutionnaire qui rafraichit l'air - France 3 Régions",
    description:
      "L' invention de ce couple de scientifiques bordelais  n'a rien à voir avec les moustiquaires classiques. Il s'agit de plaques transparentes et perforées qui refroidissent naturellement l'air très chaud. Grâce à un effet venturi....",
    url: "https://france3-regions.francetvinfo.fr/nouvelle-aquitaine/gironde/bordeaux/innovation-mostiglass-une-moustiquaire-revolutionnaire-qui-rafraichit-l-air-2575900.html",
    urlToImage:
      "https://france3-regions.francetvinfo.fr/image/VSfXraI_1s9jh-JTVdBDa4VtFiE/930x620/regions/2022/07/04/62c30eb95fca0_sujet-page-innovation-vie-quotidienne-moustiquaire-00-00-11-00.jpg",
    publishedAt: "2022-07-10T07:00:01Z",
    content:
      "L' invention de ce couple de scientifiques bordelais n'a rien à voir avec les moustiquaires classiques. Il s'agit de plaques transparentes et perforées qui refroidissent naturellement l'air très chau… [+2982 chars]",
  },
  {
    id: "c150dcaa-f722-4c9d-a4d4-1c2dd0ea0261",
    category: "health",
    source: {
      id: null,
      name: "Express",
    },
    author: "Sarah Vesty, Rachel Hains",
    title:
      "Mum's horror after mistaking brain tumour symptoms for hay fever - Express",
    description:
      "A MUM has been given just 12 months to live after being diagnosed with a glioblastoma multiforme in 2014 - but has beaten the odds to survive eight more years.",
    url: "https://www.express.co.uk/life-style/health/1635842/mum-brain-tumour-symptoms-hay-fever",
    urlToImage:
      "https://cdn.images.express.co.uk/img/dynamic/11/1200x712/1635842_1.jpg",
    publishedAt: "2022-07-10T07:00:00Z",
    content: null,
  },
  {
    id: "b4354bc8-51c9-433f-b42b-b44c70fbd62a",
    category: "health",
    source: {
      id: null,
      name: "People.cn",
    },
    author: "F_200798",
    title:
      "US monkeypox cases hit nearly 800 as experts criticize weakness in public health system - People's Daily",
    description:
      "The United States had reported 767 confirmed monkeypox cases in 39 states as of Friday, and expert",
    url: "http://en.people.cn/n3/2022/0710/c90000-10121127.html",
    urlToImage: null,
    publishedAt: "2022-07-10T06:59:00Z",
    content:
      "The United States had reported 767 confirmed monkeypox cases in 39 states as of Friday, and experts criticized the weakness in the country's public health system to address the snowballing outbreak.\r… [+2848 chars]",
  },
  {
    id: "f1634376-0d75-45be-91cc-ff8dc9ee4e50",
    category: "entertainment",
    source: {
      id: null,
      name: "EL PAÍS",
    },
    author: "Beatriz G. Aranda",
    title:
      "J Balvin y su buena “vibra” llegan para quedarse al Bilbao BBK Live - EL PAÍS",
    description:
      "El festival se despidió anoche con la esperada actuación de la superestrella del reguetón. Pet Shop Boys a la altura de su pasado y la rebelde M.I.A. cerraron esta decimoquinta edición con un abarrotado Kobetamendi",
    url: "https://elpais.com/cultura/2022-07-10/j-balvin-y-su-buena-vibra-llegan-para-quedarse-al-bilbao-bbk-live.html",
    urlToImage:
      "https://imagenes.elpais.com/resizer/cvcy_fUMAcbsWaE8Ow60cye_8C8=/1200x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/FXEQQ3ONOX3GXWHUU3KHW5MHMA.jpg",
    publishedAt: "2022-07-10T08:24:00Z",
    content: null,
  },
  {
    id: "58c293d6-2574-4c75-8734-1e10acb5d899",
    category: "entertainment",
    source: {
      id: null,
      name: "Puls24.at",
    },
    author: "PULS 24",
    title:
      "70.000 Fans bei Maneskin-Konzert auf Circus-Maximus-Gelände in Rom - puls24",
    description:
      "Ihr Triumph beim Eurovision Song Contest 2021 hat sie über Nacht berühmt gemacht: Die junge italienische Rockband Maneskin surft gerade auf einer Welle des Erfolgs. 70.000 Zuschauer, darunter mehrere Promis, bejubelten die Rockband am Samstagabend bei ihrem A…",
    url: "https://www.puls24.at/news/entertainment/70000-fans-bei-maneskin-konzert-auf-circus-maximus-gelaende-in-rom/269876",
    urlToImage:
      "https://image.puls24.at/images/facebook/2728673/85972305867920358_BLD_Online.jpg",
    publishedAt: "2022-07-10T08:19:39Z",
    content:
      "Ihr Triumph beim Eurovision Song Contest 2021 hat sie über Nacht berühmt gemacht: Die junge italienische Rockband Maneskin surft gerade auf einer Welle des Erfolgs. 70.000 Zuschauer, darunter mehrere… [+1679 chars]",
  },
  {
    id: "8e46f394-42bf-470c-b927-b488ab36ef23",
    category: "entertainment",
    source: {
      id: null,
      name: "Diepresse.com",
    },
    author: "Thomas Kramar",
    title: "Reichenau: Keine Helden im teuflischen Spiel - Die Presse",
    description:
      "Hermann Beil inszenierte Zuckmayers „Des Teufels General“ bei den Festspielen Reichenau präzise und packend. Im derben Kontrast dazu: eine Möchtegern-Zeitgeist-Version von „Ein ungleiches Paar“.",
    url: "https://www.diepresse.com/6163621/reichenau-keine-helden-im-teuflischen-spiel",
    urlToImage:
      "https://media.diepresse.com/social_diepresse_magazin_paid/images/uploads_1200/c/a/5/6163621/TeufelsGeneral_cLaloJodlbauer_Fay_Jrgens-Seydel_Hagg_1657439745484833_v0_l.jpg",
    publishedAt: "2022-07-10T08:18:00Z",
    content:
      "Hermann Beil inszenierte Zuckmayers Des Teufels General bei den Festspielen Reichenau präzise und packend. Im derben Kontrast dazu: eine Möchtegern-Zeitgeist-Version von Ein ungleiches Paar.\r\nEine hü… [+747 chars]",
  },
  {
    id: "2ffbd007-31b8-4f21-bdca-1d59ba3f9a4e",
    category: "entertainment",
    source: {
      id: null,
      name: "Hobbyconsolas.com",
    },
    author: "María Bescós",
    title:
      "Martin Freeman asegura que participará en la serie Secret Invasion - Hobby Consolas",
    description:
      "Secret Invasion llegará a Disney Plus con un elenco lleno de caras conocidas: Samuel L. Jackson, Ben Mendelsohn, Emilia Clarke y Olivia Colman son algunas de ellas.",
    url: "https://www.hobbyconsolas.com/noticias/martin-freeman-asegura-participara-serie-secret-invasion-1091189",
    urlToImage:
      "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2022/07/martin-freeman-black-panther-2754965.jpg?itok=YTk6YENf",
    publishedAt: "2022-07-10T08:17:14Z",
    content:
      "Secret Invasion es una de las próximas series de Marvel para Disney Plus, que tendrá de nuevo a Samuel L. Jackson como protagonista dando vida a Nick Furia, junto con Ben Mendelsohn en el papel de Ta… [+1566 chars]",
  },
  {
    id: "967b653e-7a5c-4410-976a-063a575ecc17",
    category: "entertainment",
    source: {
      id: null,
      name: "Sina.com.cn",
    },
    author: "新浪娱乐",
    title:
      "91岁指挥家李华德去世曾指挥过《红色娘子军》|中央音乐学院|李华德|指挥_新浪娱乐_新浪网 - 手机新浪网",
    description:
      "新浪娱乐讯7月9日，中央音乐学院发布讣告，中国共产党党员，中央音乐学院离休干部、中央音乐学院指挥系原党支部负责人李华德教授于2022年7月8日13：01在北京右安门医院病逝，享年91岁，告别仪式将于7月14日举行。李华德曾担任1964年芭蕾",
    url: "https://ent.sina.com.cn/y/yneidi/2022-07-10/doc-imizmscv0898745.shtml",
    urlToImage: null,
    publishedAt: "2022-07-10T08:14:43Z",
    content: null,
  },
  {
    id: "40ab22f7-6e68-46cb-bdcd-54bdcbe8da04",
    category: "entertainment",
    source: {
      id: null,
      name: "20 Minutes",
    },
    author: null,
    title:
      "« Stranger Things » : Hommage au petit diable parti trop tôt - 20 Minutes",
    description:
      "Alors que la saison 4 de « Stranger Things » s’est achevée dans le sang et les larmes, la mort d’un personnage a secoué Internet. Alors on a décidé de lui rendre hommage.",
    url: "https://www.20minutes.fr/arts-stars/serie/3323107-20220709-stranger-things-hommage-eddie-munson-petit-diable-parti-trop-tot",
    urlToImage:
      "https://img.20mn.fr/RS8ukvUJTT6S7l3uZvMp8Sk/1200x768_joseph-quinn-incarne-eddie-munson-stranger-things",
    publishedAt: "2022-07-10T08:08:24Z",
    content:
      "Si vous n’avez pas encore vu la fin de la saison 4 de Stranger Things sur Netflix, passez votre chemin : cet article contient BEAUCOUP de spoilers.\r\nJe n’ai pas trop l’habitude de regretter la mort d… [+8812 chars]",
  },
  {
    id: "3e80d8f4-f687-4d92-9159-082fda4f4d1f",
    category: "entertainment",
    source: {
      id: null,
      name: "Sport.es",
    },
    author: null,
    title:
      "Lightyear en Disney+ gratis: Cuándo ver sin coste la nueva película de Pixar - Areajugones",
    description:
      "Lo nuevo de Pixar se verá mucho más pronto de lo que crees en Disney+",
    url: "https://areajugones.sport.es/cine/lightyear-en-disney-gratis-cuando-ver-sin-coste-la-nueva-pelicula-de-pixar/",
    urlToImage:
      "https://areajugones.sport.es/wp-content/uploads/2022/07/lightyear-disney.jpeg",
    publishedAt: "2022-07-10T08:00:00Z",
    content:
      "No creo que Disney esté contenta con el rendimiento de Lightyear en Disney+, la verdad. Va a recaudar menos de 250 millones de dólares, y lo peor no es ya que haya costado casi eso: se trata del prim… [+1657 chars]",
  },
  {
    id: "8e67864f-e7ba-4389-bd97-e7f45a54945d",
    category: "entertainment",
    source: {
      id: null,
      name: "Fm4.orf.at",
    },
    author: null,
    title: "Scharf essen mit Marie Kreutzer & Marco Pogo - FM4",
    description:
      "Wir grillen diese Woche mit der Filmregisseurin und Drehbuchautorin Marie Kreutzer und dem Musiker/Politiker/Kabarettisten Marco Pogo. Als Gewinner eines Chili-Wettessens konnte er über die Schärfe unseres Chili-Öls nur schmunzeln.",
    url: "https://fm4.orf.at/stories/3025823/",
    urlToImage:
      "https://tubestatic.orf.at/static/images/site/tube/20220727/ponyhof_pogokreutzer.5981383.jpg",
    publishedAt: "2022-07-10T07:57:56Z",
    content:
      "Wir grillen diese Woche mit der Filmregisseurin und Drehbuchautorin Marie Kreutzer und dem Musiker/Politiker/Kabarettisten Marco Pogo. Als Gewinner eines Chili-Wettessens konnte er über die Schärfe u… [+3590 chars]",
  },
  {
    id: "ae444b6c-6eb2-4c86-9b79-e0dcc84aae83",
    category: "entertainment",
    source: {
      id: null,
      name: "Fakti.bg",
    },
    author: null,
    title: "Лоши новини за Цветанка Ризова - Факти",
    description:
      "Цветанка Ризова това лято май няма да се радва на дълга ваканция като останалите си колеги. Антон Хекимян е решил да остави в ефир без почивка нейното предаване Лице в лице, писа Уикенд",
    url: "https://fakti.bg/life/694881-loshi-novini-za-cvetanka-rizova",
    urlToImage:
      "https://cdn4.focus.bg/fakti/photos/fb/25b/loshi-novini-za-cvetanka-rizova-1.jpg",
    publishedAt: "2022-07-10T07:56:00Z",
    content:
      '10 , 2022 10:56\r\n3 22618\r\n. „ “, ""\r\n , . , . .\r\n- . . , , , .\r\n . , .',
  },
  {
    id: "f0258e1a-200b-4c59-804c-72a216e026d4",
    category: "entertainment",
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "La trágica vida de Dimitri Rassam, el productor de cine y marido de Carlota Casiraghi - 20minutos.es",
    description: null,
    url: "https://news.google.com/__i/rss/rd/articles/CBMigAFodHRwczovL3d3dy4yMG1pbnV0b3MuZXMvbm90aWNpYS81MDI1Njk5LzAvbGEtdHJhZ2ljYS12aWRhLWRlLWRpbWl0cmktcmFzc2FtLWVsLXByb2R1Y3Rvci1kZS1jaW5lLXktbWFyaWRvLWRlLWNhcmxvdGEtY2FzaXJhZ2hpL9IBAA?oc=5",
    urlToImage: null,
    publishedAt: "2022-07-10T07:53:59Z",
    content: null,
  },
  {
    id: "f579cdbe-f06c-4d5a-98b2-2f65bc68c83b",
    category: "entertainment",
    source: {
      id: null,
      name: "Cnbeta.com",
    },
    author: "cnBeta",
    title: "《心灵杀手2》主创秀出剧本照片堆积如山堪称怪兽级- 游戏 - cnBeta.COM",
    description:
      "Remedy再次为急于看到《心灵杀手2》的玩家带来情报更新，称续作剧本是“怪物级的”。工作室还证实，他们正在与一些演员共同开展工作，可能已经进入到了动作捕捉环节。",
    url: "https://hot.cnbeta.com/articles/game/1290629.htm",
    urlToImage:
      "https://static.cnbetacdn.com/thumb/article/2022/0710/f5be33431ed40c8.jpg",
    publishedAt: "2022-07-10T07:51:00Z",
    content:
      "2Sam LakeClay MurphyLake2RemedyLakeRemedy\r\nMurphy2Lake2\r\n22023TVAMC",
  },
  {
    id: "8947f970-fa9b-4746-932a-17fb354614f7",
    category: "entertainment",
    source: {
      id: null,
      name: "Xhby.net",
    },
    author: null,
    title:
      "高原格桑绽放飞天梦想实现！原创音乐剧《天·梦》在荔枝大剧院成功首演_新华报业网 - 新华报业网",
    description:
      "高原格桑绽放 飞天梦想实现！原创音乐剧《天·梦》在荔枝大剧院成功首演",
    url: "http://www.xhby.net/tuijian/202207/t20220710_7611451.shtml",
    urlToImage: null,
    publishedAt: "2022-07-10T07:42:00Z",
    content: null,
  },
  {
    id: "61992824-ebee-42b6-94aa-7ce989f23bf7",
    category: "entertainment",
    source: {
      id: null,
      name: "Aljazeerh-alarabiya.com",
    },
    author: "خليج الجزيرة",
    title:
      "زوجة محمد إمام تُشعل الوسط الفني بجمالها الشديد في أول ظهور لها .. شاهد صورة !! - خليج الجزيرة",
    description:
      "صدمت زوجة النجم المصري محمد إمام الجمهور بظهورها معه لأول مرة منذ زواجهما بمجموعة صور في حفل افتتاح فيلمه الجديد عمهم في صالات السينما .",
    url: "https://aljazeerh-alarabiya.com/news144885.html",
    urlToImage:
      "https://aljazeerh-alarabiya.com/user_images/news/09-07-22-108599708.jpg",
    publishedAt: "2022-07-10T07:40:00Z",
    content: null,
  },
  {
    id: "e6586ba5-31d5-401b-b63a-301c036e6e8a",
    category: "entertainment",
    source: {
      id: null,
      name: "WEB.DE News",
    },
    author: null,
    title:
      '"Die große Schlagerstrandparty" mit Florian Silbereisen: Ein ganz Großer des Schlagers verkündet seinen Abschied - WEB.DE News',
    description:
      "Wenn der Authentizitäts-Weltmeister eine Party organisiert, kommen sie alle. Sogar der Götze Mario, der jetzt als Philippi Eric auch Musik macht und dem Carpendale Howie einen Supersong geschrieben hat, ist bei der Sause vom Silbereisen Flori aufgetaucht.",
    url: "https://web.de/magazine/unterhaltung/musik/schlager/grosse-schlagerstrandparty-florian-silbereisen-grosser-schlagers-verkuendet-abschied-37093366",
    urlToImage:
      "https://i0.web.de/image/496/37093496,pd=1,f=opengraph/florian-silbereisen.jpg",
    publishedAt: "2022-07-10T07:37:04Z",
    content:
      "Wenn der Authentizitäts-Weltmeister eine Party organisiert, kommen sie alle. Sogar der Götze Mario, der offenbar als Philippi Eric auch Musik macht und dem Carpendale Howie einen Song geschrieben hat… [+10926 chars]",
  },
  {
    id: "ad4a5fe6-ee44-4ff0-95fe-4a8f00bfd57e",
    category: "entertainment",
    source: {
      id: null,
      name: "Espinof.com",
    },
    author: "Albertini",
    title:
      "'The Girl from Plainville': Elle Fanning brilla en una miniserie que no profundiza en el interesante... - Espinof",
    description:
      "En julio de 2014 se produjo la muerte del joven Conrad Roy. Un suicidio del que pronto se sospechó que fue alentado por la novia de este a través de mensajes...",
    url: "https://www.espinof.com/criticas/the-girl-from-plainville-elle-fanning-brilla-miniserie-que-no-profundiza-interesante-caso-real-que-se-basa",
    urlToImage: "https://i.blogs.es/f32963/girl-from-plainville/840_560.jpeg",
    publishedAt: "2022-07-10T07:31:02Z",
    content:
      "En julio de 2014 se produjo la muerte del joven Conrad Roy. Un suicidio del que pronto se sospechó que fue alentado por la novia de este a través de mensajes de texto. Ocho años después revisamos ese… [+2931 chars]",
  },
  {
    id: "536b82b3-6d1e-40ca-aec9-1f7dcb00148d",
    category: "entertainment",
    source: {
      id: null,
      name: "Kurier.at",
    },
    author: "kurier.at",
    title:
      "Englische Jazz-Saxofonistin Barbara Thompson 77-jährig gestorben - KURIER",
    description: "Pionierin in der männlich dominierten Instrumentalszene.",
    url: "https://kurier.at/kultur/englische-jazz-saxofonistin-barbara-thompson-77-jaehrig-gestorben/402069388",
    urlToImage:
      "https://image.kurier.at/images/facebook/6339519/saxophon-sujet-3.jpg",
    publishedAt: "2022-07-10T07:28:28Z",
    content:
      "Barbara Thompson wurde am 27. Juli 1944 in Oxford geboren und studierte in London Klarinette, Klavier, Flöte und Komposition. Während ihrer Ausbildung entflammte in ihr dank John Coltrane und Duke El… [+1087 chars]",
  },
  {
    id: "ae37716e-1c69-4d58-9f4b-4d2522495671",
    category: "entertainment",
    source: {
      id: null,
      name: "Aljazeerh-alarabiya.com",
    },
    author: "خليج الجزيرة",
    title:
      "صدمة تزلزل الوسط الفني.. ياسمين صبري طردت الفنانة غادة عبد الرازق .. ورد مفاجئ من الأخيرة صدم الكل.!! - خليج الجزيرة",
    description:
      "شهدت الفترة الماضية أزمة كبرى بين النجمتين ياسمين صبري وغادة عبد الرازق والسبب مسلسل لم يعرض.",
    url: "https://aljazeerh-alarabiya.com/news144888.html",
    urlToImage:
      "https://aljazeerh-alarabiya.com/user_images/news/09-07-22-920588432.jpg",
    publishedAt: "2022-07-10T07:20:00Z",
    content: null,
  },
  {
    id: "a01cbe21-7012-4fb2-9857-7cdd4a5a5162",
    category: "entertainment",
    source: {
      id: null,
      name: "Tv-media.at",
    },
    author: null,
    title:
      "Globale Dickmacher - Wie die Lebensmittelindustrie die Armen verführt | PULS24 | TV-Programm | TV-MEDIA.at - TV-Media.at",
    description:
      "TV-MEDIA – Österreichs bestes TV-Programm: Alle TV-Sender im Überblick – Filme, Serien und Streaming-Tipps!",
    url: "https://www.tv-media.at/programm/PULS24/globale-dickmacher---wie-die-lebensmittelindustrie-die-armen-verführt/2022-07-10/77534939831",
    urlToImage: null,
    publishedAt: "2022-07-10T07:14:04Z",
    content: null,
  },
  {
    id: "9c1b2614-6329-42b3-aeb8-80b2cdf942ab",
    category: "entertainment",
    source: {
      id: null,
      name: "Www.in.gr",
    },
    author: null,
    title:
      "Κωνσταντίνα Σπυροπούλου: Φωτογραφίες φουντώνουν τις φήμες για εγκυμοσύνη - in.gr",
    description:
      "Η Κωνσταντίνα Σπυροπούλου είναι τρελά ερωτευμένη με τον σύντροφό της",
    url: "https://www.in.gr/2022/07/10/go-fun/pink/konstantina-spyropoulou-fotografies-fountonoun-tis-fimes-gia-egkymosyni/",
    urlToImage:
      "https://www.in.gr/wp-content/uploads/2022/07/spiro-561x350.jpg",
    publishedAt: "2022-07-10T07:10:18Z",
    content:
      "Fizz : viral\r\n   Instagram   .   , Goop, . :  : ;  … . […]\r\n10/07/2022 00:11",
  },
  {
    id: "5d2df1f2-99e0-418a-9c80-2402b1929ca7",
    category: "entertainment",
    source: {
      id: null,
      name: "Sohu.com",
    },
    author: null,
    title:
      "生肖牛：最近三天财气十足，事业兴旺，五福临门！_工作_生活_方而 - Sohu",
    description:
      "生肖牛的朋友们，因为在2020年庚子年八字命局中机会丰富，有好运，有希望改变长久以来财运一般、生活平淡的状况，那时运气好了，有了偏财的好运，发财了增加了贵旺祖业，很多事情都有好转的迹象。 生肖牛…",
    url: "http://www.sohu.com/a/565914393_121354635",
    urlToImage:
      "//p7.itc.cn/q_70/images01/20220329/d1609c0627fe4a8db4d5159d73950663.png",
    publishedAt: "2022-07-10T07:07:00Z",
    content: "2020",
  },
  {
    id: "aac89af7-612c-42f9-b876-a4c6c9e6fd6f",
    category: "science",
    source: {
      id: null,
      name: "EastMojo",
    },
    author: "The Conversation",
    title:
      "Dark matter: our review suggests it’s time to ditch it in favour of a new theory of gravity - EastMojo",
    description:
      "We can model the motions of planets in the Solar System quite accurately using Newton’s laws of physics. But in the early 1970s, scientists noticed that",
    url: "http://www.eastmojo.com/space/2022/07/10/dark-matter-our-review-suggests-its-time-to-ditch-it-in-favour-of-a-new-theory-of-gravity/",
    urlToImage:
      "https://i0.wp.com/www.eastmojo.com/wp-content/uploads/2022/07/Untitled-design-2022-07-09T165555.868.jpg?fit=1920%2C1080&ssl=1",
    publishedAt: "2022-07-10T08:10:00Z",
    content:
      "We can model the motions of planets in the Solar System quite accurately using Newtons laws of physics. But in the early 1970s, scientists noticed that this didnt work fordisc galaxies stars at their… [+7324 chars]",
  },
  {
    id: "32f6e993-eea8-44b7-821b-d8160cf718dc",
    category: "science",
    source: {
      id: null,
      name: "Memo-x.com",
    },
    author: "Katherine Little",
    title:
      "Sepotong kerak bumi berusia 4 miliar tahun telah diidentifikasi di bawah Australia - memo-x",
    description:
      "Para ilmuwan dapat menggunakan berbagai petunjuk untuk mencari tahu apa yang ada di bawah permukaan bumi tanpa harus melakukan pengeboran apa pun —",
    url: "https://memo-x.com/sepotong-kerak-bumi-berusia-4-miliar-tahun-telah-diidentifikasi-di-bawah-australia/",
    urlToImage:
      "https://www.sciencealert.com/images/2022-07/processed/BeachDig_1024.jpg",
    publishedAt: "2022-07-10T08:08:27Z",
    content:
      "Para ilmuwan dapat menggunakan berbagai petunjuk untuk mencari tahu apa yang ada di bawah permukaan bumi tanpa harus melakukan pengeboran apa pun termasuk menembakkan laser ultra-presisi yang lebih t… [+3437 chars]",
  },
  {
    id: "2fbb9e8f-1c4a-4666-bbc6-7d7938e7b0a3",
    category: "science",
    source: {
      id: null,
      name: "Futura",
    },
    author: "Rémy Decourt",
    title:
      "Aurores, comètes, galaxies… : des photos à couper le souffle sélectionnées pour le grand prix - Futura",
    description:
      "En attendant les spectaculaires « premières lumières » de l'observatoire spatial James-Webb, qui seront rendues publiques mardi 12 juillet, nous vous proposons de découvrir les images en lice pour...",
    url: "https://www.futura-sciences.com/sciences/actualites/astronomie-aurores-cometes-galaxies-photos-couper-souffle-selectionnees-grand-prix-99448/",
    urlToImage:
      "https://cdn.futura-sciences.com/buildsv6/images/wide1920/6/8/0/680b81a24a_50191302_skyscapes-crossing-madison.jpg",
    publishedAt: "2022-07-10T08:05:51Z",
    content:
      "La surface lunaire, bien qu'elle semble grise et monochrome, contient des couleurs cachées dans le sol, causées par différents minéraux. Ces couleurs sont trop faibles pour être visibles à l'œil nu, … [+987 chars]",
  },
  {
    id: "05c36d5d-629b-4db3-ad6a-0401ba9bea0b",
    category: "science",
    source: {
      id: null,
      name: "Ltn.com.tw",
    },
    author: "自由時報",
    title: "午後對流旺盛！6縣市大雨特報 山區慎防大雷雨 - 自由時報",
    description:
      "中央氣象局今（10日）下午3點25分，針對6縣市發布大雨特報，民眾外出記得攜帶雨具，避免前往溪邊。氣象局表示，由於午後對流雲系發展旺盛，易有短延時強降雨，今日新竹、苗栗、台中、南投、雲林及嘉義縣山區有局部大雨發生的機率，請注意雷擊及強陣風。",
    url: "https://news.ltn.com.tw/news/life/breakingnews/3987629",
    urlToImage:
      "https://img.ltn.com.tw/Upload/news/600/2022/07/10/phpWl0D2P.jpg",
    publishedAt: "2022-07-10T07:59:09Z",
    content: null,
  },
  {
    id: "0964b0d6-917f-4939-992b-f2915ff86882",
    category: "science",
    source: {
      id: null,
      name: "Skynewsarabia.com",
    },
    author: "سكاي نيوز عربية",
    title: "العالم على موعد مع قمر عملاق - Sky News Arabia سكاي نيوز عربية",
    description:
      "سيتحول انتباه مراقبي النجوم قبل منتصف شهر يوليو بقليل، إلى القمر، حيث يحتل حدث فلكي شهير الصدارة في السماء.",
    url: "https://www.skynewsarabia.com/technology/1538139-%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85-%D9%85%D9%88%D8%B9%D8%AF-%D9%82%D9%85%D8%B1-%D8%B9%D9%85%D9%84%D8%A7%D9%82",
    urlToImage:
      "https://www.skynewsarabia.com/images/v1/2022/07/10/1538138/1200/630/1-1538138.jpeg",
    publishedAt: "2022-07-10T07:26:13Z",
    content: null,
  },
  {
    id: "662efa6b-1930-4ee9-b11e-af6aa0ca1f49",
    category: "science",
    source: {
      id: null,
      name: "Eurasiantimes.com",
    },
    author: "Tanmay Kadam",
    title:
      "With Over 8000 Satellites In Space, Chinese Scientists Use ‘New Technique’ To Clean Up Threatening Space Junk - EurAsian Times",
    description:
      "Chinese space scientists used an enormous space sail to deorbit a recently launched Long March 2 rocket, China’s state-owned Global Times reported on July 6. This was the first such experiment ever performed on a rocket. Russia ‘Smokescreens’ $3.7B Kerch Brid…",
    url: "https://eurasiantimes.com/with-over-8000-satellites-in-space-chinese-scientists-use-new/",
    urlToImage:
      "https://eurasiantimes.com/wp-content/uploads/2022/06/Space-Junk.jpg",
    publishedAt: "2022-07-10T07:25:30Z",
    content:
      "Chinese space scientists used an enormous space sail to deorbit a recently launched Long March 2 rocket, China’s state-owned Global Times reported on July 6. This was the first such experiment ever p… [+4401 chars]",
  },
  {
    id: "e483839a-04ca-405a-b662-a2184adefddc",
    category: "science",
    source: {
      id: null,
      name: "India Education Diary",
    },
    author: "India Education Diary Bureau Admin",
    title:
      "Physicists see electron whirlpools for the first time - India Education Diary",
    description:
      "Though they are discrete particles, water molecules flow collectively as liquids, producing streams, waves, whirlpools, and other classic fluid phenomena.Not so with electricity. While an electric current is also a construct of distinct particles — i",
    url: "https://indiaeducationdiary.in/physicists-see-electron-whirlpools-for-the-first-time/",
    urlToImage:
      "https://indiaeducationdiary.in/wp-content/uploads/2022/07/MIT_Electron-Vortex-01-PRESS_0.jpg",
    publishedAt: "2022-07-10T07:24:11Z",
    content:
      "Though they are discrete particles, water molecules flow collectively as liquids, producing streams, waves, whirlpools, and other classic fluid phenomena.\r\nNot so with electricity. While an electric … [+6274 chars]",
  },
  {
    id: "c40270a0-d95e-4da6-a191-b58f5f1ea325",
    category: "science",
    source: {
      id: null,
      name: "The Indian Express",
    },
    author: "AP",
    title:
      "Huge underground search for mysterious dark matter begins - The Indian Express",
    description:
      "Scientists are searching for dark matter using a titanium tank filled with a rare liquified gas placed in a former gold mile that is over a kilometre underground.",
    url: "https://indianexpress.com/article/technology/science/huge-underground-search-for-mysterious-dark-matter-begins-8020403/",
    urlToImage:
      "https://images.indianexpress.com/2022/07/Dark-matter-tunnel-featured.jpg",
    publishedAt: "2022-07-10T07:07:32Z",
    content:
      "In a former gold mine a mile underground, inside a titanium tank filled with a rare liquified gas, scientists have begun the search for what so far has been unfindable: dark matter. Scientists are pr… [+4418 chars]",
  },
  {
    id: "d1f167a8-dece-419c-8c6c-a7c00618026c",
    category: "science",
    source: {
      id: null,
      name: "Detik.com",
    },
    author: "Tim",
    title: "Ngeri, Ada Exoplanet Lautnya Sedalam Ribuan Kilometer - detikInet",
    description:
      "Terdapat sejumlah exoplanet, planet di luar Tata Surya, yang memiliki lautan dengan kedalaman hingga mencapai ribuan kilometer.",
    url: "https://inet.detik.com/science/d-6171057/ngeri-ada-exoplanet-lautnya-sedalam-ribuan-kilometer",
    urlToImage:
      "https://awsimages.detik.net.id/api/wm/2021/04/12/neptunus_169.png?wid=54&w=650&v=1&t=jpeg",
    publishedAt: "2022-07-10T07:05:54Z",
    content:
      "Jakarta - Tim peneliti pernah mengemukakan bahwa terdapat sejumlah exoplanet, planet di luar Tata Surya, yang memiliki lautan dengan kedalaman hingga mencapai ribuan kilometer. Exoplanet tersebut ter… [+1712 chars]",
  },
  {
    id: "941e906f-3cf8-400f-90c6-b51336feb197",
    category: "science",
    source: {
      id: null,
      name: "Post Register",
    },
    author: "By TERRY THOMAS",
    title:
      "Chlorophyll and photosynthesis in plants provides oxygen for life on Earth - Post Register",
    description:
      "Earth is, by all measures, a giant solar panel. The sun provides us warmth and light of course, but its light also fires the engine that manufactures the basis of",
    url: "https://www.postregister.com/outdoors/chlorophyll-and-photosynthesis-in-plants-provides-oxygen-for-life-on-earth/article_31e12328-8853-5314-8480-6a6d17aa3206.html",
    urlToImage:
      "https://bloximages.chicago2.vip.townnews.com/postregister.com/content/tncms/assets/v3/editorial/9/93/993d15d1-6835-5640-8109-d0ddfa602a04/5f135486975b5.image.jpg?crop=346%2C346%2C0%2C88&resize=200%2C200&order=crop%2Cresize",
    publishedAt: "2022-07-10T07:00:00Z",
    content:
      "Earth is, by all measures, a giant solar panel. The sun provides us warmth and light of course, but its light also fires the engine that manufactures the basis of life on Earth for everything: food f… [+3743 chars]",
  },
  {
    id: "7e7fefcf-394d-495f-b139-aa3663b429c6",
    category: "science",
    source: {
      id: null,
      name: "NDTV News",
    },
    author: null,
    title: "Caught On Camera: Meteor Lights Up Night Sky Over Chile - NDTV",
    description:
      "A meteor which lit up the night sky in the Chilean capital Santiago has been caught on camera. The inhabitants of the city heard the sound of the meteor crossing the atmosphere as if it were a burst of thunder.",
    url: "https://www.ndtv.com/offbeat/caught-on-camera-meteor-lights-up-night-sky-over-chile-3144268",
    urlToImage:
      "https://c.ndtvimg.com/2022-07/6ng8bsq8_meteor-in-chile_625x300_10_July_22.jpg",
    publishedAt: "2022-07-10T06:59:12Z",
    content:
      "The meteor disintegrated into several parts before disappearing.\r\nA meteor has been caught on camera streaking through the night sky over Chile's capital Santiago. Scholars from Concepcion University… [+1715 chars]",
  },
  {
    id: "f9cf8df2-42c5-4dcf-a9b5-645d47a9e55d",
    category: "science",
    source: {
      id: null,
      name: "Republika.co.id",
    },
    author: "Muhammad Fakhruddin",
    title:
      "Stasiun Luar Angkasa Internasional Punya Cara Baru untuk Membuang Sampah - Republika Online",
    description:
      "Sistem pembuangan sampah baru menggunakan airlock yang disebut Bishop.",
    url: "https://www.republika.co.id/berita/reslx3327/stasiun-luar-angkasa-internasional-punya-cara-baru-untuk-membuang-sampah",
    urlToImage:
      "https://static.republika.co.id/uploads/images/inpicture_slide/pesawat-ruang-angkasa-starliner-tanpa-awak-pertama-boeing-mengunjungi_220522090250-710.jpg",
    publishedAt: "2022-07-10T06:55:51Z",
    content:
      "Sistem pembuangan sampah baru menggunakan airlock yang disebut Bishop.\r\n REPUBLIKA.CO.ID,JAKARTA -- Astronaut di Stasiun Luar Angkasa Internasional (ISS) harus  membuang sampah. Secara tradisional, s… [+2256 chars]",
  },
  {
    id: "c3946547-1b30-43af-b45b-8f1226a972df",
    category: "science",
    source: {
      id: null,
      name: "The Sydney Morning Herald",
    },
    author: "Sherryn Groch",
    title:
      "Ten years on from the God particle, we may have found a fifth force of nature - Sydney Morning Herald",
    description:
      "It took four decades to find. Homer Simpson predicted it. And, depending on who you ask, it could one day destroy the universe. What’s the Higgs Boson? And what is left to discover?",
    url: "https://www.smh.com.au/world/europe/ten-years-on-from-the-god-particle-we-may-have-found-a-fifth-force-of-nature-20220705-p5az5c.html",
    urlToImage:
      "https://static.ffx.io/images/$width_800%2C$height_450/t_crop_auto/q_86%2Cf_auto/t_smh_explainer_no_age_social_wm/eae02cb0ab1c66c7c2087ccfa3def14a04e327f6",
    publishedAt: "2022-07-10T06:44:00Z",
    content:
      "Normal text sizeLarger text sizeVery large text size\r\nBeneath the Alps, theres an elevator that leads deep underground. It used to be a joke that it led down to Hell. There is an inferno at the end, … [+18007 chars]",
  },
  {
    id: "2fb915a6-cbc0-4547-b5ee-d201e93efcb3",
    category: "science",
    source: {
      id: null,
      name: "Faz.net",
    },
    author: "Manon Priebe",
    title:
      "Wenn uns das Gehirn Streiche spielt - FAZ - Frankfurter Allgemeine Zeitung",
    description:
      "Erinnern sich viele Menschen falsch, spricht man vom „Mandela-Effekt“. Wie kommt es zu solchen Verfälschungen? Und welche unserer individuellen Erinnerungen sind noch falsch?",
    url: "https://www.faz.net/aktuell/stil/leib-seele/wenn-uns-das-gehirn-streiche-spielt-falsche-erinnerungen-18122511.html",
    urlToImage:
      "https://media0.faz.net/ppmedia/aktuell/2489083791/1.8148918/facebook_teaser/false-memory-wir-koennen-unseren-erinnerungen-nicht-immer-trauen.jpg",
    publishedAt: "2022-07-10T06:16:00Z",
    content:
      "Sich an das eine erinnern, an das andere nicht das ist ganz normal. Doch manchmal spielt uns unser Gedächtnis einen Streich. Dann meinen wir uns an etwas zu erinnern, das aber so nie passiert ist und… [+10088 chars]",
  },
  {
    id: "4a021c2b-bbd9-411f-8c00-5a11beef60fc",
    category: "science",
    source: {
      id: null,
      name: "ISRAEL21c",
    },
    author: null,
    title:
      "Kit lets ill astronauts self-diagnose while in outer space - ISRAEL21c",
    description:
      "No trained personnel or complicated equipment is needed to perform test identifying viruses and bacteria infecting space crew.",
    url: "https://www.israel21c.org/kit-lets-ill-astronauts-self-diagnose-while-in-outer-space/",
    urlToImage:
      "https://www.israel21c.org/wp-content/uploads/2022/07/Image2.jpg",
    publishedAt: "2022-07-10T06:10:18Z",
    content:
      "A unique experiment aboard the International Space Station proved that a diagnostic kit developed in Israel can precisely identify viruses and bacteria infecting crew members during space missions.\r\n… [+1531 chars]",
  },
  {
    id: "95e0b254-ad60-4d9a-82c1-ce89fd0ae53e",
    category: "science",
    source: {
      id: null,
      name: "Pcworld.hu",
    },
    author: "Neményi Márton",
    title:
      "Az eszköz, amivel tele vannak a magyar háztartások, pedig veszélyes is lehet - PC World Online",
    description:
      "Az elosztóról van szó, amelytől egy friss felmérés szerint szabályosan függnek a magyarok, háztartások százezreiben hatnál is több van.",
    url: "https://pcworld.hu/pcwlite/az-eszkoz-amivel-tele-vannak-a-magyar-haztartasok-pedig-veszelyes-is-lehet-313500.html",
    urlToImage:
      "https://i.cdn29.hu/apix_collect_c/1012/eloszto/eloszto_artwork_20220709145033_1_original_760x425_cover.jpg",
    publishedAt: "2022-07-10T06:04:08Z",
    content:
      "Az elosztóról van szó, amelytl egy friss felmérés szerint szabályosan függnek a magyarok, háztartások százezreiben hatnál is több van.Tudatosan, a teljesítményt és a paramétereket szem eltt tartva vá… [+1652 chars]",
  },
  {
    id: "21f72f88-fc86-49e1-a44f-0acfa6e7b863",
    category: "science",
    source: {
      id: null,
      name: "Tovima.gr",
    },
    author: null,
    title: "Επικονιαστές: Θα κλαίμε όταν χαθούν - ΤΟ ΒΗΜΑ",
    description:
      "Να επανεξετάσουμε τη σχέση μας με τα έντομα και ειδικότερα εκείνα που μεταφέροντας γύρη εξασφαλίζουν την καρποφορία των φυτών, μας καλούν ερευνητές του Πανεπιστημίου Αιγαίου τονίζοντας τη σημασία τους για τη συνέχιση της ζωής πάνω στη Γη",
    url: "https://www.tovima.gr/2022/07/10/science/epikoniastes-tha-klaime-otan-xathoun/",
    urlToImage:
      "https://www.tovima.gr/wp-content/uploads/2022/07/09/DSC_0050-1024x678.jpg",
    publishedAt: "2022-07-10T06:01:47Z",
    content:
      ". ! ( -Science ). ( ) ( , ) , «» . « » . « » ;\r\n ; , , . , , , «» : , .\r\n , () . () ; ;\r\n :  , \r\n« () , ’ : ( .. ) ’ ! , (= ) . . , (= ), , ».\r\n , ( ), , , «». , , .\r\n, , , , , , , , , . , , . . ; . … [+985 chars]",
  },
  {
    id: "a79b3a79-2b93-4b3b-b1c1-f33e39a42d63",
    category: "science",
    source: {
      id: null,
      name: "Newsbreak.gr",
    },
    author: null,
    title: "Κοροϊδία των καταναλωτών με την επιλογή του παρόχου! - newsbreak",
    description:
      "Ηλεκτροσόκ προκαλούν οι αλλεπάλληλες νέες αυξήσεις στις διεθνείς τιμές του φυσικού αερίου αλλά και στις χονδρικές τιμές του ηλεκτρικού ρεύματος, καθώς",
    url: "https://www.newsbreak.gr/ellada/351007/koroidia-ton-katanaloton-me-tin-epilogi-toy-parochoy/",
    urlToImage:
      "https://www.newsbreak.gr/wp-content/uploads/2022/06/revma-3-scaled-e1654760193731.jpg",
    publishedAt: "2022-07-10T05:30:50Z",
    content:
      ", .\r\n , Nord Stream , .\r\n , , 10 . , , 25 , . , 15 .\r\n , , «» 15 .\r\n, , , . , , «» .",
  },
  {
    id: "12cabcd6-12ff-4f0f-9b76-41b1733c5a22",
    category: "science",
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title: "Napi trükkös matek feladat: Mi a megoldás? - Keresztlabda",
    description: null,
    url: "https://news.google.com/__i/rss/rd/articles/CBMiUGh0dHBzOi8va2VyZXN6dGxhYmRhLmh1LzIwMjIvMDcvMTAvbmFwaS10cnVra29zLW1hdGVrLWZlbGFkYXQtbWktYS1tZWdvbGRhcy0zMDYv0gEA?oc=5",
    urlToImage: null,
    publishedAt: "2022-07-10T05:30:00Z",
    content: null,
  },
  {
    id: "421069d9-bfca-4ffd-b327-ad93245dc588",
    category: "science",
    source: {
      id: null,
      name: "SciTechDaily",
    },
    author: null,
    title:
      "Dark Matter Experiment Set To Help Solve the Biggest Mystery in the Universe - SciTechDaily",
    description:
      "Although we may still be in the dark about what dark matter is, we now have a better idea about what it isn’t. Australia’s first major contribution to dark matter detection — the ORGAN Experiment — is now online and searching for dark matter, bringing us a st…",
    url: "https://scitechdaily.com/dark-matter-experiment-set-to-help-solve-the-biggest-mystery-in-the-universe/",
    urlToImage:
      "https://scitechdaily.com/images/Abstract-Dark-Matter-Mystery-Astrophysics.jpg",
    publishedAt: "2022-07-10T05:12:04Z",
    content:
      "Australias first major contribution to dark matter detection, the ORGAN Experiment, is now online and searching for dark matter, bringing us a step closer to solving one of the biggest mysteries of t… [+2850 chars]",
  },
  {
    id: "3a06c820-f795-4379-bac5-29971b0a629d",
    category: "technology",
    source: {
      id: null,
      name: "Fakti.bg",
    },
    author: null,
    title: "Как да защитите вашия смартфон от хакване - Факти",
    description:
      "Да бъдеш жертва на телефонно хакване е кошмар. Най-лошият случай на хакване на телефона е, че злонамерено лице получава достъп до вашите онлайн акаунти, като вашите социални медии, имейл, акаунти з",
    url: "https://fakti.bg/technozone/694810-kak-da-zashtitite-vashia-smartfon-ot-hakvane",
    urlToImage:
      "https://cdn4.focus.bg/fakti/photos/fb/d65/kak-da-zashtitite-vashia-smartfon-ot-hakvane-1.jpg",
    publishedAt: "2022-07-10T08:00:00Z",
    content:
      ". - , , , , -, . , , , .\r\n Face Touch ID\r\n , , , , . , - . , . , , .. 100 , , , . , .\r\n. , -., , , . , , .\r\n ( ) \r\n - , , . , - ., , . , . - .\r\n- Android, Apple - Google. Android, .. , , .. , , , .\r\n… [+276 chars]",
  },
  {
    id: "22dd32d2-ff88-4bd9-849a-8d4b8084bbfa",
    category: "technology",
    source: {
      id: null,
      name: "RTBF",
    },
    author: "Miguel Allo",
    title:
      "Est-il possible de fonctionner complètement avec des logiciels libres au quotidien ? - RTBF",
    description:
      "Les plus à l’aise avec les outils informatiques ont certainement eu un petit sourire en voyant le titre de cet article....",
    url: "https://www.rtbf.be/article/ne-travailler-qu-avec-des-logiciels-libres-au-quotidien-on-a-teste-pourquoi-ne-les-utilise-t-on-pas-plus-11027997",
    urlToImage:
      "https://ds.static.rtbf.be/article/image/1920x1080/5/d/3/4f0cfe9c2789f27883a8a409d1d334ce-1657440405.jpg",
    publishedAt: "2022-07-10T07:14:26Z",
    content:
      "Avant de tenter de répondre, rappelons quune part importante des machines sur lesquelles repose linternet (les serveurs, etc.) tournent avec des logiciels libres en raison de leur fiabilité, notammen… [+1891 chars]",
  },
  {
    id: "2be0ba04-22eb-4f63-9136-dc774524a654",
    category: "technology",
    source: {
      id: null,
      name: "Jenny.gr",
    },
    author: "JTeam",
    title:
      "Google: Προσοχή σε αυτή την εφαρμογή που κλέβει τραπεζικά στοιχεία - Jenny.gr",
    description:
      "Η πιο επικίνδυνη κυβερνοεπίθεση είναι αυτή που γίνεται όταν δεν το περιμένουμε",
    url: "https://jenny.gr/update/now/402298/google-prosohi-se-ayti-tin-efarmogi-poy-klebei-trapezika-stoiheia",
    urlToImage:
      "https://jenny.gr/sites/default/files/public/styles/og_image/public/2022-07/android%20%281%29.jpg?itok=sG8ZN-8E",
    publishedAt: "2022-07-10T06:50:51Z",
    content:
      ", hackers Android .\r\n , , , mute , , smartphone . , .\r\n malware Octo , , dark web. hackers Google Play application.\r\n Google, , .",
  },
  {
    id: "b8c9c4b0-7787-47f3-a2f5-aa7ef015476b",
    category: "technology",
    source: {
      id: null,
      name: "Cnbeta.com",
    },
    author: "cnBeta",
    title:
      "三个印度人改变压缩算法一意孤行整个暑假却因“太简单”申不到经费- AI 人工智能 - cnBeta",
    description:
      "世界上最好用的压缩软件是什么？微信。这个段子想必很多人都听过。一张几兆的图片，经微信一发，立马降到几百kb。虽说这是个吐槽，但u1s1，图片视频压缩其实是一项非常必要的技术。比如视频通话、传输大量图片时，如果不压缩的话，要么图像完全无法传送，要么就是干等了。",
    url: "https://www.cnbeta.com/articles/tech/1290599.htm",
    urlToImage:
      "https://static.cnbetacdn.com/thumb/article/2022/0710/0cd7fef73b89d92.jpg",
    publishedAt: "2022-07-10T06:37:00Z",
    content:
      "JPEGH.26X\r\n 47 \r\n DCT\r\n Discrete Cosine Transform\r\nDCT \r\n DCT JPEG / MPEG\r\n DCT JPEG \r\nps. 100% \r\nDCT \r\n 3x3 \r\n  @ X-Pacific\r\n DTC \r\n DCT 3x3 1 DC 8 AC DCT \r\nDC AC \r\n AC 0\r\n DCT \r\n DCT \r\nJPEG 8x8 \r\n … [+1213 chars]",
  },
  {
    id: "c2dc1add-0b9a-4966-88a8-526c252f97d7",
    category: "technology",
    source: {
      id: null,
      name: "Zive.cz",
    },
    author: "Karel Kilián",
    title:
      "Diskuze – Finové mají funkční pískovou baterii. Je levná a energii uchová po dobu několika měsíců - Živě.cz",
    description:
      "Diskuze pod článkem: Tým finských vědců zkonstruoval první „pískovou baterii“ na světě. Slouží ke skladování energie vyrobené z obnovitelných zdrojů po dobu až několika měsíců a může tak vyřešit problém s dodávkami energie v průběhu celého roku, informuje",
    url: "https://vtm.zive.cz/clanky/finove-maji-funkcni-piskovou-baterii-je-levna-a-energii-uchova-po-dobu-nekolika-mesicu/sc-870-a-217336/default.aspx?artcomments=1",
    urlToImage:
      "https://www.zive.cz/getthumbnail.aspx?q=100&height=20000&width=20000&id_file=833350493",
    publishedAt: "2022-07-10T06:30:47Z",
    content:
      "Finové mají funkní pískovou baterii. Je levná a energii uchová po dobu nkolika msíc.--------------------------------------------------------------------------------------Daleko lepí je pouívat neomez… [+1215 chars]",
  },
  {
    id: "c5a98f28-5fb9-487e-93a8-73f9fae03e0c",
    category: "technology",
    source: {
      id: null,
      name: "Journal du geek",
    },
    author: "Jean",
    title:
      "Prime Day : oubliez le Black Friday, Amazon ratatine les prix (-80%) - Journal du geek",
    description:
      "Le Prime Day est un événement incontournable chez Amazon. Le marchand américain a inventé cette opération (jour de son anniversaire) pour remercier ses clients fidèles. Les réductions sont très agressives et le chiffre d'affaires généré est encore plus import…",
    url: "https://www.journaldugeek.com/2022/07/10/prime-day-oubliez-black-friday-amazon-ratatine-les-prix-80/",
    urlToImage:
      "https://www.journaldugeek.com/content/uploads/2021/11/black-friday-7.jpg",
    publishedAt: "2022-07-10T06:05:00Z",
    content:
      "Le Prime Day est un événement incontournable chez Amazon. Le marchand américain a inventé cette opération (jour de son anniversaire) pour remercier ses clients fidèles. Les réductions sont très agres… [+5553 chars]",
  },
  {
    id: "4a53fc0e-7adc-4c0e-be23-07c658819061",
    category: "technology",
    source: {
      id: null,
      name: "Lebanon24.com",
    },
    author: null,
    title:
      'بعد غيابها عن الشاشة هل تذكرون ممثلة برنامج "كتير السلبي الكوميديّ"؟.. إليكم كيف أصبحت (صورة) - Lebanon24',
    description: "",
    url: "https://www.lebanon24.com/news/arts-celebrities/969951/%D8%A8%D8%B9%D8%AF-%D8%BA%D9%8A%D8%A7%D8%A8%D9%87%D8%A7-%D8%B9%D9%86-%D8%A7%D9%84%D8%B4%D8%A7%D8%B4%D8%A9-%D9%87%D9%84-%D8%AA%D8%B0%D9%83%D8%B1%D9%88%D9%86-%D9%85%D9%85%D8%AB%D9%84%D8%A9-%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC-%D9%83%D8%AA%D9%8A%D8%B1-%D8%A7",
    urlToImage:
      "https://www.lebanon24.com/uploadImages/DocumentImages/Doc-P-969951-637930337454926678.jpg",
    publishedAt: "2022-07-10T06:03:03Z",
    content: null,
  },
  {
    id: "756ddf5a-c433-4472-80aa-b0575fc1925d",
    category: "technology",
    source: {
      id: null,
      name: "Caschys Blog",
    },
    author: "Oliver Posselt",
    title:
      "iOS 16 und watchOS 9: So funktioniert Erfassung der Medikamente - Caschys Blog",
    description:
      "Apple wird mit iOS 16 und watchOS 9 die Funktionen von Apple Health erweitern. Neben neuen Informationen zum Schlafen, die wir separat ...",
    url: "https://stadt-bremerhaven.de/ios-16-und-watchos-9-so-funktioniert-erfassung-der-medikamente/",
    urlToImage:
      "https://stadt-bremerhaven.de/wp-content/uploads/2022/06/ios16.jpeg",
    publishedAt: "2022-07-10T06:00:00Z",
    content:
      "Apple wird mit iOS 16 und watchOS 9 die Funktionen von Apple Health erweitern. Neben neuen Informationen zum Schlafen, die wir separat beleuchten werden, sobald die Beta in dem Bereich nicht mehr so … [+1857 chars]",
  },
  {
    id: "3eefc9dd-1da6-4fa5-8858-a5764d802888",
    category: "technology",
    source: {
      id: "news-com-au",
      name: "News.com.au",
    },
    author: "Elly Awesome",
    title:
      "Elly Awesome reveals iPhone features you didn't know existed | news.com.au — Australia's leading news site - news.com.au",
    description:
      "<p>There are countless useful features in Apple&rsquo;s software that users simply aren&rsquo;t aware of. And part of what I love to do is shed light on helpful, hidden iPhone features that you might be missing out on. </p>",
    url: "https://www.news.com.au/technology/gadgets/mobile-phones/iphone-features-you-didnt-know-existed/news-story/0e4d884f03c237155fc08acfdfe165db",
    urlToImage:
      "https://content.api.news/v3/images/bin/1e3a6f4fe756bfa64f5ec00fac51c289",
    publishedAt: "2022-07-10T05:38:56Z",
    content:
      "Tech expert Elly Awesome has shared the hidden iPhone features Apple users are not aware of. And one of them could save your life.There are countless useful features in Apple’s software that users si… [+5984 chars]",
  },
  {
    id: "59795ac0-c327-4c57-8187-28652be21bd1",
    category: "technology",
    source: {
      id: null,
      name: "CHIP Online Deutschland",
    },
    author: "Joerg Geiger",
    title:
      "Geniale Google-Maps-Alternative macht Ihr Handy zum Head-up-Display - CHIP - CHIP Online Deutschland",
    description:
      "Head-up-Displays zur Navigation im Auto, das gibt es schon länger - festeingebaut und teuer. Günstiger fahren Sie mit der App Sygic, einer Alternative zu Google Maps. Die clevere Navi-App bietet mit der Real-View-Navigation eine spannende AR-Funktion für das …",
    url: "https://www.chip.de/news/Geniale-Google-Maps-Alternative-macht-Ihr-Handy-zum-Head-up-Display_184331408.html",
    urlToImage:
      "https://www.chip.de/ii/1/2/6/6/4/4/8/7/1/aufmacher-d7c221bec70e8234.jpg",
    publishedAt: "2022-07-10T05:33:00Z",
    content:
      "Natürlich bieten die Autohersteller auch jede Menge Premiumfunktionen an und wer die fest verbaut haben möchte, muss eben tief in die Tasche greifen. Alternativ ist die Sygic-Navigation im Abo für 19… [+657 chars]",
  },
  {
    id: "a8aea635-b882-4e19-b193-5e5555e071c0",
    category: "technology",
    source: {
      id: null,
      name: "Newstream.cz",
    },
    author: "Tereza Zavadilová",
    title:
      "Peníze zdražily, zábava skončila a jednorožce střídá kentaur - Newstream.cz",
    description:
      "Že štěstěna je vrtkavá, pocítil na vlastní kůži asi každý. Na peněžních a kapitálových trzích, které jsou velmi přesným a rychlým odrazem dění ve světě, dává pocítit svou momentální náladu pořádnou silou.",
    url: "https://www.newstream.cz/nazory/penize-zdrazily-zabava-skoncila-a-jednorozce-strida-kentaur",
    urlToImage:
      "https://www.newstream.cz/uploads/article/1200x630_exact/c2cibnvfiStock-950178980.jpg",
    publishedAt: "2022-07-10T05:30:00Z",
    content:
      "e tstna je vrtkavá, pocítil na vlastní ki asi kadý. Na penních a kapitálových trzích, které jsou velmi pesným a rychlým odrazem dní ve svt, dává pocítit svou momentální náladu poádnou silou.\r\nPed rok… [+4609 chars]",
  },
  {
    id: "adf92a95-f5b9-4ea1-90c3-24b6cb17d515",
    category: "technology",
    source: {
      id: null,
      name: "GSMArena.com",
    },
    author: "Peter",
    title:
      "Weekly poll: if you could get a Xiaomi 12S, 12S Pro or 12S Ultra, would you? - GSMArena.com news - GSMArena.com",
    description:
      "The Ultra will be exclusive for China - but if you can buy one, do you think this is the best phone for your money? What about the revamped 12S and 12S Pro?",
    url: "https://www.gsmarena.com/weekly_poll_if_you_could_get_a_xiaomi_12s_12s_pro_or_12s_ultra_would_you-news-54969.php",
    urlToImage:
      "https://fdn.gsmarena.com/imgroot/news/22/07/weekly-poll-xiaomi-12s-series/-952x498w6/gsmarena_000.jpg",
    publishedAt: "2022-07-10T05:23:02Z",
    content: null,
  },
  {
    id: "0b9884a9-8a1f-4413-a3d7-f9c6c0b1a6f1",
    category: "technology",
    source: {
      id: null,
      name: "Googlewatchblog.de",
    },
    author: "Jens",
    title:
      "Google Maps: Standortverlauf zeichnet alle Bewegungen auf - wird die Datensammlung jetzt problematisch? - GoogleWatchBlog",
    description:
      "Google ist dafür bekannt, zahlreiche Daten zu sammeln, auszuwerten und je nach Kategorie dauerhaft zu speichern. Der Google Maps Standortverlauf ist dafür ein gutes Beispiel, auch wenn dieser durch die optionale automatische Löschung bereits entschärft wurde.…",
    url: "https://www.googlewatchblog.de/2022/07/google-maps-standortverlauf-bewegungen/",
    urlToImage:
      "https://www.googlewatchblog.de/wp-content/uploads/android-location.jpg",
    publishedAt: "2022-07-10T05:00:36Z",
    content:
      "Google ist dafür bekannt, zahlreiche Daten zu sammeln, auszuwerten und je nach Kategorie dauerhaft zu speichern. Der Google Maps Standortverlauf ist dafür ein gutes Beispiel, auch wenn dieser durch d… [+3612 chars]",
  },
  {
    id: "f7b630ed-6830-49b9-81b5-fc3b511b96ae",
    category: "technology",
    source: {
      id: null,
      name: "7sur7.be",
    },
    author: "rédaction",
    title:
      "L'astuce pour éviter que l'on déverrouille votre téléphone avec la reconnaissance faciale - 7sur7",
    description:
      "Déverrouiller son smartphone avec son visage ou son empreinte digitale est-il vraiment sans risque? Un individu peut parvenir à accéder au contenu de votre téléphone à votre insu. Heureusement, il existe un moyen d’éviter que cela ne se produise.",
    url: "https://www.7sur7.be/tech/lastuce-pour-eviter-que-lon-deverrouille-votre-telephone-avec-la-reconnaissance-faciale~a29a3c99/",
    urlToImage:
      "https://images0.persgroep.net/rcs/aFytATTixt1qkk7WHeNih4s8lgM/diocontent/181694066/_fill/1200/630/?appId=21791a8992982cd8da851550a453bd7f&quality=0.7",
    publishedAt: "2022-07-10T05:00:01Z",
    content:
      "La reconnaissance faciale et les scanners dempreintes digitales font partie intégrante des smartphones daujourdhui. Une manipulation permet de désactiver temporairement ces méthodes de connexion, peu… [+3542 chars]",
  },
  {
    id: "f959826f-8fcf-4e12-a069-a6430d0c4c67",
    category: "technology",
    source: {
      id: null,
      name: "CHIP Online Deutschland",
    },
    author: "Joerg Geiger",
    title:
      '"Pest des 21. Jahrhunderts": Die besten Gratis-Scanner für Viren-Angriffe in Echtzeit - CHIP - CHIP Online Deutschland',
    description:
      "Die Security-Experten von AV-Test haben sich 26 Virenscanner vorgenommen und in einem Test untersucht, wie gut die Produkte gegen Echtzeit-Angriffe mit Erpressertrojanern schützen. Die Ergebnisse stimmen positiv, denn die meisten Virenscanner fahren den Bedro…",
    url: "https://www.chip.de/news/Pest-des-21.-Jahrhunderts-Die-besten-Gratis-Scanner-fuer-Viren-Angriffe-in-Echtzeit_184327608.html",
    urlToImage:
      "https://www.chip.de/ii/1/2/6/6/4/3/9/9/7/aufmacher_v2-c0d4c39f9b8c4412.jpg",
    publishedAt: "2022-07-10T04:48:18Z",
    content:
      'Avast Free Antivirus 2022 v22.6\r\nVersion 1.2.39\r\nDer neu erschienene "avast Free Antivirus 2022" ist ein gelungener und kostenloser Virenscanner mit jeder Menge Schutzfunktionen.',
  },
  {
    id: "afd6c627-5849-4960-afac-5cf5dbc9243d",
    category: "technology",
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "بكاميرا فوتوجرافر.. سعر ومواصفات هاتف Honor Magic4 Pro - نجوم مصرية",
    description: null,
    url: "https://news.google.com/__i/rss/rd/articles/CBMi4gFodHRwczovL3d3dy5uZ21pc3IuY29tL3RlY2gvJUQ4JUE4JUQ5JTgzJUQ4JUE3JUQ5JTg1JUQ5JThBJUQ4JUIxJUQ4JUE3LSVEOSU4MSVEOSU4OCVEOCVBQSVEOSU4OCVEOCVBQyVEOCVCMSVEOCVBNyVEOSU4MSVEOCVCMS0lRDglQjMlRDglQjklRDglQjEtJUQ5JTg4JUQ5JTg1JUQ5JTg4JUQ4JUE3JUQ4JUI1JUQ5JTgxJUQ4JUE3JUQ4JUFBLSVEOSU4NyVEOCVBNyVEOCVBQSVEOSU4MS1ob25vci1t0gEA?oc=5",
    urlToImage: null,
    publishedAt: "2022-07-10T04:47:42Z",
    content: null,
  },
  {
    id: "25859cdd-6bea-4016-8c3f-b22cf5a28320",
    category: "technology",
    source: {
      id: null,
      name: "CHIP Online Deutschland",
    },
    author: "Tobias Stadler",
    title:
      "Mobilfunkanbieter will Kunden migrieren: Tausende Nutzer könnten bald ohne Netz dastehen - CHIP - CHIP Online Deutschland",
    description:
      "Zahlreiche Kunden eines Mobilfunkanbieters könnten schon bald Empfang dastehen. Grund ist ein Netz-Wechsel. Die Details lesen Sie hier.",
    url: "https://www.chip.de/news/Womoeglich-kein-Netz-fuer-tausende-Nutzer-Mobilfunkanbieter-migriert-Kunden_184331596.html",
    urlToImage:
      "https://www.chip.de/ii/1/2/6/6/4/4/9/1/5/Telefonieren_Hauke-Christian_Dittrich-96179410709f0ba2.jpg",
    publishedAt: "2022-07-10T04:46:00Z",
    content: null,
  },
  {
    id: "620a49e6-a0cc-4f96-90ad-6b111bc5b415",
    category: "technology",
    source: {
      id: "infobae",
      name: "Infobae",
    },
    author: "anónimo",
    title:
      "El avance tecnológico del shale que alteró la geopolítica mundial y que desaprovecha la Argentina - infobae",
    description:
      "A partir del siglo XX el petróleo dominó los conflictos por el poder internacional. Las transformaciones del presente y la pérdida de oportunidades en el país por el exceso de regulaciones",
    url: "https://www.infobae.com/opinion/2022/07/10/el-avance-tecnologico-del-shale-que-altero-la-geopolitica-mundial-y-que-desaprovecha-la-argentina/",
    urlToImage:
      "https://www.infobae.com/new-resizer/SfLJkRgR7AT645tEuKX7ko2BDL0=/1200x628/filters:format(webp):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/7QLE4SCOFN76S4BUSA5JYQUMQE.jpg",
    publishedAt: "2022-07-10T04:41:02Z",
    content:
      "En el siglo XX los motores a combustión interna explosionaron las necesidades de petróleo, al tiempo que gran parte de los yacimientos se descubrían en localizaciones conflictivas. La humanidad deses… [+5773 chars]",
  },
  {
    id: "52f4c2c0-421f-4d65-abfe-2421aaa0ceb4",
    category: "technology",
    source: {
      id: null,
      name: "Boursorama",
    },
    author: null,
    title:
      "Le Bitcoin chute, ses détracteurs s’en donnent à cœur joie - Boursorama",
    description:
      "Le\n \n  bitcoin\n \n a débuté le mois de juillet sous la barre des 20 000 dollars. Le 18 juin dernier, la cryptomonnaie avait perdu près de 9 % de sa valeur en une seule journée",
    url: "https://www.boursorama.com/patrimoine/actualites/le-bitcoin-chute-ses-detracteurs-s-en-donnent-a-coeur-joie-d0728d6088f9d00d9c8ccecfe2cb88a6",
    urlToImage:
      "https://s.brsimg.com/static-000/cache/i/content/images/7/7/d/77daeef4f1af923e21d837945b72d8ba-1255x836.jpg",
    publishedAt: "2022-07-10T04:30:11Z",
    content:
      "Le Bitcoin chute, ses détracteurs sen donnent à cur joie - iStock.com / blinow61\r\nL« effondrement » des cryptomonnaies\r\nLe 18 juin dernier le Bitcoin, la cryptomonnaie la plus populaire, prenait une … [+2586 chars]",
  },
  {
    id: "145ff919-4fa4-48cf-83a0-e4a767620b86",
    category: "technology",
    source: {
      id: null,
      name: "Depor.com",
    },
    author: "Redacción Depor",
    title:
      "El truco para compartir el calendario del iPhone a través de iCloud - Diario Depor",
    description:
      "¿Quieres que otras personas sepan de tus actividades guardadas en tu calendario? Sigue los pasos de este truco dentro de la nota.",
    url: "https://depor.com/depor-play/tecnologia/iphone-el-truco-para-compartir-el-calendario-de-tu-smartphone-ios-a-traves-de-icloud-tutorial-nnda-nnni-noticia/",
    urlToImage:
      "https://depor.com/resizer/hrkbdVvYnN2UUyzT9d9tkz1vEEY=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/2EH3JOYBRFEJZLXS6YVEDW2FSM.jpg",
    publishedAt: "2022-07-10T04:16:49Z",
    content:
      "Compartir el calendario desde tu iPhone puede ser una de las cosas más útiles de hacer, ya que tus contactos podrás visualizar y modificar su contenido en cualquier momento, de esta manera, podrán co… [+2489 chars]",
  },
  {
    id: "12c3b682-398f-48cf-b87d-7182e84f5613",
    category: "sports",
    source: {
      id: null,
      name: "Fox Sports",
    },
    author: "Catherine Healey",
    title:
      "LIVE AFL: Kennedy hits remarkable milestone as Eagles, Blues locked in ‘stalemate’ - Fox Sports",
    description:
      "LIVE AFL: Kennedy hits remarkable milestone as Eagles, Blues locked in ‘stalemate’",
    url: "https://www.foxsports.com.au/afl/live-afl-scores-west-coast-eagles-vs-carlton-blues-updates-2022-round-17-live-stream-stats-video-result-news-blog/news-story/7647fe3a6ba03784d510399d6a841aaf",
    urlToImage:
      "https://content.api.news/v3/images/bin/e22ac7f1836f7cab4af29003c60a6bbb",
    publishedAt: "2022-07-10T08:30:00Z",
    content:
      "Carlton cant afford an embarrassing slip-up in the west on Sunday, with a win over the West Coast Eagles crucial to the clubs hopes of keeping a top-four berth alive.\r\nThe Eagles (2-13, 57.1%) will b… [+4923 chars]",
  },
  {
    id: "de4df319-07f9-42cf-885a-cc0e384afe62",
    category: "sports",
    source: {
      id: null,
      name: "watson",
    },
    author: "Anna Von Stefenelli",
    title:
      "FC Bayern: Rückt De-Ligt-Transfer näher? München erhöht Angebot heftig - watson",
    description:
      "Deal für den FC Bayern in Sicht? In den Verhandlungen zwischen den Klubs könnten zumindest entscheidende Entwicklungen im Transfer-Poker um Matthijs de Ligt anstehen. Denn: Seine Beraterin soll bereits seit Freitag in Turin sein, um Juve von einem Transfer zu…",
    url: "https://www.watson.de/sport/fußball/112588385-fc-bayern-rueckt-de-ligt-transfer-naeher-muenchen-erhoeht-angebot-heftig",
    urlToImage:
      "https://www.watson.de/imgdb/d677/Qx,A,0,0,0,0,0,0,0,0/525504192785731",
    publishedAt: "2022-07-10T08:29:00Z",
    content:
      "Kommen Juventus Turin und der FC Bayern beim Transferpoker um Innenverteidiger Matthijs de Ligt zu einem Deal? In den Verhandlungen zwischen den Klubs könnten laut italienischen Medienberichten zumin… [+2656 chars]",
  },
  {
    id: "33f6c1a7-63c9-4cea-b64e-82dd0f443ead",
    category: "sports",
    source: {
      id: null,
      name: "Motorsport.com",
    },
    author: "Megan White",
    title:
      'Binotto y las órdenes de equipo: "Hagamos lo que hagamos dirán que está mal" - Motorsport.com - ES',
    description:
      "Binotto dice que recibirá críticas haga lo que haga en la lucha entre los compañeros Leclerc y Carlos Sainz. Wolff ve a Ferrari entre la espada y la pared.",
    url: "https://es.motorsport.com/f1/news/binotto-ordenes-equipo-ferrari/10336050/",
    urlToImage:
      "https://cdn-1.motorsport.com/images/amp/2y3nmPK6/s6/formula-1-austrian-gp-2022-cha-2.jpg",
    publishedAt: "2022-07-10T08:26:39Z",
    content:
      "Cargar el reproductor de audio\r\nMax Verstappen no tuvo problemas para controlar la carrera al sprint del sábado después de que Leclerc y Sainz se vieran inmersos en una intensa lucha por la segunda p… [+2818 chars]",
  },
  {
    id: "5a64e31b-eb41-404e-bee9-34bbd59cef5b",
    category: "sports",
    source: {
      id: null,
      name: "Soymotor.com",
    },
    author: null,
    title:
      "Ferrari corre en Austria con el Cavallino Rampante original de 1932 - SoyMotor.com",
    description:
      "Los dos Ferrari F1-75 muestran en Austria el emblema original del Cavallino Rampante que caracteriza a los coches de Scuderia.",
    url: "https://soymotor.com/noticias/ferrari-corre-en-austria-con-el-cavallino-rampante-original-de-1932-998181",
    urlToImage:
      "https://soymotor.com/sites/default/files/imagenes/noticia/ferrari-cavallino-1932-soymotor.jpg",
    publishedAt: "2022-07-10T08:20:00Z",
    content:
      "Los dos Ferrari F1-75 muestran en Austria el emblema original del Cavallino Rampante que caracteriza a los coches de Scuderia.\r\nEste escudo nació el 9 de julio de 1932, cuando Enzo Ferrari puso en pi… [+1339 chars]",
  },
  {
    id: "f25a1450-140e-42de-9e22-eaddcf118274",
    category: "sports",
    source: {
      id: null,
      name: "Formel1.de",
    },
    author: null,
    title: "Formel-1-Liveticker: Regen in der Nacht in Spielberg - Formel1.de",
    description:
      "Aktuell im Formel-1-Liveticker: +++ Regen in der Nacht in Spielberg +++ Warum das Rennen trotzdem trocken werden dürfte +++ Start in Österreich um 15:00 Uhr +++",
    url: "https://www.formel1.de/news/news/2022-07-10/formel-1-liveticker-regen-in-der-nacht-in-spielberg",
    urlToImage: "https://www.formel1.de/public/news/sm/268444_f1de.jpg",
    publishedAt: "2022-07-10T08:19:13Z",
    content:
      "10:50 Uhr\r\n Ärger an der Strecke\r\nGroße Formel-1-Party in Spielberg? Leider nicht für alle! Mehrere Fans haben von teils heftigen Problemen an der Strecke und auf den Tribünen berichtet. Die Rede ist… [+2167 chars]",
  },
  {
    id: "3e75444a-7426-4049-8192-7b39f3ebca3a",
    category: "sports",
    source: {
      id: "marca",
      name: "Marca",
    },
    author: "DIEGO ZARAZUA",
    title:
      "Retan a Nadal a 'pegarse' en un combate de UFC: \"A ver quién es el mejor Rafa\" - MARCA.com",
    description:
      "Rafael Fiziev noqueó al inicio del quito round a Rafel dos Anjos en el UFC Las Vegas 58. Esta victoria lo puso a un paso de buscar el título de peso ligero. Pero más allá del logro",
    url: "https://www.marca.com/combates-ufc/2022/07/10/62ca89c422601d2b3d8b45c5.html",
    urlToImage:
      "https://ak.uecdn.es/p/110/thumbnail/entry_id/0_v8or0oru/width/657/type/2/bgcolor/000000/0_v8or0oru.jpg",
    publishedAt: "2022-07-10T08:12:08Z",
    content:
      "Rafael Fiziev noqueó al inicio del quito round a Rafel dos Anjos en el UFC Las Vegas 58. Esta victoria lo puso a un paso de buscar el título de peso ligero. Pero más allá del logro deportivo, el kaza… [+729 chars]",
  },
  {
    id: "10bc92fa-80f3-4fdb-aeb0-ecc8ac367774",
    category: "sports",
    source: {
      id: "marca",
      name: "Marca",
    },
    author: "ALEJANDRO PEINADO",
    title:
      "Mercado de fichaje hoy, 10 de julio | Lille y Milan tienen acuerdo por Renato; Oporto no sigue las negociaciones por Puig; Sterling a un paso del Chelsea... - Fichajes - MARCA.com",
    description:
      "Omar Richards ficha por el Nottingham Forest Los Tricky Trees siguen perfilando su plantilla para afrontar el regreso a Premier League de la mejor man",
    url: "https://www.marca.com/futbol/mercado-fichajes/2022/07/10/62ca6c6652e6f80022517cc9-directo.html",
    urlToImage:
      "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/07/10/16574356610027.jpg",
    publishedAt: "2022-07-10T08:09:02Z",
    content:
      "Actualizar narración\r\nVer narración completa\r\nTodas las noticias y la última hora del mercado de fichajes del 10 de julio 2022. \r\nRumores, traspasos, altas y bajas de los principales nombres propios … [+468 chars]",
  },
  {
    id: "32431db6-9502-4736-9835-534c827cf3c3",
    category: "sports",
    source: {
      id: null,
      name: "Sport.cz",
    },
    author: "Matěj Vybíral",
    title:
      "Minuta hrůzy! Hvězdný francouzský cyklista nejdříve spadl, pak přišla další rána - Sport.cz",
    description:
      "Horších šedesát vteřin v závodě jde zažít jen těžko. Francouzský cyklista Thibaut Pinot 48 kilometrů před cílem 8. etapy Tour de France nejprve skončil na zemi. A při snaze dotáhnout se zpět do pelotonu jen o pár stovek metrů později tvrdě narazil. Za všechno…",
    url: "https://www.sport.cz/clanek/cyklistika-minuta-hruzy-hvezdny-francouzsky-cyklista-nejdrive-spadl-pak-prisla-dalsi-rana-3478950",
    urlToImage:
      "https://d16-a.sdn.cz/d_16/c_img_QP_e/7znCc.jpeg?fl=cro,0,0,1200,675%7Cres,1200,,1%7Cjpg,80,,1",
    publishedAt: "2022-07-10T08:08:16Z",
    content: null,
  },
  {
    id: "cdb31d77-d7e9-4b08-a1f5-062e67227bf8",
    category: "sports",
    source: {
      id: "infobae",
      name: "Infobae",
    },
    author: "anónimo",
    title:
      "Desalojaron a 24 personas del Estadio Azteca durante partido Cruz Azul-Pachuca - Infobae America",
    description:
      "La Liga MX sacó del recinto deportivo a las personas por alterar el orden y entonar el grito homofóbico",
    url: "https://www.infobae.com/america/deportes/2022/07/10/desalojaron-a-24-personas-del-estadio-azteca-durante-partido-cruz-azul-pachuca/",
    urlToImage:
      "https://www.infobae.com/new-resizer/ZDBNSPhojJWpJyMtAa8y1hcr7Ag=/1200x628/filters:format(webp):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/II4QI4XHTVCLDH4SL6SFQW27YI.jpg",
    publishedAt: "2022-07-10T08:04:59Z",
    content:
      "Durante las primeras horas de este domingo, la Liga BBVA MX dio a conocer que fueron desalojadas 24 personas tras aplicar el protocolo Cero Tolerancia en el Estadio Azteca.\r\nEsto ocurrió durante el p… [+3062 chars]",
  },
  {
    id: "0b4be945-8078-48fa-bd1e-98bff6521c88",
    category: "sports",
    source: {
      id: null,
      name: "Fox Sports",
    },
    author: "Darcie McDonald",
    title:
      "Young guns step up as baby Broncos stun Dragons in fiery clash - Fox Sports",
    description:
      "Bronco stuns in return as Staggs wins Suli battle; Dragons ‘overcook’ Reynolds plan: Big hits",
    url: "https://www.foxsports.com.au/nrl/nrl-premiership/nrl-2022-brisbane-broncos-vs-st-george-illawarra-dragons-live-updates-supercoach-scores-video-adam-reynolds/news-story/27f00552cc1102b139d35cc6c59bd486",
    urlToImage:
      "https://content.api.news/v3/images/bin/08bd9145f284537ee8b3dffe3261069e",
    publishedAt: "2022-07-10T08:00:00Z",
    content:
      "No Origin stars? No problems! A depleted Broncos outfit have comprehensively beaten the Dragons 32-18 with their young guns stepping up in the absence of several big-name players.\r\nThe clash started … [+5631 chars]",
  },
  {
    id: "219f68ac-586a-428b-9a9d-8f0fb0710ceb",
    category: "sports",
    source: {
      id: "abc-news-au",
      name: "ABC News (AU)",
    },
    author: "ABC News",
    title:
      "AFL live ScoreCentre: Eagles vs Blues, Hawks vs Crows, Lions vs Bombers live scores, stats and results - ABC News",
    description:
      "The Blues have their noses in front against the Eagles in Perth, while the Hawks claim a 32-point victory over the Crows. Earlier, the Bombers defeated the understrength Lions by 10 points at the Gabba. Follow our live AFL ScoreCentre for all the scores, stat…",
    url: "https://www.abc.net.au/news/2022-07-10/afl-live-lions-bombers-hawks-crows-eagles-blues/101223134",
    urlToImage:
      "https://live-production.wcms.abc-cdn.net.au/8d615a21ce175376d6b3cf813c03edba?impolicy=wcms_crop_resize&cropH=2703&cropW=4806&xPos=0&yPos=81&width=862&height=485",
    publishedAt: "2022-07-10T07:58:08Z",
    content:
      "The Blues have their noses in front against the Eagles in Perth, while the Hawks claim a 32-point victory over the Crows.\r\nEarlier, the Bombers defeated the understrength Lions by 10 points at the Ga… [+5130 chars]",
  },
  {
    id: "2661b3b9-1b91-4c62-bf84-ece5a77c5e8e",
    category: "sports",
    source: {
      id: null,
      name: "Sport.cz",
    },
    author: "Robert Neumann",
    title:
      "Bílek: Plzeň poháry potřebuje, úvod sezony je pro nás nesmírně důležitý! - Sport.cz",
    description:
      "Ví dobře, že obhájit pozice z uplynulé sezony, kdy Plzeň senzačně dovedl k titulu, bude hodně těžké. Stejně tak, že pro klub je klíčové, zajistit si evropské poháry. To všechno bez dvou velkých opor - nejlepšího střelce Beauguela a stopera Santose.",
    url: "https://www.sport.cz/clanek/fotbal-ceska-1-liga-bilek-plzen-pohary-potrebuje-uvod-sezony-je-pro-nas-nesmirne-dulezity-3478536",
    urlToImage:
      "https://d16-a.sdn.cz/d_16/c_img_QL_X/9E4w8.jpeg?fl=cro,249,14,629,355%7Cres,1200,,1%7Cjpg,80,,1",
    publishedAt: "2022-07-10T07:57:12Z",
    content:
      "Westendorf (od naeho zpravodaje) - Minulá sezona nám vyla fantasticky. Dostali jsme se ped Slavii i Spartu, nebudou to chtít u dopustit. Budeme to mít nesmírn tké. Ale budeme zase bojovat, tým máme h… [+5171 chars]",
  },
  {
    id: "8caf1dd0-35f3-4ca1-9873-2aa5e19f6a04",
    category: "sports",
    source: {
      id: null,
      name: "Onze Mondial",
    },
    author: "Etienne Leray",
    title:
      "Manchester United : Cristiano Ronaldo a touché le jackpot avant d’exiger son départ ! - Onze Mondial",
    description:
      "Cristiano Ronaldo (37 ans) a touché un important bonus avant d'annoncer ses envie de départ aux dirigeants de Manchester United.",
    url: "https://www.onzemondial.com/premier-league/2020-2021/manchester-united-cristiano-ronaldo-a-touche-le-jackpot-avant-d-exiger-son-depart-786645",
    urlToImage:
      "https://static.onzemondial.com/8/2022/07/photo_article/786645/310804/1200-L-manchester-united-cristiano-ronaldo-a-touch-le-jackpot-avant-dexiger-son-dpart.jpg",
    publishedAt: "2022-07-10T07:55:52Z",
    content:
      'Absent du groupe de Manchester United pour la tournée de pré-saison en Australie et en Thaïlande, Cristiano Ronaldo a séché la reprise des Red Devils pour "raisons personnelles", même si cela semble … [+1043 chars]',
  },
  {
    id: "b92542ea-7678-4459-87f7-f81885ed9b83",
    category: "sports",
    source: {
      id: null,
      name: "Sport.cz",
    },
    author: null,
    title:
      "Španělsko - Norsko 2:1, Španělské fotbalistky zdolaly Norsko a ovládly mistrovství Evropy do 19 let - Sport.cz",
    description:
      'Španělsko počtvrté v historii vyhrálo mistrovství Evropy fotbalistek do 19 let. Výběr "La Roja" ve finálovém duelu v Ostravě porazil po obratu 2:1 Norsko. Vítěznou branku vstřelila ve třetí minutě nastaveného času Julia Bartelová.',
    url: "https://www.sport.cz/clanek/fotbal-ostatni-spanelske-fotbalistky-zdolaly-norsko-a-ovladly-mistrovstvi-evropy-do-19-let-3478851",
    urlToImage:
      "https://d16-a.sdn.cz/d_16/c_img_QJ_d/vzjCL.jpeg?fl=cro,0,0,993,561%7Cres,1200,,1%7Cwebp,75",
    publishedAt: "2022-07-10T07:52:34Z",
    content:
      "Norky prohrály hned úvodní zápas v základní skupin, od té doby ale pouze vítzili a dobe vstoupily i do souboje o zlato na Mstském stadionu ve Vítkovicích. V páté minut nala Kyvagová v pokutovém území… [+1148 chars]",
  },
  {
    id: "c7854ca7-9981-4053-9cdb-e313b1112845",
    category: "sports",
    source: {
      id: null,
      name: "Dailymercato.com",
    },
    author: "Marius Cassoly",
    title:
      "Mercato OM : Lens a rejeté la première offre pour Clauss - Daily Mercato",
    description:
      "Selon L'&Eacute;quipe, Lens a rejet&eacute; la premi&egrave;re offre de l'OM pour le lat&eacute;ral droit fran&ccedil;ais Jonathan Clauss. Le club san...",
    url: "https://www.dailymercato.com/news/mercato-om-lens-a-rejete-la-premiere-offre-pour-clauss",
    urlToImage:
      "https://www.dailymercato.com/storage/icon-sport/clauss-lens-valenciennes-new.jpg",
    publishedAt: "2022-07-10T07:52:08Z",
    content: null,
  },
  {
    id: "482682ce-12a6-4da8-b042-6b915dc57a23",
    category: "sports",
    source: {
      id: "lequipe",
      name: "L'equipe",
    },
    author: "Rédaction",
    title:
      "Le vainqueur de la finale de Wimbledon entre Novak Djokovic et Nick Kyrgios devra inviter l'autre au restau... - L'Équipe",
    description:
      "Novak Djokovic et Nick Kyrgios, les deux finalistes de Wimbledon dimanche, ont prévu de se retrouver au restaurant après la rencontre. Le vainqueur paierait l'addition, à en croire leurs échanges sur Instagram, samedi.",
    url: "https://www.lequipe.fr/Tennis/Actualites/Le-vainqueur-de-la-finale-de-wimbledon-entre-novak-djokovic-et-nick-kyrgios-devra-inviter-l-autre-au-restaurant/1342899",
    urlToImage:
      "https://medias.lequipe.fr/img-photo-jpg/nick-kyrgios-s-stacpoole-presse-sports/1500000001664092/0:0,1998:1332-640-427-75/753d6.jpg",
    publishedAt: "2022-07-10T07:46:21Z",
    content:
      "La hache de guerre semble bel et bien enterrée entre Nick Kyrgios et Novak Djokovic. Alors que les deux hommes s'affronteront en finale de Wimbledon dimanche, ils ont échangé sur Instagram, samedi, e… [+838 chars]",
  },
  {
    id: "f8400325-edfc-47b5-ab07-ad85f03dbf73",
    category: "sports",
    source: {
      id: null,
      name: "China.com.cn",
    },
    author: null,
    title: "攀岩世界杯霞慕尼站：中国队再度包揽男女速度赛冠军 - 中国网",
    description: null,
    url: "http://sports.china.com.cn/qita/detail2_2022_07/10/3496855.html",
    urlToImage: null,
    publishedAt: "2022-07-10T07:41:12Z",
    content: null,
  },
  {
    id: "d798b59e-ca4e-4ea9-ba64-88b9ba805c4f",
    category: "sports",
    source: {
      id: null,
      name: "Butfootballclub.fr",
    },
    author: "Bastien Aubert",
    title:
      "OM - Mercato : Tudor a désobéi à Longoria, il a appelé le remplaçant de Kamara ! - But! Football Club",
    description:
      "S’il a juré de ne pas marcher sur les plates-bandes du Pablo Longoria et Javier Ribalta dans le domaine des transferts, le nouvel entraîneur de l’OM Igor Tudor n’a pas prévu de se taire pour autant.",
    url: "https://www.butfootballclub.fr/om/mercato/om-mercato-tudor-a-desobei-a-longoria-il-a-appele-le-remplacant-de-kamara-780423",
    urlToImage:
      "https://static.butfootballclub.fr/16/2022/07/photo_article/780423/307856/1200-L-om-mercato-tudor-a-dsobi-longoria-il-a-appel-le-remplaant-de-kamara.jpg",
    publishedAt: "2022-07-10T07:40:46Z",
    content:
      "Vu le gabarit d’Igor Tudor, mieux vaut ne pas se frotter à lui. Le Croate en impose mais a déjà prévu de rester à sa place en ce qui concerne le mercato de l’OM. Malgré ces bonnes résolutions, le rem… [+1047 chars]",
  },
  {
    id: "707fde21-c362-40c3-9365-12762e5dc7ff",
    category: "sports",
    source: {
      id: null,
      name: "China.com.cn",
    },
    author: null,
    title: "三人篮球亚洲杯：中国男、女队双双小组第一晋级淘汰赛 - 中国网",
    description: null,
    url: "http://sports.china.com.cn/lanqiu/detail2_2022_07/10/3496814.html",
    urlToImage: null,
    publishedAt: "2022-07-10T07:39:44Z",
    content: null,
  },
  {
    id: "7c57384a-e59e-42b8-8d7e-8a76cb9e405a",
    category: "sports",
    source: {
      id: null,
      name: "dh.be",
    },
    author: "Belga",
    title:
      "Diable rouge: Dries Mertens a refusé une prolongation de contrat à Naples - DH Les Sports +",
    description:
      "Naples a proposé à Dries Mertens une prolongation de contrat de deux ans, que le Diable Rouge a refusée. C''est ce que le directeur du Napoli, Cristiano Giuntoli, a indiqué samedi en conférence de presse.",
    url: "https://www.dhnet.be/sports/football/diablesrouges/2022/07/10/diable-rouge-dries-mertens-a-refuse-une-prolongation-de-contrat-a-naples-OJBHCTDPVFDCFODEA7EBGRK3QA/",
    urlToImage:
      "https://www.dhnet.be/resizer/lV1sOcS-hJwTVzCswLiUpKdZdbc=/1200x630/filters:focal(1275x858:1285x848):watermark(cloudfront-eu-central-1.images.arcpublishing.com/ipmgroup/6LJWAO74QZHR7KW5AX2LGSOHQQ.png,0,-0,0,100)/cloudfront-eu-central-1.images.arcpublishing.com/ipmgroup/G2RUTUTNIFBENCWVKJR63UNYVE.jpg",
    publishedAt: "2022-07-10T07:35:00Z",
    content:
      '"Le président De Laurentis a fait a proposé à Dries Mertens une prolongation de contrat de deux ans, avec un salaire net de 2,5 millions par an. Il ne l\'a pas acceptée", a déclaré Cristiano Giuntoli.… [+467 chars]',
  },
];

// articleRepository is a function that implements all the repository functions of the article entity
export default function articleRepository() {
  // findAll is a function that returns all the stored articles
  const findAll = () => storedArticles;

  // findById is a function that returns an article that matches the give id
  const findById = (id) => {
    let article;
    storedArticles.forEach((element) => {
      if (element.id == id) {
        article = element;
        return;
      }
    });

    return article;
  };

  // findByCategory is a function that returns all the articles for the given category
  const findByCategory = (category) =>
    storedArticles.filter((element) => element.category == category);

  // searchByTitle is a function that returns articles that contains the title value
  const searchByTitle = (title, category) => {
    if (category == CATEGORY_ALL) {
      return storedArticles.filter((article) => article.title.includes(title));
    }

    return storedArticles.filter(
      (article) => article.title.includes(title) && article.category == category
    );
  };

  // add is a function that adds new article entity to the stored articles
  const add = (article, category) => {
    let newArticle = createArticle(
      v4(),
      category ?? "",
      article.source,
      article.author,
      article.title,
      article.description,
      article.url,
      article.urlToImage,
      article.publishedAt,
      article.content
    );
    storedArticles.push(newArticle);
  };

  // addMultiple is a function that adds multiple articles to the stored articles
  const addMultiple = (articles, category) => {
    articles.forEach((article) => {
      add(article, category);
    });
  };

  return {
    findAll,
    findById,
    findByCategory,
    searchByTitle,
    add,
    addMultiple,
  };
}
