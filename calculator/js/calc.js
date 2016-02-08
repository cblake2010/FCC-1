function updateDisplay(str) {
  $("#calc-display").html(str);
}

function buttonPress(arr, str) {
  arr.push(str);
  console.log(str);
  switch (str) {
    case "AC":
      updateDisplay("0.0");
      arr = [];
      break;
    case "C":
      arr.splice(arr.length - 1, 1);
      updateDisplay(arr);
      break;
    case "Calc":
      console.log("RunningCalc");
      updateDisplay(eval(arr.join("")));
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
