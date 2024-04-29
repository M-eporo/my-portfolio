$(function(){
  $("a[href^='#']").on("click", function(){
    const href = $(this).attr("href");
    let $target;

    if(href === "#") {
      $target = $("html");
    } else {
      $target = $(href);
    }

    $("html").animate({
      scrollTop: $target.offset().top,
    }, 600, "swing");
    return false;
  });

  $(window).on("scroll", function() {
    if($(window).scrollTop() >= 150){
      $(".top-btn").fadeIn();
    } else {
      $(".top-btn").fadeOut();
    }	
  });
});
