let buttonwrite = document.querySelector(".button-write-us");
let popup = document.querySelector(".popup");
let buttonclose = document.querySelector(".button-close");


buttonwrite.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("visually-hidden");
    popup.classList.add("bounce");

});




buttonclose.addEventListener("click", function() {
    popup.classList.add("visually-hidden");
    popup.classList.remove("bounce")
});