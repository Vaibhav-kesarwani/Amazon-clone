const imgs = document.querySelectorAll(".header-slider ul img");
const prev = document.querySelector(".control_prev");
const next = document.querySelector(".control_next");
const scrollContainer = document.querySelectorAll(".products");

let index = 0;

function changeSlide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = "none";
    }

    imgs[index].style.display = "block";
}

changeSlide();

prev.addEventListener("click", (e) => {
    if (index > 0) {
        index--;
    } else {
        index = imgs.length - 1;
    }

    changeSlide();
});

next.addEventListener("click", (e) => {
    if (index < imgs.length - 1) {
        index++;
    } else {
        index = 0;
    }

    changeSlide();
});

for (const item of scrollContainer) {
    item.addEventListener("wheel", (e) => {
        e.preventDefault();
        item.scrollLeft += e.deltaY
    });
}