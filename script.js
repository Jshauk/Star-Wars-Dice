$(document).ready(function(){
    $("#showCount1, \n\
      #showCount2, \n\
      #showCount3, \n\
      #showCount4, \n\
      #showCount5, \n\
      #showCount6, \n\
      #showCount7").html(0);
});

var     aResult = $("#greenResult"),
        pResult = $("#yellowResult"),
        dResult = $("#purpleResult"),
        cResult = $("#redResult"),
        bResult = $("#blueResult"),
        sResult = $("#blackResult"),
        fResult = $("#whiteResult");
var cnt1 = cnt2 = cnt3 = cnt4 = cnt5 = cnt6 = cnt7 = 0;

function clearMe() {
   $("#showCount1, \n\
      #showCount2, \n\
      #showCount3, \n\
      #showCount4, \n\
      #showCount5, \n\
      #showCount6, \n\
      #showCount7").html(0);

    $('.exp').remove();
    
    //allows clear button to be able to keep blank area in the results section
    if(cnt1===0){
            $("#greenResult").append("<img class='exp' src='blank.png'>");  
          }

    cnt1 = cnt2 = cnt3 = cnt4 = cnt5 = cnt6 = cnt7 = 0;
}


function clickButton1(){
  cnt1=parseInt(cnt1)+parseInt(1);
  var divData=document.getElementById("showCount1");
  divData.innerHTML=cnt1;//this part has been edited
}

function clickButton2(){
  cnt2=parseInt(cnt2)+parseInt(1);
  var divData=document.getElementById("showCount2");
  divData.innerHTML=cnt2;//this part has been edited
}

function clickButton3(){
  cnt3=parseInt(cnt3)+parseInt(1);
  var divData=document.getElementById("showCount3");
  divData.innerHTML=cnt3;//this part has been edited
}

function clickButton4(){
  cnt4=parseInt(cnt4)+parseInt(1);
  var divData=document.getElementById("showCount4");
  divData.innerHTML=cnt4;//this part has been edited
}

function clickButton5(){
  cnt5=parseInt(cnt5)+parseInt(1);
  var divData=document.getElementById("showCount5");
  divData.innerHTML=cnt5;//this part has been edited
}

function clickButton6(){
  cnt6=parseInt(cnt6)+parseInt(1);
  var divData=document.getElementById("showCount6");
  divData.innerHTML=cnt6;//this part has been edited
}

function clickButton7(){
  cnt7=parseInt(cnt7)+parseInt(1);
  var divData=document.getElementById("showCount7");
  divData.innerHTML=cnt7;//this part has been edited
}

function rollMe(){
    
    $('.exp').remove();

          if(cnt1===0){
            $("#greenResult").append("<img class='exp' src='blank.png'>");  
          }
          if(cnt2===0){
            $("#yellowResult").append("<img class='exp' src='blank.png'>");  
          }
          if(cnt3===0){
            $("#purpleResult").append("<img class='exp' src='blank.png'>");  
          }
          if(cnt4===0){
            $("#redResult").append("<img class='exp' src='blank.png'>");  
          }
          if(cnt5===0){
            $("#blueResult").append("<img class='exp' src='blank.png'>");  
          }
          if(cnt6===0){
            $("#blackResult").append("<img class='exp' src='blank.png'>");  
          }
          if(cnt7===0){
            $("#whiteResult").append("<img class='exp' src='blank.png'>");  
          }

    function aDie(){
        var image = Math.floor(Math.random()*8+1);
        switch(image){
          case 1:        
          $("#greenResult").append("<img class='exp' src='df/g1.png'>");
          break;
          case 2:          
          $("#greenResult").append("<img class='exp' src='df/g2.png'>");
          break;
          case 3:          
          $("#greenResult").append("<img class='exp' src='df/g3.png'>");
          break;
          case 4:          
          $("#greenResult").append("<img class='exp' src='df/g4.png'>");
          break;
          case 5:          
          $("#greenResult").append("<img class='exp' src='df/g2.png'>");
          break;
          case 6:          
          $("#greenResult").append("<img class='exp' src='df/g1.png'>");
          break;
          case 7:          
          $("#greenResult").append("<img class='exp' src='df/g5.png'>");
          break;
          case 8:          
         $("#greenResult").append("<img class='exp' src='df/g6.png'>");
          break;
        }        
    };
    function pDie(){

         var image = Math.floor(Math.random()*12+1);
         switch(image){
           case 1:           
           $("#yellowResult").append("<img class='exp' src='df/y1.png'>");
           break;
           case 2:           
           $("#yellowResult").append("<img class='exp' src='df/y2.png'>");
           break;
           case 3:
           $("#yellowResult").append("<img class='exp' src='df/y1.png'>");
           break;
           case 4:           
           $("#yellowResult").append("<img class='exp' src='df/y2.png'>");
           break;
           case 5:           
           $("#yellowResult").append("<img class='exp' src='df/y3.png'>");
           break;
           case 6:
           $("#yellowResult").append("<img class='exp' src='df/y4.png'>");
           break;
           case 7:           
           $("#yellowResult").append("<img class='exp' src='df/y3.png'>");
           break;
           case 8:           
          $("#yellowResult").append("<img class='exp' src='df/y4.png'>");
           break;
           case 9:           
          $("#yellowResult").append("<img class='exp' src='df/y5.png'>");
           break;
           case 10:           
          $("#yellowResult").append("<img class='exp' src='df/y6.png'>");
           break;
           case 11:           
          $("#yellowResult").append("<img class='exp' src='df/y5.png'>");
           break;
           case 12:           
          $("#yellowResult").append("<img class='exp' src='df/y7.png'>");
           break;
         }
     };
    function dDie(){

         var image = Math.floor(Math.random()*8+1);
         switch(image){
           case 1:           
           $("#purpleResult").append("<img class='exp' src='df/p1.png'>");
           break;
           case 2:           
           $("#purpleResult").append("<img class='exp' src='df/p2.png'>");
           break;
           case 3:           
           $("#purpleResult").append("<img class='exp' src='df/p3.png'>");
           break;
           case 4:           
           $("#purpleResult").append("<img class='exp' src='df/p1.png'>");
           break;
           case 5:           
           $("#purpleResult").append("<img class='exp' src='df/p4.png'>");
           break;
           case 6:           
           $("#purpleResult").append("<img class='exp' src='df/p5.png'>");
           break;
           case 7:           
           $("#purpleResult").append("<img class='exp' src='df/p6.png'>");
           break;
           case 8:           
          $("#purpleResult").append("<img class='exp' src='df/p1.png'>");
           break;
         }
     };
    function cDie(){

         var image = Math.floor(Math.random()*12+1);
         switch(image){
           case 1:           
           $("#redResult").append("<img class='exp' src='df/r1.png'>");
           break;
           case 2:           
           $("#redResult").append("<img class='exp' src='df/r2.png'>");
           break;
           case 3:           
           $("#redResult").append("<img class='exp' src='df/r1.png'>");
           break;
           case 4:           
           $("#redResult").append("<img class='exp' src='df/r2.png'>");
           break;
           case 5:           
           $("#redResult").append("<img class='exp' src='df/r3.png'>");
           break;
           case 6:           
           $("#redResult").append("<img class='exp' src='df/r4.png'>");
           break;
           case 7:           
           $("#redResult").append("<img class='exp' src='df/r3.png'>");
           break;
           case 8:           
          $("#redResult").append("<img class='exp' src='df/r4.png'>");
           break;
           case 9:           
          $("#redResult").append("<img class='exp' src='df/r5.png'>");
           break;
           case 10:           
          $("#redResult").append("<img class='exp' src='df/r6.png'>");
           break;
           case 11:           
          $("#redResult").append("<img class='exp' src='df/r5.png'>");
           break;
           case 12:           
          $("#redResult").append("<img class='exp' src='df/r7.png'>");
           break;
         }
     };
    function bDie(){

         var image = Math.floor(Math.random()*6+1);
         switch(image){
           case 1:           
           $("#blueResult").append("<img class='exp' src='df/bl1.png'>");
           break;
           case 2:           
           $("#blueResult").append("<img class='exp' src='df/bl2.png'>");
           break;
           case 3:           
           $("#blueResult").append("<img class='exp' src='df/bl3.png'>");
           break;
           case 4:           
           $("#blueResult").append("<img class='exp' src='df/bl4.png'>");
           break;
           case 5:           
           $("#blueResult").append("<img class='exp' src='df/bl5.png'>");
           break;
           case 6:           
           $("#blueResult").append("<img class='exp' src='df/bl4.png'>");
           break;
         }
     };
    function sDie(){

         var image = Math.floor(Math.random()*6+1);
         switch(image){
           case 1:           
           $("#blackResult").append("<img class='exp' src='df/bk1.png'>");
           break;
           case 2:           
           $("#blackResult").append("<img class='exp' src='df/bk2.png'>");
           break;
           case 3:           
           $("#blackResult").append("<img class='exp' src='df/bk3.png'>");
           break;
           case 4:           
           $("#blackResult").append("<img class='exp' src='df/bk1.png'>");
           break;
           case 5:           
           $("#blackResult").append("<img class='exp' src='df/bk2.png'>");
           break;
           case 6:           
           $("#blackResult").append("<img class='exp' src='df/bk3.png'>");
           break;
     };
 }
    function fDie(){

         var image = Math.floor(Math.random()*12+1);
         switch(image){
           case 1:           
           $("#whiteResult").append("<img class='exp' src='df/w3.png'>");
           break;
           case 2:           
           $("#whiteResult").append("<img class='exp' src='df/w2.png'>");
           break;
           case 3:           
           $("#whiteResult").append("<img class='exp' src='df/w3.png'>");
           break;
           case 4:           
           $("#whiteResult").append("<img class='exp' src='df/w2.png'>");
           break;
           case 5:           
           $("#whiteResult").append("<img class='exp' src='df/w3.png'>");
           break;
           case 6:           
           $("#whiteResult").append("<img class='exp' src='df/w2.png'>");
           break;
           case 7:           
           $("#whiteResult").append("<img class='exp' src='df/w3.png'>");
           break;
           case 8:           
          $("#whiteResult").append("<img class='exp' src='df/w1.png'>");
           break;  
           case 9:           
          $("#whiteResult").append("<img class='exp' src='df/w3.png'>");
           break;
           case 10:           
          $("#whiteResult").append("<img class='exp' src='df/w1.png'>");
           break;
           case 11:           
          $("#whiteResult").append("<img class='exp' src='df/w3.png'>");
           break;
           case 12:           
          $("#whiteResult").append("<img class='exp' src='df/w4.png'>");
           break;
         }
     };
 

    function abilityRolls(n) {
      var aRolls = new Array(n);
      for (var i = 0; i < n; ++i) {
          aRolls[i] = new aDie();
    };
      return aRolls;
    };

    function proRolls(n) {
      var pRolls = new Array(n);
      for (var i = 0; i < n; ++i) {
          pRolls[i] = new pDie();
    };
      return pRolls;
    };
    
    function diffRolls(n) {
      var dRolls = new Array(n);
      for (var i = 0; i < n; ++i) {
          dRolls[i] = new dDie();
    };
      return dRolls;
    };
    
    function challRolls(n) {
      var cRolls = new Array(n);
      for (var i = 0; i < n; ++i) {
          cRolls[i] = new cDie();
    };
      return cRolls;
    };
    
    function boostRolls(n) {
      var bRolls = new Array(n);
      for (var i = 0; i < n; ++i) {
          bRolls[i] = new bDie();
    };
      return bRolls;
    };
    
    function setRolls(n) {
      var sRolls = new Array(n);
      for (var i = 0; i < n; ++i) {
          sRolls[i] = new sDie();
    };
      return sRolls;
    };
    
    function forceRolls(n) {
      var fRolls = new Array(n);
      for (var i = 0; i < n; ++i) {
          fRolls[i] = new fDie();
    };
      return fRolls;
    };
    

    abilityRolls(cnt1),
    proRolls(cnt2),
    diffRolls(cnt3),
    challRolls(cnt4),
    boostRolls(cnt5),
    setRolls(cnt6),
    forceRolls(cnt7);
    
    //console.log(cnt1, cnt2, cnt3, cnt4, cnt5, cnt6, cnt7);
//console.log(aResults,pResults);
    // //aResults.forEach(function(index){
    //   var resultNumbers = this.vlaue;
    //   console.log(aResults[resultNumbers]);
     }

    //  // })
   // }

