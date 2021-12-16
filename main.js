const img_src = ["img/dai1.png", "img/dai2.png", "img/dai3.png","img/dai4.png","img/dai6.png","img/dai7.png","img/dai8.png"];
let num = -1;

function slide_time() {
  if (num === 6) {
    num = 0;
  } else {
    num++;
  }
  document.getElementById("slide_img").src = img_src[num];
}

setInterval(slide_time, 1500)
      