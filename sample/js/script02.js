$(function(){
  
  
  $("#button01").on("click",function(){
    $("#content").text("よもや君に出会えようとは！");
  })

  $("#button02").on("click",function(){
    $("#content").html("<h2>htmlタグも使えるよ</h2>");
  })

  $("#button03").on("click",function(){
    $("#content").append("<p>追加</p>");
  })

  //ここからjavascriptの話

  let txt1 = "はじめましてだな、変数！";
  let txt2 = "あえて言わせてもらおう！練習であると！";
  let txt3 = "この気持ちまさしく愛だ！"
  let num1 = 100;
  let num2 = 50;
  let num3 = "50";

  $("#button04").on("click",function(){
    $("#content").text(txt1 + txt2 +　txt3);
  })

  $("#button05").on("click",function(){
    $("#content").text(num1 + num2 + num3);
  })
  

});