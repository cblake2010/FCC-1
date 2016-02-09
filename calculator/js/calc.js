//Possible To Do
//Create Status Obj | numHasDecimal = Bool , atOperator = Bool , atAnswer = Bool

function updateDisplay(str) {
  $("#calc-display").html(str);
  return str;
}

function buttonPress(arr, str, calcStatus) {
  switch (str) {
    case "AC":
      calcStatus.atAnswer = false;
      calcStatus.atOperator = false;
      calcStatus.hasDecimal = false;
      updateDisplay("0.0");
      arr = [];
      break;
    case "C":
      arr.splice(arr.length - 1, 1);
      if (!arr[0]) {str="0.0";} else {str=arr.join("");}
      updateDisplay(str);
      break;
    case "Calc":
      str = updateDisplay(eval(arr.join("")));
      arr = [];
      arr.push(str);
      break;
    case ".":
      if (arr.indexOf(str) < 0 ) {arr.push(str);}
      updateDisplay(arr.join(""));
      break;
    default:
      arr.push(str);
      updateDisplay(arr.join(""));
  }
  return arr;
}

$(document).ready(function() {
  var calcArr = [];
  var calcStatus = {
    atAnswer: false,
    hasDecimal: false,
    atOperator: false
  };

  $(".calc-button").click(function() {
    calcArr = buttonPress(calcArr, $(this).html(),calcStatus);
  });
});
