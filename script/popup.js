let buttonwrite = document.querySelector(".button-write-us");
let popup = document.querySelector(".popup");
let buttonclose = document.querySelector(".button-close");
let names = document.querySelector("[name=name]");
let email = document.querySelector("[name=email]");
let form = document.querySelector(".appointment-form ");
let button = document.querySelector(".button-popup");

buttonwrite.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("visually-hidden");
    popup.classList.add("bounce");


});







form.addEventListener("submit", function(evt) {
    if (!names.value || !email.value) {
        evt.preventDefault();

        popup.classList.remove("bounce");
        popup.classList.add("error");

    }


});

buttonclose.addEventListener("click", function() {
    popup.classList.add("visually-hidden");
    popup.classList.remove("bounce");
    popup.classList.remove("error");

});