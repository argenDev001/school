let btn = document.querySelector(".about-btn button")
btn.addEventListener("click", () => {
    document.querySelector(".about-modal").style.display = "block"
})
let close = document.querySelector(".about-modal-bg-square div")
close.addEventListener("click", () => {
    document.querySelector(".about-modal").style.display = "none"
})

const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});