/*ストップウォッチの課題の提出です。ミリ秒からの設定とストップを押した後、再度スタートできるように非活性化の箇所を修正しました。レビューお願いします。*/
$(function () {
  let sec = 0;
  let min = 0;
  let hour = 0;
  
  /*スタート*/
  $('#start').click(function() {
  
    $('#time').html('0:0:0:0');
    timer = setInterval(countup, 15);

    $('#start').prop('disabled', false);
    $('#stop,#reset').prop('disabled', false);
  });

  /*ストップ*/
  $('#stop').click(function() {
    /*一時停止*/
    clearInterval(timer);

   $('#stop').prop('disabled', false);
  });

  /*リセット*/
  $('#reset').click(function() {
    $('#time').html('0:0:0:0');
    clearInterval(timer);
  });

/*カウントアップ*/
  function countup()
  {
    sec += 1;

    if (sec > 59) {
      sec = 0;
      min += 1;
    }

    if (min > 59) {
      min = 0;
      hour += 1;
    }

    /*0:0:0:0*/
    sec_number = (sec);
    min_number = (min);
    hour_number = (hour);

    $('#time').html( '0' + ':' + hour_number + ':' + min_number  + ':' + sec_number  );
  }
});
