function updateDisplay(str) {
  $("#calc-display").html(str);
}

function buttonPress(arr, str) {
  arr.push(str);
  switch (arr[arr.length-1]) {
    case "AC":
      updateDisplay("0.0");
      arr = [];
      break;
    case "C":
      arr.splice(arr.length - 1, 2);
      updateDisplay(arr);
      break;
    case "Solution":
      updateDisplay(eval(  arr.splice(arr.length - 1, 2).join("")));
      arr = [];
      break;
    default:
      updateDisplay(arr.join(""));
  }
  return arr;
}

$(document).ready(function() {
  var calcArr = [];

  $(".calc-button").click(function() {
    calcArr = buttonPress(calcArr, $(this).html());
  });
});
