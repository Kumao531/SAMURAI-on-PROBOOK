$(function() {

  // id属性がfadeOutの要素がクリックされたら
  $('#fadeOut').on( 'click', function() {

    // 不透明を0にする（フェードアウトする）
    $('.box').css( 'opacity', 0 );

  });

  // id属性がfadeInの要素がクリックされたら
  $('#fadeIn').on( 'click', function() {

    // 不透明を1にする（フェードインする）
    $('.box').css( 'opacity', 1 );

  });

  // id属性がslideUpの要素がクリックされたら
  $('#slideUp').on( 'click', function() {

    // 高さを0にする（スライドアップにする）
    $('.box').css( 'height', 0 );

  });

  // id属性がslideDownの要素がクリックされたら
  $('#slideDown').on( 'click', function() {

    // 高さを200pxにする
    $('.box').css( 'height', 200 );

  });

});