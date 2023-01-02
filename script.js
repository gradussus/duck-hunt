// let countClick = 0;
// let blockCount = document.querySelector("#count");
// let btn2 = document.querySelector("#btn2");
// let p2 = document.querySelector("#p2");
// let audioGun = document.querySelector("#audioGun");
// let btn3 = document.querySelector("#btn3");

// btn2.onclick = () => {
//   p2.style.background = "green";
// };
// btn3.onclick = () => {
//   audioGun.play();
// };

// function btnClick() {
//   countClick += 1;
//   blockCount.innerText = countClick;
// }

const duck = document.querySelector(".duck");
let imageDuck = 0;

const timerID = setInterval(() => {
  imageDuck += 1;

  duck.style.backgroundImage =
    "url(assets/images/duck/black/left/" + imageDuck + ".png)";

  if (imageDuck === 2) {
    imageDuck = -1;
  }

  duck.style.left = duck.offsetLeft - 10 + "px";

  if (duck.offsetLeft < 0) {
    clearInterval(timerID);
  }
}, 200);

document.onclick = () => {
  // imageDuck += 1;
  // duck.style.backgroundImage =
  //   "url(assets/images/duck/black/left/" + imageDuck + ".png)";
  // if (imageDuck === 2) {
  //   imageDuck = -1;
  // }
  // duck.style.left = duck.offsetLeft - 10 + "px";
};
