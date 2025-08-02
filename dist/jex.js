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

const header = document.querySelector(".header");
const headerLogo = document.querySelector(".site-title img");
const headerLinks = document.querySelectorAll(".header__link-line");
const toggleBtn = document.querySelector(".js-open-nav");
const menuBar = document.querySelectorAll(".menu-toggle__bar");
const nav = document.querySelector(".header__nav");

const gsapsetMobile = () => {
  if (window.matchMedia("(max-width: 1024px)").matches) {
    gsap.set(nav, {
      clipPath: "inset(0 100% 0 0)",
    });
    gsap.set(headerLinks, {
      yPercent: 100,
    });
  } else {
    gsap.set(nav, {
      clearProps: "clip-path",
    });
    gsap.set(headerLinks, {
      clearProps: "transform",
    });
  }
};

gsapsetMobile();

window.addEventListener("resize", () => {
  gsapsetMobile();
});

const navtl = gsap.timeline();

toggleBtn.addEventListener("click", () => {
  const navtl = gsap.timeline();
  if (nav.classList.contains("is-open")) {
    nav.classList.remove("is-open");
    header.classList.remove("is-open");
    headerLogo.src = headerLogo.dataset.logoBlack;
    menuBar.forEach((item) => {
      item.classList.remove("is-active");
    });
    gsap.to(nav, {
      opacity: 0,
      duration: 0.5,
      ease: "power1.out",
      onComplete: () => {
        gsap.set(nav, {
          clipPath: "inset(0 100% 0 0)",
          opacity: 1,
        });
        gsap.set(headerLinks, {
          yPercent: 100,
        });
      },
    });
    bodyUnLock();
  } else {
    navtl
      .to(nav, {
        clipPath: "inset(0 0% 0 0)",
        duration: 0.8,
        ease: "power2.out",
      })
      .to(
        headerLinks,
        {
          yPercent: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.05,
        },
        "-=0.2"
      );
    nav.classList.add("is-open");
    header.classList.add("is-open");
    headerLogo.src = headerLogo.dataset.logoWhite;
    menuBar.forEach((item) => {
      item.classList.add("is-active");
    });
    bodyLock();
  }
});

let lastScroll = 0;

const handleScroll = () => {
  if (window.innerWidth > 1024) {
    const currentScroll = window.scrollY;
    if (currentScroll > lastScroll && currentScroll > 100) {
      header.classList.add("is-hidden");
    } else {
      header.classList.remove("is-hidden");
    }
    lastScroll = currentScroll;
  } else {
    header.classList.remove("is-hidden");
  }
};

window.addEventListener("scroll", handleScroll);

window.addEventListener("resize", () => {
  handleScroll();
});

const line = document.querySelector("#svgAnimationLine");
const lineLength = line.getTotalLength();

line.style.strokeDasharray = lineLength;
line.style.strokeDashoffset = lineLength;

gsap.to(line.style, {
  strokeDashoffset: 0,
  duration: 7,
  ease: "expo.out",
});
