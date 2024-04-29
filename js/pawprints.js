/*
let start = Math.random() * 100;
let topPosition = start;
let forward = 0;
let direction = Math.floor((Math.random() * 2) + 1) === 1 ? "45deg" : "135deg";

//足跡
const pawprint = $(".pawprint");
//描画領域
let height = $("#about").height();
//足跡の高さ / 2;
let pawprintHeight = (pawprint.height() / height) * 100;
//足跡の初期位置
pawprint.css("top", `${start}%`);
//足跡の角度  (1)
pawprint.css("transform", `rotate(${direction})`);

if (direction === "135deg") {
  topPosition += pawprintHeight;
} else {
  topPosition -= pawprintHeight;
}

fn();

async function fn(){
  let i = 0;
  while(i < 5){
    await fn1();
    await fn2();
    await fn3();
    await fn1();
    await fn2();
    await fn4();
    await fn3();
    await fn5();
    i++;
  }
  function fn1(){
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(1);
        pawprint.fadeIn(100);
        resolve();
      }, 1000);
    });
  }
  function fn2(){
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(2);
        pawprint.fadeOut(500);
        resolve();
      }, 1000);
    });
  }
  function fn3(){
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(3);
        forward += 60;
        console.log(topPosition);
        pawprint.animate({
          "left": forward,
          "top": topPosition + "%",
        }, 600, "linear");
        resolve();  
      }, 400);
    });
  }
  function fn4() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(4);
        direction = Math.floor((Math.random() * 2) + 1) === 1 ? "45deg" : "135deg";
        pawprint.css("transform", `rotate(${direction})`);
        if (direction === "135deg") {
          topPosition += pawprintHeight;
        } else {
          topPosition -= pawprintHeight;
        }
        
        resolve();
      }, 1000);
    });
  }
  function fn5(){
    return new Promise(resolve => {
      setTimeout(() => {
        if (direction === "135deg") {
          topPosition += pawprintHeight;
        } else {
          topPosition -= pawprintHeight;
        }
        resolve();
      }, 1000);
    });
  }
}
/*
pawprint.queue(function(){
  direction = Math.floor((Math.random() * 2) + 1) === 1 ? "45deg" : "135deg";
  if (direction === "135deg") {
    topPosition += pawprintHeight;
  } else {
    topPosition -= pawprintHeight;
  }
  forward += 60;
  $(this).dequeue();

});
pawprint.animate({
  "left": forward,
  "top": topPosition + "%",
}, 600, "linear");
pawprint.fadeIn(1000);
pawprint.fadeOut(1000);
pawprint.animate({
  "left": forward,
  "top": topPosition + "%",
}, 600, "linear");
pawprint.queue(function(){
  $(this).css("transform", `rotate(${direction})`);
  $(this).dequeue();
  resolve();
});

//4
/*

/*
1)rotate
2)fadeIn
3)fadeOut
4)move
5)fadeIn
6)fadeOut
7)rotate
8)move
9)fadeIn
10)fadeOut
11)rotate
12)move
13)fadeIn
14)fadeOut
*/
/*
let interval = setInterval(step, 1000);

function step(){
  pawprint.fadeIn(500);
  pawprint.fadeOut(500)
  pawprint.queue(function(){
    direction = Math.floor((Math.random() * 2) + 1) === 1 ? "45deg" : "135deg";
    $(this).css("transform", `rotate(${direction})`);
    if (direction === "135deg") {
      topPosition += pawprintHeight;
    } else {
      topPosition -= pawprintHeight;
    }
    forward += 60;
    $(this).dequeue();
  });
  pawprint.animate({
      "left": forward,
      "top": topPosition + "%",
  }, 600, "linear",function(){
    console.log(123);
  });
}
*/
