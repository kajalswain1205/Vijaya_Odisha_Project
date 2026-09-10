document.addEventListener("DOMContentLoaded", () => {
  const yearButtons = [...document.querySelectorAll(".year-btn")];
  const sections = [...document.querySelectorAll(".gallery-year")];

  yearButtons.forEach(button => {
    button.addEventListener("click", () => {
      const year = button.dataset.year;

      yearButtons.forEach(btn => {
        const active = btn === button;
        btn.classList.toggle("active", active);
        btn.setAttribute("aria-selected", String(active));
      });

      sections.forEach(section => {
        section.classList.toggle(
          "hidden",
          year !== "all" && section.dataset.sectionYear !== year
        );
      });
    });
  });

  const lightbox = document.getElementById("lightbox");
  const image = document.getElementById("lightboxImage");
  const caption = document.getElementById("lightboxCaption");
  const close = document.getElementById("lightboxClose");
  const prev = document.getElementById("lightboxPrev");
  const next = document.getElementById("lightboxNext");

  let images = [];
  let index = 0;

  function refreshImages() {
    images = [...document.querySelectorAll(".gallery-year:not(.hidden) .photo-card img")];
  }

  function render() {
    const current = images[index];
    if (!current) return;
    image.src = current.src;
    image.alt = current.alt;
    caption.textContent = current.alt;
  }

  function open(clicked) {
    refreshImages();
    index = images.indexOf(clicked);
    if (index < 0) index = 0;
    render();
    lightbox.classList.add("active");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function hide() {
    lightbox.classList.remove("active");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    image.src = "";
  }

  function move(direction) {
    if (!images.length) refreshImages();
    index = (index + direction + images.length) % images.length;
    render();
  }

  document.querySelectorAll(".photo-card").forEach(card => {
    card.addEventListener("click", () => open(card.querySelector("img")));
  });

  close.addEventListener("click", hide);
  prev.addEventListener("click", () => move(-1));
  next.addEventListener("click", () => move(1));

  lightbox.addEventListener("click", event => {
    if (event.target === lightbox) hide();
  });

  document.addEventListener("keydown", event => {
    if (!lightbox.classList.contains("active")) return;
    if (event.key === "Escape") hide();
    if (event.key === "ArrowLeft") move(-1);
    if (event.key === "ArrowRight") move(1);
  });
});
