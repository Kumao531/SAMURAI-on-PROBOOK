$(function() {

  /*
  // id属性がaddの要素がクリックされたら
  $('#add').on( 'click', function() {
    //id属性がtargetの要素にclass属性sampleを追加する
    $('#target').addClass('sample');
  });

  // id属性がremoveの要素がクリックされたら
  $('#remove').on( 'click', function() {
    $('#target').removeClass( 'sample' );
  });
  */

  // id属性がtoggleの要素がクリックされたら
  $('#toggle').on( 'click', function() {
    $('#target').toggleClass('sample');
  });

  // id属性がhasの要素がクリックされたら
  $('#has').on( 'click', function() {
    // id属性がtargetの要素のclass属性sampleがあるか取得する
    let result = $('#target').hasClass('sample');

    if ( result ) {
      console.log('sampleクラスがあります');
    } else {
      console.log('sampleクラスがありません');
    }
  });
});