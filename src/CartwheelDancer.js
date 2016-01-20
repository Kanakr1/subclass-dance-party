var makeCartwheelDancer = function(top, left, timeBetweenSteps) {
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
  makeDancer.prototype.step.call(this);
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