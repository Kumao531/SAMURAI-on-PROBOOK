$(function() {

  // 「もっとみる」のボタンにアニメーションをつける
  // マウスがid属性がbutton-moreの要素に入っていったとき
  $('.button-more').on( 'mouseover', function() {

    // アニメーションを実行する
    $(this).animate( {
      opacity: 0.5,
      marginLeft: 20,
    }, 100 );

  });
  // マウスが出て行ったとき
  $('.button-more').on( 'mouseout', function() {

    // アニメーションを実行する
    $(this).animate( {
      opacity: 1.0,
      marginLeft: 0,
    }, 100 );

  });

  // カルーセル
  $('.carousel').slick( {
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 2500,
    arrows: false,
  });

});