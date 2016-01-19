var makeLSP = function(top, left, timeBetweenSteps) {
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, 2000);
  var settings = {
    "content": "url('imgs/LSP.gif')",
    height: 160,
    width: 160,
    position: "absolute"
  };
  this.$node.css(settings);
};

makeLSP.prototype = Object.create(makeDancer.prototype);
makeLSP.prototype.constructor = makeLSP;

makeLSP.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    makeDancer.prototype.step.call(this);

    var newTop = $("body").height() * Math.random();
    var newLeft = $("body").width() * Math.random();
    this.$node.animate({
      left: newLeft,
      top: newTop
    }, 20000);

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    //this.$node.toggle();
  };


    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    //this.$node.toggle();


