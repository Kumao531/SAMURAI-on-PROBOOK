$(function() {

  /*
  // id属性がfadeOutの要素がクリックされたら
  $('#fadeOut').on( 'click', function() {

    // フェードアウトする
    $('.box').fadeOut();
    
  });

  // id属性fadeInの要素がクリックされたら
  $('#fadeIn').on( 'click', function() {

    $('.box').fadeIn();

  });
  */

  $('#fadeToggle').on( 'click', function() {

    $('.box').fadeToggle();

  });

});