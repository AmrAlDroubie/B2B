//navbar to top onscroll
const nav = document.querySelector(".navbar");

window.onscroll = function () {
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

// our brands slide
const our_brands = new Swiper(".our-brands-swiper", {
  slidesPerView: 2,
});

const our_program = new Swiper(".our-program-swiper", {
  speed: 600,
  slidesPerView: 1,
  loop: true,
  spaceBetween: 25,
  breakpoints: {
    992: {
      navigation: {
        nextEl: ".our-program-next",
        prevEl: ".our-program-prev",
      },
    },
  },

  autoplay: {
    delay: 1300,
    disableOnInteraction: false,
  },
});

const leading_ecommerce = new Swiper(".leading-ecommerce-swiper", {
  speed: 300,
  loop: true,
  spaceBetween: 15,
  autoplay: {
    delay: 400,
    disableOnInteraction: false,
  },
  slidesPerView: 2,
  breakpoints: {
    992: {
      slidesPerView: 6,
    },
  },
});

const our_systems_swiper = new Swiper(".our-systems-swiper", {
  speed: 300,
  spaceBetween: 15,
  pagination: {
    el: ".our-systems-pag",
    type: "bullets",
    clickable: true,
  },
  mousewheel: true,
});

// Our Systems Menu
const systems_menu_items = document.querySelectorAll(".our-systems-menu ul li");
const systems_swiper_wrapper = document.querySelector(
  ".our-systems .swiper-wrapper"
);

// activate menu item
systems_menu_items.forEach((ele) => {
  ele.onclick = function () {
    our_systems_swiper.slideTo(this.getAttribute("data-slide-index"));

    let other_elements = [...systems_menu_items].filter(function (e) {
      return e !== this;
    });

    other_elements.forEach((other_ele) => {
      other_ele.classList.remove("active");
    });
    this.classList.add("active");
  };
});

our_systems_swiper.on("slideChange", function () {
  const active_now_slide = document.querySelector(
    `[data-slide-index='${this.activeIndex}']`
  );
  let other_elements = [...systems_menu_items].filter(function (e) {
    return e !== active_now_slide;
  });

  other_elements.forEach((other_ele) => {
    other_ele.classList.remove("active");
  });
  active_now_slide.classList.add("active");

  if (our_systems_swiper.slides.length == this.activeIndex + 1) {
    our_systems_swiper.mousewheel.disable();
  }
});

// our systems nav
const our_system_nav = document.querySelectorAll(".our-systems nav span");

our_system_nav.forEach((ele) => {
  ele.onclick = function () {
    if (!this.classList.contains("active")) {
      this.classList.add("active");
      let nav_others = our_system_nav.filter(function (e) {
        e != this;
      });
      nav_others.forEach(function (nav_other) {
        nav_other.classList.remove("active");
      });
    }
  };
});

function footer_menu() {
  const footer_list = document.querySelector(".footer .col-12 ul");
  const footer_list_title = document.querySelectorAll(".footer .col-12 h6");
  footer_list_title.forEach((lt) => {
    lt.onclick = function () {
      this.nextElementSibling.classList.toggle("active");
    };
  });
}

footer_menu();

// our products slide
const our_products_swiper = new Swiper(".our-products-swiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,

  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

const our_brands_two = new Swiper(".our-brands-2-swiper", {
  slidesPerView: 3,
  speed: 7000,
  spaceBetween: 60,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});
