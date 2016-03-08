var makeLSP = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, 1000);
  var settings = {
    "content": "url('imgs/LSP.gif')",
    height: 160,
    width: 160,
    position: "absolute"
  };
  this.$node.css(settings);
};

makeLSP.prototype = Object.create(makeDancer.prototype);
makeLSP.prototype.constructor = makeLSP;

makeLSP.prototype.step = function() {
    makeDancer.prototype.step.call(this);
    this.detect();
    var newTop = $("body").height() * Math.random();
    var newLeft = $("body").width() * Math.random();
    this.$node.animate({
      left: newLeft,
      top: newTop
    }, 20000);
  };

makeLSP.prototype.detect = function(first_argument) {  
  for (var i=0; i < dancers.length; i++){ 
    var currPos = this.$node.offset();
    var otherPos = dancers[i].$node.offset(); 
    console.log(otherPos);
    var leftDiff = Math.abs(currPos.left-otherPos.left);
    var topDiff = Math.abs(currPos.top-otherPos.top);
    if ((leftDiff<50 && topDiff<50)&& !(leftDiff===0 && topDiff===0)){
      this.$node.toggle();
    }
  }
};
