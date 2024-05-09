let i = 1;
let preScroll = $(window).scrollTop();
let target;
let direction;
const height = $(window).height();

$(window).on("scroll", function(event){
  let scroll = $(window).scrollTop();
  if((scroll - preScroll) > 50){
    target = $(`<div class=target id=${i}></div>`).appendTo($("body"));
    target.prop("id", i).css("top", scroll + (height / 2));
    normalScroll(target.prop("id", i), i);
    vanish(target.prop("id", i));
    remove(target.prop("id", i));
    i += 1;
    preScroll = scroll;
  } else if (preScroll > scroll && (preScroll - scroll) > 50){
    target = $(`<div class=target id=${i}></div>`).appendTo($("body"));
    target.prop("id", i).css("top", scroll + (height / 2));
    reverseScroll(target.prop("id", i), i);
    vanish(target.prop("id", i));
    remove(target.prop("id", i));
    i += 1;
    preScroll = scroll;
  }
});

function vanish(elem){
  setTimeout(() => {
    elem.fadeOut(300);
  }, 1000);
}
function remove(elem){
  setTimeout(() => {
    elem.remove();
  },1500);
}
function normalScroll(elem, i){
  if((i % 2)){
    direction = "right";
    elem.addClass(direction);
  } else {
    direction = "left";
    elem.addClass(direction);
  }
}
function reverseScroll(elem, i){
  if((i % 2)){
    direction = "right-reverse";
    elem.addClass(direction);
  } else {
    direction = "left-reverse";
    elem.addClass(direction);
  }
}