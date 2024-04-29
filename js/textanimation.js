function rollAnimeControl() {
  $(".roll-animation").each(function() {
    let elmPosition = $(this).offset().top - 50;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    const childs = $(this).children();
    if(scroll > elmPosition - windowHeight) {
      $(childs).each(function(i){
        if(i < 10){  //0.1s, 0.2s, 0.3s ,0.4s ,0.5s ,0.6s ,0.7s ,0.8s ,0.9s
          $(this).css("transition-delay", `.${i}s`);
        }else{
          let n = i / 10;
          $(this).css("transition-delay", `${n}s`);
        }
      });
      //roll-animationに対して付与
      $(this).addClass("roll");
    }else{
      $(childs).each(function() {
        $(this).css("transition-delay", "0s");
      });
      $(this).removeClass("roll");
    }
  });
}

$(window).on("scroll", rollAnimeControl);

$(window).on("load",function() {
  const element = $(".roll-animation");
  element.each(function() {
    const text = $(this).text();
    let textBox = "";
    text.split("").forEach((t, i) => {
      if(t !== " "){
        if(i < 10){
          textBox += '<span style="transition-delay:.' + i + 's;">' + t + '</span>'; 
        } else {
          let n = i / 10;
          textBox += '<span style="transition-delay:' + n + 's;">' + t + '</span>'
        }
      }else{
        textBox += t;
      }
    });
    $(this).html(textBox);
  });
  rollAnimeControl();
});