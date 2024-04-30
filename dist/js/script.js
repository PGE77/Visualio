const mySwiper = new Swiper('.swiper-container', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 4,
  paginationClickable: true,
  spaceBetween: 32,
  breakpoints: {
    1920: {
      slidesPerView: 4,
      spaceBetween: 32
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    664: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    480: {
      slidesPerView: 1.2,
      spaceBetween: 15
    }
  }
});

document.querySelector('.swiper-button-prev').addEventListener('click', function() {
  mySwiper.slidePrev(); // slidePrev() přesune Swiper na předchozí slide
});

document.querySelector('.swiper-button-next').addEventListener('click', function() {
  mySwiper.slideNext(); // slideNext() přesune Swiper na další slide
});



document.addEventListener("DOMContentLoaded", function () {
  const openMenu = document.querySelector(".open-menu");
  const closeMenu = document.querySelector(".close-menu");
  const overlay = document.querySelector(".overlay");

  openMenu.addEventListener("click", function () {
    if (overlay) {
      overlay.classList.add("open");
    }
  });

  closeMenu.addEventListener("click", function () {
    if (overlay) {
      overlay.classList.remove("open");
    }
  });
});

// Vyberte všechny prvky s třídou "box-video"
const boxVideos = document.querySelectorAll(".box-video");

// Přidejte klikací událost na každý prvek
boxVideos.forEach(function(boxVideo) {
  boxVideo.addEventListener("click", function() {
    // Najděte iframe uvnitř tohoto prvku
    const iframe = this.querySelector("iframe");
    // Získání aktuálního src atributu
    const src = iframe.getAttribute("src");
    // Přidání parametru autoplay=1 na konec URL
    iframe.setAttribute("src", src + "&autoplay=1");
    // Přidání třídy "open"
    this.classList.add("open");
  });
});

