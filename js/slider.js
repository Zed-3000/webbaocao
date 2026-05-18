let scrollContainer = document.querySelector(".slider");
let trai = document.getElementById("trai");
let phai = document.getElementById("phai");

phai.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 1000;
});

trai.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});
scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.style.scrollBehavior = "auto";
    scrollContainer.scrollLeft += evt.deltaY;
});

