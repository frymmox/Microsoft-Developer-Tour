let link = document.querySelector(".add");
let popup = document.querySelector(".modal-content");
let close = document.querySelector(".add-off");
let off = document.querySelector(".close");

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
});

off.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
});