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

$(document).ready(function() {


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

  calculatorObj.prototype.appendValue = function(str) {
    //If the first element of the array == the solution
    //We are at answer status and str ! operator
    if ((this.calcArr[this.calcArr.length-1] === this.solution) && (!isOperator(str))) {
      console.log("All Clear");
      this.allClear();
    }
    //Clear the solution after use.
    this.solution = "";
    //Push Next Entered Value to Array and Display it
    this.calcArr.push(str);
    this.calcDisplay = this.calcArr.join(" ");
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
