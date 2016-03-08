var makeSpongebob = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, 2000);
  var settings = {
    "content": "url('imgs/spongebob.gif')",
    height: 160,
    width: 300,
    position: "absolute"
  };
  this.$node.removeClass("dancer");
  this.$node.css(settings);
  this.$node.on('mouseover', this.flip);
};

makeSpongebob.prototype = Object.create(makeDancer.prototype);
makeSpongebob.prototype.constructor = makeSpongebob;


makeSpongebob.prototype.step = function() {
    makeDancer.prototype.step.call(this);

  };


makeSpongebob.prototype.flip = function() {
    this.$node.addClass('mirror'); 
    
  };


