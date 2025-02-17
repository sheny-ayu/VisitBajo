//Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//When menu is clicked
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Out sidebar
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// place
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.card-slider');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const cards = document.querySelectorAll('.card__article');
  const cardWidth = cards[0].offsetWidth + 20; // 20px for the gap

  let currentIndex = 0;

  function moveSlider() {
    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      moveSlider();
    }
  });

  nextButton.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
      moveSlider();
    }
  });
});

// stay
new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 30,

  // Pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    },
  }
  
});