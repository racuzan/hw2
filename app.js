function timer() {
  let obj = document.getElementById("redirectTimer");
  obj.innerHTML--;
  let tnt = document.querySelector(".tnt");

  if (obj.innerHTML == 0) {
    tnt.style = "    background-image: url(img/after.jpg); left: 800px; top: 281px";
    redirectTimer.style = "    display:none";
    setTimeout(function () {}, 1000);
  } else {
    setTimeout(timer, 1000);
  }
}
setTimeout(timer, 1000);
