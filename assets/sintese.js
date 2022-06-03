import * as sphere from "./sphere.js";
import * as main from "./main.js";

let state = captureState(
  ".egg, .egg-lines .l1, .egg-lines .l2, .egg-lines .l3, .egg-lines .l4, .egg-lines .l5, .egg-lines .l6, .egg-lines .l7, .egg-lines .l8, .egg-lines .l9, .text-1, .text-2, .text-3, .text-4, .text-5, .text-6, .text-7, .text-8, .text-9, .text-10, .text-11, .text-12, .text-13, .text-14, .text-15, .egg-text-1 .g1, .egg-text-1 .g2, .egg-text-1 .g3, .egg-text-1 .g4, .egg-text-1 .g5, .egg-text-1 .g6, .egg-text-1 .g7, .egg-text-1 .g8, .egg-text-1 .g9, .egg-text-1 .g10, .egg-text-1 .g11, .egg-text-1 .g12, .egg-box, .c1d, .c1c, .c1b, .c1a, .c1tb, .c1ta, .container-circles-opened, .container-circles-closed, .c2a, .c2b, .c2c, .c2d, .c2tb, .c2tc, #container-brigde, .egg-solid-1, .egg-solid-2, .egg-solid-3, .egg-solid-4, .egg-solid-5, .egg-solid-6, .egg-solid-7, .egg-solid-8, .egg-solid, #container-sphere, .alert-slides, .btn-arrows-tl-up"
);

let text1 = $(".text-1").html();
let text2 = $(".text-2").html();
let text3 = $(".text-3").html();
let text4 = $(".text-4").html();
let text5 = $(".text-5").html();
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

  $(".text-1").html(text1);
  $(".text-2").html(text2);
  $(".text-3").html(text3);
  $(".text-4").html(text4);
  $(".text-5").html(text5);
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

let s1;

export function init() {
  const eggLinesVivus = new Vivus("egg-lines", {
    start: "manual",
    type: "oneByOne",
    duration: "300",
  });

  function eggLinesVivusFc() {
    eggLinesVivus.play();
  }

  const eggLinesBoxVivus = new Vivus("egg-box", {
    start: "manual",
    duration: "600",
  });

  function egLinesBoxVivusFc() {
    eggLinesBoxVivus.play();
  }

  s1 = gsap.timeline({
    repeat: 0,
    onComplete: function () {
      main.closeStructure();
      setTimeout(function () {
        revertState(state);
      }, 1000);
    },
  });

  // gsap.to('.btn-arrows-tl-up', 1, { bottom: '50px', opacity: 1, display: 'block', delay: 1 });

  // gsap.to('.alert-slides', 1, { bottom: '20px', opacity: 1, display: 'block', delay: 2 });

  // gsap.to('.alert-slides', 1, { bottom: '0', opacity: 0, display: 'none', delay: 8 });

  // gsap.to('.btn-arrows-tl-up', 1, { bottom: '20px', delay: 9 });

  s1.from(
    ".egg-solid-1",
    2,
    { opacity: 0, scale: 10, ease: "power1.inOut" },
    "<"
  );

  s1.call(levitate, [".egg-solid-1"], ">+.1");
  s1.call(levitate, [".egg-solid-2"], ">+.5");
  s1.call(levitate, [".egg-solid-3"], ">+.5");
  s1.call(levitate, [".egg-solid-4"], ">+.5");
  s1.call(levitate, [".egg-solid-5"], ">+.5");
  s1.call(levitate, [".egg-solid-6"], ">+.5");
  s1.call(levitate, [".egg-solid-7"], ">+.5");
  s1.call(levitate, [".egg-solid-8"], ">+.5");

  if ($(window).width() > 1023) {
    s1.fromTo(
      ".egg-solid-2",
      2,
      { left: "70%", top: "200%", scale: 15, opacity: 0 },
      { left: "75%", top: "90%", opacity: 1, scale: 0.6, ease: "power1.out" },
      "<-4"
    );
    s1.fromTo(
      ".egg-solid-3",
      3,
      { left: "120%", top: "120%", scale: 15, opacity: 0 },
      { left: "99%", top: "80%", opacity: 1, scale: 4, ease: "power1.out" },
      "<-3"
    );
    s1.fromTo(
      ".egg-solid-4",
      1.8,
      { left: "15%", top: "40%", scale: 15, opacity: 0 },
      { left: "30%", top: "60%", opacity: 1, scale: 0.3, ease: "power1.out" },
      "<-3"
    );
    s1.fromTo(
      ".egg-solid-5",
      2.7,
      { left: "120%", top: "-200%", scale: 15, opacity: 0 },
      { left: "92%", top: "18%", opacity: 1, scale: 0.7, ease: "power1.out" },
      "<-3"
    );
    s1.fromTo(
      ".egg-solid-6",
      3.6,
      { left: "-10%", top: "0%", scale: 5, opacity: 0 },
      { left: "8%", top: "20%", opacity: 1, scale: 2, ease: "power1.out" },
      "<-3"
    );
    s1.fromTo(
      ".egg-solid-7",
      2,
      { left: "50%", top: "-200%", scale: 15, opacity: 0 },
      { left: "60%", top: "5%", opacity: 1, scale: 0.1, ease: "power1.out" },
      "<-3"
    );
    s1.fromTo(
      ".egg-solid-8",
      1.4,
      { left: "-10%", top: "300%", scale: 15, opacity: 0 },
      { left: "25%", top: "120%", opacity: 1, scale: 7, ease: "power1.out" },
      "<-3"
    );
  } else {
    s1.fromTo(
      ".egg-solid-2",
      2,
      { left: "70%", top: "200%", scale: 15, opacity: 0 },
      { left: "75%", top: "5%", opacity: 1, scale: 0.4, ease: "power1.out" },
      "<-4"
    );
    s1.fromTo(
      ".egg-solid-3",
      3,
      { left: "120%", top: "120%", scale: 15, opacity: 0 },
      { left: "145%", top: "5%", opacity: 1, scale: 1, ease: "power1.out" },
      "<-3"
    );
    s1.fromTo(
      ".egg-solid-4",
      1.8,
      { left: "15%", top: "40%", scale: 15, opacity: 0 },
      { left: "30%", top: "60%", opacity: 0, scale: 0.3, ease: "power1.out" },
      "<-3"
    );
    s1.fromTo(
      ".egg-solid-5",
      2.7,
      { left: "120%", top: "-200%", scale: 15, opacity: 0 },
      { left: "92%", top: "18%", opacity: 1, scale: 0.7, ease: "power1.out" },
      "<-3"
    );
    s1.fromTo(
      ".egg-solid-6",
      3.6,
      { left: "-10%", top: "0%", scale: 5, opacity: 0 },
      { left: "8%", top: "20%", opacity: 1, scale: 2, ease: "power1.out" },
      "<-3"
    );
    s1.fromTo(
      ".egg-solid-7",
      2,
      { left: "50%", top: "-200%", scale: 15, opacity: 0 },
      { left: "60%", top: "5%", opacity: 1, scale: 0.1, ease: "power1.out" },
      "<-3"
    );
    s1.fromTo(
      ".egg-solid-8",
      1.4,
      { left: "-10%", top: "300%", scale: 15, opacity: 0 },
      { left: "25%", top: "135%", opacity: 0, scale: 5, ease: "power1.out" },
      "<-3"
    );
  }

  s1.call(animateTextIn, [".text-11"], ">");

  s1.call(animateTextIn, [".text-12"], ">");

  // s1.call(()=>{s1.pause(), [], '>'});

  s1.call(animateTextOut, [".text-12"], ">+8");
  s1.call(animateTextOut, [".text-11"], ">+1");

  s1.call(animateTextIn, [".text-13"], ">+.5");
  s1.call(animateTextIn, [".text-14"], ">+2");
  s1.call(animateTextOut, [".text-14"], ">+4");
  s1.call(animateTextOut, [".text-13"], ">+1");

  s1.to(
    ".egg-solid",
    1,
    { left: "50%", top: "50%", scale: 0.2, opacity: 0 },
    ">"
  );

  $("#container-sphere").css("pointer-events", "none");

  s1.to("#container-sphere", { opacity: 1, duration: 1 }, "<-.1");

  s1.call(sphere.init, null, ">");
  s1.call(sphere.animate, null, "<");

  s1.call(animateTextIn, [".text-15"], ">");
  s1.call(animateTextOut, [".text-15"], ">+8");

  s1.call(sphere.transition, [true], ">+.5");

  s1.to("#container-sphere", { opacity: 0, duration: 1 }, ">+3");

  const lengthSlidesNav = $(".slider-nav-synthesis .slider-nav-slide").length;

  $(".slider-nav-synthesis").on(
    "afterChange",
    function (event, slick, currentSlide, nextSlide) {
      console.log(lengthSlidesNav);
      switch (currentSlide) {
        case 0:
          $("#btn-slider-nav-left-synthesis").fadeOut("fast");
          break;
        case lengthSlidesNav - 1:
          $("#btn-slider-nav-right-synthesis").fadeOut("fast");
          break;
        default:
          console.log("default");
          $("#btn-slider-nav-left-synthesis").fadeIn("fast");
          $("#btn-slider-nav-right-synthesis").fadeIn("fast");
      }
    }
  );

  function showSlider() {
    main.track.pause();
    $("#btn-slider-nav-left-synthesis").fadeOut("fast");
    $("#btn-slider-nav-right-synthesis").fadeIn("fast");

    s1.pause();

    const d = new Date();
    let hour = d.getHours();

    $(".slider-nav-container-synthesis").css(
      "background-image",
      `url(./assets/fundos/${hour}h.jpg)`
    );

    $("#slider-synthesis").css("opacity", "0");

    $(".slider-nav-container-synthesis").fadeIn("fast", () => {
      $(".slider-nav-synthesis")
        .not(".slick-initialized")
        .slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          // adaptiveHeight: true,
          infinite: false,
          autoplay: false,
          arrows: true,
          nextArrow: $("#btn-slider-nav-right-synthesis"),
          prevArrow: $("#btn-slider-nav-left-synthesis"),
        });

      $(".slider-nav-synthesis").slick("slickGoTo", 0, true);

      $(".slider-nav-synthesis").css("opacity", "1");
    });
  }

  $(document).on("click", "#btn-synthesis-slides", showSlider);

  $(document).on("click", "#btn-slider-nav-close-synthesis", (e) => {
    $(".slider-nav-container-synthesis").fadeOut("fast", () => {
      main.setFromConcepts();
      main.closeStructure();
      setTimeout(function () {
        revertState(state);
      }, 1000);
      // main.closeStructure();
      // $('.slider-nav').off('afterChange');
      // setTimeout(()=>{
      //     revertState(state);
      //     gsap.to('.container-egg-outline', 1, { scale: 1, opacity: 0, ease: "power1.inOut" });
      //     gsap.to('.logo-id-one-egg', 1, { opacity: 1, ease: "power1.in" }, '<');
      //     setTimeout(function () { revertState(state); $(document).on('click', '#btn-structure-exit', (e) => closeStructureInner(e)); }, 1000);
      // }, 200);
    });
  });

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
