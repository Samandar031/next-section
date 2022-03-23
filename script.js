let tran = document.querySelector(".tran");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

let all = document.querySelectorAll(".one");
let a = 600;
let b = 0;

let d = 0;

next.addEventListener("click", function (e) {
  e.preventDefault();
  a = a - 200;

  console.log(a);
  tran.style.transform = `translateX(-${a}px)`;
  if (a == 400) {
    all[1].style.border = "4px solid blue";
    b = -400;
    tran.style.width = "200px";
  } else if (a == 200) {
    all[2].style.border = "4px solid blue";
    b = -200;
    tran.style.width = "400px";
  } else if (a == 0) {
    all[3].style.border = "4px solid blue";
    b = 0;
    tran.style.width = "600px";
  } else if (a == 600) {
    tran.style.width = "0";
  }
});

prev.addEventListener("click", function (e) {
  e.preventDefault();
  b = b - 200;
  console.log(b);
  tran.style.transform = `translateX(${b}px)`;

  if (b == -200) {
    all[3].style.border = "4px solid aqua";
    a = 200;
    tran.style.width = "400px";
  } else if (b == -400) {
    all[2].style.border = "4px solid aqua";
    a = 400;
    tran.style.width = "200px";
  } else if (b == -600) {
    all[1].style.border = "4px solid aqua";
    a = 600;
    tran.style.width = "0px";
  }
});
