import * as bridge from "./bridge.js";
// import * as sphere from './sphere.js';
import * as main from "./main.js";

export function init() {
  $("#btn-play-pause img").attr("src", "./assets/icon-pause.svg");

  const s1 = gsap.timeline({
    repeat: 0,
    onComplete: function () {
      return;

      main.closeStructure();
      gsap.to(".container-egg-outline", 1, {
        scale: 1,
        opacity: 0,
        ease: "power1.inOut",
      });
      gsap.to(".logo-id-one-egg", 1, { opacity: 1, ease: "power1.in" }, "<");
      setTimeout(function () {
        revertState(state);
      }, 1000);
    },
  });

  $(document).on("click", ".next-timeline-structure", function (e) {
    let scene = "1";

    s1.seek(`scene${scene}`, "false");

    $(".text-str").css("opacity", "0");
  });

  $(".container-egg-outline").css("opacity", "1");

  let state = captureState(
    ".egg, .container-egg-outline, #egg-lines, .egg-text-1, .egg-lines .l1, .egg-lines .l2, .egg-lines .l3, .egg-lines .l4, .egg-lines .l5, .egg-lines .l6, .egg-lines .l7, .egg-lines .l8, .egg-lines .l9, .text-0, .text-1, .text-2, .text-3, .text-4, .text-4b, .text-5, .text-5b, .text-6, .text-7, .text-8, .text-9, .text-10, .text-11, .text-12, .text-13, .text-14, .text-15, .egg-text-1 .g1, .egg-text-1 .g2, .egg-text-1 .g3, .egg-text-1 .g4, .egg-text-1 .g5, .egg-text-1 .g6, .egg-text-1 .g7, .egg-text-1 .g8, .egg-text-1 .g9, .egg-text-1 .g10, .egg-text-1 .g11, .egg-text-1 .g12, .egg-box, .c1d, .c1c, .c1b, .c1a, .c1tb, .c1ta, .container-circles-opened, .container-circles-closed, .c2a, .c2b, .c2c, .c2d, .c2tb, .c2tc, #container-brigde, .egg-solid-1, .egg-solid-2, .egg-solid-3, .egg-solid-4, .egg-solid-5, .egg-solid-6, .egg-solid-7, .egg-solid-8, .egg-solid, #container-sphere, .alert-slides, .btn-arrows-tl-up, #btn-play-pause, .container-text-st-relative-end, .container-text-half-top-3"
  );

  let text0 = $(".text-0").html();
  let text1 = $(".text-1").html();
  let text2 = $(".text-2").html();
  let text3 = $(".text-3").html();
  let text4 = $(".text-4").html();
  let text4b = $(".text-4b").html();
  let text5 = $(".text-5").html();
  let text5b = $(".text-5b").html();
  let text6 = $(".text-6").html();
  let text7 = $(".text-7").html();
  let text8 = $(".text-8").html();
  let text9 = $(".text-9").html();
  let text10 = $(".text-10").html();
  let text11 = $(".text-11").html();
  let text12 = $(".text-12").html();
  let text13 = $(".text-13").html();
  let text14 = $(".text-14").html();
  let text15 = $(".text-15").html();

  function captureState(elements) {
    let state = [];
    gsap.utils
      .toArray(elements)
      .forEach((element) => state.push(element, element.style.cssText));
    return state;
  }

  function revertState(state) {
    for (let i = 0; i < state.length; i += 2) {
      state[i].style.cssText = state[i + 1];
    }

    $(".text-0").html(text0);
    $(".text-1").html(text1);
    $(".text-2").html(text2);
    $(".text-3").html(text3);
    $(".text-4").html(text4);
    $(".text-4b").html(text4b);
    $(".text-5").html(text5);
    $(".text-5b").html(text5b);
    $(".text-6").html(text6);
    $(".text-7").html(text7);
    $(".text-8").html(text8);
    $(".text-9").html(text9);
    $(".text-10").html(text10);
    $(".text-11").html(text11);
    $(".text-12").html(text12);
    $(".text-13").html(text13);
    $(".text-14").html(text14);
    $(".text-15").html(text15);
  }

  const eggLinesBoxVivus = new Vivus("egg-box", {
    start: "manual",
    duration: "300",
  });

  function egLinesBoxVivusFc() {
    eggLinesBoxVivus.play();
  }

  s1.call(animateTextIn, [".text-0"]);
  s1.call(animateTextOut, [".text-0"], ">+6");

  if ($(window).width() < 1023) {
    s1.to(
      ".egg-text-1 .g1",
      { duration: 0, scale: 1.5, x: "-=3", y: "-=3" },
      "<"
    );
    s1.to(
      ".egg-text-1 .g2",
      { duration: 0, scale: 1.5, x: "-=3", y: "-=3" },
      "<"
    );
    s1.to(
      ".egg-text-1 .g3",
      { duration: 0, scale: 1.5, x: "-=3", y: "-=3" },
      "<"
    );

    s1.to(
      ".egg-text-1 .g4",
      { duration: 0, scale: 1.5, x: "-=3", y: "-=3" },
      "<"
    );

    s1.to(
      ".egg-text-1 .g6",
      { duration: 0, scale: 1.5, x: "-=9", y: "-=5" },
      "<"
    );

    s1.to(
      ".egg-text-1 .g7",
      { duration: 0, scale: 1.5, x: "-=9", y: "-=5" },
      "<"
    );
    s1.to(
      ".egg-text-1 .g8",
      { duration: 0, scale: 1.5, x: "-=3", y: "-=3" },
      "<"
    );
    s1.to(
      ".egg-text-1 .g9",
      { duration: 0, scale: 1.5, x: "-=3", y: "-=3" },
      "<"
    );

    // s1.to('.egg-text-1 .g10', { duration: 0, scale: 1.1, x: '-=10', y: '-=10' }, '<');
    // s1.to('.egg-text-1 .g11', { duration: 0, scale: 1.1, x: '-=3', y: '-=3' }, '<');
    // s1.to('.egg-text-1 .g12', { duration: 0, scale: 1.1, x: '-=3', y: '-=3' }, '<');
  }

  s1.from(".container-egg-outline", { opacity: 0, duration: 2 }, ">+2");
  s1.from(".egg", { opacity: 1, duration: 2 }, "<+1");

  if ($(window).width() > 1023) {
    s1.from(".container-egg-outline", 2, {
      left: "50%",
      scale: 0.4,
      ease: "power1.inOut",
    });
  } else {
    if ($(window).height() < 600) {
      s1.fromTo(
        ".container-egg-outline",
        2,
        { left: "50%", scale: 0.5 },
        { left: "50%", scale: 0.5, top: "32%", ease: "power1.inOut" }
      );
    } else {
      s1.fromTo(
        ".container-egg-outline",
        2,
        { left: "50%", scale: 0.5 },
        { left: "50%", scale: 0.6, top: "32%", ease: "power1.inOut" }
      );
    }
  }

  s1.call(animateTextIn, [".text-1"], "<");
  s1.from(".egg-lines .l1", 1, { opacity: 0, ease: "power1.inOut" }, "<");
  s1.from(".egg-lines .l2", 1, { opacity: 0, ease: "power1.inOut" }, ">-.5");
  s1.from(".egg-lines .l3", 1, { opacity: 0, ease: "power1.inOut" }, ">-.5");
  s1.from(".egg-lines .l4", 1, { opacity: 0, ease: "power1.inOut" }, ">-.5");
  s1.from(".egg-lines .l5", 1, { opacity: 0, ease: "power1.inOut" }, ">-.5");
  s1.from(".egg-lines .l6", 1, { opacity: 0, ease: "power1.inOut" }, ">-.5");
  s1.from(".egg-lines .l7", 1, { opacity: 0, ease: "power1.inOut" }, ">-.5");
  s1.from(".egg-lines .l8", 1, { opacity: 0, ease: "power1.inOut" }, ">-.5");
  s1.from(".egg-lines .l9", 1, { opacity: 0, ease: "power1.inOut" }, ">-.5");
  s1.call(animateTextOut, [".text-1"], ">+3");

  if ($(window).width() < 1023) {
    s1.to(
      ".container-egg-outline",
      2,
      { top: "42%", ease: "power1.inOut" },
      ">"
    );
  }

  s1.call(egLinesBoxVivusFc, null, ">");

  s1.to(
    ".egg-lines .l1",
    1,
    {
      opacity: 0,
      ease: "power1.inOut",
      onComplete: function () {
        $(".egg-lines .l1").css("fill", "#193653");
      },
    },
    "<"
  );

  s1.to(
    ".egg-lines .l2",
    1,
    {
      opacity: 0,
      ease: "power1.inOut",
      onComplete: function () {
        $(".egg-lines .l2").css("fill", "#a06c36");
      },
    },
    "<+.2"
  );

  s1.to(
    ".egg-lines .l3",
    1,
    {
      opacity: 0,
      ease: "power1.inOut",
      onComplete: function () {
        $(".egg-lines .l3").css("fill", "#31697f");
      },
    },
    "<+.2"
  );

  s1.to(
    ".egg-lines .l4",
    1,
    {
      opacity: 0,
      ease: "power1.inOut",
      onComplete: function () {
        $(".egg-lines .l4").css("fill", "#0c2032");
      },
    },
    "<+.2"
  );

  s1.to(
    ".egg-lines .l5",
    1,
    {
      opacity: 0,
      ease: "power1.inOut",
      onComplete: function () {
        $(".egg-lines .l5").css("fill", "#a47b4c");
      },
    },
    "<+.2"
  );

  s1.to(
    ".egg-lines .l6",
    1,
    {
      opacity: 0,
      ease: "power1.inOut",
      onComplete: function () {
        $(".egg-lines .l6").css("fill", "#45737f");
      },
    },
    "<+.2"
  );

  s1.to(
    ".egg-lines .l7",
    1,
    {
      opacity: 0,
      ease: "power1.inOut",
      onComplete: function () {
        $(".egg-lines .l7").css("fill", "#0a1b2f");
      },
    },
    "<+.2"
  );

  s1.to(
    ".egg-lines .l8",
    1,
    {
      opacity: 0,
      ease: "power1.inOut",
      onComplete: function () {
        $(".egg-lines .l8").css("fill", "#a88b69");
      },
    },
    "<+.2"
  );

  s1.to(
    ".egg-lines .l9",
    1,
    {
      opacity: 0,
      ease: "power1.inOut",
      onComplete: function () {
        $(".egg-lines .l9").css("fill", "#657980");
      },
    },
    "<+.2"
  );

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const isEnglish = urlParams.get("l") === "en" ? true : false;

  if (isEnglish) {
    s1.to(".egg-text-1 .g11", 1, { opacity: 1, ease: "power1.inOut" }, ">");

    s1.to(".egg-lines .l3", 1, { opacity: 1, ease: "power1.inOut" }, "<+.4");
    s1.to(".egg-text-1 .g6", 1, { opacity: 1, ease: "power1.inOut" }, "<");

    s1.to(".egg-lines .l6", 1, { opacity: 1, ease: "power1.inOut" }, "<+.4");
    s1.to(".egg-text-1 .g7", 1, { opacity: 1, ease: "power1.inOut" }, "<");

    s1.to(".egg-lines .l9", 1, { opacity: 1, ease: "power1.inOut" }, "<+.4");
    s1.to(".egg-text-1 .g8", 1, { opacity: 1, ease: "power1.inOut" }, "<");

    s1.to(".egg-text-1 .g12", 1, { opacity: 1, ease: "power1.inOut" }, ">");

    s1.to(".egg-lines .l2", 1, { opacity: 1, ease: "power1.inOut" }, "<+.4");
    s1.to(".egg-text-1 .g5", 1, { opacity: 1, ease: "power1.inOut" }, "<");

    s1.to(".egg-lines .l5", 1, { opacity: 1, ease: "power1.inOut" }, "<+.4");
    s1.to(".egg-text-1 .g1", 1, { opacity: 1, ease: "power1.inOut" }, "<");

    s1.to(".egg-lines .l8", 1, { opacity: 1, ease: "power1.inOut" }, "<+.4");
    s1.to(".egg-text-1 .g9", 1, { opacity: 1, ease: "power1.inOut" }, "<");

    s1.to(".egg-text-1 .g10", 1, { opacity: 1, ease: "power1.inOut" }, ">");

    s1.to(".egg-lines .l1", 1, { opacity: 1, ease: "power1.inOut" }, "<+.4");
    s1.to(".egg-text-1 .g4", 1, { opacity: 1, ease: "power1.inOut" }, "<");

    s1.to(".egg-lines .l4", 1, { opacity: 1, ease: "power1.inOut" }, "<+.4");
    s1.to(".egg-text-1 .g3", 1, { opacity: 1, ease: "power1.inOut" }, "<");

    s1.to(".egg-lines .l7", 1, { opacity: 1, ease: "power1.inOut" }, "<+.4");
    s1.to(".egg-text-1 .g2", 1, { opacity: 1, ease: "power1.inOut" }, "<");
  } else {
    s1.to(".egg-text-1 .g11", 1, { opacity: 1, ease: "power1.inOut" }, ">");

    s1.to(".egg-lines .l3", 1, { opacity: 1, ease: "power1.inOut" }, "<+.4");
    s1.to(".egg-text-1 .g6", 1, { opacity: 1, ease: "power1.inOut" }, "<");

    s1.to(".egg-lines .l6", 1, { opacity: 1, ease: "power1.inOut" }, "<+.4");
    s1.to(".egg-text-1 .g7", 1, { opacity: 1, ease: "power1.inOut" }, "<");

    s1.to(".egg-lines .l9", 1, { opacity: 1, ease: "power1.inOut" }, "<+.4");
    s1.to(".egg-text-1 .g8", 1, { opacity: 1, ease: "power1.inOut" }, "<");

    s1.to(".egg-text-1 .g12", 1, { opacity: 1, ease: "power1.inOut" }, ">");

    s1.to(".egg-lines .l2", 1, { opacity: 1, ease: "power1.inOut" }, "<+.4");
    s1.to(".egg-text-1 .g5", 1, { opacity: 1, ease: "power1.inOut" }, "<");

    s1.to(".egg-lines .l5", 1, { opacity: 1, ease: "power1.inOut" }, "<+.4");
    s1.to(".egg-text-1 .g4", 1, { opacity: 1, ease: "power1.inOut" }, "<");

    s1.to(".egg-lines .l8", 1, { opacity: 1, ease: "power1.inOut" }, "<+.4");
    s1.to(".egg-text-1 .g9", 1, { opacity: 1, ease: "power1.inOut" }, "<");

    s1.to(".egg-text-1 .g10", 1, { opacity: 1, ease: "power1.inOut" }, ">");

    s1.to(".egg-lines .l1", 1, { opacity: 1, ease: "power1.inOut" }, "<+.4");
    s1.to(".egg-text-1 .g3", 1, { opacity: 1, ease: "power1.inOut" }, "<");

    s1.to(".egg-lines .l4", 1, { opacity: 1, ease: "power1.inOut" }, "<+.4");
    s1.to(".egg-text-1 .g2", 1, { opacity: 1, ease: "power1.inOut" }, "<");

    s1.to(".egg-lines .l7", 1, { opacity: 1, ease: "power1.inOut" }, "<+.4");
    s1.to(".egg-text-1 .g1", 1, { opacity: 1, ease: "power1.inOut" }, "<");
  }

  s1.call(animateTextIn, [".text-2"], "<");
  s1.call(animateTextOut, [".text-2"], "<+10");

  if ($(window).width() < 1023) {
    s1.to(
      ".container-egg-outline",
      2,
      { top: "37%", scale: 0.45, ease: "power1.inOut" },
      ">"
    );
  }

  s1.call(animateTextIn, [".text-3"], "<+2");
  s1.call(animateTextOut, [".text-3"], ">+11");

  if ($(window).width() > 1023) {
    s1.to(
      ".container-egg-outline",
      2,
      { left: "50%", scale: 0.6, ease: "power1.inOut" },
      "<+1"
    );
  } else {
    s1.to(
      ".container-egg-outline",
      2,
      { left: "50%", top: "58%", scale: 0.4, ease: "power1.inOut" },
      "<+1"
    );
  }

  s1.to(".egg-box", 2, { opacity: 0, ease: "power1.inOut" }, "<+1");

  s1.from(".c1d", 1.2, { opacity: 0, ease: "power1.in" }, ">");
  s1.from(".c1c", 1.2, { opacity: 0, ease: "power1.in" }, "<+.4");
  s1.from(".c1b", 1.2, { opacity: 0, ease: "power1.in" }, "<+.4");
  s1.from(".c1a", 1.2, { opacity: 0, ease: "power1.in" }, "<+.4");

  s1.call(animateTextIn, [".text-4"], "<");

  s1.to(".c1a", 10, { rotation: "+=90", ease: "power1.inOut" }, "<+.4");
  s1.to(".c1b", 10, { rotation: "+=40", ease: "power1.inOut" }, "<+.4");
  s1.to(".c1c", 10, { rotation: "+=140", ease: "power1.inOut" }, "<+.4");
  s1.to(".c1d", 10, { rotation: "+=240", ease: "power1.inOut" }, "<+.4");

  s1.call(animateTextOut, [".text-4"], "<+4");

  s1.call(animateTextIn, [".text-4b"], "<+2");

  s1.call(animateTextOut, [".text-4b"], ">+7");

  s1.to("#egg-lines", 1, { opacity: 0, ease: "power1.in" }, "<");
  s1.to(".egg-text-1", 1, { opacity: 0, ease: "power1.in" }, "<");
  s1.from(".logo-id-one-egg", 1, { opacity: 0, ease: "power1.in" }, "<");

  s1.call(animateTextIn, [".text-5"], ">");

  if ($(window).width() > 1023) {
    s1.to(".c1a", 10, { rotation: "+=270", ease: "power1.inOut" }, "<+.4");
    s1.to(".c1b", 10, { rotation: "+=320", ease: "power1.inOut" }, "<+.4");
    s1.to(".c1c", 10, { rotation: "+=220", ease: "power1.inOut" }, "<+.4");
    s1.to(".c1d", 10, { rotation: "+=120", ease: "power1.inOut" }, "<+.4");
  } else {
    s1.to(".c1a", 10, { rotation: "+=178", ease: "power1.inOut" }, "<+.4");
    s1.to(".c1b", 10, { rotation: "+=228", ease: "power1.inOut" }, "<+.4");
    s1.to(".c1c", 10, { rotation: "+=128", ease: "power1.inOut" }, "<+.4");
    s1.to(".c1d", 10, { rotation: "+=28", ease: "power1.inOut" }, "<+.4");
  }

  s1.call(animateTextOut, [".text-5"], "<+5");

  s1.call(animateTextIn, [".text-5b"], ">+2");

  s1.call(animateTextOut, [".text-5b"], "<+5");

  s1.to(
    ".c1a",
    0.6,
    {
      opacity: 0,
      scale: 1.4,
      ease: "power1.in",
      onComplete: function () {
        gsap.to(".c1a", 0.1, { scale: 1 });
      },
    },
    ">"
  );
  s1.to(
    ".c1b",
    0.6,
    {
      opacity: 0,
      scale: 1.4,
      ease: "power1.in",
      onComplete: function () {
        gsap.to(".c1b", 0.1, { scale: 1 });
      },
    },
    "<+.05"
  );
  s1.to(
    ".c1c",
    0.6,
    {
      opacity: 0,
      scale: 1.4,
      ease: "power1.in",
      onComplete: function () {
        gsap.to(".c1c", 0.1, { scale: 1 });
      },
    },
    "<+.05"
  );
  s1.to(
    ".c1d",
    0.6,
    {
      opacity: 0,
      scale: 1.4,
      ease: "power1.in",
      onComplete: function () {
        gsap.to(".c1d", 0.1, { scale: 1 });
      },
    },
    "<+.05"
  );

  s1.to(
    ".c1a",
    0.1,
    {
      opacity: 0.2,
      scale: 1,
      ease: "power1.in",
      onComplete: function () {
        gsap.to(".c1a", 0.1, { scale: 1 });
      },
    },
    ">+.1"
  );
  s1.to(
    ".c1b",
    0.1,
    {
      opacity: 0.2,
      scale: 1,
      ease: "power1.in",
      onComplete: function () {
        gsap.to(".c1b", 0.1, { scale: 1 });
      },
    },
    "<"
  );
  s1.to(
    ".c1c",
    0.1,
    {
      opacity: 0.2,
      scale: 1,
      ease: "power1.in",
      onComplete: function () {
        gsap.to(".c1c", 0.1, { scale: 1 });
      },
    },
    "<"
  );
  s1.to(
    ".c1d",
    0.1,
    {
      opacity: 0.2,
      scale: 1,
      ease: "power1.in",
      onComplete: function () {
        gsap.to(".c1d", 0.1, { scale: 1 });
      },
    },
    "<"
  );

  s1.to(
    ".c1a",
    0.6,
    {
      opacity: 0,
      scale: 1.4,
      ease: "power1.in",
      onComplete: function () {
        gsap.to(".c1a", 0.1, { scale: 1 });
      },
    },
    ">"
  );
  s1.to(
    ".c1b",
    0.6,
    {
      opacity: 0,
      scale: 1.4,
      ease: "power1.in",
      onComplete: function () {
        gsap.to(".c1b", 0.1, { scale: 1 });
      },
    },
    "<+.05"
  );
  s1.to(
    ".c1c",
    0.6,
    {
      opacity: 0,
      scale: 1.4,
      ease: "power1.in",
      onComplete: function () {
        gsap.to(".c1c", 0.1, { scale: 1 });
      },
    },
    "<+.05"
  );
  s1.to(
    ".c1d",
    0.6,
    {
      opacity: 0,
      scale: 1.4,
      ease: "power1.in",
      onComplete: function () {
        gsap.to(".c1d", 0.1, { scale: 1 });
      },
    },
    "<+.05"
  );

  s1.to(
    ".c1a",
    0.1,
    {
      opacity: 0.2,
      scale: 1,
      ease: "power1.in",
      onComplete: function () {
        gsap.to(".c1a", 0.1, { scale: 1 });
      },
    },
    ">+.1"
  );
  s1.to(
    ".c1b",
    0.1,
    {
      opacity: 0.2,
      scale: 1,
      ease: "power1.in",
      onComplete: function () {
        gsap.to(".c1b", 0.1, { scale: 1 });
      },
    },
    "<"
  );
  s1.to(
    ".c1c",
    0.1,
    {
      opacity: 0.2,
      scale: 1,
      ease: "power1.in",
      onComplete: function () {
        gsap.to(".c1c", 0.1, { scale: 1 });
      },
    },
    "<"
  );
  s1.to(
    ".c1d",
    0.1,
    {
      opacity: 0.2,
      scale: 1,
      ease: "power1.in",
      onComplete: function () {
        gsap.to(".c1d", 0.1, { scale: 1 });
      },
    },
    "<"
  );

  s1.to(
    ".c1a",
    0.6,
    {
      opacity: 0,
      scale: 1.4,
      ease: "power1.in",
      onComplete: function () {
        gsap.to(".c1a", 0.1, { scale: 1 });
      },
    },
    ">"
  );
  s1.to(
    ".c1b",
    0.6,
    {
      opacity: 0,
      scale: 1.4,
      ease: "power1.in",
      onComplete: function () {
        gsap.to(".c1b", 0.1, { scale: 1 });
      },
    },
    "<+.05"
  );
  s1.to(
    ".c1c",
    0.6,
    {
      opacity: 0,
      scale: 1.4,
      ease: "power1.in",
      onComplete: function () {
        gsap.to(".c1c", 0.1, { scale: 1 });
      },
    },
    "<+.05"
  );
  s1.to(
    ".c1d",
    0.6,
    {
      opacity: 0,
      scale: 1.4,
      ease: "power1.in",
      onComplete: function () {
        gsap.to(".c1d", 0.1, { scale: 1 });
      },
    },
    "<+.05"
  );

  s1.to(
    ".c1a",
    0.1,
    {
      opacity: 0.2,
      scale: 1,
      ease: "power1.in",
      onComplete: function () {
        gsap.to(".c1a", 0.1, { scale: 1 });
      },
    },
    ">+.1"
  );
  s1.to(
    ".c1b",
    0.1,
    {
      opacity: 0.2,
      scale: 1,
      ease: "power1.in",
      onComplete: function () {
        gsap.to(".c1b", 0.1, { scale: 1 });
      },
    },
    "<"
  );
  s1.to(
    ".c1c",
    0.1,
    {
      opacity: 0.2,
      scale: 1,
      ease: "power1.in",
      onComplete: function () {
        gsap.to(".c1c", 0.1, { scale: 1 });
      },
    },
    "<"
  );
  s1.to(
    ".c1d",
    0.1,
    {
      opacity: 0.2,
      scale: 1,
      ease: "power1.in",
      onComplete: function () {
        gsap.to(".c1d", 0.1, { scale: 1 });
      },
    },
    "<"
  );

  s1.to(
    ".c1a",
    0.6,
    {
      opacity: 0,
      scale: 1.4,
      ease: "power1.in",
      onComplete: function () {
        gsap.to(".c1a", 0.1, { scale: 1 });
      },
    },
    ">"
  );
  s1.to(
    ".c1b",
    0.6,
    {
      opacity: 0,
      scale: 1.4,
      ease: "power1.in",
      onComplete: function () {
        gsap.to(".c1b", 0.1, { scale: 1 });
      },
    },
    "<+.05"
  );
  s1.to(
    ".c1c",
    0.6,
    {
      opacity: 0,
      scale: 1.4,
      ease: "power1.in",
      onComplete: function () {
        gsap.to(".c1c", 0.1, { scale: 1 });
      },
    },
    "<+.05"
  );
  s1.to(
    ".c1d",
    0.6,
    {
      opacity: 0,
      scale: 1.4,
      ease: "power1.in",
      onComplete: function () {
        gsap.to(".c1d", 0.1, { scale: 1 });
      },
    },
    "<+.05"
  );

  s1.to(
    ".c1a",
    0.1,
    {
      opacity: 0.2,
      scale: 1,
      ease: "power1.in",
      onComplete: function () {
        gsap.to(".c1a", 0.1, { scale: 1 });
      },
    },
    ">+.1"
  );
  s1.to(
    ".c1b",
    0.1,
    {
      opacity: 0.2,
      scale: 1,
      ease: "power1.in",
      onComplete: function () {
        gsap.to(".c1b", 0.1, { scale: 1 });
      },
    },
    "<"
  );
  s1.to(
    ".c1c",
    0.1,
    {
      opacity: 0.2,
      scale: 1,
      ease: "power1.in",
      onComplete: function () {
        gsap.to(".c1c", 0.1, { scale: 1 });
      },
    },
    "<"
  );
  s1.to(
    ".c1d",
    0.1,
    {
      opacity: 0.2,
      scale: 1,
      ease: "power1.in",
      onComplete: function () {
        gsap.to(".c1d", 0.1, { scale: 1 });
      },
    },
    "<"
  );

  s1.to(".c1d", 1.2, { opacity: 0, ease: "power1.in" }, ">");
  s1.to(".c1c", 1.2, { opacity: 0, ease: "power1.in" }, "<+.4");
  s1.to(".c1b", 1.2, { opacity: 0, ease: "power1.in" }, "<+.4");
  s1.to(
    ".c1a",
    1.2,
    {
      opacity: 0,
      ease: "power1.in",
      onComplete: () => {
        gsap.to(".btn-arrows-tl-up", 1, { opacity: 0, display: "none" });
        gsap.to("#btn-play-pause", 1, { opacity: 0, display: "none" });
      },
    },
    "<+.4"
  );

  if ($(window).width() > 1023) {
    s1.to(
      ".container-egg-outline",
      2,
      { top: "35%", ease: "power1.inOut" },
      ">"
    );

    s1.to(".text-6", { duration: 1.5, opacity: 1, ease: "power1.inOut" }, "<");
    s1.to(".text-7", { duration: 1.5, opacity: 1, ease: "power1.inOut" }, "<");
    s1.to(".text-8", { duration: 1.5, opacity: 1, ease: "power1.inOut" }, "<");
    s1.to(".text-9", { duration: 1.5, opacity: 1, ease: "power1.inOut" }, "<");
    s1.to(".text-10", { duration: 1.5, opacity: 1, ease: "power1.inOut" }, "<");
  } else {
    s1.to(".container-egg-outline", 2, { opacity: 0, display: "none" }, ">");

    s1.to(".text-6", { duration: 1.5, opacity: 1, ease: "power1.inOut" }, "<");
    s1.to(".text-7", { duration: 1.5, opacity: 1, ease: "power1.inOut" }, "<");
    s1.to(".text-8", { duration: 1.5, opacity: 1, ease: "power1.inOut" }, "<");
    s1.to(".text-9", { duration: 1.5, opacity: 1, ease: "power1.inOut" }, "<");
    s1.to(
      ".text-10",
      {
        duration: 1.5,
        opacity: 1,
        ease: "power1.inOut",
        onComplete: () => {
          $(".container-estrutura").css("overflow", "scroll");
          $(".container-estrutura").css("height", "100%");
        },
      },
      "<"
    );
  }

  $(document).on("click", "#btn-structure-exit", (e) => closeStructureInner(e));

  const lengthSlidesNav = $(".slider-nav .slider-nav-slide").length;

  $(".slider-nav").on(
    "afterChange",
    function (event, slick, currentSlide, nextSlide) {
      console.log(lengthSlidesNav);
      switch (currentSlide) {
        case 0:
          $("#btn-slider-nav-left-metodology").fadeOut("fast");
          break;
        case lengthSlidesNav - 1:
          $("#btn-slider-nav-right-metodology").fadeOut("fast");
          break;
        default:
          console.log("default");
          $("#btn-slider-nav-left-metodology").fadeIn("fast");
          $("#btn-slider-nav-right-metodology").fadeIn("fast");
      }
    }
  );

  $(document).on("click", "#btn-play-pause", (e) => {
    s1.paused(!s1.paused());
    if (s1.paused()) {
      $("#btn-play-pause img").attr("src", "./assets/icon-play.svg");
    } else {
      $("#btn-play-pause img").attr("src", "./assets/icon-pause.svg");
    }
  });

  function showSlider() {
    $("#btn-slider-nav-left-metodology").fadeOut("fast");
    $("#btn-slider-nav-right-metodology").fadeIn("fast");

    s1.pause();

    const d = new Date();
    let hour = d.getHours();

    $(".slider-nav-container").css(
      "background-image",
      `url(./assets/fundos/${hour}h.jpg)`
    );

    $("#slider-metodology").css("opacity", "0");

    $(".slider-nav-container").fadeIn("fast", () => {
      $(".slider-nav")
        .not(".slick-initialized")
        .slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          // adaptiveHeight: true,
          infinite: false,
          autoplay: false,
          arrows: true,
          nextArrow: $("#btn-slider-nav-right-metodology"),
          prevArrow: $("#btn-slider-nav-left-metodology"),
        });

      $(".slider-nav").slick("slickGoTo", 0, true);

      $(".slider-nav").css("opacity", "1");
    });
  }

  $(document).on("click", "#btn-structure-slides", showSlider);

  $(document).on("click", "#btn-slider-nav-close-metodology", (e) => {
    s1.pause();

    main.closeStructure();
    $(".slider-nav").off("afterChange");
    setTimeout(() => {
      revertState(state);
      gsap.to(".container-egg-outline", 1, {
        scale: 1,
        opacity: 0,
        ease: "power1.inOut",
      });
      gsap.to(".logo-id-one-egg", 1, { opacity: 1, ease: "power1.in" }, "<");
      setTimeout(function () {
        revertState(state);
        $(document).on("click", "#btn-structure-exit", (e) =>
          closeStructureInner(e)
        );
      }, 1000);
    }, 200);

    // $('.slider-nav-container').fadeOut('fast', () => {
    //     main.closeStructure();
    //     $('.slider-nav').off('afterChange');
    //     setTimeout(()=>{
    //         revertState(state);
    //         gsap.to('.container-egg-outline', 1, { scale: 1, opacity: 0, ease: "power1.inOut" });
    //         gsap.to('.logo-id-one-egg', 1, { opacity: 1, ease: "power1.in" }, '<');
    //         setTimeout(function () { revertState(state); $(document).on('click', '#btn-structure-exit', (e) => closeStructureInner(e)); }, 1000);
    //     }, 200);

    // });
  });

  function closeStructureInner(e) {
    // e.preventDefault();

    $(document).off("click", "#btn-structure-exit", (e) =>
      closeStructureInner(e)
    );

    s1.to("#btn-structure-exit", 0.5, { opacity: 0, ease: "power1.in" });

    s1.to(".text-6", { duration: 0.5, opacity: 0, ease: "power1.inOut" }, "<");
    s1.to(".text-7", { duration: 0.5, opacity: 0, ease: "power1.inOut" }, "<");
    s1.to(".text-8", { duration: 0.5, opacity: 0, ease: "power1.inOut" }, "<");
    s1.to(".text-9", { duration: 0.5, opacity: 0, ease: "power1.inOut" }, "<");
    s1.to(".text-10", { duration: 0.5, opacity: 0, ease: "power1.inOut" }, "<");

    s1.to(".logo-id-one-egg", 1, { opacity: 0, ease: "power1.in" }, "<");

    s1.to(".egg", 1, { opacity: 1, ease: "power1.in" }, "<");

    s1.to(
      ".container-egg-outline",
      2,
      {
        top: "50%",
        scale: 0.1,
        opacity: 0,
        ease: "power1.inOut",
        onComplete: () => {
          main.closeStructure();
          gsap.to(".container-egg-outline", 1, {
            scale: 1,
            opacity: 0,
            ease: "power1.inOut",
          });
          gsap.to(
            ".logo-id-one-egg",
            1,
            { opacity: 1, ease: "power1.in" },
            "<"
          );
          setTimeout(function () {
            revertState(state);
            $(document).on("click", "#btn-structure-exit", (e) =>
              closeStructureInner(e)
            );
          }, 1000);
        },
      },
      "<"
    );
  }

  function animateTextIn(elementClass) {
    var st = new SplitText(elementClass, { type: "words" }),
      tl = new TimelineLite(),
      numWords = st.words.length;

    TweenLite.delayedCall(0.08, function () {
      $(elementClass).css("opacity", "1");
      let delay = 0;
      for (var i = 0; i < numWords; i++) {
        tl.from(
          st.words[i],
          2,
          { force3D: true, scale: 0.5, opacity: 0 },
          delay
        );
        delay += 0.1;
      }
    });
  }

  function animateTextOut(elementClass) {
    var st = new SplitText(elementClass, { type: "words" }),
      tl = new TimelineLite(),
      numWords = st.words.length;

    TweenLite.delayedCall(0.08, function () {
      $(elementClass).css("opacity", "1");
      let delay = 0;
      tl = new TimelineLite();
      for (var i = 0; i < numWords; i++) {
        tl.to(st.words[i], 1, { force3D: true, scale: 0.5, opacity: 0 }, delay);
        delay += 0.1;
      }
    });
  }

  function levitate(el) {
    const element = el;
    let levitate_loop = gsap.timeline({ repeat: -1, yoyo: true });
    levitate_loop.to(element, {
      y: "+=30",
      duration: 2,
      ease: Power1.easeInOut,
    });
    levitate_loop.to(element, {
      y: "-=30",
      duration: 2,
      ease: Power1.easeInOut,
    });
  }
}
