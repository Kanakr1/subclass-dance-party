$(document).ready(function() {
  window.dancers = [];

  $(".addDancerButton").on("click", function(event) {
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var lineUpFunc = function () {
      console.log('hi');
      var newStyle = {
        top: 575
      };
      for (var i = 0; i <dancers.length; i ++){
        dancers[i].$node.css(newStyle);
      }
    };

    $('#lineUp').on('click', lineUpFunc);

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random()*.7 + ($("body").height()*.3), // randomizes y
      $("body").width() * Math.random() - 0.15* $("body").width(), // x
      Math.random() * 1000
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
    console.log(dancers);

  });
});

