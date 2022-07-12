import * as animacaoPotencia from "./animacao-potencia.js";
import { CheckSwiping } from "./check-swiping.js";
import * as concepts from "./concepts.js";
import * as contact from "./contact.js";
import * as estrutura from "./estrutura.js";
import * as fasttrack from "./fasttrack.js";
// import * as potencia from './potencia.js';
// import * as home from "./home.js";
import * as menu from "./menu.js";
import * as restituicoes from "./restituicoes.js";
import * as sintese from "./sintese.js";
import * as timeline from "./timeline.js";
import tse from "./translateStrings.js";

// import { TWEEN } from '../jsm/libs/tween.module.min.js';
// import { TrackballControls } from '../jsm/controls/TrackballControls.js';
// import { CSS3DRenderer, CSS3DSprite } from '../jsm/renderers/CSS3DRenderer.js';

const checkSwiping = new CheckSwiping("container-menu");

const d = new Date();
let hour = d.getHours();

$("body").css("background-image", `url(./assets/fundos/${hour}h.jpg)`);
$("#fast-track").css("background-image", `url(./assets/fundos/${hour}h.jpg)`);

// const playerPotencia = videojs('video-potencia', { controls: true });
// const playerManifesto = videojs('video-manifesto', { controls: true, preload: 'auto' });
export const track = new Audio("./assets/tracks/potencia-v3.mp3");
track.loop = true;
export let fromConcepts = 0;
let nextScene = "potencia";
let previousScene;
let isFromFastTrack = 0;
let menuInitialized = false;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const isEnglish = urlParams.get("l") === "en" ? true : false;

export function setFromConcepts() {
  fromConcepts = 1;
}

$(window).on("load", () => {
  $(".page-loader").fadeOut("slow");

  fasttrack.init();
  menu.loadParticlesMenu();
});

$("document").ready(function () {
  //LGPD

  let checkLGPD = localStorage.getItem("lgpd-fhs");

  if (!checkLGPD) {
    $(".modal-lgpd").fadeIn();
  }

  $(document).on("click", ".btn-lgpd", function () {
    localStorage.setItem("lgpd-fhs", "true");
    $(".modal-lgpd").fadeOut();
  });

  function isFormInvalid(form, event) {
    form[0].classList.add("was-validated");
    if (form[0].checkValidity() === false) {
      event.stopPropagation();
      return false;
    } else {
      return true;
    }
  }

  //LGPD

  if (isEnglish) {
    $(".btn-contact").html("SEND");
    $(".txt-email").html("contactus@factorhumanus.com");
    $(".txt-email").attr("href", "mailto:contactus@factorhumanus.com");
    $(".phphone").attr("placeholder", "PHONE");
    $(".phname").attr("placeholder", "NAME");

    $(tse).each((index, el) => {
      const key = Object.keys(el)[0];
      const value = Object.values(el)[0];
      $(`.${key}`).html(value);
    });
  }

  function checkIsMobileLandscape() {
    if ($(window).width() < 1023) {
      if ($(window).width() > $(window).height()) {
        $(".page-device-orientation").fadeIn();
      } else {
        $(".page-device-orientation").fadeOut();
      }
    }
  }

  checkIsMobileLandscape();

  $(window).resize(() => {
    checkIsMobileLandscape();
  });

  // fasttrack.init(); <

  // menu.init();
  // menu.loadParticlesMenu(); <

  // potencia.init();

  // setTimeout(function () {
  //     potencia.functionStop();
  // }, 1000);

  // function playTrack() {
  //     track.play();
  //     document.body.removeEventListener('click', playTrack);
  // }

  // document.body.addEventListener('click', playTrack);

  $(document).on("click", ".timeline-slide button", (e) => {
    e.preventDefault();
    const content = $(e.currentTarget).parent().attr("content");
    const title = $(e.currentTarget).parent().find("h2").html();
    $(".timeline-slider-modal-content").html(content);
    $(".timeline-slider-modal").find("h2").html(title);
    $(".timeline-slider-modal").fadeIn();
    $(".btn-close-tl").fadeOut();
  });

  $(document).on("click", ".btn-close-tl-md", (e) => {
    $(".timeline-slider-modal").fadeOut();
    $(".btn-close-tl").fadeIn();
  });

  $(document).on("click", ".btn-close-player", (e) => {
    e.preventDefault();

    $(".btn-close-player").fadeOut();
    $(".opening-logo, .btns-languages").fadeIn();
    player.stopVideo();

    if (isFromFastTrack) {
      resetScene();
    }

    $(".video-container").fadeOut("fast", function () {
      menu.expandEggs();
      $(".btn-fast-track").fadeIn();
    });
  });

  $(document).on("click touchend", ".btn-arrows-tl-left-tl", function (e) {
    $(".btn-arrows-tl-left-tl").fadeOut();
    $(".btn-arrows-tl-right-tl").fadeIn();
    TweenMax.to(".tl-wrapper", { x: "0", duration: 0.5, ease: "power1.inOut" });
  });

  $(document).on("click touchend", ".btn-close-tl", function (e) {
    closeTimeLine();
  });

  $(document).on("click touchend", ".btn-close-contact", function (e) {
    closeContact();
  });

  $(document).on("click touchend", ".btn-close-concept", function (e) {
    closeConcepts();
  });

  // $(document).on('click touchend', '.btn-close-rt-all', function (e) {
  //     closeRestitution();
  // });

  $(document).on("click touchend", ".btn-arrows-tl-right-tl", function (e) {
    $(".btn-arrows-tl-left-tl").fadeIn();
    $(".btn-arrows-tl-right-tl").fadeOut();
    TweenMax.to(".tl-wrapper", {
      x: "-100%",
      duration: 0.5,
      ease: "power1.inOut",
    });
  });

  let an1;

  $(document).on("mouseleave", ".container-egg-timeline img", function (e) {
    an1.kill();

    $(".container-egg-timeline img").css("filter", "brightness(100%)");

    $(".container-egg-timeline .content").stop();

    $(".container-egg-timeline .content").fadeOut("fast");
    TweenMax.to(".container-egg-timeline .tl-trace", {
      height: 0,
      duration: 0.5,
    });
  });

  $(document).on("mouseover", ".container-egg-timeline img", function (e) {
    $(".container-egg-timeline img").css("filter", "brightness(100%)");

    const targetTrace = $(this).parent().find(".tl-trace");
    const targetImg = $(this).parent().find("img");
    const targetContent = $(this).parent().find(".content");
    const targetEggBlur = $(this).parent().find(".egg-blur-tl");
    const targetHeight = targetTrace.attr("targetHeight");

    $(targetImg).css("filter", "brightness(200%)");

    an1 = TweenMax.to(targetTrace, {
      height: targetHeight,
      onComplete: function () {
        $(targetContent).fadeIn();
      },
    });
  });

  // playerManifesto.on('ended', function () {

  //     if (isFromFastTrack) {
  //         resetScene();
  //     }

  //     $('.video-container').fadeOut('fast', function () {
  //         menu.expandEggs();
  //         // track.play();
  //         $('.btn-fast-track').fadeIn();
  //     });
  // });

  $(document).on("click touchend", "#btn-block-sintese", (e) => {
    e.preventDefault();
  });

  $(document).on("click touchend", ".egg-main-3d", lChangeScreenStart);

  function lChangeScreenStart() {
    $(document).off("click touchend", ".egg-main-3d", lChangeScreenStart);
    setTimeout(function () {
      $(document).on("click touchend", ".egg-main-3d", lChangeScreenStart);
    }, 5000);
    changeScreenStart();
  }

  function changeScreenStart() {
    console.log("changeScreenStart");
    console.log(checkSwiping.swipingStatus);
    if (
      checkSwiping.swipingStatus === "swiping" ||
      checkSwiping.swipingStatus === "dragging"
    ) {
      $(document).on("click touchend", ".egg-main-3d", lChangeScreenStart);
      return;
    }
    menu.transitionToCenter();
  }

  let fastTrackVisible = false;

  $(document).on("click", ".btn-fast-track", function (e) {
    e.preventDefault();
    checkSwiping.swipingStatus = undefined;

    if (!fastTrackVisible) {
      fastTrackVisible = true;
      fasttrack.setStop(false);
      fasttrack.animate();
      $("#fast-track").fadeIn();
      $("#fast-track-menu").fadeIn();
      // menu.setScene('fast-track');
    } else {
      fastTrackVisible = false;
      fasttrack.setStop(true);
      fasttrack.animate();
      $("#fast-track").fadeOut();
      $("#fast-track-menu").fadeOut();
      // menu.setScene('main');
      menu.animate();
    }
  });

  $(document).on("click", "#fast-track-menu a", lChanteFasttrack);

  function lChanteFasttrack(e) {
    if (!menuInitialized) return;

    //if (menu.tweenStatus == 'completed') {
    // previousScene = nextScene;
    // console.log(`previous scene: ${previousScene}`);

    let scene = $(this).attr("scene");

    if (typeof scene !== "undefined") {
      e.preventDefault();
      $(document).off("click touchend", "#fast-track-menu a", lChanteFasttrack);
      $(document).off("click touchend", ".egg-main-3d", lChangeScreenStart);

      setTimeout(function () {
        $(document).on(
          "click touchend",
          "#fast-track-menu a",
          lChanteFasttrack
        );
        $(document).on("click touchend", ".egg-main-3d", lChangeScreenStart);
      }, 5000);

      isFromFastTrack = 1;

      previousScene = nextScene;
      nextScene = scene;

      changeScreenStart();
      e.preventDefault();
      // nextScene = scene;
      fastTrackVisible = false;
      fasttrack.setStop(true);
      fasttrack.animate();
      $("#fast-track").fadeOut();
      $("#fast-track-menu").fadeOut();
      // menu.setScene('main');
      //menu.animate();
      //changeScreenStart();
      //}
    }
  }
});

function resetScene() {
  if (previousScene !== undefined) {
    nextScene = previousScene;
    isFromFastTrack = 0;
    console.log(`resetSceneTo: ${nextScene}`);
  }
}

$(document).on("click", ".card", function () {
  fromConcepts = 1;

  $(".container-concepts").fadeOut();

  let cardData = $(this).attr("data");

  switch (cardData) {
    case "c1":
      concepts.showPotency();
      break;
    case "c2":
      concepts.showRestitution();
      break;
    case "c3":
      concepts.showFaculties();
      break;
    case "c4":
      $(".opening-logo, .btns-languages").fadeOut();

      $("#container-menu").fadeOut("fast", function () {
        sintese.init();
        $(".container-sintese").fadeIn();
        // nextScene = 'potencia';
      });
      break;
    case "c5":
      concepts.showRandom();
      break;
  }
});

export function changeScreen() {
  // console.log('changeScreen');
  // console.log(nextScene);

  // if (menu.tweenStatus == 'completed') {

  setTimeout(function () {
    console.log("change screen");
    console.log(`nextScene: ${nextScene}`);
    console.log(`previousScene: ${previousScene}`);
    // return;

    $(".btn-fast-track").fadeOut();

    switch (nextScene) {
      case "potencia":
        $(".opening-logo, .btns-languages").fadeOut();
        $("#container-menu").fadeOut("fast", function () {
          $(".container-anima-potencia").fadeIn();
          animacaoPotencia.init();
          track.play();
          nextScene = "estrutura";
        });

        // potencia.functionStart();
        // potencia.animate();
        // potencia.functionStop();

        // potencia.resetAnimation();

        // $('#potency-block').fadeIn('fast', function () {
        //     $('.opening-logo').fadeOut();
        //     $('#container-menu').fadeOut('fast');
        //     TweenMax.fromTo('#potency-block', .5, { opacity: 0 }, { opacity: 1 });
        //     potencia.initAnimation();
        //     setTimeout(function () {
        //         potencia.functionStart();
        //         potencia.animate();
        //     }, 4000);
        // });

        // nextScene = 'estrutura';

        break;

      case "estrutura":
        $(".opening-logo, .btns-languages").fadeOut();
        $("#container-menu").fadeOut("fast", function () {
          estrutura.init();
          $(".container-estrutura").fadeIn();
          nextScene = "restituicoes";
        });
        break;

      case "metodologia":
        track.pause();
        player.playVideo();
        player.addEventListener("onStateChange", (event) => {
          if (event.data == YT.PlayerState.ENDED) {
            if (isFromFastTrack) {
              resetScene();
            }

            $(".btn-close-player").fadeOut();
            $(".video-container").fadeOut("fast", function () {
              menu.expandEggs();
              $(".btn-fast-track").fadeIn();
              $(".opening-logo, .btns-languages").fadeIn();
            });
          }
        });

        setTimeout(() => {
          $(".btn-close-player").fadeIn();
        }, 10000);

        // while(!done){
        //     console.log(done);
        // }

        // playerManifesto.play();
        // playerManifesto.volume(0);
        // playerManifesto.currentTime(100);
        $(".opening-logo, .btns-languages").fadeOut();
        $(".video-container").fadeIn();
        nextScene = "potencia";
        break;

      case "sintese":
        $(".opening-logo, .btns-languages").fadeOut();
        $("#container-menu").fadeOut("fast", function () {
          sintese.init();
          $(".container-sintese").fadeIn();
          // nextScene = 'potencia';
        });
        break;

      case "contato":
        $(".opening-logo, .btns-languages").fadeOut();
        $("#container-menu").fadeOut("fast", function () {
          $(".container-contato").fadeIn();
          // nextScene = 'potencia';
          contact.init();
        });
        break;

      case "concepts":
        $(".opening-logo, .btns-languages").fadeOut();
        $("#container-menu").fadeOut("fast", function () {
          $(".container-concepts").fadeIn();
          // nextScene = 'potencia';
          concepts.init();
        });
        break;

      case "linha-tempo":
        $(".opening-logo, .btns-languages").fadeOut();
        $("#container-menu").fadeOut("fast", function () {
          $(".container-linha-tempo").fadeIn();
          // nextScene = 'potencia';
          timeline.init();
        });
        break;

      case "restituicoes":
        $(".opening-logo, .btns-languages").fadeOut();
        $("#container-menu").fadeOut("fast", function () {
          $(".container-restituicao").fadeIn("fast", () => {
            $(".container-restituicao").css("display", "flex");
          });

          nextScene = "metodologia";
          restituicoes.init();
        });
        break;
    }

    // console.log(`next scene: ${nextScene}`);
    // previousScene = '';
  }, 0);

  // }
}

// playerPotencia.on('ended', function () {

//     if (isFromFastTrack) {
//         resetScene();
//     }

//     $('.video-container-potencia').fadeOut('fast', function () {

//         $('#container-menu').fadeIn('fast', function () {
//             menu.expandEggs();
//             // track.play();
//             $('.btn-fast-track').fadeIn();
//         });

//         // resetScene();
//     });
// });

function closeTimeLine() {
  if (isFromFastTrack) {
    resetScene();
  }

  $(".container-linha-tempo").fadeOut("fast", function () {
    $(".opening-logo, .btns-languages").fadeIn();
    $("#container-menu").fadeIn("fast", function () {
      menu.expandEggs();
      $(".btn-fast-track").fadeIn();
      // resetScene();
      // nextScene = 'potencia';
      $(".btn-arrows-tl-left-tl").fadeOut();
      $(".btn-arrows-tl-right-tl").fadeIn();
      TweenMax.to(".tl-wrapper", {
        x: "0",
        duration: 0.5,
        ease: "power1.inOut",
      });
      timeline.resetTimeLine();
    });
  });
}

function closeContact() {
  if (isFromFastTrack) {
    resetScene();
  }

  $(".container-contato").fadeOut("fast", function () {
    $(".opening-logo, .btns-languages").fadeIn();
    $("#container-menu").fadeIn("fast", function () {
      menu.expandEggs();
      $(".btn-fast-track").fadeIn();
      // resetScene();
      // nextScene = 'potencia';
    });
  });
}

function closeConcepts() {
  if (isFromFastTrack) {
    resetScene();
  }

  fromConcepts = 0;
  $(".container-concepts").fadeOut("fast", function () {
    $(".opening-logo, .btns-languages").fadeIn();
    $("#container-menu").fadeIn("fast", function () {
      menu.expandEggs();
      $(".btn-fast-track").fadeIn();
      // resetScene();
      // nextScene = 'potencia';
    });
  });
}

export function closeRestitution() {
  if (isFromFastTrack) {
    resetScene();
  }

  $(".container-restituicao").fadeOut("fast", function () {
    $(".menu-restituicoes").css("opacity", "0");
    $(".opening-logo, .btns-languages").fadeIn();
    $("#container-menu").fadeIn("fast", function () {
      menu.expandEggs();
      $(".btn-fast-track").fadeIn();
      // resetScene();
      // nextScene = 'metodologia';
    });
  });
}

export function closeStructure() {
  if (isFromFastTrack) {
    resetScene();
  }

  if (!fromConcepts) {
    $(".container-estrutura, .container-sintese").fadeOut("fast", function () {
      $(".opening-logo, .btns-languages").fadeIn();
      $("#container-menu").fadeIn("fast", function () {
        menu.expandEggs();
        console.log("vai");
        $(".btn-fast-track").fadeIn();
      });
    });
    // resetScene();
  } else {
    $(".container-estrutura, .container-sintese").fadeOut("fast", function () {
      $(".container-concepts").fadeIn();
      fromConcepts = 0;
      // resetScene();
      // nextScene = 'restituicoes';
    });
  }
}

export function closeAnimationPotency() {
  setTimeout(function () {
    track.pause();
    track.currentTime = 0;
  }, 2000);

  if (isFromFastTrack) {
    resetScene();
  }

  if (!fromConcepts) {
    $(".container-anima-potencia").fadeOut("fast", function () {
      $(".opening-logo, .btns-languages").fadeIn();
      $("#container-menu").fadeIn("fast", function () {
        menu.expandEggs();
        $(".btn-fast-track").fadeIn();
      });
    });
    // resetScene();
  } else {
    $("container-anima-potencia").fadeOut("fast", function () {
      $(".container-concepts").fadeIn();
      fromConcepts = 0;
      // resetScene();
      // nextScene = 'restituicoes';
    });
  }
}

export function showPotencyVideo() {
  // track.pause();
  potencia.functionStop();
  potencia.animate();
  $(".container-anima-potencia").fadeIn();
  animacaoPotencia.init();
  track.play();
  // playerPotencia.play();
  // playerPotencia.currentTime(70);
  // $('.video-container-potencia').fadeIn();
  $("#potency-block").fadeOut();
  $("#potency-block").css("opacity", 0);
  // nextScene = 'estrutura';
}

export function initMenu() {
  menuInitialized = true;
  menu.init();
}
