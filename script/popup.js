let buttonwrite = document.querySelector(".button-write-us");
let popup = document.querySelector(".popup");
let buttonclose = document.querySelector(".button-close");
buttonwrite.addEventListener("click", function() { popup.classList.remove("visually-hidden") });
buttonclose.addEventListener("click", function() { popup.classList.add("visually-hidden") });