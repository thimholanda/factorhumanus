import { LinearEncoding } from "../build/three.module.js";
import * as main from "./main.js";

let t1;

let text0;
let text1;
let text2;
let text3;
let text4;
let text5;
let text6;
let text7;

let state = captureState(
  ".ovo-chip, .ap-egg, .ap-mask, .ap-text-0,.ap-text-1,.ap-text-2,.ap-text-3,.ap-text-4,.ap-text-5,.ap-text-6,.ap-text-7, .alert-slides, .btn-arrows-tl-up, #btn-play-pause-potency"
);

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

  $(".ap-text-0").html(text0);
  $(".ap-text-1").html(text1);
  $(".ap-text-2").html(text2);
  $(".ap-text-3").html(text3);
  $(".ap-text-4").html(text4);
  $(".ap-text-5").html(text5);
  $(".ap-text-6").html(text6);
  $(".ap-text-7").html(text7);
}

export function init() {
  text0 = $(".ap-text-0").html();
  text1 = $(".ap-text-1").html();
  text2 = $(".ap-text-2").html();
  text3 = $(".ap-text-3").html();
  text4 = $(".ap-text-4").html();
  text5 = $(".ap-text-5").html();
  text6 = $(".ap-text-6").html();
  text7 = $(".ap-text-7").html();

  $("#btn-play-pause-potency img").attr("src", "./assets/icon-pause.svg");

  const s1 = gsap.timeline({ repeat: 0 });
  const s2 = gsap.timeline({ repeat: 0 });
  const s3 = gsap.timeline({ repeat: 0 });
  const s4 = gsap.timeline({ repeat: 0 });
  const s5 = gsap.timeline({ repeat: 0 });
  const s6 = gsap.timeline({ repeat: 0 });
  const s7 = gsap.timeline({ repeat: 0 });
  const s8 = gsap.timeline({ repeat: 0 });
  const s9 = gsap.timeline({ repeat: 0 });
  const s10 = gsap.timeline({ repeat: 0 });
  const s11 = gsap.timeline({ repeat: 0 });

  const sEgg = gsap.timeline({ repeat: 0 });

  sEgg.to(".ovo-chip", 1, { bottom: "50%", y: "50%" });
  sEgg.to(".ovo-chip", 1, { opacity: 0 }, ">");
  sEgg.from(".ap-egg", 2, { opacity: 0, blur: 100 }, "<");

  function pauseS() {
    s1.pause();
    s2.pause();
    s3.pause();
    s4.pause();
    s5.pause();
    s6.pause();
    s7.pause();
    s8.pause();
    s9.pause();
    s10.pause();
    s11.pause();
    sEgg.pause();
  }

  function playSegg() {
    sEgg.play();
  }

  pauseS();

  function playS() {
    s1.play();
    s2.play();
    s3.play();
    s4.play();
    s5.play();
    s6.play();
    s7.play();
    s8.play();
    s9.play();
    s10.play();
    s11.play();
  }

  function turnOff() {
    s4.reverse();
    s7.reverse();
    s9.reverse();
  }

  t1 = gsap.timeline({
    repeat: 0,
    onComplete: function () {
      main.closeAnimationPotency();
      setTimeout(function () {
        revertState(state);
      }, 1000);
    },
  });

  // gsap.to('.btn-arrows-tl-up', 1, { bottom: '50px', opacity: 1, display: 'block', delay: 1 });

  // gsap.to('.alert-slides', 1, { bottom: '20px', opacity: 1, display: 'block', delay: 2 });

  // gsap.to('.alert-slides', 1, { bottom: '0', opacity: 0, display: 'none', delay: 8 });

  // gsap.to('.btn-arrows-tl-up', 1, { bottom: '20px', delay: 9 });

  t1.call(animateTextIn, [".ap-text-0"]);
  t1.call(animateTextOut, [".ap-text-0"], ">+7");
  t1.call(playS, null, ">+3");
  t1.call(playS, null, ">+3");
  t1.call(animateTextIn, [".ap-text-1"]);
  t1.call(animateTextIn, [".ap-text-2"], ">+3");

  if ($(window).width() > 1023) {
    t1.call(turnOff, null, ">+3");
    t1.call(animateTextIn, [".ap-text-3"], ">+1");
    t1.call(animateTextOut, [".ap-text-2"], ">+3");
    t1.call(animateTextOut, [".ap-text-3"], ">+1");
    t1.call(playSegg, null, ">+2");
    t1.to(".ap-egg", 1, { scale: 0.7 }, "<");
    t1.to(".ap-mask", 1, { opacity: 0 }, "<");
  } else {
    t1.call(animateTextOut, [".ap-text-2"], ">+4");
    t1.call(turnOff, null, ">+1.5");
    t1.call(animateTextIn, [".ap-text-3"], ">+2");

    t1.call(animateTextOut, [".ap-text-3"], ">+4");
    t1.call(playSegg, null, ">+2");
    t1.to(".ap-egg", 1, { scale: 0.7 }, "<");
    t1.to(".ap-mask", 1, { opacity: 0 }, "<");
    t1.call(animateTextOut, [".ap-text-1"]);
  }

  t1.call(animateTextIn, [".ap-text-4"], ">+1");
  t1.call(animateTextIn, [".ap-text-5"], ">+4");
  t1.call(animateTextOut, [".ap-text-4"], ">+6");
  t1.call(animateTextOut, [".ap-text-5"], ">+1");

  t1.call(animateTextIn, [".ap-text-6"], ">+1");
  t1.call(animateTextIn, [".ap-text-7"], ">+4");
  t1.call(animateTextOut, [".ap-text-6"], ">+6");
  t1.call(animateTextOut, [".ap-text-7"], ">+1");

  t1.call(animateTextOut, [".ap-text-1"], ">+1");

  t1.to(".ap-egg", 1, { scale: 0, blur: 100, opacity: 0 }, "<");

  s1.staggerFromTo(
    "#ovo-chip-mask .p1",
    1,
    { drawSVG: "0%" },
    { drawSVG: "100%", ease: LinearEncoding.easeNone }
  );

  s1.staggerFromTo(
    "#ovo-chip-mask .p1b",
    0.2,
    { drawSVG: "0%" },
    { drawSVG: "100%", ease: LinearEncoding.easeNone }
  );

  s2.staggerFromTo(
    "#ovo-chip-mask .p2",
    1,
    { drawSVG: "0%" },
    { drawSVG: "100%", ease: LinearEncoding.easeNone, delay: 0.3 }
  );

  s3.staggerFromTo(
    "#ovo-chip-mask .p3",
    1,
    { drawSVG: "0%" },
    { drawSVG: "100%", ease: LinearEncoding.easeNone, delay: 0.3 }
  );

  s3.staggerFromTo(
    "#ovo-chip-mask .p3b",
    0.2,
    { drawSVG: "0%" },
    { drawSVG: "100%", ease: LinearEncoding.easeNone }
  );

  s4.staggerFromTo(
    "#ovo-chip-mask .p4",
    1,
    { drawSVG: "0%" },
    { drawSVG: "100%", ease: LinearEncoding.easeNone, delay: 0.3 }
  );

  s4.staggerFromTo(
    "#ovo-chip-mask .p4b",
    0.2,
    { drawSVG: "0%" },
    { drawSVG: "100%", ease: LinearEncoding.easeNone }
  );

  s5.staggerFromTo(
    "#ovo-chip-mask .p5",
    1,
    { drawSVG: "0%" },
    { drawSVG: "100%", ease: LinearEncoding.easeNone, delay: 0.3 }
  );

  s5.staggerFromTo(
    "#ovo-chip-mask .p5b",
    0.2,
    { drawSVG: "0%" },
    { drawSVG: "100%", ease: LinearEncoding.easeNone }
  );

  s6.staggerFromTo(
    "#ovo-chip-mask .p6",
    1,
    { drawSVG: "0%" },
    { drawSVG: "100%", ease: LinearEncoding.easeNone, delay: 0.3 }
  );

  s6.staggerFromTo(
    "#ovo-chip-mask .p6b",
    0.2,
    { drawSVG: "0%" },
    { drawSVG: "100%", ease: LinearEncoding.easeNone }
  );

  s7.staggerFromTo(
    "#ovo-chip-mask .p7",
    1,
    { drawSVG: "0%" },
    { drawSVG: "100%", ease: LinearEncoding.easeNone, delay: 0.7 }
  );

  s7.staggerFromTo(
    "#ovo-chip-mask .p7c",
    1,
    { drawSVG: "0%" },
    { drawSVG: "100%", ease: LinearEncoding.easeNone }
  );

  s7.staggerFromTo(
    "#ovo-chip-mask .p7b",
    0.2,
    { drawSVG: "0%" },
    { drawSVG: "100%", ease: LinearEncoding.easeNone }
  );

  s8.staggerFromTo(
    "#ovo-chip-mask #t8 polyline, #ovo-chip-mask #t8 line",
    1,
    { drawSVG: "0%" },
    { drawSVG: "100%", ease: LinearEncoding.easeNone, delay: 1 }
  );

  s8.staggerFromTo(
    "#ovo-chip-mask #t8 circle",
    0.2,
    { drawSVG: "0%" },
    { drawSVG: "100%", ease: LinearEncoding.easeNone }
  );

  s9.staggerFromTo(
    "#ovo-chip-mask #t9 polyline, #ovo-chip-mask #t9 line",
    1,
    { drawSVG: "0%" },
    { drawSVG: "100%", ease: LinearEncoding.easeNone, delay: 1 }
  );

  s9.staggerFromTo(
    "#ovo-chip-mask #t9 circle",
    0.2,
    { drawSVG: "0%" },
    { drawSVG: "100%", ease: LinearEncoding.easeNone }
  );

  s10.staggerFromTo(
    "#ovo-chip-mask #t10 polyline, #ovo-chip-mask #t10 line",
    1,
    { drawSVG: "0%" },
    { drawSVG: "100%", ease: LinearEncoding.easeNone, delay: 1 }
  );

  s10.staggerFromTo(
    "#ovo-chip-mask #t10 circle",
    0.2,
    { drawSVG: "0%" },
    { drawSVG: "100%", ease: LinearEncoding.easeNone }
  );

  s11.staggerFromTo(
    "#ovo-chip-mask #t11 polyline, #ovo-chip-mask #t11 line",
    1,
    { drawSVG: "0%" },
    { drawSVG: "100%", ease: LinearEncoding.easeNone, delay: 1.4 }
  );

  s11.staggerFromTo(
    "#ovo-chip-mask #t11 circle",
    0.2,
    { drawSVG: "0%" },
    { drawSVG: "100%", ease: LinearEncoding.easeNone }
  );
}

const lengthSlidesNav = $(".slider-nav-potency .slider-nav-slide").length;

$(".slider-nav-potency").on(
  "afterChange",
  function (event, slick, currentSlide, nextSlide) {
    console.log(lengthSlidesNav);
    switch (currentSlide) {
      case 0:
        $("#btn-slider-nav-left-potency").fadeOut("fast");
        break;
      case lengthSlidesNav - 1:
        $("#btn-slider-nav-right-potency").fadeOut("fast");
        break;
      default:
        console.log("default");
        $("#btn-slider-nav-left-potency").fadeIn("fast");
        $("#btn-slider-nav-right-potency").fadeIn("fast");
    }
  }
);

$(document).on("click", "#btn-play-pause-potency", (e) => {
  t1.paused(!t1.paused());
  if (t1.paused()) {
    main.track.pause();
    $("#btn-play-pause-potency img").attr("src", "./assets/icon-play.svg");
  } else {
    main.track.play();
    $("#btn-play-pause-potency img").attr("src", "./assets/icon-pause.svg");
  }
});

function showSlider() {
  main.track.pause();
  $("#btn-slider-nav-left-potency").fadeOut("fast");
  $("#btn-slider-nav-right-potency").fadeIn("fast");

  t1.pause();

  const d = new Date();
  let hour = d.getHours();

  $(".slider-nav-container-potency").css(
    "background-image",
    `url(./assets/fundos/${hour}h.jpg)`
  );

  $("#slider-potency").css("opacity", "0");

  $(".slider-nav-container-potency").fadeIn("fast", () => {
    $(".slider-nav-potency")
      .not(".slick-initialized")
      .slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // adaptiveHeight: true,
        infinite: false,
        autoplay: false,
        arrows: true,
        nextArrow: $("#btn-slider-nav-right-potency"),
        prevArrow: $("#btn-slider-nav-left-potency"),
      });

    $(".slider-nav-potency").slick("slickGoTo", 0, true);

    $(".slider-nav-potency").css("opacity", "1");
  });
}

$(document).on("click", "#btn-potency-slides", showSlider);

$(document).on("click", "#btn-slider-nav-close-potency", (e) => {
  t1.pause();
  console.log("close");
  main.closeAnimationPotency();
  setTimeout(function () {
    revertState(state);
  }, 1000);
  main.track.pause();

  // $('.slider-nav-container-potency').fadeOut('fast', () => {
  //     t1.pause();
  //     console.log('close')
  //     main.closeAnimationPotency();
  //     setTimeout(function () { revertState(state); }, 1000);
  //     main.track.pause();
  //     // main.closeStructure();
  //     // $('.slider-nav').off('afterChange');
  //     // setTimeout(()=>{
  //     //     revertState(state);
  //     //     gsap.to('.container-egg-outline', 1, { scale: 1, opacity: 0, ease: "power1.inOut" });
  //     //     gsap.to('.logo-id-one-egg', 1, { opacity: 1, ease: "power1.in" }, '<');
  //     //     setTimeout(function () { revertState(state); $(document).on('click', '#btn-structure-exit', (e) => closeStructureInner(e)); }, 1000);
  //     // }, 200);

  // });
});

function animateTextIn(elementClass) {
  var st = new SplitText(elementClass, { type: "words" }),
    tl = new TimelineLite(),
    numWords = st.words.length;

  TweenLite.delayedCall(0.08, function () {
    $(elementClass).css("opacity", "1");
    let delay = 0;
    for (var i = 0; i < numWords; i++) {
      tl.from(st.words[i], 2, { force3D: true, scale: 0.5, opacity: 0 }, delay);
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
