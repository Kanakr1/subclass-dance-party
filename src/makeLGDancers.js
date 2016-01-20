var makeLGDancers = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, 2000);
  var settings = {
    "content": "url('imgs/lg.gif')",
    height: 160,
    width: 160,
    position: "absolute"
  };
  this.$node.css(settings);
};

makeLGDancers.prototype = Object.create(makeDancer.prototype);
makeLGDancers.prototype.constructor = makeLGDancers;


makeLGDancers.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};

