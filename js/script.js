//navbar to top onscroll
const nav = document.querySelector(".navbar");

window.onscroll = function() {
    if (window.scrollY > 600) {
        nav.style.top = 0;
        nav.classList.add("shadow");
    } else {
        nav.style.top = "30px";
        nav.classList.remove("shadow");
    }
};

const landing_slider = new Swiper(".landing-swiper", {
    speed: 600,
    spaceBetween: 100,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    loop: true,
});

const our_customers_slider = new Swiper(".swiper-our-customers", {
    speed: 200,

    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 3,
    spaceBetween: 0,
    breakpoints: {
        767: {},
        992: {
            slidesPerView: 6,
            spaceBetween: 0,
        },
    },
});

const our_floor = new Swiper(".floor-swiper", {
    speed: 600,
    slidesPerView: 1,
    loop: true,
    spaceBetween: 25,
    navigation: {
        nextEl: ".floor-next",
        prevEl: ".floor-prev",
    },
});

const our_program = new Swiper(".our-program-swiper", {
    speed: 600,
    slidesPerView: 1,
    loop: true,
    spaceBetween: 25,
    navigation: {
        nextEl: ".our-program-next",
        prevEl: ".our-program-prev",
    },
    autoplay: {
        delay: 1300,
        disableOnInteraction: false,
    },
});