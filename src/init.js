$(document).ready(function() {
  window.dancers = [];
  var aligned = false;
  
  var lineUpFunc = function () {
  if (!aligned){
    for (var i = 1; i <= dancers.length; i ++){
      var leftDist = 60*i-170;
      var newStyle = {
        top: 575,
        left: leftDist 
      };
      dancers[i-1].$node.css(newStyle);
      $('#lineUp').html("Split 'em up!");
    }
    aligned=true;
    } else if (aligned) {
      for (var j= 0; j < dancers.length; j ++){
        var h = $("body").height() * Math.random()*0.7 + ($("body").height()*0.3);
        var w = $("body").width() * Math.random() - 0.15* $("body").width();
        dancers[j].setPosition(h, w);
      }
      $('#lineUp').html("Line 'em up!");
      aligned= false;
    }
  };

  $('#lineUp').on('click', lineUpFunc);

  $(".addDancerButton").on("click", function(event) {
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random()*0.7 + ($("body").height()*0.3),
      $("body").width() * Math.random() - 0.15* $("body").width(), 
      Math.random() * 1000
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });
});

