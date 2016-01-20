var makeKenny = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, 2000);
  var settings = {
    "content": "url('imgs/sp.gif')",
    height: 250,
    width: 350,
    position: "absolute"
  };
  this.$node.css(settings);
  this.$node.on('click', this.explosion.bind(this));
};

makeKenny.prototype = Object.create(makeDancer.prototype);
makeKenny.prototype.constructor = makeKenny;


makeKenny.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};
makeKenny.prototype.explosion = function() {
  this.$node.toggle("explode", {pieces: 32}, 1000);
};

