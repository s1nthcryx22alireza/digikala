var swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? "vertical" : "horizontal";

  return direction;
}
function myPlugin({ swiper, extendParams, on }) {
  extendParams({
    debugger: false,
  });

  on("init", () => {
    if (!swiper.params.debugger) return;
    console.log("init");
  });
  on("click", (swiper, e) => {
    if (!swiper.params.debugger) return;
    console.log("click");
  });
  on("tap", (swiper, e) => {
    if (!swiper.params.debugger) return;
    console.log("tap");
  });
  on("doubleTap", (swiper, e) => {
    if (!swiper.params.debugger) return;
    console.log("doubleTap");
  });
  on("sliderMove", (swiper, e) => {
    if (!swiper.params.debugger) return;
    console.log("sliderMove");
  });
  on("slideChange", () => {
    if (!swiper.params.debugger) return;
    console.log("slideChange", swiper.previousIndex, "->", swiper.activeIndex);
  });
  on("slideChangeTransitionStart", () => {
    if (!swiper.params.debugger) return;
    console.log("slideChangeTransitionStart");
  });
  on("slideChangeTransitionEnd", () => {
    if (!swiper.params.debugger) return;
    console.log("slideChangeTransitionEnd");
  });
  on("transitionStart", () => {
    if (!swiper.params.debugger) return;
    console.log("transitionStart");
  });
  on("transitionEnd", () => {
    if (!swiper.params.debugger) return;
    console.log("transitionEnd");
  });
  on("fromEdge", () => {
    if (!swiper.params.debugger) return;
    console.log("fromEdge");
  });
  on("reachBeginning", () => {
    if (!swiper.params.debugger) return;
    console.log("reachBeginning");
  });
  on("reachEnd", () => {
    if (!swiper.params.debugger) return;
    console.log("reachEnd");
  });
}

// Init Swiper
var swiper = new Swiper(".swiper2", {
  // Install Plugin To Swiper
  modules: [myPlugin],
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Enable debugger
  debugger: true,
});
var swiper = new Swiper(".myswiper", {
  rewind: true,
  slidesPerView: "auto",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".myswiper2", {
  slidesPerView: "auto",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".myswiper3", {
  slidesPerView: "auto",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
