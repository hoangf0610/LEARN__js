const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btn1 = $(".btn-1");
const btn2 = $(".btn-2");
const btn3 = $(".btn-3");
const btn4 = $(".btn-4");
const p1 = $(".page1");
const p2 = $(".page2");
const p3 = $(".page3");
const p4 = $(".page4");

showPage(btn1, p1, p2);
showPage(btn2, p2, p3);
showPage(btn3, p3, p4);
showPage(btn4, p4, p1);



// function
function showNext(btn1, btn2) {
  btn1.addEventListener("click", function () {
    btn2.classList.remove("dn");
    btn1.classList.add("dn");
  });
}

function showPage(btn1, page1, page2) {
  btn1.addEventListener("click", function () {
    page1.style.animation = "afterPage 3s";
    page2.classList.remove("dn");
    page2.style.animation = "beforePage 3s";
    dN(page1, 4000);
  });
}

function dN(a, s) {
  const myTimeout = setTimeout(displayNone(a), s);
  function displayNone(n) {
    n.style.display = "none";
  }
}
