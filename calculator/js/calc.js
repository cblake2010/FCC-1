function isOperator(str) {
  var bool;
  switch (str) {
    case "*":
    case "/":
    case "+":
    case "-":
    case "%":
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
      calculator.appendValue(str);
  }

  calculator.updateDisplay();
  return calculator;
}

$(document).ready(function() {
  //Create Calculator Object
  function calculatorObj(arr, str, bool, sol) {
    this.calcArr = arr;
    this.calcDisplay = str;
    this.atDecimal = bool;
    this.solution = sol;
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
    this.solution = "";
    this.atDecimal = false;
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
  }

  calculatorObj.prototype.appendValue = function(str) {

    //If the first element of the array == the solution
    //We are at answer status.  If at Answer Status and number is provided. All Clear
    if ((this.calcArr[this.calcArr.length - 1] === this.solution) && (!isOperator(str))) {
      this.allClear();
      this.calcArr.push(str);
      //If previous input and next input are operators, remove previous and add next.
    } else if (isOperator(str) && isOperator(this.calcArr[this.calcArr.length - 1])) {
      this.calcArr.splice(this.calcArr.length - 1, 1)
      this.calcArr.push(str);
      //Can't have 2 decimals in a number.  Remove it.
    } else if (str === "." && this.atDecimal === true) {
      //Do nothing because of decimal
    } else {
      this.calcArr.push(str);
    }

    //Create the Display string with space
    this.calcDisplay = this.calcArr.join(" ");

    //Clear the solution after use.
    this.solution = "";
  }

  calculatorObj.prototype.calc = function() {
    this.solution = eval(this.calcArr.join(""));
    this.calcDisplay = this.solution;
    this.calcArr = [];
    this.calcArr.push(this.solution);
  }

  calculator = new calculatorObj();
  calculator.allClear();

  $(".calc-button").click(function() {
    calculator = buttonPress(calculator, $(this).html());
  });
});
