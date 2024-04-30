$(function() {
  $('.hamburger-btn').on('click', function() {
    $(this).toggleClass('open');
    $(".hamburger-btn-area").toggleClass('open');
    if($(".mask").hasClass("open")) {
      $(".mask").removeClass("open").addClass("close");
    }else {
      $(".mask").removeClass("close").addClass("open");
    }
  });
});
