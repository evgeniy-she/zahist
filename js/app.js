document.addEventListener("DOMContentLoaded", (function() {
    let chbox = document.getElementById("checkboxNav");
    chbox.addEventListener("change", (function() {
        if (this.checked) document.body.classList.add("lock"); else document.body.classList.remove("lock");
    }));
    new Swiper(".firstSwiper", {
        loop: true,
        CenteredSlides: true,
        slidesPerView: 10,
        spaceBetween: 30,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        breakpoints: {
            1023.98: {
                slidesPerView: 10
            },
            767.98: {
                slidesPerView: 6
            },
            575.98: {
                slidesPerView: 4
            },
            320: {
                slidesPerView: 2
            }
        }
    });
    new Swiper(".secondSwiper", {
        loop: true,
        CenteredSlides: true,
        slidesPerView: 4,
        spaceBetween: 30,
        breakpoints: {
            1023.98: {
                slidesPerView: 4
            },
            767.98: {
                slidesPerView: 3
            },
            575.98: {
                slidesPerView: 2
            },
            320: {
                slidesPerView: 1
            }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });
    new Swiper(".thirdSwiper", {
        loop: true,
        CenteredSlides: true,
        slidesPerView: 4,
        spaceBetween: 30,
        breakpoints: {
            1023.98: {
                slidesPerView: 4
            },
            767.98: {
                slidesPerView: 3
            },
            575.98: {
                slidesPerView: 2
            },
            320: {
                slidesPerView: 1
            }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });
}));