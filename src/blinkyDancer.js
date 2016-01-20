var makeLGDancers = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, 2000);
  var settings = {
    "content": "url('imgs/spongebob.gif')",
    height: 160,
    width: 260,
    position: "absolute"
  };
  this.$node.removeClass("dancer");
  this.$node.css(settings);
  this.$node.on('mouseover', this.flip);
};

makeLGDancers.prototype = Object.create(makeDancer.prototype);
makeLGDancers.prototype.constructor = makeLGDancers;


makeLGDancers.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};

