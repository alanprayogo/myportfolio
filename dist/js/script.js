// Navbar Fixed
// window.onscroll = function () {
//   const header = document.querySelector("header");
//   const fixedNav = header.offsetTop;

//   if (window.scrollY > fixedNav) {
//     header.classList.add("navbar-fixed");
//   } else {
//     header.classList.remove("navbar-fixed");
//   }
// };

// Hamburger
// const hamburger = document.querySelector("#hamburger");
// const navMenu = document.querySelector("#nav-menu");

// hamburger.addEventListener("click", function () {
//   hamburger.classList.toggle("hamburger-active");
//   navMenu.classList.toggle("hidden");
// });

window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const navbarHeight = header.offsetHeight; // Get navbar height

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
    document.body.style.paddingTop = navbarHeight + "px"; // Add padding to body to prevent content from jumping
  } else {
    header.classList.remove("navbar-fixed");
    document.body.style.paddingTop = 0; // Reset body padding
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
    const navbarHeight = document.querySelector("header").offsetHeight; // Get navbar height
    const offset = target.offsetTop - navbarHeight; // Calculate offset

    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  });
});

// Download CV
document.getElementById("downloadCV").addEventListener("click", function () {
  // Ganti 'nama_file' dengan nama file CV Anda tanpa ekstensi
  var fileName = "cv_alan";

  // Ganti 'lokasi_file' dengan lokasi file CV Anda
  var fileURL = "dist/cv-alan.pdf";

  // Buat elemen <a> baru
  var a = document.createElement("a");

  // Atur atribut href dengan URL file
  a.href = fileURL;

  // Atur atribut download dengan nama file
  a.download = fileName + ".pdf";

  // Sisipkan elemen <a> ke dalam dokumen
  document.body.appendChild(a);

  // Klik pada elemen <a> yang tersembunyi
  a.click();

  // Hapus elemen <a> yang tidak terlihat dari DOM
  document.body.removeChild(a);
});

// Contact Me
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Menghentikan perilaku default formulir (refresh halaman)

    var formData = new FormData(this); // Mengambil data formulir

    // Kirim data menggunakan teknik AJAX
    fetch("proses_kontak.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Terjadi kesalahan saat mengirim pesan.");
        }
        alert("Pesan Anda telah terkirim!");
        document.getElementById("contactForm").reset(); // Mengosongkan formulir setelah pengiriman berhasil
      })
      .catch((error) => {
        alert(error.message);
      });
  });
