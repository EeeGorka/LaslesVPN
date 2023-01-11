//headerAnimation----------------------------------------------------------------------------------------------------------

const header = document.querySelector(".header");

document.onscroll = function headerAnimation() {
  const scroll = window.scrollY;

  if (scroll > 1) {
    header.classList.add("_scroll");
  } else {
    header.classList.remove("_scroll");
  }
};

// //scrollOnClick-------------------------------------------------------------------------------------------------------------------

//   const menuLinks = document.querySelectorAll(".scroll__button[data-goto]");

//   if (menuLinks.length > 0) {
//     menuLinks.forEach((menuLink) => {
//       menuLink.addEventListener("click", onMenuLinkClick);
//     });

//     function onMenuLinkClick(e) {
//       const menuLink = e.target;
//       if (
//         menuLink.dataset.goto &&
//         document.querySelector(menuLink.dataset.goto)
//       ) {
//         const gotoBlock = document.querySelector(menuLink.dataset.goto);
//         const gotoBlockValue =
//           gotoBlock.getBoundingClientRect().top + pageYOffset - 100;

//         window.scrollTo({
//           top: gotoBlockValue,
//           behavior: "smooth",
//         });
//         e.preventDefault();
//       }
//     }
//   }

//burger-------------------------------------------------------------------------------------------------------------------

const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");
const headerContent = document.querySelector(".header__content");

burger.addEventListener("click", function () {
  burger.classList.toggle("_active");
  menu.classList.toggle("_active");
  header.classList.toggle("_active");
  headerContent.classList.toggle("_active");
  document.body.classList.toggle("_active");
});

//slider-------------------------------------------------------------------------------------------------------------------

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 55,
  slidesPerGroup: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 4000,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//animOnScroll-------------------------------------------------------------------------------------------------------------------

const animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll(params) {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_anim");
      } else {
        if (!animItem.classList.contains("_anim-no-hide")) {
          animItem.classList.remove("_anim");
        }
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  animOnScroll();
}
