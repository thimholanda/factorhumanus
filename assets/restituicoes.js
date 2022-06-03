import * as main from "./main.js";
import "./gsapblur.js";
import * as rd from "./restitutions-data.js";
import * as rde from "./restitutions-data-en.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const isEnglish = urlParams.get("l") === "en" ? true : false;

let leanguage = "";

if (isEnglish) {
  leanguage = rde;
} else {
  leanguage = rd;
}

import { LinearToneMapping } from "../build/three.module.js";

let menuIsCloned = false;

if (!menuIsCloned) {
  menuIsCloned = true;

  let html1 = "";
  let html2 = "";
  let html3 = "";
  let counter = 1;

  $(".wrap-menu-restituicoes nav a").each((_, el) => {
    let img = $(el).html();

    if (counter <= 3) {
      html1 += `<li><a href="#">${img}</a></li>`;
    } else if (counter <= 8) {
      html2 += `<li><a href="#">${img}</a></li>`;
    } else {
      html3 += `<li><a href="#">${img}</a></li>`;
    }

    counter++;
  });

  $(".wrap-menu-restituicoes-mobile nav#first-mobile-section ul").html(html1);
  $(".wrap-menu-restituicoes-mobile nav#second-mobile-section ul").html(html2);
  $(".wrap-menu-restituicoes-mobile nav#third-mobile-section ul").html(html3);
}

let currentRestitution;

function addListeners() {
  $(document).on(
    "click",
    ".list-restituicoes a, .wrap-menu-restituicoes-mobile a",
    function (e) {
      e.preventDefault();
      $(document).off(
        "click",
        ".list-restituicoes a, .wrap-menu-restituicoes-mobile a"
      );

      currentRestitution = $(this).children("img").attr("alt").toLowerCase();

      $(".current-logo")
        .children("img")
        .attr("src", `./assets/restituicoes/${currentRestitution}.svg`);

      $(".container-text-single-restituicao").html(
        leanguage.restitutions_data[currentRestitution].text
      );

      if (!leanguage.restitutions_data[currentRestitution].single) {
        $(".container-restituicao-aplicacao .when").html(
          leanguage.restitutions_data[currentRestitution].when
        );

        $(".container-restituicao-aplicacao .application").html(
          leanguage.restitutions_data[currentRestitution].application
        );

        $(".container-restituicao-aplicacao .duration").html(
          leanguage.restitutions_data[currentRestitution].duration
        );

        $(".container-restituicao-aplicacao .periodicity").html(
          leanguage.restitutions_data[currentRestitution].periodicity
        );

        $(".container-restituicao-aplicacao .result").html(
          leanguage.restitutions_data[currentRestitution].result
        );
      }

      changeRestitution(leanguage.restitutions_data[currentRestitution].time);
    }
  );
}

addListeners();

$(document).on("click", ".btn-close-rt", function (e) {
  e.preventDefault();
  closeRestitution();
});

function closeRestitution() {
  $("#btn-restitution-left").css("display", "block");
  gsap.to("#btn-restitution-left", { opacity: 1, duration: 0.5, delay: 2 });

  const tlrc = gsap.timeline({
    repeat: 0,
    onComplete: function () {
      $(".restituicao-conteudo").css({
        display: "none",
      });

      $("#btn-restitution-right").css({
        display: "none",
      });

      $(".btn-close-rt").css({
        display: "none",
        opacity: "0",
      });

      $(".current-logo").css({
        display: "none",
        opacity: "0",
        left: "50%",
        top: "50%",
        transform: "translateX(-50%) scale(0)",
      });

      $(".container-text-single-restituicao").css({
        display: "none",
        opacity: "0",
        // 'left': '50%',
        // 'top': '50%',
        // 'transform': 'translate(-50%, -50%) scale(0)',
        filter: "blur(10px)",
      });

      $(".container-restituicao-aplicacao").css({
        display: "none",
        opacity: "0",
        transform: "scale(0)",
        filter: "blur(10px)",
      });

      $(".btn-rt").css({
        display: "none",
        opacity: "0",
      });

      addListeners();
    },
  });

  tlrc.to(".restituicao-conteudo", {
    opacity: 0,
    duration: 1,
    ease: "power1",
    onComplete: function () {
      tlrc.to(
        ".container-text-single-restituicao, .container-restituicao-aplicacao",
        { scale: 1 }
      );
    },
  });

  tlrc.to(
    ".auxiliar-mobile-bar",
    { opacity: 0, display: "none", duration: 1, ease: "power1" },
    "<"
  );

  tlrc.to(".btn-close-rt", { opacity: 0, duration: 1, ease: "power1" }, "<");
  tlrc.to(".btn-rt", { opacity: 0, duration: 1, ease: "power1" }, "<");

  tlrc.to(
    ".current-logo",
    { scale: 0, opacity: 0, duration: 1, ease: "power1" },
    "<"
  );

  tlrc.to(
    ".bg-main-restituicoes",
    { blur: 0, duration: 1, ease: "power1" },
    "<"
  );
  tlrc.to(
    ".bg-main-restituicoes",
    { scale: 1, duration: 1, ease: "power1" },
    ">"
  );

  $(".wrap-menu-restituicoes").css("display", "flex");
  tlrc.to(
    ".menu-restituicoes .list-restituicoes",
    { opacity: 1, duration: 1, scale: 1, ease: "power1" },
    ">"
  );

  $(".wrap-menu-restituicoes-mobile").css("display", "flex");
  tlrc.to(
    ".wrap-menu-restituicoes-mobile",
    { opacity: 1, duration: 1, scale: 1, ease: "power1" },
    ">"
  );
}

let tlr;

function changeRestitution(time) {
  gsap.to(
    "#btn-restitution-left",
    {
      opacity: 0,
      duration: 0.5,
      onComplete: function () {
        $("#btn-restitution-left").css("display", "none");
      },
    },
    ">"
  );

  tlr = gsap.timeline({
    repeat: 0,
    onComplete: function () {},
  });

  tlr.to(
    ".menu-restituicoes .list-restituicoes",
    {
      opacity: 0,
      duration: 1,
      scale: 0,
      ease: "power1",
      onComplete: function () {
        $(".wrap-menu-restituicoes").css("display", "none");
      },
    },
    ">"
  );

  tlr.to(
    ".wrap-menu-restituicoes-mobile",
    {
      opacity: 0,
      duration: 1,
      scale: 0.5,
      ease: "power1",
      onComplete: function () {
        $(".wrap-menu-restituicoes-mobile").css("display", "none");
      },
    },
    ">"
  );

  tlr.to(
    ".bg-main-restituicoes",
    { scale: 2, duration: 1, ease: "power1" },
    "<"
  );
  tlr.to(
    ".bg-main-restituicoes",
    { blur: 10, duration: 1, ease: "power1" },
    ">"
  );

  let logoInitialScale = 2.2;
  let logoEndScale = 1.4;

  if (currentRestitution == "core-reach") {
    logoInitialScale = 3.2;
    logoEndScale = 2.4;
  }

  $(".current-logo").css("display", "block");

  tlr.to(
    ".current-logo",
    { scale: logoInitialScale, opacity: 1, duration: 1, ease: "power1" },
    "<"
  );
  tlr.to(
    ".current-logo",
    { scale: logoEndScale, top: 40, duration: 1, ease: "power1" },
    "<+1"
  );

  tlr.to(
    ".auxiliar-mobile-bar",
    { opacity: 1, display: "block", duration: 1, ease: "power1" },
    ">"
  );

  $(".restituicao-conteudo").css({ display: "block", opacity: "1" });
  $(".container-text-single-restituicao").css({ opacity: "0" });
  $(".container-text-single-restituicao").css("display", "block");

  tlr.addLabel("restitution");

  tlr.to(
    ".container-text-single-restituicao",
    {
      scale: 1,
      opacity: 1,
      blur: 0,
      duration: 2,
      ease: "power1",
      overflow: "scroll",
    },
    ">"
  );

  if (!leanguage.restitutions_data[currentRestitution].single) {
    $(".btn-rt-right").css("display", "block");
    tlr.to(".btn-rt-right", { opacity: 1, duration: 1, ease: "power1" }, "<");

    tlr.to(
      ".container-text-single-restituicao",
      {
        scale: 1.5,
        blur: 5,
        opacity: 0,
        display: "none",
        duration: 1,
        ease: "power1",
      },
      `<+${time}`
    );

    tlr.addLabel("aplication");

    $(".btn-rt-left").css("display", "block");
    tlr.to(".btn-rt-left", { opacity: 1, duration: 1, ease: "power1" }, "<");

    $(".container-restituicao-aplicacao").css("display", "flex");
    tlr.to(
      ".container-restituicao-aplicacao",
      {
        opacity: 1,
        scale: 1,
        duration: 2,
        blur: 0,
        overflow: "scroll",
        ease: "power1",
      },
      ">"
    );
  } else {
    $(".btn-rt-right").css("display", "block");
    tlr.to(".btn-rt-right", { opacity: 1, duration: 1, ease: "power1" }, "<");
  }

  // $('.btn-close-rt').css('display', 'block');
  // tlr.to('.btn-close-rt', { opacity: 1, duration: 1, ease: "power1" }, '<');
}

$(document).on("click", ".btn-rt-left", function (e) {
  e.preventDefault();
  tlr.currentLabel("restitution");

  // showPreviousInfo();
});

$(document).on("click", ".btn-rt-right", function (e) {
  e.preventDefault();

  if (tlr.currentLabel() === "aplication") {
    $(".btn-rt-right").css("display", "none");
    $(".btn-rt-left").css("display", "none");
    closeRestitution();
  } else if (leanguage.restitutions_data[currentRestitution].single) {
    closeRestitution();
    $(".btn-rt-right").css("display", "none");
    $(".btn-rt-left").css("display", "none");
  } else {
    tlr.currentLabel("aplication");
  }

  // showNextInfo();
});

// function showPreviousInfo() {

//     $('.btn-rt-right').css('display', 'block');
//     gsap.to('.btn-rt-right', { opacity: 1, duration: 1 });

//     gsap.to('.btn-rt-left', {
//         opacity: 0, duration: 1, onComplete: function () {
//             $('.btn-rt-left').css('display', 'none');
//         }
//     });

//     gsap.to('.container-restituicao-aplicacao', {
//         opacity: 0, duration: 1, blur: 10, onComplete: function () {
//             $('.container-restituicao-aplicacao').css('display', 'none');
//             $('.container-text-single-restituicao').css('display', 'block');
//             gsap.to('.container-text-single-restituicao', { opacity: 1, scale: 1, blur: 0, duration: 1 })
//         }
//     });
// }

// function showNextInfo() {
//     $('.btn-rt-left').css('display', 'block');
//     gsap.to('.btn-rt-left', { opacity: 1, duration: 1 });

//     gsap.to('.btn-rt-right', {
//         opacity: 0, duration: 1, onComplete: function () {
//             $('.btn-rt-right').css('display', 'none');
//         }
//     });

//     gsap.to('.container-text-single-restituicao', {
//         opacity: 0, duration: 1, blur: 10, onComplete: function () {
//             $('.container-text-single-restituicao').css('display', 'none');
//             $('.container-restituicao-aplicacao').css('display', 'flex');
//             gsap.to('.container-restituicao-aplicacao', { opacity: 1, scale: 1, blur: 0, duration: 1 })
//         }
//     });
// }

export function restartRestitution() {
  $(".wrap-menu-restituicoes").css("display", "none");
  $(".menu-restituicoes").css("opacity", "0");
  $(".restituicao-txt-geral").css("display", "none");
  $(".menu-restituicoes .list-restituicoes").css({
    scale: "0",
    opacity: "0",
  });
  $("#btn-restitution-left").css({
    display: "none",
    opacity: "0",
  });
}

let initControl = 1;

export function init() {
  $(".wrap-menu-restituicoes-mobile").css({
    display: "none",
    opacity: "0",
  });

  const tl = gsap.timeline({
    repeat: 0,
    onComplete: function () {},
  });

  $(document).on("click", "#btn-restitution-right", (e) => {
    e.preventDefault();

    if (tl.currentLabel() === "txt-rt-2") {
      tl.currentLabel("txt-rt-3");
      $("#btn-restitution-left").css("opacity", "0");
      $("#btn-restitution-left").css("display", "none");
      $("#btn-restitution-left img").attr(
        "src",
        "./assets/restituicoes/arrow-left.svg"
      );
      gsap.to("#btn-restitution-right", { opacity: 0, duration: 1 });
      $("#btn-restitution-right").css("display", "none");
    } else {
      tl.currentLabel("txt-rt-2");
      $("#btn-restitution-left").css("display", "block");
      gsap.to("#btn-restitution-left", { opacity: 1, duration: 1 });
    }
  });

  $(document).on("click", "#btn-restitution-left", (e) => {
    e.preventDefault();

    if (tl.currentLabel() === "txt-rt-3") {
      main.closeRestitution();
    } else {
      tl.currentLabel("txt-rt-1");
      gsap.to("#btn-restitution-left", { opacity: 0, duration: 1 });
    }
  });

  if (initControl == 1) {
    $("#btn-restitution-right").css("display", "block");
    $("#btn-restitution-left").css("display", "none");
    $("#btn-restitution-left").css("opacity", "0");
    $(".restituicao-txt-geral").css("display", "block");
    $("#btn-restitution-left img").attr(
      "src",
      "./assets/timeline/arrow-left.svg"
    );

    tl.addLabel("txt-rt-1");

    tl.to("#btn-restitution-right", { opacity: 1, duration: 1 });

    tl.to(
      ".opening-text-rt-1",
      {
        duration: 2,
        opacity: 1,
        onComplete: () => {
          // tl.pause();
        },
      },
      "<"
    );

    tl.to(
      ".opening-text-rt-1",
      {
        duration: 2,
        opacity: 0,
        onComplete: () => {
          $("#btn-restitution-left").css("display", "block");
          gsap.to("#btn-restitution-left", { opacity: 1, duration: 1 });
        },
      },
      ">+16"
    );
    tl.addLabel("txt-rt-2");

    tl.to(".opening-text-rt-2", { duration: 2, opacity: 1 }, ">");
    tl.to(
      ".opening-text-rt-2",
      {
        duration: 2,
        opacity: 0,
        onComplete: () => {
          gsap.to("#btn-restitution-right", {
            opacity: 0,
            duration: 1,
            onComplete: () => {
              $("#btn-restitution-right").css("display", "none");

              $("#btn-restitution-left img").attr(
                "src",
                "./assets/restituicoes/arrow-left.svg"
              );
            },
          });
        },
      },
      ">+16"
    );
    tl.to("#btn-restitution-left", { opacity: 0, duration: 1 });
    tl.addLabel("txt-rt-3");

    //initControl++;
  }

  $(".wrap-menu-restituicoes").css("display", "flex");

  tl.to(
    ".menu-restituicoes",
    {
      opacity: 1,
      duration: 2,
      ease: "power1",
      onComplete: function () {
        $(".restituicao-txt-geral").css("display", "none");
      },
    },
    ">"
  );

  if ($(window).width() > 1023) {
    tl.from(
      ".menu-restituicoes .list-restituicoes",
      {
        scale: 0,
        opacity: 0,
        left: "50%",
        top: "50%",
        duration: 2,
        ease: "power1",
        onComplete: () => {
          $("#btn-restitution-left").css("display", "block");
          tl.to("#btn-restitution-left", { opacity: 1, duration: 0.5 }, ">");
        },
      },
      "<+1"
    );
  } else {
    tl.to(
      ".menu-restituicoes .list-restituicoes",
      {
        duration: 0,
        opacity: 0,
        display: "none",
        onComplete: () => {
          tl.to("#btn-restitution-left", {
            opacity: 1,
            bottom: "auto",
            left: "auto",
            top: 10,
            right: 10,
            display: "block",
          });
          tl.to(".wrap-menu-restituicoes-mobile", {
            opacity: 1,
            display: "flex",
            scale: 1,
          });
        },
      },
      "<"
    );
  }
}

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

  TweenLite.delayedCall(0.001, function () {
    $(elementClass).css("opacity", "1");
    let delay = 0;
    tl = new TimelineLite();
    for (var i = 0; i < numWords; i++) {
      tl.to(st.words[i], 1, { force3D: true, scale: 0.5, opacity: 0 }, delay);
      delay += 0.1;
    }
  });
}

const convertStyle = () => {
  const height = window.innerHeight;
  Array.from(document.getElementsByClassName("full-height")).forEach(
    (element) => {
      element.style.height = `${height}px`;
    }
  );
};
window.addEventListener("resize", convertStyle);
window.addEventListener("DOMContentLoaded", convertStyle);
