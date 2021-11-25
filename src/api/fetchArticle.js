const articles = [
  {
    articleId: 0,
    imgId: 1060,
    title: "＆Sugar＋南瓜",
    caption: "カフェ＋居酒屋でいいとこどりの欲張り店舗!!",
    category: "グルメ",
    categoryColor: "#8c8",
    text: `貴方の様々なお好みにお応えできる様ガンバっております!
    食材にこだわった＆Sugar＋南瓜のランチは必見、必食!!
    居酒屋の時間帯ではここにしかない駿河軍鶏も食べられます!美味しいものと美味しい時間をお過ごしください♪
    【ランチメニュー】
    ◆スープカレー…1,000円(税別)
    ◆日替わりランチ（ハンバーグ、焼肉、からあげから選べます）…800円(税別)
    ◆昔ながらのナポリタン…700円(税別)
    `,
    showBanner: false,
    coupon: {
      id: 100,
      title: "藤枝市グルメ500円引きクーポン",
      description:
        "藤枝市内の提携店でこのクーポンを使用するとお会計から500円引き！",
      start: "2021-04-01",
      end: "2022-03-31",
    },
  },
  {
    articleId: 1,
    imgId: 305,
    title: "P-PLACE FACTORY",
    caption: "ワクワク、ドキドキ感満載 美容師が経営する美容室",
    category: "健康・美容",
    categoryColor: "#c88",
    text: `ここに本文`,
    showBanner: false,
  },
  {
    articleId: 2,
    imgId: 10,
    title: "藤枝市コロナワクチン接種予約",
    caption: "新型コロナウイルスワクチン接種予約サイトはこちらです",
    category: "市役所からのお知らせ",
    categoryColor: "#c8c",
    text: `新型コロナウイルスワクチンを接種しましょう。
    予約ページはコチラ
    https://gvi-reserve.azurewebsites.net/fujieda/reservetop
    `,
    showBanner: true,
  },

  {
    articleId: 3,
    imgId: 188,
    title: "藤枝警察たより",
    caption: "新聞に載らない地元の事件簿 5月版",
    category: "警察署からのお知らせ",
    categoryColor: "#88c",
    text: `ここに本文`,
    showBanner: false,
  },
  {
    articleId: 4,
    imgId: 306,
    title: "そでしや",
    caption:
      "マグロを様々な料理で堪能できる! 一つ一つ心のこもった手作りの美味しいお料理が自慢の店",
    category: "グルメ",
    categoryColor: "#8c8",
    text: `ここに本文`,
    showBanner: false,
    coupon: {
      id: 100,
      title: "藤枝グルメ500円クーポン",
      description:
        "藤枝市内の提携店でこのクーポンを使用するとお会計が500円引き！",
      start: "2021-04-01",
      end: "2022-03-31",
    },
  },
  {
    articleId: 5,
    imgId: 1058,
    title: "History Pride Dream",
    caption: "サッカーのまち藤枝PRサポーターズ募集",
    category: "市役所からのお知らせ",
    categoryColor: "#c8c",
    text: `ここに本文`,
    showBanner: true,
  },
  {
    articleId: 6,
    imgId: 239,
    title: "故人を偲ぶ 2020年5月1日～31日",
    caption: "ふじえ～ら編集室一同、謹んでお悔やみ申しあげます。",
    category: "訃報",
    categoryColor: "#888",
    text: `ここに本文`,
    showBanner: false,
  },
  {
    articleId: 7,
    imgId: 122,
    title: "佐藤友祈選手 金メダルおめでとう！",
    caption: "東京2020 パラリンピック競技大会 佐藤友祈選手 市民栄誉賞を授与",
    category: "市役所からのお知らせ",
    categoryColor: "#c8c",
    text: `ここに本文`,
    showBanner: true,
  },
];

export const fetchArticle = (articleId) => {
  return articles[articleId];
};

export const fetchArticleList = () => {
  return articles;
};
