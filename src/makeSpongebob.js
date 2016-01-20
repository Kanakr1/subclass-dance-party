var makeSpongebob = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, 2000);
  var settings = {
    "content": "url('imgs/spongebob.gif')",
    height: 160,
    width: 260,
    position: "absolute"
  };
  this.$node.css(settings);
  this.$node.on('mouseover', this.flip);
};

makeSpongebob.prototype = Object.create(makeDancer.prototype);
makeSpongebob.prototype.constructor = makeSpongebob;



