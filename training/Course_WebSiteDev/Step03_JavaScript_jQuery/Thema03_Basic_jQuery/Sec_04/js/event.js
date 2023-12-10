$(function() {

  /*
  // ボタン領域に対するイベント処理
  $('div').on( {

    // クリックされたとき
    'click': () => {
      // 背景を赤
      $('div').css('background-color','red');
      // テキストを「click」
      $('div').text('click');
    },

    // ダブルクリックされたとき
    'dblclick' : () => {
      // 背景を緑
      $('div').css('background-color','green');
      // テキストを「dblclick」
      $('div').text('dblclick');
    },

    // マウスが入ってきたとき
    'mouseenter': () => {
      // 背景を青
      $('div').css('background-color','blue');
      // テキストを「mouseenter」
      $('div').text('mouseenter');
    },

    // マウスが外れたとき
    'mouseout': () => {
      // 背景をグレー
      $('div').css('background-color','gray');
      // テキストを「mouseout」
      $('div').text('mouseout');
    }
  });
  */

  // クリックかキー押下されたとき
  $(document).on('click keydown', (e) => {

    // クリックされたとき
    if ( e.type === 'click' ) {
      $('div').text('クリックされました');
    }
    // ボタンが押下されたとき
    if ( e.type === 'keydown' ) {
      $('div').text('キーが押されました');
    }

  });

});
