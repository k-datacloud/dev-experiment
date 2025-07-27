const lenis = new Lenis({
  //   wrapper: document.getElementById("lenis-root"),
  autoRaf: true,
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
  smoothTouch: false,
  touchMultiplier: 1,
});

const modal = document.querySelector(".js-modal");
const modalOpen = document.querySelectorAll(".js-modal-open");
const modalClose = document.querySelector(".js-modal-close");

let scrollY = 0;

const bodyLock = () => {
  scrollY = window.scrollY;
  document.body.style.position = "fixed";
  document.body.style.height = "100vh";
  document.body.style.top = `-${scrollY}px`;
  document.body.style.left = "0";
};

const bodyUnLock = () => {
  document.body.style.position = "";
  document.body.style.height = "";
  document.body.style.top = "";
  document.body.style.left = "";
  window.scrollTo(0, scrollY);
};

modalOpen.forEach((item, index) => {
  item.addEventListener("click", () => {
    const targetId = item.getAttribute("data-target");
    const target = document.getElementById(targetId);
    if (!target) {
      return;
    }
    modal.classList.add("is-open");
    bodyLock();
    console.log(scrollY);
    target.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("is-open");
      bodyUnLock();
      console.log(scrollY);
    }
  });
  modalClose.addEventListener("click", () => {
    modal.classList.remove("is-open");
    bodyUnLock();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.classList.remove("is-open");
      bodyUnLock();
    }
  });
});
