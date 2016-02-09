//Todo
//Create Status Obj | numHasDecimal = Bool , atOperator = Bool , atAnswer = Bool

function updateDisplay(str) {
  $("#calc-display").html(str);
  return str;
}

function buttonPress(calculator.calcArr, str, calcStatus) {
  switch (str) {
    case "AC":
      calculator.allClear();
      updateDisplay("0.0");
      calculator.calcArr = [];
      break;
    case "C":
      calculator.calcArr.splice(calculator.calcArr.length - 1, 1);
      if (!calculator.calcArr[0]) {str="0.0";} else {str=calculator.calcArr.join("");}
      updateDisplay(str);
      break;
    case "Calc":
      str = updateDisplay(eval(calculator.calcArr.join("")));
      calculator.calcArr = [];
      calculator.calcArr.push(str);
      break;
    case ".":
      if (calculator.calcArr.indexOf(str) < 0 ) {calculator.calcArr.push(str);}
      updateDisplay(calculator.calcArr.join(""));
      break;
    default:
      calculator.calcArr.push(str);
      updateDisplay(calculator.calcArr.join(""));
  }
  return calculator;
}

$(document).ready(function() {
  function calculator(calcArr, atDecimal, atOperator, atAnswer) {
    this.calcArr = [];
    this.allCleer();
    function allClear(atDecimal, atOperator,atAnswer) {
      this.atDecimal = false;
      this.atOperator = false;
      this.atAnswer = false;
      console.log("allClear");
    }
  };

  $(".calc-button").click(function() {
    calculator = buttonPress(calculator, $(this).html());
  });
});
