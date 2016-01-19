var makeSpongebob = function(top, left, timeBetweenSteps) {
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
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


makeSpongebob.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    makeDancer.prototype.step.call(this);
//    makeDancer.prototype.setPosition.call(this, $("body").height() * Math.random(), $("body").width() * Math.random());
  //  this.$node.addClass('mirror'); 

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    //this.$node.toggle();
  };

