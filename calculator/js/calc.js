function updateDisplay(arr) {
  $("#calc-display").html(arr.join());
}

function buttonPress(arr, str) {
  arr.push(str);
  updateDisplay(arr);
  return arr;
}

$(document).ready(function() {
  var calcArr = [];
  $("#0-button").click(function() {calcArr = buttonPress(calcArr, "0");});
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
  $("#perc-button").click(function() {calcArr = buttonPress(calcArr, "%");});
  $("#c-button").click(function() {});
  $("#ac-button").click(function() {});
  $("#equal-button").click(function() {});
});
