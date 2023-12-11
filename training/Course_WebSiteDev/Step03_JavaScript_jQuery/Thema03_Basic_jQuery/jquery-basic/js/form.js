$(function() {

  // 趣味のチェックボックスが変更されたら
  $('[name="hobby"]').on( 'change', function() {
    
    // チェック数が３以上になったら
    if ( $('[name="hobby"]:checked').length > 3 ) {

      // チェックをつけようとしたものを外す
      $(this).prop( 'checked', false );

      // 注意を促すメッセージを表示する
      alert( '3つまでしか選択できません' );
    
    }

  });

  // id属性がcheckの要素がクリックされたらー
  $('#check').on( 'click', function() {

    // 名前（テキストボックス）を取得する
    console.log( '名前：' + $('[name="username"]').val() );

    // 性別（ラジオボックス）を取得する
    console.log( '性別：' + $('[name="gender"]:checked').val() );

    // 血液型（セレクトボックス）を取得する
    console.log( '血液型：' + $('[name="blood"]').val() );

    // 趣味（チェックボックス）を取得する
    $('[name="hobby"]:checked').each(function() {
      console.log( "趣味：" + $(this).val() );
    });

  });

  // 名前が入力されたら
  $('[name="username"]').on( 'input', function() {
    let input = $(this).val();

    // 入力も文字があればボタンを押せる、なければボタンを押せなくする
    if (input) {

      $('#check').prop( 'disabled', false );

    } else {

      $('#check').prop( 'disabled', true );

    }
  });

});