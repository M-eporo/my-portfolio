let $items = $(".items");
let item = [];
let order = [];
let itemCount = $items.children().length;
let index = 0;
let running = false;

const $ul = $("<ul>").appendTo($(".slider"));
$ul.addClass("dot-btn");

for(let i = 0; i < itemCount; i++){
  item.push($items.children().eq(i));
  order.push(i);
  item[i].css("order", i);
  $ul.append($("<li>"));
}
$ul.find("li").each(function(){
  $(this).html('<i class="fa-regular fa-circle"></i>');
});

function slider(prev){
  running = true;
  let offset = prev ? 0 : "-200%";
  $items.animate({
    left: offset,
  }, 600, "swing", function(){
    ordering(prev);
    running = false;
  });
}

function ordering(prev){
  if(prev) {
    let i = index > 0 ? index - 1 : itemCount - 1;
    item[i].css("order", order[i] -= itemCount);
    index = i;
  } else {
    item[index].css("order", order[index] += itemCount);
    index = index < itemCount - 1 ? index + 1 : 0;
  }
  $items.css("left", "-100%");
}

let setSlider = setInterval(slider, 5000);

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
      clearInterval(setSlider);
      let prev = diffX > 0 ? true : false;
      slider(prev);
    }
  });
} else {
  $(".button").on("click", function(){
    if(running) return;
    clearInterval(setSlider);
    let prev = $(this).is(".prev") ? true : false;
    slider(prev);
  });
}

$(".dot-btn").each(function(){
  $(this).children($("li")).on("click", function(){
    if(running) return;
    
    
    let arry = [];
    for(let i = 0; i < itemCount; i++){
      //orderを配列に格納
      arry.push(item[i].prop("style").order);
    }
    console.log(arry);
    //ボタンのインデックス番号
    let targetIndex = item[$(this).index()].index();
    //ボタンのインデックス番号に対するorderの数値
    let targetOrder = arry[targetIndex];
    
    console.log(targetIndex, targetOrder);
    //昇順に並び替え
    arry.sort((a,b) => a - b);
    console.log(arry);
    
    const isTargetOrder = (elem) => elem === targetOrder;
    console.log(arry.findIndex(isTargetOrder));
    //orderの数値と合致する要素のインデックス番号を取得
    const newIndex = arry.findIndex(isTargetOrder);
    console.log(newIndex);
  
    $items.animate({
      left: `-${newIndex}` * 100 + "%",
    }, 600, "swing");
  });
});