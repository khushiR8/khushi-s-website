const toggleIcon = document.querySelector(".toggle-icon");

toggleIcon.addEventListener("click", () => {
  toggleIcon.classList.toggle("bx-sun");
  document.body.classList.toggle("light-mode");
});

function scrollToElement(elementSelector, instance = 0) {
  const elements = document.querySelectorAll(elementSelector);
  if (elements.length > instance) {
    elements[instance].scrollIntoView({ behavior: 'smooth' });
  }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");

link1.addEventListener('click', (event) => {
  event.preventDefault();
  scrollToElement('.skill-container');
});

link2.addEventListener('click', (event) => {
  event.preventDefault();
  scrollToElement('.content-para');
});

// window.addEventListener('scroll', function() {
//   const header = document.querySelector('.header-container');
//   if (window.scrollY > 50) { // Change 50 to the scroll threshold you want
//       header.classList.add('scrolled');
//   } else {
//       header.classList.remove('scrolled');
//   }
// });

// function checkScroll() {
//   var header = document.querySelector('.header-container');
//   if (window.scrollY > 0) {
//       header.classList.add('scrolled');
//   } else {
//       header.classList.remove('scrolled');
//   }
// }

// window.addEventListener('load', checkScroll);
// window.addEventListener('scroll', checkScroll);


document.addEventListener('DOMContentLoaded', function() {
  // Function to check scroll position and toggle 'scrolled' class
  function checkScroll() {
      var header = document.querySelector('.header-container');
      if (window.scrollY > 0) {
          header.classList.add('scrolled');
      } else {
          header.classList.remove('scrolled');
      }
  }

  checkScroll();

  window.addEventListener('scroll', checkScroll);
});
