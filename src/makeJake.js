var makeJake = function(top, left, timeBetweenSteps) {
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, 2000);
  var settings = {
    "content": "url('imgs/jake.gif')",
    height: 200,
    width: 250,
    position: "absolute"
  };
  this.$node.removeClass("dancer");
  this.$node.css(settings);
  this.$node.on('mouseover', this.grow.bind(this));
};

makeJake.prototype = Object.create(makeDancer.prototype);
makeJake.prototype.constructor = makeJake;

makeJake.prototype.grow  = function (){
  this.$node.animate({height: '+=200px', width: '+=200px', left: "-=125px", top: "-=150px"},2000);
};


makeJake.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    makeDancer.prototype.step.call(this);
//    makeDancer.prototype.setPosition.call(this, $("body").height() * Math.random(), $("body").width() * Math.random());
  //  this.$node.addClass('mirror'); 

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    //this.$node.toggle();
  };

