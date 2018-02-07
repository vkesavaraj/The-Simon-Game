// Uses jquery 



var strict = "no";
var power = "OFF";
var i = 0;
var computerSequence = [];
var playerSequence = [];
var sequence;
var count;
var red = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
var green = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
var blue = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"); 
var yellow = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
var error = new Audio("http://codingtutorials360.com/14244764.mp3");

function start() {
  i = 0;
  computerSequence = [];
  playerSequence = [];
  sequence = Math.floor(Math.random() * 4);
  computerSequence.push(sequence);
}

function computerSet() {
  setTimeout(function() {
    console.log(computerSequence);
    console.log(playerSequence);
    if (computerSequence[i] == 0) {
      $("#blue").css("background", "white");
      blue.play();
    } else if (computerSequence[i] == 1) {
      $("#green").css("background", "white");
      green.play();
    } else if (computerSequence[i] == 2) {
      $("#yellow").css("background", "white");
      yellow.play();
    } else if (computerSequence[i] == 3) {
      $("#red").css("background", "white");
      red.play();
    }
    i++;
    setTimeout(function() {
      $("#blue").css("background", "blue");
      $("#green").css("background", "green");
      $("#yellow").css("background", "yellow");
      $("#red").css("background", "red");
    }, 500);
    if (i < computerSequence.length) {
      computerSet();
    }
  }, 1000);
}

function playerSet(input) {
  switch (input) {
    case "blue":
      playerSequence.push(0);
      break;
    case "green":
      playerSequence.push(1);
      break;
    case "yellow":
      playerSequence.push(2);
      break;
    case "red":
      playerSequence.push(3);
      break;
  }
}

function error(){
  $("#count").html("!!");
}

function gameplay() {
  if (strict == "no") {
    if (playerSequence.length == computerSequence.length) {
      if (
        playerSequence[playerSequence.length - 1] ==
        computerSequence[computerSequence.length - 1]
      ) {
        sequence = Math.floor(Math.random() * 4);
        computerSequence.push(sequence);
        if (playerSequence.length == 20) {
          alert("You Won");
          return;
        }
        i = 0;
        playerSequence = [];
        computerSet();
      } else {
        i = 0;
        $("#count").html("!!");
        playerSequence = [];
        computerSet();
      }
    } else {
      if (
        playerSequence[playerSequence.length - 1] !=
        computerSequence[playerSequence.length - 1]
      ) {
        i = 0;
        $("#count").html("!!");
        playerSequence = [];
        computerSet();
      } 
    }
  } else if (strict == "yes") {
    if (playerSequence.length == computerSequence.length) {
      if (
        playerSequence[playerSequence.length - 1] ==
        computerSequence[computerSequence.length - 1]
      ) {
        sequence = Math.floor(Math.random() * 4);
        computerSequence.push(sequence);
        if (playerSequence.length == 20) {
          alert("You Won");
          return;
        }
        i = 0;
        playerSequence = [];
        computerSet();
      } else {
        i = 0;
        $("#count").html("!!");
        start();
        computerSet();
      }
    } else {
      if (
        playerSequence[playerSequence.length - 1] !=
        computerSequence[playerSequence.length - 1]
      ) {
        i = 0;
        $("#count").html("!!");
        start();
        computerSet();
      }
    }
  }
}

$("#switch").click(function() {
  power = power == "OFF" ? "ON" : "OFF";
  $("#switch").toggleClass("ON");
  $("#switch").html(power);
  console.log(power);
  if(power == "OFF"){
    $("#count").html("--");
  }
});
$("#start").click(function() {
    $("#count").html("--");
  if (power == "ON") {
    i = 0;
    computerSequence = [];
    playerSequence = [];
    sequence = Math.floor(Math.random() * 4);
    computerSequence.push(sequence);
    computerSet();
  }
});
$(".color").click(function() {
  if (power == "ON"){
  var id = $(this).attr("id");
  if (computerSequence.length > 0 && computerSequence.length < 10) {
    $("#count").html("0" + computerSequence.length);
  } else if (computerSequence.length >= 10) {
    $("#count").html(computerSequence.length);
  }
  playerSet(id);
  gameplay();
  }
});

$("#strict").click(function() {
  if (power == "ON"){
  strict = strict == "no" ? "yes" : "no";
  if(strict == "yes"){
    $("#strict").css("background","#ffc700");
    $("#strict").css("box-shadow","0px 0px 5px 0px #ffc700");
  }else{
    $("#strict").css({"background":"#c69b00", "box-shadow":"none"})
  }
  }
});

$("#blue").click(function(){
  blue.play();
});

$("#green").click(function(){
  green.play();
});

$("#yellow").click(function(){
  yellow.play();
});

$("#red").click(function(){
  red.play();
});
