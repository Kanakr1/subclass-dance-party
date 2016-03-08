var makeJake = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, 2000);
  var settings = {
    "content": "url('imgs/jake.gif')",
    height: 200,
    width: 250,
    position: "absolute"
  };
  this.$node.css(settings);
  this.$node.on('mouseover', this.grow.bind(this));
};

makeJake.prototype = Object.create(makeDancer.prototype);
makeJake.prototype.constructor = makeJake;

makeJake.prototype.grow  = function (){
  this.$node.animate({height: '+=200px', width: '+=200px', left: "-=125px", top: "-=150px"},2000);
};


makeJake.prototype.step = function() {
    makeDancer.prototype.step.call(this);

  };

