var userRating = 0;

$(".RateBtn").click(function() {
  $(this).addClass("orange");
  userRating = $(this).text();
});



$(".SubBtn").click(function() {
  $("#rateBox").css("display", "none");
  $("#rateBox").css("visibility", "hidden");
  $("#thankYouBox").css("display", "block");
  $("#thankYouBox").css("visibility", "visible");
  $("#result").text("You selected "+ userRating +" out of 5");
});


// $('#id').hide();
// $('#id').show();
