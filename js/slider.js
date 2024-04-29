const $slide = $(".items");
const $item = []
const itemCount = $slide.children().length;
let index = 0;
let running = false;
 
for(let i = 0; i < itemCount; i++){
  $item.push($slide.children().eq(i));
}
function slider(pre){
  running = true;
  let offset = pre ? 0 : "-200%";
  $slide.animate({
    left: offset,
  }, 600, "swing", function(){
    ordering(pre);
    running = false;
  });
}
function ordering(pre){
  if(pre){
    let num = index === 0 ? itemCount - 1 : index - 1;
    $item[num].remove().prependTo($slide);
    index = num;
  } else {
    $item[index].remove().appendTo($slide);
    if (index === itemCount - 1) {
      index = 0;
    }else{
      index += 1;
    }
  }
  $slide.css("left", "-100%");
}

let sliderInterval = setInterval(slider, 5000);

if("ontouchstart" in window){
  $(".buttons").remove();
  let startX, endX;
  $(".slider").on("touchstart", function(event){
    startX = event.originalEvent.changedTouches[0].pageX;
    endX = startX;
  }).on("touchmove", function(event){
    endX = event.originalEvent.changedTouches[0].pageX;
  }).on("touchend", function(event){
    let diffX = endX - startX;
    if(Math.abs(diffX) > 100){
      if(running) return;
      clearInterval(sliderInterval);
      let pre = diffX > 0 ? true : false;
      slider(pre);
    }
  });
} else {
  $(".button").on("click", function(){
    if(running) return;
    clearInterval(sliderInterval);
    let pre = $(this).is(".pre") ? true : false;
    slider(pre);
  });
}

