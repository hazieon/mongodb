const { db } = require("./poem.model");

var PoemSchema = new Schema({
  title: {
    type: String,
    required: true, //require this field
    unique: true, //ensure this is unique
  },
  author: String,
  detail: { poemNumber: Number, season: String, theme: String },
  added: { type: Date, default: Date.now }, //set a default value or key}
  keyChars: Array,
  anthology: Boolean,
  poem: { type: Schema.ObjectId, ref: "poem" },
});

db.poems.insert({
  title: "Of the Autumn Rice Field",
  author: "Emperor Tenji",
  detail: {
    poemNumber: 1,
    season: "autumn",
    theme: "autumn",
  },
  added: Date.now,
  keyChars: ["秋", "苫", "露"],
  anthology: true,
  poemEng:
    "The autumn paddy shacks have rough thatching as my sleeves are wet with dew.",
  poemJp: "秋の田の かりほの庵の 苫をあらみ わが衣手は 露にぬれつつ",
});

db.poems.insert({
  title: "So Spring Ends and Summer Comes",
  author: "Empress Jitoh",
  detail: {
    poemNumber: 2,
    season: "summer",
    theme: "summer",
  },
  added: Date.now,
  keyChars: ["春", "夏", "白"],
  anthology: true,
  poemEng:
    "So spring ends and summer comes. Now white robes hang to dry on Mount Amanokagu.",
  poemJp: "春過ぎて 夏来にけらし 白妙の 衣干すてふ 天の香具山",
});

db.poems.insert({
  title: "The Red That Is",
  author: "Ariwara no Narihira",
  detail: {
    poemNumber: 17,
    season: "autumn",
    theme: "passion",
  },
  added: Date.now,
  keyChars: ["神", "竜", "ゐ"],
  anthology: true,
  poemEng:
    "Even in the age of swift gods and miracles, I have never seen such burning autumn red as drenches the Tatsuta River.",
  poemJp: "ちはやぶる 神代も聞かず 竜田川 からくれなゐに 水くくるとは",
});

db.poems.insert({
  title: "For There Is No One Else Out Here",
  author: "Chief Abbot Gyoson",
  detail: {
    poemNumber: 66,
    season: "spring",
    theme: "loneliness",
  },
  added: Date.now,
  keyChars: ["桜", "思", "山"],
  anthology: true,
  poemEng:
    "Would the mountain cherry blossoms return my affection for there is no one else out here.",
  poemJp: "もろともに あはれと思へ 山桜 花よりほかに 知る人もなし",
});

// db.poems.insert({
//     title: "",
//     author: "",
//     detail: {
//       poemNumber: ,
//       season: "",
//       theme: "",
//     },
//     added: Date.now,
//     keyChars: ["", "", ""],
//     anthology: true,
//     poemEng:
//       "",
//     poemJp: "",

// })

// db.poems.insert({
//   title: "When Looking at the Moon",
//   author: "Oe no Chisato",
//   detail: {
//     poemNumber: 23,
//     season: "autumn",
//     theme: "sorrow",
//   },
//   added: Date.now,
//   keyChars: ["月", "悲", "秋"],
//   anthology: true,
//   poemEng:
//     "When looking at the moon, you will be overcome by sorrow, as you realize that the autumn belongs to",
//   poemJp: "月見れば ちぢに物こそ 悲しけれ わが身ひとつの 秋にはあらねど",
// });

// //successful JSON body for post:
// {"title": "When Looking at the Moon",
// "author": "Oe no Chisato",
// "detail": {
//   "poemNumber": 23,
//   "season": "autumn",
//   "theme": "sorrow"
// },
// "added": 1,
// "keyChars": ["月", "悲", "秋"],
// "anthology": true,
// "poemEng":
//   "When looking at the moon, you will be overcome by sorrow, as you realize that the autumn belongs to",
// "poemJp": "月見れば ちぢに物こそ 悲しけれ わが身ひとつの 秋にはあらねど"
// }
