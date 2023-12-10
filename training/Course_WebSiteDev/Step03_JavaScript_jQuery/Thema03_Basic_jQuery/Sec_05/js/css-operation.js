$(function() {

  // id属性がredの要素がクリックされたら
  $('#red').on( 'click', function() {
    // id属性がtargetの要素のcolorをredにする
    $('#target').css( 'color', 'red' );

  });

  // id属性がblueの要素がクリックされたら
  $('#blue').on( 'click', function() {
    // id属性が#targetの要素のcolorをblueにする
    $('#target').css( 'color', 'blue' );
});

});