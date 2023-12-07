// 変数の初期化
// タイピングする文字列を格納する変数
let untyped = '';

// 打ち込んでいない文字列を記述しているとこの、HTML要素を取得する
const untypedField = document.getElementById('untyped');

// 複数のテキストを格納する配列
const textLists = [
  'Hello World','This is my App','How are you?',
  'Today is sunny','I love JavaScript!','Good morning',
  'I am Japanese','Let it be','Samurai',
  'Typing Game','Information Technology',
  'I want to be a programmer','What day is today?',
  'I want to build a web app','Nice to meet you',
  'Chrome Firefox Edge Safari','machine learning',
  'Brendan Eich','John Resig','React Vue Angular',
  'Netscape Communications','undefined null NaN',
  'Thank you very much','Google Apple Facebook Amazon',
  'ECMAScript','console.log','for while if switch',
  'var let const','Windows Mac Linux iOS Android',
  'programming'
];

// ランダムなテキストを表示
const createText = () => {
  // 配列のインデックス数からランダムな数値を生成する
  let random = Math.floor(Math.random() * textLists.length );

  // 配列からランダムにテキストを取得して画面に表示する
  untyped = textLists[random];
  untypedField.textContent = untyped;
};
createText();

// キー入力の判定
const keyPress = e => {};

// タイピングスキルのランクの判定
const rankCheck = score =>  {};

// ゲームを終了
const gameOver = id => {};

// カウントダウンタイマー
const timer = () => {};