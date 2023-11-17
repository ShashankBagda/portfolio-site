// Add JavaScript for loader animation or any other interactive features
// You can use libraries like GSAP or simple CSS animations

// Example loader animation using JavaScript
document.addEventListener("DOMContentLoaded", function () {
    // Hide the loader when the content is fully loaded
    window.addEventListener("load", function () {
      const loader = document.querySelector(".loader");
      loader.style.display = "none";
    });
  });
  