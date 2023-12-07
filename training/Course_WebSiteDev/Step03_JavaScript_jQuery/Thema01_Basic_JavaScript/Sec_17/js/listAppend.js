// 新しくli要素を作成し、定数に代入する
const li = document.createElement('li');

// 作成したli要素にテキストを追加する
li.textContent = 'JavaScriptで新しく作成したリスト3';
li.innerHTML = '<a href="#">JavaScriptで新しく作成したリスト3</a>';

// ul要素の末尾にli要素を追加する
document.querySelector('ul').appendChild(li);