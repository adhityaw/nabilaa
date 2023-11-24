// Membuat fungsi untuk scroll smooth
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Menambahkan event listener untuk setiap tautan navigasi
document.addEventListener("DOMContentLoaded", function () {
  const homeLink = document.querySelector('nav a[href="#home"]');
  const aboutLink = document.querySelector('nav a[href="#about"]');
  const contactLink = document.querySelector('nav a[href="#contact"]');

  homeLink.addEventListener("click", function (e) {
    e.preventDefault();
    scrollToSection("home");
  });

  aboutLink.addEventListener("click", function (e) {
    e.preventDefault();
    scrollToSection("about");
  });

  contactLink.addEventListener("click", function (e) {
    e.preventDefault();
    scrollToSection("contact");
  });
});
