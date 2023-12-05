// 朝の挨拶を出力する関数を定義する
const sayGoodMorning = () => {
  console.log('おはようございます！');
  console.log('昨晩はよく眠れましたか？');
  console.log('今日も一日頑張りましょう！');
}

// 夜の挨拶を出力する関数を定義する
const sayGoodEvening = () => {
  console.log('こんばんは！');
  console.log('今日も一日お疲れ様でした。');
}

// 朝の挨拶をする関数を呼び出す
sayGoodMorning();

// 晩の挨拶をする関数を呼び出す
sayGoodEvening();


// 与えられたpriceに送料を加算して、その値を出力する関数を定義する
const calculateTotal = (price) => {
  console.log( price + 500 + '円' );
}

calculateTotal(1200);