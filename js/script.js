// ========== BL TECH - Main JavaScript ==========

document.addEventListener("DOMContentLoaded", function () {
  // Initialize all functionality
  initMobileMenu();
  initHeaderScroll();
  initDropdowns();
  initMobileDropdowns();
  initContactForm();
  initSmoothScroll();
});

// Navigate helper function
function navigateTo(url) {
  window.location.href = url;
}

// Mobile Menu Toggle
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileNav = document.getElementById("mobileNav");
  const mobileMenuIcon = document.getElementById("mobileMenuIcon");

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      const isActive = mobileNav.classList.contains("active");

      if (isActive) {
        mobileNav.classList.remove("active");
        mobileMenuIcon.className = "fas fa-bars";
      } else {
        mobileNav.classList.add("active");
        mobileMenuIcon.className = "fas fa-times";
      }
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", function (e) {
      if (!mobileNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileNav.classList.remove("active");
        mobileMenuIcon.className = "fas fa-bars";
      }
    });

    // Close mobile menu on window resize
    window.addEventListener("resize", function () {
      if (window.innerWidth > 768) {
        mobileNav.classList.remove("active");
        mobileMenuIcon.className = "fas fa-bars";
      }
    });
  }
}

// Header scroll effect
function initHeaderScroll() {
  const header = document.getElementById("header");

  if (header) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }
}

// Desktop dropdown hover handling
function initDropdowns() {
  // Services dropdown
  const servicesNavItem = document.getElementById("servicesNavItem");
  const servicesDropdown = document.getElementById("servicesDropdown");
  const servicesChevron = document.getElementById("servicesChevron");

  if (servicesNavItem && servicesDropdown) {
    let hideTimeout;

    servicesNavItem.addEventListener("mouseenter", function () {
      clearTimeout(hideTimeout);
      servicesDropdown.style.opacity = "1";
      servicesDropdown.style.visibility = "visible";
      servicesDropdown.style.transform = "translateX(-50%) translateY(0)";
      if (servicesChevron) {
        servicesChevron.style.transform = "rotate(180deg)";
      }
    });

    servicesNavItem.addEventListener("mouseleave", function () {
      hideTimeout = setTimeout(function () {
        servicesDropdown.style.opacity = "0";
        servicesDropdown.style.visibility = "hidden";
        servicesDropdown.style.transform = "translateX(-50%) translateY(10px)";
        if (servicesChevron) {
          servicesChevron.style.transform = "rotate(0deg)";
        }
      }, 200);
    });

    servicesDropdown.addEventListener("mouseenter", function () {
      clearTimeout(hideTimeout);
    });

    servicesDropdown.addEventListener("mouseleave", function () {
      hideTimeout = setTimeout(function () {
        servicesDropdown.style.opacity = "0";
        servicesDropdown.style.visibility = "hidden";
        servicesDropdown.style.transform = "translateX(-50%) translateY(10px)";
        if (servicesChevron) {
          servicesChevron.style.transform = "rotate(0deg)";
        }
      }, 200);
    });
  }

  // Blog dropdown
  const blogNavItem = document.getElementById("blogNavItem");
  const blogDropdown = document.getElementById("blogDropdown");
  const blogChevron = document.getElementById("blogChevron");

  if (blogNavItem && blogDropdown) {
    let hideTimeout;

    blogNavItem.addEventListener("mouseenter", function () {
      clearTimeout(hideTimeout);
      blogDropdown.style.opacity = "1";
      blogDropdown.style.visibility = "visible";
      blogDropdown.style.transform = "translateX(-50%) translateY(0)";
      if (blogChevron) {
        blogChevron.style.transform = "rotate(180deg)";
      }
    });

    blogNavItem.addEventListener("mouseleave", function () {
      hideTimeout = setTimeout(function () {
        blogDropdown.style.opacity = "0";
        blogDropdown.style.visibility = "hidden";
        blogDropdown.style.transform = "translateX(-50%) translateY(10px)";
        if (blogChevron) {
          blogChevron.style.transform = "rotate(0deg)";
        }
      }, 200);
    });

    blogDropdown.addEventListener("mouseenter", function () {
      clearTimeout(hideTimeout);
    });

    blogDropdown.addEventListener("mouseleave", function () {
      hideTimeout = setTimeout(function () {
        blogDropdown.style.opacity = "0";
        blogDropdown.style.visibility = "hidden";
        blogDropdown.style.transform = "translateX(-50%) translateY(10px)";
        if (blogChevron) {
          blogChevron.style.transform = "rotate(0deg)";
        }
      }, 200);
    });
  }
}

// Mobile dropdown toggles
function initMobileDropdowns() {
  // Mobile Services Toggle
  const mobileServicesToggle = document.getElementById("mobileServicesToggle");
  const mobileServicesSubmenu = document.getElementById(
    "mobileServicesSubmenu",
  );
  const mobileServicesChevron = document.getElementById(
    "mobileServicesChevron",
  );

  if (mobileServicesToggle && mobileServicesSubmenu) {
    mobileServicesToggle.addEventListener("click", function () {
      const isActive = mobileServicesSubmenu.classList.contains("active");

      if (isActive) {
        mobileServicesSubmenu.classList.remove("active");
        if (mobileServicesChevron) {
          mobileServicesChevron.style.transform = "rotate(0deg)";
        }
      } else {
        mobileServicesSubmenu.classList.add("active");
        if (mobileServicesChevron) {
          mobileServicesChevron.style.transform = "rotate(180deg)";
        }
      }
    });
  }

  // Mobile Blog Toggle
  const mobileBlogToggle = document.getElementById("mobileBlogToggle");
  const mobileBlogSubmenu = document.getElementById("mobileBlogSubmenu");
  const mobileBlogChevron = document.getElementById("mobileBlogChevron");

  if (mobileBlogToggle && mobileBlogSubmenu) {
    mobileBlogToggle.addEventListener("click", function () {
      const isActive = mobileBlogSubmenu.classList.contains("active");

      if (isActive) {
        mobileBlogSubmenu.classList.remove("active");
        if (mobileBlogChevron) {
          mobileBlogChevron.style.transform = "rotate(0deg)";
        }
      } else {
        mobileBlogSubmenu.classList.add("active");
        if (mobileBlogChevron) {
          mobileBlogChevron.style.transform = "rotate(180deg)";
        }
      }
    });
  }
}

// Contact form handling
function initContactForm() {
  const contactForm = document.getElementById("quickContactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("contactName").value.trim();
      const email = document.getElementById("contactEmail").value.trim();
      const message = document.getElementById("contactMessage").value.trim();

      // Basic validation
      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }

      if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      // Simulate form submission
      const submitBtn = contactForm.querySelector(".submit-btn");
      const originalText = submitBtn.innerHTML;

      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitBtn.disabled = true;

      setTimeout(function () {
        alert(
          "Thank you, " +
            name +
            "! Your message has been sent successfully. We will get back to you soon.",
        );
        contactForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 1500);
    });
  }
}

// Email validation helper
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");

      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();

        const headerHeight =
          document.getElementById("header")?.offsetHeight || 80;
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

// Handle keyboard navigation for accessibility
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    // Close mobile menu
    const mobileNav = document.getElementById("mobileNav");
    const mobileMenuIcon = document.getElementById("mobileMenuIcon");

    if (mobileNav && mobileNav.classList.contains("active")) {
      mobileNav.classList.remove("active");
      if (mobileMenuIcon) {
        mobileMenuIcon.className = "fas fa-bars";
      }
    }

    // Close any open dropdowns
    const dropdowns = document.querySelectorAll(".mega-dropdown");
    dropdowns.forEach((dropdown) => {
      dropdown.style.opacity = "0";
      dropdown.style.visibility = "hidden";
      dropdown.style.transform = "translateX(-50%) translateY(10px)";
    });

    // Reset chevrons
    const chevrons = document.querySelectorAll(".chevron-icon");
    chevrons.forEach((chevron) => {
      chevron.style.transform = "rotate(0deg)";
    });
  }
});

// Add animation on scroll (simple intersection observer)
if ("IntersectionObserver" in window) {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe cards and stats
  document
    .querySelectorAll(".card, .stat-card, .contact-card")
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(el);
    });
}

console.log("BL TECH - Modern website initialized successfully!");
