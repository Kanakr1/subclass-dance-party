
var makeDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
  this.step();
};

  makeDancer.prototype.constructor = makeDancer;

  makeDancer.prototype.step = function() {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  };

  makeDancer.prototype.lineUp = function (){
    var styleSettings = {
      top: 200
    };
    this.$node.css(styleSettings);
  };


  makeDancer.prototype.setPosition = function(top, left) {
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };


