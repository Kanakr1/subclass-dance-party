var makeLSP = function(top, left, timeBetweenSteps) {
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, 2000);
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
    // call the old version of step at the beginning of any call to this new version of step
    
    makeDancer.prototype.step.call(this);
    this.detect();
    var newTop = $("body").height() * Math.random();
    var newLeft = $("body").width() * Math.random();
    this.$node.animate({
      left: newLeft,
      top: newTop
    }, 20000);


    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    //this.$node.toggle();
  };

makeLSP.prototype.detect = function(first_argument) {
 //creates a currPos.left and currPos.right property
  //console.log(currPos);
  
  for (var i=0; i < dancers.length; i++){
    var currPos = this.$node.offset();
    var otherPos = dancers[i].$node.offset();
    console.log(otherPos);
    var leftDiff = Math.abs(currPos.left-otherPos.left);
    var topDiff = Math.abs(currPos.top-otherPos.top);
    //console.log(otherPos.left, otherPos.right);
    // console.log(Math.abs(currPos.left-otherPos.left));
    // console.log(Math.abs(currPos.top-otherPos.top));
    if ((leftDiff<50 && topDiff<50)&& !(leftDiff===0 && topDiff===0)){
      this.$node.toggle();
    }
  // body..
  }
};

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    //this.$node.toggle();


