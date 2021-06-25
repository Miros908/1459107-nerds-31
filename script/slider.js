let slider1 = document.querySelector(".slider-1");
let slider2 = document.querySelector(".slider-2");
let slider3 = document.querySelector(".slider-3");

let slidersection2 = document.querySelector(".princip-2");
let slidersection1 = document.querySelector(".princip");
let slidersection3 = document.querySelector(".princip-3");


slider2.addEventListener("click", function() {
    slider2.classList.add("current");
    slider3.classList.remove("current");
    slider1.classList.remove("current");
});

slider1.addEventListener("click", function() {
    slider1.classList.add("current");
    slider2.classList.remove("current");
    slider3.classList.remove("current");
});

slider3.addEventListener("click", function() {
    slider3.classList.add("current");
    slider1.classList.remove("current");
    slider2.classList.remove("current");
});





slider2.addEventListener("click", function() {
    slidersection2.classList.remove("visually-hidden");
    slidersection1.classList.add("visually-hidden");
    slidersection3.classList.add("visually-hidden");


});

slider3.addEventListener("click", function() {
    slidersection3.classList.remove("visually-hidden");
    slidersection2.classList.add("visually-hidden");
    slidersection1.classList.add("visually-hidden");


});

slider1.addEventListener("click", function() {
    slidersection1.classList.remove("visually-hidden");
    slidersection2.classList.add("visually-hidden");
    slidersection3.classList.add("visually-hidden");


});