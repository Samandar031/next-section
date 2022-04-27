// let a = 600;
// let b = 0;
// let c = 0;
// next.addEventListener("click", function (e) {
//   e.preventDefault();
//   a = a - 200;

//   console.log(a);
//   tran.style.transform = `translateX(-${a}px)`;
//   if (a == 400) {
//     all[1].style.border = "4px solid blue";
//     b = -400;
//     tran.style.width = "200px";
//   } else if (a == 200) {
//     all[2].style.border = "4px solid blue";
//     b = -200;
//     tran.style.width = "400px";
//   } else if (a == 0) {
//     all[3].style.border = "4px solid blue";
//     b = 0;
//     tran.style.width = "600px";
//   } else if (a == 600) {
//     tran.style.width = "0";
//   }
// });

// prev.addEventListener("click", function (e) {
//   e.preventDefault();
//   b = b - 200;
//   console.log(b);
//   tran.style.transform = `translateX(${b}px)`;

//   if (b == -200) {
//     all[3].style.border = "4px solid aqua";
//     a = 200;
//     tran.style.width = "400px";
//   } else if (b == -400) {
//     all[2].style.border = "4px solid aqua";
//     a = 400;
//     tran.style.width = "200px";
//   } else if (b == -600) {
//     all[1].style.border = "4px solid aqua";
//     a = 600;
//     tran.style.width = "0px";
//   }
// });

// let tran = document.querySelector(".tran");
// let prev = document.querySelector(".prev");
// let next = document.querySelector(".next");

// let all = document.querySelectorAll(".one");

// let x = 0;
// let y = 0;

let tran = document.querySelector(".tran");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

let all = document.querySelectorAll(".one");

let x = 0;
let y = 0;

function func() {
  if (x >= 3) {
    x = 3;
  } else if (x < 0) {
    x = 0;
  }
  tran.style.width = `${x * 200}px`;
  all[x].style.border = "4px solid blue";
  all[x].style.color = "blue";
}

next.addEventListener("click", function () {
  x++;
  func();
});

prev.addEventListener("click", function () {
  x--;
  all[x + 1].style.border = "4px solid aqua";
  all[x + 1].style.color = "aqua";
  func();
});

let arr = [1, 2, 3, 4, 5, 6];
let str = arr
  .filter((val) => {
    return val > 2;
  })
  .map((val) => {
    return val * 10;
  })
  .reduce((yig, val) => {
    return yig + val;
  });

console.log(str);
