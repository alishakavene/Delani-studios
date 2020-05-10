$(document).ready(function() {
  //Portfolio label on hover effect
  $('#portfolio span').addClass("hide");
  $('#portfolio .doings').hover(function() {
    /*fade in code*/
    $(this).find('span').removeClass('hide');
    $(this).find('.doings').addClass('imageEffect');
  }, function() {
    /*fade out code*/
    $(this).find('span').addClass('hide');
    $(this).find('.doings').removeClass('imageEffect');
  });
  //What we do description toggle
  $(".first").click(function() {
    $(".illustration1").toggle(500);
    $(".details1").toggle(500);
  });
  $(".second").click(function() {
    $(".illustration2").toggle(500);
    $(".details2").toggle(500);
  });
  $(".third").click(function() {
    $(".illustration3").toggle(500);
    $(".details3").toggle(500);
  });
