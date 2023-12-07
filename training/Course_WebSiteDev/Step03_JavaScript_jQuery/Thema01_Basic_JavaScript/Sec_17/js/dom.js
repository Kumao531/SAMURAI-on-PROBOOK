
/*
// headの中身を取得し、中身を出力する
console.log(document.head);
// bodyの中身を取得し、中身を出力する
console.log(document.body);

// windowオブジェクトの中身を出力する
console.log(window);

// HTML要素をidで取得して、中身を出力する
console.log(document.getElementById('first-list'));

// HTML要素をclassで取得して、中身を出力する
console.log(document.getElementsByClassName('heading'));

// 複数のHTML要素を1つずつ取得し、中身を出力する
const headings = document.getElementsByClassName('heading');
for (let i=0; i < headings.length; ++i) {
  console.log(headings[i]);
}

// HTML要素をCSSセレクタで取得し、中身を出力する（最初の１つ）
console.log(document.querySelector('h1'));
console.log(document.querySelector('#second-heading'));
console.log(document.querySelector('.list'));
*/

/*
// HTML要素をCSSセレクタで取得して、中身を出力する（すべて)
console.log(document.querySelectorAll('.heading'));
console.log(document.querySelectorAll('li'));
*/

const cssHeadings = document.querySelectorAll('.heading');
const cssLists = document.querySelectorAll('li');

for ( let i = 0; i < cssHeadings.length; ++i ) {
  console.log( cssHeadings[i] );
}