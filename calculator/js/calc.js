function updateDisplay(str) {
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
      if (!arr[0]) {str="0.0";} else {str=arr.join("");}
      updateDisplay(str);
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
