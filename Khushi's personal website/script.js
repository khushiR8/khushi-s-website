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

document.getElementById("link1").addEventListener("click", function () {
    window.location.href = "index.html";})

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
