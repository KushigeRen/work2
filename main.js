/*タイマー初期値宣言*/
let timer = null;
let millisecond = 0;
let second = 0;
let minute = 0;
let hour = 0;

/*ボタン押下時の処理*/
$(document).ready(function(){
  /*スタートボタン*/
  $("#start").click(
    function(){
      /*ボタン制御*/
      $(this).prop("disabled",true);
      $("#stop").prop("disabled",false);
      $("#reset").prop("disabled",true);
      /*タイマースタート関数呼び出し*/
      startTimer();
    }
  );
  
  /*ストップボタン*/
  $("#stop").click(
    function(){
      /*ボタン制御*/
      $(this).prop("disabled",true);
      $("#start").prop("disabled",false);
      $("#reset").prop("disabled",false);
      /*タイマーストップ関数呼び出し*/
      stopTimer();
    }
  );
  
  /*リセットボタン*/
  $("#reset").click(
    function(){
      /*ボタン制御*/
      $(this).prop("disabled",true);
      $("#start").prop("disabled",false);
      $("#stop").prop("disabled",true);
      /*タイマーリセット関数呼び出し*/
      resetTimer();
    }
  );
});





/*タイマースタート関数*/
const startTimer =()=>{
  /*カウントアップ処理*/
  function event() {
    
    /*---桁あがり処理---*/
    if(millisecond === 10){
      second++;
      millisecond = 0;
    }
    
    if(second === 60){
      minute++;
      second = 0;
    }
    
    if(minute === 60){
      hour++;
      minute = 0;
    }
    /*--------------------*/
    
    /*HTML更新関数呼び出し*/
    updateTimer();
    
    millisecond++;
    
  }
  /*100ミリ秒ごとにカウントアップ処理を実行*/
  timer = setInterval(event, 100);
}

/*タイマーストップ関数*/
const stopTimer =()=>{
  clearInterval(timer);
}

/*タイマーリセット関数*/
const resetTimer =()=>{
  timer = null;
  millisecond = 0;
  second = 0;
  minute = 0;
  hour = 0;
  updateTimer();
}

/*HTML更新関数*/
const updateTimer =()=>{
    $("#millisecond").text(millisecond);
    $("#second").text(second);
    $("#minute").text(minute);
    $("#hour").text(hour);
  }
