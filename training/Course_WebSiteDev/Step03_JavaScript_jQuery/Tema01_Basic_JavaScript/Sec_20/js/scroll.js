// back-btnというidをもつHTML属性を取得して、定数に代入をする
const backBtn = document.getElementById('back-btn');

// 画面がスクロールされたときにイベント処理をする
window.addEventListener( 'scroll', () => {
  // 画面のスクロール量をpx（ピクセル）数で取得する
  const scrollValue = document.scrollingElement.scrollTop;

  // 画面のスクロール量が300以上であれば、「TOPに戻る」ボタンを表示する
  if ( scrollValue >= 300 ) {
    backBtn.style.display = 'inline';
  }
  // 画面のスクロール量が300未満であれば、「TOPへ戻る」ボタンを非表示にする
  else {
    backBtn.style.display = 'none';
  }
});