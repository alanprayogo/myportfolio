// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const navbarHeight = header.offsetHeight;

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
    document.body.style.paddingTop = navbarHeight + "px";
  } else {
    header.classList.remove("navbar-fixed");
    document.body.style.paddingTop = 0;
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Smooth scrolling with offset
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    const navbarHeight = document.querySelector("header").offsetHeight;
    const offset = target.offsetTop - navbarHeight;

    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  });
});

// Download CV
document.getElementById("downloadCV").addEventListener("click", function () {
  var fileName = "cv_alan";
  var fileURL = "dist/cv-alan.pdf";
  var a = document.createElement("a");
  a.href = fileURL;
  a.download = fileName + ".pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});

// Contact Me
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var formData = new FormData(this);
    fetch("proses_kontak.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Maaf masih ada bug untuk fungsi kirim pesan");
        }
        alert("Pesan Anda telah terkirim!");
        document.getElementById("contactForm").reset();
      })
      .catch((error) => {
        alert(error.message);
      });
  });

// Show More Portfolio
document.getElementById("show-more-btn").addEventListener("click", function () {
  const hiddenPortfolios = document.querySelectorAll(".portfolio-hidden");
  hiddenPortfolios.forEach((portfolio) => {
    portfolio.classList.remove("portfolio-hidden");
  });
  this.style.display = "none";
});
