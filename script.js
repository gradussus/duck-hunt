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

document.onclick = () => {
  duck.style.left = duck.offsetLeft - 10 + "px";
};
