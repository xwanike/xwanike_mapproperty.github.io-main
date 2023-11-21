//Togle class active
const navbarNav = document.querySelector(".navbar-nav");
//Ketika hamburger diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Klik di luar side bar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

var tombolBacaSelengkapnya = document.querySelectorAll(".baca-selengkapnya");

// Menggunakan forEach untuk menambahkan event listener ke setiap tombol
tombolBacaSelengkapnya.forEach(function (tombol) {
  tombol.addEventListener("click", function () {
    var kontenTambahan = this.nextElementSibling; // Menggunakan this untuk merujuk ke tombol yang ditekan
    if (
      kontenTambahan.style.display === "none" ||
      kontenTambahan.style.display === ""
    ) {
      kontenTambahan.style.display = "block";
      this.textContent = "Sembunyikan";
    } else {
      kontenTambahan.style.display = "none";
      this.textContent = "Baca Selengkapnya";
    }
  });
});

feather.replace();

const menuCardImages = document.querySelectorAll(".menu-card-img");
const menuCardContainer = document.querySelector(".menu-card-img-container");

let currentImageIndex = 0;

menuCardContainer.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1) % menuCardImages.length;
  menuCardImages.forEach((image, index) => {
    if (index === currentImageIndex) {
      image.classList.add("enlarged");
    } else {
      image.classList.remove("enlarged");
    }
  });
});
