function updateDisplay(str) {
  if (str==="") {str="0.0";}
  $("#calc-display").html(str);
}

function buttonPress(arr, str) {
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
      updateDisplay(eval(arr.join("")));
      arr = [];
      break;
    default:
      arr.push(str);
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
