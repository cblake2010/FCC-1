var timer;

$(document).ready(function() {
  //Create Calculator Object
  function clockObj(sessionLength, breakLength) {
    this.sessionLength = sessionLength;
    this.breakLength = breakLength;
    this.state = "off";
    this.complete = 0;
    this.remaining = 100;
    this.minutes = sessionLength
    this.seconds = 0;
    this.minLength = 1;
    this.maxLength = 25;
  };

  clockObj.prototype.updateDisplay = function() {
    $("#clock-display").html(this.minutes + ":" + this.seconds);
    $(" .clock").css( "background" , "linear-gradient(180deg, cyan " + this.remaining + "%, pink 0%)" );
  };

  //Decreases time by 1 Second Units
  clockObj.prototype.timeDecrement = function() {
    if (this.seconds === 0) {
      this.minutes -= 1;
      this.seconds = 59;
    } else {
      this.seconds -= 1;
    }
    this.remaining = Math.round((((((this.minutes * 60) + this.seconds))/(this.sessionLength*60))*100)) ;
    this.complete = 100-this.remaining;
    this.updateDisplay();
  }

  clockObj.prototype.runClock = function() {

  }

  $("#clock-display").click(function() {
    if (clock.state === "off" ) {
      clock.state = "on";
      timer = setInterval(function() {clock.timeDecrement()},1000);
    } else {
      clock.state = "off";
      clearInterval(timer);
    }
  });
  clock = new clockObj(25, 10);
  clock.updateDisplay();

});
