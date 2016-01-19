var makeCartwheelDancer = function(top, left, timeBetweenSteps) {
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, 2000);
  this.flipVal = 0;
  var settings = {
    "content": "url('imgs/flip.jpg')",
    height: 160,
    width: 160,
    position: "absolute"
  };
  this.$node.css(settings);
  this.$node.on('mouseover', this.flip.bind(this));
};

makeCartwheelDancer.prototype = Object.create(makeDancer.prototype);
makeCartwheelDancer.prototype.constructor = makeCartwheelDancer;


makeCartwheelDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    makeDancer.prototype.step.call(this);
//    makeDancer.prototype.setPosition.call(this, $("body").height() * Math.random(), $("body").width() * Math.random());
  //  this.$node.addClass('mirror'); 

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    //this.$node.toggle();
  };


makeCartwheelDancer.prototype.flip = function() {
  this.flipVal = this.flipVal + 45;
  if (this.flipVal > 360){
    this.flipVal = this.flipVal- 360;
  }
  var transformValue = 'rotate(' + this.flipVal + 'deg)';
  this.$node.css('transform', transformValue);
  return transformValue;
};
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    //this.$node.toggle();


