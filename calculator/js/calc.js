function isOperator(str) {
  var bool;
  switch (str) {
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
    default:
      //If the first element of the array == the solution
      //We are at answer status and str ! operator
      if ((calculator.calcArr[calculator.calcArr.length - 1] === calculator.solution) && (!isOperator(str))) {
        calculator.allClear();
      }  else if (isOperator(str) && isOperator(calculator.calcArr[calculator.calcArr.length - 1])) {
        calculator.calcArr.splice(calculator.calcArr[calculator.length - 1, 1])
      } else if (str === "." && calculator.atDecimal === true) {
        str = "";
      }
      calculator.appendValue(str);
  }
  return calculator;
}



$(document).ready(function() {


  //Create Calculator Object
  function calculatorObj(arr, str, bool) {
    this.calcArr = arr;
    this.calcDisplay = str;
    this.atDecimal = bool;
  };

  calculatorObj.prototype.updateDisplay = function() {
    $("#calc-display").html(this.calcDisplay);
    if (this.calcArr[this.calcArr.length - 1] === ".") {
      this.atDecimal = true;
    } else if (isOperator(this.calcArr[this.calcArr.length - 1])) {
      this.atDecimal = false;
    }
  }

  calculatorObj.prototype.allClear = function() {
    this.calcArr = [];
    this.calcDisplay = "0.0";
    this.atDecimal = false;
    this.updateDisplay();
    return this;
  }

  calculatorObj.prototype.clear = function() {
    //Remove Last Element and check if it's a decimal
    this.calcArr.splice(this.calcArr.length - 1, 1)
      //If Removed Only Element All Clear
    if (!this.calcArr[0]) {
      this.allClear();
    } else {
      this.calcDisplay = this.calcArr.join("");
    }
    this.updateDisplay();
    return this;
  }

  calculatorObj.prototype.appendValue = function(str) {

    this.calcArr.push(str);
    this.calcDisplay = this.calcArr.join(" ");
    //Clear the solution after use.
    this.solution = "";

    //Push Next Entered Value to Array and Display it
    this.updateDisplay();
    return this;
  }

  calculatorObj.prototype.calc = function() {
    this.solution = eval(this.calcArr.join(""));
    this.calcDisplay = this.solution;
    this.calcArr = [];
    this.calcArr.push(this.solution);
    this.updateDisplay();
    return this;
  }

  calculator = new calculatorObj();
  calculator.allClear();

  $(".calc-button").click(function() {
    calculator = buttonPress(calculator, $(this).html());
  });
});
