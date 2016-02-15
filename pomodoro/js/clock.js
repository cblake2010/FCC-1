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
    this.maxSessionLength = 25;
    this.maxBreakLength = 10;
    this.active = "session";
    this.updateDisplay();
  };

  clockObj.prototype.updateDisplay = function() {
    $("#break-control > p:nth-of-type(2)").html(this.breakLength);
    $("#session-control > p:nth-of-type(2)").html(this.sessionLength);
    $("#clock-display > p").html(this.minutes + ":" + this.seconds);
    $(" .clock").css("background", "linear-gradient(180deg, cyan " + this.remaining + "%, pink " + this.complete + "%)");

    if (this.active === "session") {
      $("#session-control").css("background", "green");
      $("#break-control").css("background", "none");
    } else if (this.active === "break") {
      $("#break-control").css("background", "green");
      $("#session-control").css("background", "none");
    }
  };

  //Decreases time by 1 Second Units
  clockObj.prototype.timeDecrement = function() {
    //Time Reached 0 change from session to break and reset
    if (this.seconds === 0 && this.minutes === 0) {
      if (this.active === "session") {
        this.active = "break";
        this.minutes = this.breakLength;
      } else {
        this.active = "session";
        this.minutes = this.sessionLength;
      }
      //Still have minutes remaining
    } else if (this.seconds === 0) {
      this.minutes -= 1;
      this.seconds = 59;
    } else {
      this.seconds -= 1;
    }
    this.remaining = Math.round((((((this.minutes * 60) + this.seconds)) / (this.sessionLength * 60)) * 100));
    this.complete = 100 - this.remaining;
    this.updateDisplay();
  }

  clockObj.prototype.buttonPress = function(event) {
    var type = event.target.parentNode.id;
    var value = eval(event.target.attributes.value.value);

    switch (type) {
      case ("session-control"):
        this.sessionLength += value;
        if (this.sessionLength < this.minLength) {
          this.sessionLength = this.minLength;
        };
        if (this.sessionLength > this.maxSessionLength) {
          this.sessionLength = this.maxSessionLength;
        };
        if (this.active === "session") {
          this.minutes = this.sessionLength;
          this.seconds = 0;
        };
        break;
      case ("break-control"):
        this.breakLength += value;
        if (this.breakLength < this.minLength) {
          this.breakLength = this.minLength;
        };
        if (this.breakLength > this.maxBreakLength) {
          this.breakLength = this.maxBreakLength;
        };
        if (this.active === "break") {
          this.minutes = this.breakLength;
          this.seconds = 0;
        };
        break;
      default:
    }

    this.updateDisplay();
  }

  $("#clock-display").click(function() {
    if (clock.state === "off") {
      clock.state = "on";
      timer = setInterval(function() {
        clock.timeDecrement()
      }, 1000);
    } else {
      clock.state = "off";
      clearInterval(timer);
    }
  });

  clock = new clockObj(25, 10);

  $(".control-button").click(function(event) {
    clock.buttonPress(event);
  });

});
