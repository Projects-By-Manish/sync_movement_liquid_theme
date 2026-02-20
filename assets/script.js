document.addEventListener("DOMContentLoaded", () => {
  // 1. Reveal Elements on Scroll
  const revealElements = () => {
    const observerOptions = {
      threshold: 0.15, // Trigger when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          // Once animated, we don't need to observe it anymore
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Updated Targets in js/script.js
    const targets = document.querySelectorAll(
      ".hero-content, .product-card, .info-text, .info-image-placeholder, .collection-item, .promo-banner, .feature-box, .testimonial-card, .event-card, .promo-card, .newsletter-section", // Added .newsletter-section
    );

    targets.forEach((target, index) => {
      target.classList.add("reveal");

      // Add small staggered delays to grids so they don't pop in all at once
      if (
        target.classList.contains("product-card") ||
        target.classList.contains("collection-item")
      ) {
        const delayClass = `reveal-delay-${(index % 4) + 1}`;
        target.classList.add(delayClass);
      }

      observer.observe(target);
    });
  };

  // 2. Smooth Scrolling for Navigation Links
  const smoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        if (targetId === "#") return;

        document.querySelector(targetId).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  };

  // Initialize
  revealElements();
  smoothScroll();
});
