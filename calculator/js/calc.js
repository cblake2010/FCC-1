function buttonPress(calculator, str) {
  switch (str) {
    case "AC":
      calculator.allClear();
      break;
    case "C":
      calculator.clear();
      break;
    case "Calc":
      calculator.calc();
      break;
    case ".":
      if (calculator.calcArr.indexOf(str) < 0) {
        calculator.calcArr.push(str);
      }
      updateDisplay(calculator.calcArr.join(""));
      break;
    default:
      calculator.appendValue(str);
  }
  return calculator;
}

$(document).ready(function() {
  var bool;
  String.prototype.isOperator = function() {
    switch (this) {
      case "*":
      case "/":
      case "+":
      case "-":
        bool = true;
        break;
      default:
      bool = false;
    }
    return bool;

  };
  //Create Calculator Object
  function calculatorObj(arr, str, sol) {
    this.calcArr = arr;
    this.calcDisplay = str;
    this.solution = sol;
  };

  calculatorObj.prototype.updateDisplay = function() {
    $("#calc-display").html(this.calcDisplay);
  }

  calculatorObj.prototype.allClear = function() {
    this.calcArr = [];
    this.calcDisplay = "0.0";
    this.updateDisplay();
    this.solution = "";
    return this;
  }

  calculatorObj.prototype.clear = function() {
    //Remove Last Element
    this.calcArr.splice(this.calcArr.length - 1, 1);
    //If Removed Only Element All Clear
    if (!this.calcArr[0]) {
      this.allClear();
    } else {
      this.calcDisplay = this.calcArr.join("");
    }
    updateDisplay();
    return this;
  }

  calculator.prototype.appendValue = function(str) {
    //If the first element of the array == the solution
    //We are at answer status
    if (this.calcArr[0] === this.solution) {
      //If str ! Operator All Clear Before Push
      if (!str.isOperator()) {
        this.allClear();
      }
      this.calcArr.push(str);
      this.calcDisplay = this.calcArr.join(" ");
      this.updateDisplay();
    }
    return this;
  }

  calculatorObj.prototype.calc = function() {
    this.solution = eval(calculator.calcArr.join(""));
    this.calcDisplay = this.solution;
    calculator.calcArr = [];
    calculator.calcArr.push(this.solution);
    return this;
  }

  calculator = new calculatorObj();
  calculator.allClear();

  $(".calc-button").click(function() {
    calculator = buttonPress(calculator, $(this).html());
  });
});
