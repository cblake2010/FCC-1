function updateDisplay(str) {
  $("#calc-display").html(str);
}

function resetDisplay() {
  updateDisplay("0.0");
  return [];
}

function buttonPress(arr, str) {

  if (str === "c") {
    arr.splice(arr.length-1,1);
  } else {
    arr.push(str);
  }
  updateDisplay(arr.join(""));
  return arr;
}

function equalPress(arr) {
  updateDisplay(eval(arr.join("")));
  return [];
}

$(document).ready(function() {
  var calcArr = [];

  $("calc-button").click(function() {calcArr = buttonPress(calcArr, $(this).html());});
  $("#1-button").click(function() {calcArr = buttonPress(calcArr, "1");});
  $("#2-button").click(function() {calcArr = buttonPress(calcArr, "2");});
  $("#3-button").click(function() {calcArr = buttonPress(calcArr, "3");});
  $("#4-button").click(function() {calcArr = buttonPress(calcArr, "4");});
  $("#5-button").click(function() {calcArr = buttonPress(calcArr, "5");});
  $("#6-button").click(function() {calcArr = buttonPress(calcArr, "6");});
  $("#7-button").click(function() {calcArr = buttonPress(calcArr, "7");});
  $("#8-button").click(function() {calcArr = buttonPress(calcArr, "8");});
  $("#9-button").click(function() {calcArr = buttonPress(calcArr, "9");});
  $("#div-button").click(function() {calcArr = buttonPress(calcArr, "/");});
  $("#mult-button").click(function() {calcArr = buttonPress(calcArr, "*");});
  $("#plus-button").click(function() {calcArr = buttonPress(calcArr, "+");});
  $("#min-button").click(function() {calcArr = buttonPress(calcArr, "-");});
  $("#dec-button").click(function() {calcArr = buttonPress(calcArr, ".");});
  $("#perc-button").click(function() {calcArr = buttonPress(calcArr, "%");});
  $("#c-button").click(function() {calcArr = buttonPress(calcArr, "c");});
  $("#ac-button").click(function() {calcArr = resetDisplay();});
  $("#equal-button").click(function() {calcArr = equalPress(calcArr);});
});
