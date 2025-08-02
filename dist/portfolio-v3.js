const numbers = document.querySelectorAll(".js-percent");
const digitWrappers = document.querySelectorAll(".js-digit");
const digitHeight = digitWrappers[0].getBoundingClientRect().height;
digitWrappers.forEach((item) => {
  item.style.height = digitHeight + "px";
});

digitWrappers.forEach((wrapper) => {
  for (let i = 1; i <= 9; i++) {
    const span = document.createElement("span");
    span.classList.add("digit");
    span.classList.add("loading__text");
    span.textContent = i;
    wrapper.appendChild(span);
  }

  digitWrappers[1].querySelectorAll(".digit").forEach((digit) => {
    digit.classList.add("digit-one");
  });

  digitWrappers[0].querySelectorAll(".digit").forEach((digit) => {
    digit.classList.add("digit-ten");
  });

  // const digitone = digitWrappers[1].querySelectorAll(".digit");
  // digitone.forEach((item) => {
  //   item.classList.add("digitone");
  // });

  // const digitten = digitWrappers[0].querySelectorAll(".digit");
  // digitten.forEach((item) => {
  //   item.classList.add("digitten");
  // });
});

const digits = document.querySelectorAll(".digit");
const digitone = document.querySelectorAll(".digit-one");
const digitten = document.querySelectorAll(".digit-ten");
const digithundred = document.querySelector(".digit-hundred");

function animateNumber() {
  const timeline = gsap.timeline();
  const digitoneFirst = Math.floor(Math.random() * 9) + 1;
  const digittenFirst = Math.floor(Math.random() * 8) + 1;
  const spinDuration = 2;
  const easing = "power2.out";

  gsap.set(digithundred, {
    yPercent: 100,
    display: "block",
  });

  timeline.to(
    digitone,
    {
      y: -digitHeight * digitoneFirst,
      duration: spinDuration,
      ease: easing,
    },
    "start"
  );

  timeline.to(
    digitten,
    {
      y: -digitHeight * digittenFirst,
      duration: spinDuration,
      ease: easing,
    },
    "start"
  );

  const digitoneSecond = Math.floor(Math.random() * 9) + 1;
  let digittenSecond =
    Math.floor(Math.random() * (9 - digittenFirst)) + digittenFirst + 1;
  if (digittenSecond > 9) digittenSecond === 9;

  timeline.to(
    digitone,
    {
      y: -digitHeight * digitoneSecond,
      duration: spinDuration,
      ease: easing,
    },
    "second"
  );

  timeline.to(
    digitten,
    {
      y: -digitHeight * digittenSecond,
      duration: spinDuration,
      ease: easing,
    },
    "second"
  );

  timeline.to(
    digits,
    {
      y: 0,
      duration: spinDuration,
      ease: easing,
    },
    "final"
  );

  timeline.to(
    digithundred,
    {
      yPercent: 0,
      duration: spinDuration,
      ease: easing,
    },
    "final"
  );
}

animateNumber();
