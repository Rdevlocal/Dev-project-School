// Start an immediately-invoked function expression (IIFE) for encapsulation
(function () {
  "use strict";

  // Define variables
  var items = document.querySelectorAll(".timeline li");

  function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  // Function to add "in-view" class to elements in viewport
  function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
          if (isElementInViewport(items[i])) {
              items[i].classList.add("in-view");
          }
      }
  }

  // Event listeners for load, resize, and scroll events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();
