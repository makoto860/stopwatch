$(function () {
  let sec = 0;
  let min = 0;
  let hour = 0;
  
  let timer;

  /*スタート*/
  $('#start').click(function() {
    /*0:0:0:0から*/
    sec = 0;
    min = 0;
    
    $('#time').html('0:0:0:0');
    timer = setInterval(countup, 1000);

    $(this).prop('disabled', true);
    $('#stop,#reset').prop('disabled', false);
  });

  /*ストップ*/
  $('#stop').click(function() {
    /*一時停止*/
    clearInterval(timer);

    $(this).prop('disabled', true);
  });

  /*リセット*/
  $('#reset').click(function() {
    sec = 0;
    min = 0;
    
    $('#time').html('0:0:0:0');
    clearInterval(timer);

    $('#stop,').prop('disabled', true);
    $('#start').prop('disabled', false);
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

    $('#time').html( '0' + ':' + hour_number  + ':' + min_number + ':' + sec_number);
  }
});
