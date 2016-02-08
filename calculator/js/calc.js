function updateDisplay(str) {
  $("#calc-display").html(str);
}

function buttonPress(arr, str) {
  switch (str) {
    case "ac":
      updateDisplay("0.0");
      arr = [];
      break;
    case "c":
      arr.splice(arr.length - 1, 1);
      break;
    case "=":
      updateDisplay(eval(arr.join("")));
      arr = [];
      break;
    default:
      updateDisplay(arr.push(str).join(""));
  }
  return arr;
}

$(document).ready(function() {
  var calcArr = [];

  $(".calc-button").click(function() {
    calcArr = buttonPress(calcArr, $(this).html());
  });
});
