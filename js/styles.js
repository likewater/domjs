

$(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
    $("p").css("color", "blue");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
});

$(document).ready(function() {
  alert("help me");
});
