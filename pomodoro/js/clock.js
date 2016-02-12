$(document).ready(function() {
  //Create Calculator Object
  function clockObj(sessionLength, breakLength) {
    this.sessionLength = sessionLength;
    this.breakLength = breakLength;
    this.minutes = sessionLength
    this.seconds = 0;
    this.minLength = 1;
    this.maxLength = 25;
  };

  clockObj.prototype.updateDisplay = function() {
    console.log(this.minutes + ":" + this.seconds);
    $("#clock-display").html(this.minutes + ":" + this.seconds);
  };

  //Decreases time by 1 Second Units
  clockObj.prototype.timeDecrement = function() {
    if (this.seconds === 0) {
      this.minutes -= 1;
      this.seconds = 59;
    } else {
      this.seconds -= 1;
    }
  }

  clockObj.prototype.runClock = function() {
    //Time on the clock run the loop
    while (this.minutes > 0 || this.seconds > 0) {
        //subtract a second
        this.timeDecrement();
        this.updateDisplay();
    }
  }

  clock = new clockObj(25, 10);
  clock.runClock();

});
