let header = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 250) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// Animation with scroll revall
const scr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true
});
scr.reveal(`.landing-img, .cover , .section-3, footer, .footer-about`),
  scr.reveal(`.landing-data, .footer-social`, { origin: "bottom" }),
  scr.reveal(`.about-img img , .desktop-col`, { origin: "left" }),
  scr.reveal(`.about-data, .mobile-col`, { origin: "right" }),
  scr.reveal(`.rect , .card, .member`, { interval: 100 });
