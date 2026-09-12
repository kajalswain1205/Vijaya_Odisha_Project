document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  if (menu && nav) {
    menu.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menu.setAttribute("aria-expanded", String(open));
      menu.setAttribute(
        "aria-label",
        open ? "Close navigation" : "Open navigation",
      );
    });
  }

  document.querySelectorAll(".nav-links a").forEach((link) => {
    const current = new URL(link.href, window.location.href).pathname;
    if (current === window.location.pathname) link.classList.add("active");
    link.addEventListener("click", () => nav?.classList.remove("open"));
  });

  const form = document.querySelector("#contactForm");
  const status = document.querySelector("#status");
  if (form && status) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      status.textContent =
        "Thank you. Your message has been captured in this front-end demo.";
      form.reset();
    });
  }
});
