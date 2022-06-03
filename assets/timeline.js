import * as main from "./main.js";

const state = captureState(
  ".container-timeline, .container-egg-timeline-main, .timeline-line-1, .timeline-line-2, .timeline-line-3, .timeline-line-4, .timeline-line-5, .timeline-line-6, .timeline-line-7, .timeline-line-8, .timeline-line-9, .timeline-line-10, .timeline-line-11, .timeline-line-12, .container-egg-timeline-child, .container-egg-timeline-0, .container-egg-timeline-1,.container-egg-timeline-2, .container-egg-timeline-3, .container-egg-timeline-4, .container-egg-timeline-5, .container-egg-timeline-6, .container-egg-timeline-7, .container-egg-timeline-8, .container-egg-timeline-9, .timeline-slider-modal, .btn-close-tl-md, .timeline-slider"
);

let s3;
let s2;
let levitate_loop;

export function resetTimeLine() {
  setTimeout(function () {
    revertState(state);
  }, 1000);
}

function revertState(state) {
  s2.pause(0, true);
  s3.pause(0, true);
  levitate_loop.pause(0, true);

  for (let i = 0; i < state.length; i += 2) {
    state[i].style.cssText = state[i + 1];
  }
}

function captureState(elements) {
  let state = [];
  gsap.utils
    .toArray(elements)
    .forEach((element) => state.push(element, element.style.cssText));
  return state;
}

let clonedInfos = 0;

export function init() {
  if ($(window).width() < 1023) {
    $(".btn-arrows-tl-right").css("display", "none");
    $(".container-egg-timeline").css("display", "none");

    if (!clonedInfos) {
      clonedInfos = 1;
      let html = "";

      $(".container-egg-timeline").each((_, el) => {
        const title = $(el).find("h2").html();
        const content = $(el).find(".content").html();
        html += `<div class="timeline-slide" content='${content}'>
                                <button type="button">
                                    <img src="./assets/f/egg-full.png" alt="FHS">
                                    <h2>${title}</h2>
                                </button>
                            </div>`;
      });

      $(".timeline-slider").html(html);
    }

    $(".timeline-slider").not(".slick-initialized").slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: false,
      nextArrow:
        '<a class="btn-arrows-tl btn-arrows-tl-right-mobile btn-arrows-tl-right-tl-mobile" href="#"><img src="./assets/timeline/arrow-right.svg" alt="Right"></a>',
      prevArrow:
        '<a style="opacity: 0;" class="btn-arrows-tl btn-arrows-tl-left-mobile btn-arrows-tl-left-tl-mobile" href="#"><img src="./assets/timeline/arrow-left.svg" alt="Left"></a>',
    });
    $(".timeline-slider").fadeIn();

    $(".timeline-slider").on(
      "afterChange",
      (event, slick, currentSlide, nextSlide) => {
        if (currentSlide > 0)
          $(".btn-arrows-tl-left-tl-mobile").css("opacity", "1");
        else $(".btn-arrows-tl-left-tl-mobile").css("opacity", "0");

        if (currentSlide >= 9)
          $(".btn-arrows-tl-right-tl-mobile").css("opacity", "0");
        else $(".btn-arrows-tl-right-tl-mobile").css("opacity", "1");

        console.log({ currentSlide });
      }
    );
  }
  if ($(window).width() > 1023) {
    $(".btn-close-tl").css("opacity", "0");
  }

  // const eggLinesVivus = new Vivus('egg-base', {
  //     start: 'manual',
  //     type: 'delayed',
  //     duration: '100'
  // });

  // function eggLinesVivusFc() {
  //     eggLinesVivus.play();
  // }

  const s1 = gsap.timeline({
    repeat: 0,
    onComplete: function () {},
  });

  if ($(window).width() > 1023) {
    s1.from(".container-egg-timeline-main", {
      opacity: 0,
      scale: 0,
      duration: 2,
      ease: "power1",
    });
  }

  s1.from(
    ".timeline-line-1",
    {
      opacity: 0,
      y: "+=10",
      x: "-=3000",
      scale: 2,
      duration: 2,
      ease: "power1",
    },
    ">"
  );
  s1.from(
    ".timeline-line-2",
    {
      opacity: 0,
      y: "+=10",
      x: "-=3000",
      scale: 2,
      duration: 2,
      ease: "power1",
    },
    "<.1"
  );
  s1.from(
    ".timeline-line-3",
    {
      opacity: 0,
      y: "+=10",
      x: "-=3000",
      scale: 2,
      duration: 2,
      ease: "power1",
    },
    "<.1"
  );
  s1.from(
    ".timeline-line-4",
    {
      opacity: 0,
      y: "+=10",
      x: "-=3000",
      scale: 2,
      duration: 2,
      ease: "power1",
    },
    "<.1"
  );
  s1.from(
    ".timeline-line-5",
    {
      opacity: 0,
      y: "+=10",
      x: "-=3000",
      scale: 2,
      duration: 2,
      ease: "power1",
    },
    "<.1"
  );
  s1.from(
    ".timeline-line-6",
    {
      opacity: 0,
      y: "+=10",
      x: "-=3000",
      scale: 2,
      duration: 2,
      ease: "power1",
    },
    "<.1"
  );
  s1.from(
    ".timeline-line-7",
    {
      opacity: 0,
      y: "+=10",
      x: "-=3000",
      scale: 2,
      duration: 2,
      ease: "power1",
    },
    "<.1"
  );
  s1.from(
    ".timeline-line-8",
    {
      opacity: 0,
      y: "+=10",
      x: "-=3000",
      scale: 2,
      duration: 2,
      ease: "power1",
    },
    "<.1"
  );
  s1.from(
    ".timeline-line-9",
    {
      opacity: 0,
      y: "+=10",
      x: "-=3000",
      scale: 2,
      duration: 2,
      ease: "power1",
    },
    "<.1"
  );
  s1.from(
    ".timeline-line-10",
    {
      opacity: 0,
      y: "+=10",
      x: "-=3000",
      scale: 2,
      duration: 2,
      ease: "power1",
    },
    "<.1"
  );
  s1.from(
    ".timeline-line-11",
    {
      opacity: 0,
      y: "+=10",
      x: "-=3000",
      scale: 2,
      duration: 2,
      ease: "power1",
    },
    "<.1"
  );
  s1.from(
    ".timeline-line-12",
    {
      opacity: 0,
      y: "+=10",
      x: "-=3000",
      scale: 2,
      duration: 2,
      ease: "power1",
    },
    "<.1"
  );

  s1.call(animateLines, null, ">+1");

  if ($(window).width() > 1023) {
    // s1.to('.container-egg-timeline-main .egg-full-tl', { opacity: 0, duration: .3, ease: "power1"});

    s1.from(
      ".container-egg-timeline-child",
      { opacity: 0, duration: 0.5, ease: "power1" },
      "<"
    );

    s1.fromTo(
      ".container-egg-timeline-1",
      { left: "50%", top: "50%", scale: 0.1 },
      {
        scale: 1,
        duration: 0.2,
        left: "50%",
        top: "26%",
        ease: "power1.inOut",
      },
      ">+.1"
    );

    s1.fromTo(
      ".container-egg-timeline-2",
      { left: "50%", top: "50%", scale: 0.1 },
      {
        scale: 1,
        duration: 0.2,
        left: "59%",
        top: "34%",
        ease: "power1.inOut",
      },
      "<"
    );

    s1.fromTo(
      ".container-egg-timeline-3",
      { left: "50%", top: "50%", scale: 0.1 },
      {
        scale: 1,
        duration: 0.2,
        left: "68%",
        top: "45%",
        ease: "power1.inOut",
      },
      "<"
    );

    s1.fromTo(
      ".container-egg-timeline-4",
      { left: "50%", top: "50%", scale: 0.1 },
      {
        scale: 1,
        duration: 0.2,
        left: "64%",
        top: "64%",
        ease: "power1.inOut",
      },
      "<"
    );

    s1.fromTo(
      ".container-egg-timeline-5",
      { left: "50%", top: "50%", scale: 0.1 },
      {
        scale: 1,
        duration: 0.2,
        left: "55%",
        top: "74%",
        ease: "power1.inOut",
      },
      "<"
    );

    s1.fromTo(
      ".container-egg-timeline-6",
      { left: "50%", top: "50%", scale: 0.1 },
      {
        scale: 1,
        duration: 0.2,
        left: "45%",
        top: "72%",
        ease: "power1.inOut",
      },
      "<"
    );

    s1.fromTo(
      ".container-egg-timeline-7",
      { left: "50%", top: "50%", scale: 0.1 },
      {
        scale: 1,
        duration: 0.2,
        left: "36%",
        top: "62%",
        ease: "power1.inOut",
      },
      "<"
    );

    s1.fromTo(
      ".container-egg-timeline-8",
      { left: "50%", top: "50%", scale: 0.1 },
      {
        scale: 1,
        duration: 0.2,
        left: "33%",
        top: "44%",
        ease: "power1.inOut",
      },
      "<"
    );

    s1.fromTo(
      ".container-egg-timeline-9",
      { left: "50%", top: "50%", scale: 0.1 },
      {
        scale: 1,
        duration: 0.2,
        left: "41%",
        top: "32%",
        ease: "power1.inOut",
      },
      "<"
    );

    // s1.to('.container-egg-timeline-main .egg-full-tl', { opacity: 1, duration: .3, ease: "power1"});

    s1.to(
      ".container-egg-timeline-1",
      { duration: 1, left: "10%", top: "36%", ease: "power1.inOut" },
      ">"
    );

    s1.to(
      ".container-egg-timeline-2",
      { duration: 1, left: "20%", top: "42%", ease: "power1.inOut" },
      "<"
    );

    s1.to(
      ".container-egg-timeline-3",
      { duration: 1, left: "30%", top: "38%", ease: "power1.inOut" },
      "<"
    );

    s1.to(
      ".container-egg-timeline-4",
      { duration: 1, left: "40%", top: "45%", ease: "power1.inOut" },
      "<"
    );

    s1.to(
      ".container-egg-timeline-5",
      { duration: 1, left: "61%", top: "41%", ease: "power1.inOut" },
      "<"
    );

    s1.to(
      ".container-egg-timeline-6",
      { duration: 1, left: "110%", top: "30%", ease: "power1.inOut" },
      "<"
    );

    s1.to(
      ".container-egg-timeline-7",
      { duration: 1, left: "120%", top: "37%", ease: "power1.inOut" },
      "<"
    );

    s1.to(
      ".container-egg-timeline-8",
      { duration: 1, left: "150%", top: "35%", ease: "power1.inOut" },
      "<"
    );

    s1.to(
      ".container-egg-timeline-9",
      { duration: 1, left: "160%", top: "42%", ease: "power1.inOut" },
      "<"
    );

    s1.to(
      ".container-egg-timeline-0",
      { duration: 1, top: "40%", ease: "power1.inOut" },
      "<"
    );

    s1.from(
      ".btn-arrows-tl-right",
      { duration: 1, opacity: 0, ease: "power1.inOut" },
      "<"
    );

    s1.from(
      ".container-egg-timeline h2",
      { duration: 1, opacity: 0, ease: "power1.inOut" },
      ">"
    );

    s1.to(
      ".btn-close-tl",
      { opacity: 1, duration: 1, ease: Power1.easeInOut },
      "<"
    );

    s1.call(levitate, [".container-egg-timeline-0"], ">");
    s1.call(levitate, [".container-egg-timeline-1"], "<+.3");
    s1.call(levitate, [".container-egg-timeline-2"], "<+.3");
    s1.call(levitate, [".container-egg-timeline-3"], "<+.3");
    s1.call(levitate, [".container-egg-timeline-4"], "<+.3");
    s1.call(levitate, [".container-egg-timeline-5"], "<+.3");
    s1.call(levitate, [".container-egg-timeline-6"], "<+.3");
    s1.call(levitate, [".container-egg-timeline-7"], "<+.3");
    s1.call(levitate, [".container-egg-timeline-8"], "<+.3");
    s1.call(levitate, [".container-egg-timeline-9"], "<+.3");
  } else {
    s1.to(
      ".timeline-slider",
      { opacity: 1, duration: 1, ease: "power1" },
      "<.1"
    );
  }
  function levitate(el) {
    const element = el;
    levitate_loop = gsap.timeline({ repeat: -1, yoyo: true });
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

  function animateLines() {
    s3 = gsap.timeline({ repeat: -1, yoyo: true });
    s2 = gsap.timeline({ repeat: -1, yoyo: true });

    s3.to(".container-timeline", {
      y: "-=20",
      duration: 20,
      ease: Power1.easeInOut,
    });
    s3.to(".container-timeline", {
      y: "+=20",
      duration: 20,
      ease: Power1.easeInOut,
    });

    s2.to(
      ".timeline-line-1",
      {
        opacity: 0.2,
        y: "+=10",
        x: "+=200",
        scale: 1.2,
        duration: 10,
        ease: Power1.easeInOut,
      },
      ">"
    );
    s2.to(
      ".timeline-line-2",
      {
        opacity: 0.2,
        y: "+=10",
        x: "+=200",
        scale: 1.2,
        duration: 10,
        ease: Power1.easeInOut,
      },
      "<.3"
    );
    s2.to(
      ".timeline-line-3",
      {
        opacity: 0.2,
        y: "+=10",
        x: "+=200",
        scale: 1.2,
        duration: 10,
        ease: Power1.easeInOut,
      },
      "<.3"
    );
    s2.to(
      ".timeline-line-4",
      {
        opacity: 0.2,
        y: "+=10",
        x: "+=200",
        scale: 1.2,
        duration: 10,
        ease: Power1.easeInOut,
      },
      "<.3"
    );
    s2.to(
      ".timeline-line-5",
      {
        opacity: 0.2,
        y: "+=10",
        x: "+=200",
        scale: 1.2,
        duration: 10,
        ease: Power1.easeInOut,
      },
      "<.3"
    );
    s2.to(
      ".timeline-line-6",
      {
        opacity: 0.2,
        y: "+=10",
        x: "+=200",
        scale: 1.2,
        duration: 10,
        ease: Power1.easeInOut,
      },
      "<.3"
    );
    s2.to(
      ".timeline-line-7",
      {
        opacity: 0.2,
        y: "+=10",
        x: "+=200",
        scale: 1.2,
        duration: 10,
        ease: Power1.easeInOut,
      },
      "<.3"
    );
    s2.to(
      ".timeline-line-8",
      {
        opacity: 0.2,
        y: "+=10",
        x: "+=200",
        scale: 1.2,
        duration: 10,
        ease: Power1.easeInOut,
      },
      "<.3"
    );
    s2.to(
      ".timeline-line-9",
      {
        opacity: 0.2,
        y: "+=10",
        x: "+=200",
        scale: 1.2,
        duration: 10,
        ease: Power1.easeInOut,
      },
      "<.3"
    );
    s2.to(
      ".timeline-line-10",
      {
        opacity: 0.2,
        y: "+=10",
        x: "+=200",
        scale: 1.2,
        duration: 10,
        ease: Power1.easeInOut,
      },
      "<.3"
    );
    s2.to(
      ".timeline-line-11",
      {
        opacity: 0.2,
        y: "+=10",
        x: "+=200",
        scale: 1.2,
        duration: 10,
        ease: Power1.easeInOut,
      },
      "<.3"
    );
    s2.to(
      ".timeline-line-12",
      {
        opacity: 0.2,
        y: "+=10",
        x: "+=200",
        scale: 1.2,
        duration: 10,
        ease: Power1.easeInOut,
      },
      "<.3"
    );

    s2.to(
      ".timeline-line-1",
      {
        opacity: 1,
        y: "-=5",
        x: "-=30",
        scale: 1,
        duration: 10,
        ease: Power1.easeInOut,
      },
      ">"
    );
    s2.to(
      ".timeline-line-2",
      {
        opacity: 1,
        y: "-=5",
        x: "-=30",
        scale: 1,
        duration: 10,
        ease: Power1.easeInOut,
      },
      "<.3"
    );
    s2.to(
      ".timeline-line-3",
      {
        opacity: 1,
        y: "-=5",
        x: "-=30",
        scale: 1,
        duration: 10,
        ease: Power1.easeInOut,
      },
      "<.3"
    );
    s2.to(
      ".timeline-line-4",
      {
        opacity: 1,
        y: "-=5",
        x: "-=30",
        scale: 1,
        duration: 10,
        ease: Power1.easeInOut,
      },
      "<.3"
    );
    s2.to(
      ".timeline-line-5",
      {
        opacity: 1,
        y: "-=5",
        x: "-=30",
        scale: 1,
        duration: 10,
        ease: Power1.easeInOut,
      },
      "<.3"
    );
    s2.to(
      ".timeline-line-6",
      {
        opacity: 1,
        y: "-=5",
        x: "-=30",
        scale: 1,
        duration: 10,
        ease: Power1.easeInOut,
      },
      "<.3"
    );
    s2.to(
      ".timeline-line-7",
      {
        opacity: 1,
        y: "-=5",
        x: "-=30",
        scale: 1,
        duration: 10,
        ease: Power1.easeInOut,
      },
      "<.3"
    );
    s2.to(
      ".timeline-line-8",
      {
        opacity: 1,
        y: "-=5",
        x: "-=30",
        scale: 1,
        duration: 10,
        ease: Power1.easeInOut,
      },
      "<.3"
    );
    s2.to(
      ".timeline-line-9",
      {
        opacity: 1,
        y: "-=5",
        x: "-=30",
        scale: 1,
        duration: 10,
        ease: Power1.easeInOut,
      },
      "<.3"
    );
    s2.to(
      ".timeline-line-10",
      {
        opacity: 1,
        y: "-=5",
        x: "-=30",
        scale: 1,
        duration: 10,
        ease: Power1.easeInOut,
      },
      "<.3"
    );
    s2.to(
      ".timeline-line-11",
      {
        opacity: 1,
        y: "-=5",
        x: "-=30",
        scale: 1,
        duration: 10,
        ease: Power1.easeInOut,
      },
      "<.3"
    );
    s2.to(
      ".timeline-line-12",
      {
        opacity: 1,
        y: "-=5",
        x: "-=30",
        scale: 1,
        duration: 10,
        ease: Power1.easeInOut,
      },
      "<.3"
    );

    s2.to(
      ".timeline-line-1",
      {
        opacity: 0.2,
        y: "+=10",
        x: "-=10",
        scale: 1.3,
        duration: 10,
        ease: Power1.easeInOut,
      },
      ">"
    );
    s2.to(
      ".timeline-line-2",
      {
        opacity: 0.2,
        y: "+=10",
        x: "-=10",
        scale: 1.3,
        duration: 10,
        ease: Power1.easeInOut,
      },
      "<.3"
    );
    s2.to(
      ".timeline-line-3",
      {
        opacity: 0.2,
        y: "+=10",
        x: "-=10",
        scale: 1.3,
        duration: 10,
        ease: Power1.easeInOut,
      },
      "<.3"
    );
    s2.to(
      ".timeline-line-4",
      {
        opacity: 0.2,
        y: "+=10",
        x: "-=10",
        scale: 1.3,
        duration: 10,
        ease: Power1.easeInOut,
      },
      "<.3"
    );
    s2.to(
      ".timeline-line-5",
      {
        opacity: 0.2,
        y: "+=10",
        x: "-=10",
        scale: 1.3,
        duration: 10,
        ease: Power1.easeInOut,
      },
      "<.3"
    );
    s2.to(
      ".timeline-line-6",
      {
        opacity: 0.2,
        y: "+=10",
        x: "-=10",
        scale: 1.3,
        duration: 10,
        ease: Power1.easeInOut,
      },
      "<.3"
    );
    s2.to(
      ".timeline-line-7",
      {
        opacity: 0.2,
        y: "+=10",
        x: "-=10",
        scale: 1.3,
        duration: 10,
        ease: Power1.easeInOut,
      },
      "<.3"
    );
    s2.to(
      ".timeline-line-8",
      {
        opacity: 0.2,
        y: "+=10",
        x: "-=10",
        scale: 1.3,
        duration: 10,
        ease: Power1.easeInOut,
      },
      "<.3"
    );
    s2.to(
      ".timeline-line-9",
      {
        opacity: 0.2,
        y: "+=10",
        x: "-=10",
        scale: 1.3,
        duration: 10,
        ease: Power1.easeInOut,
      },
      "<.3"
    );
    s2.to(
      ".timeline-line-10",
      {
        opacity: 0.2,
        y: "+=10",
        x: "-=10",
        scale: 1.3,
        duration: 10,
        ease: Power1.easeInOut,
      },
      "<.3"
    );
    s2.to(
      ".timeline-line-11",
      {
        opacity: 0.2,
        y: "+=10",
        x: "-=10",
        scale: 1.3,
        duration: 10,
        ease: Power1.easeInOut,
      },
      "<.3"
    );
    s2.to(
      ".timeline-line-12",
      {
        opacity: 0.2,
        y: "+=10",
        x: "-=10",
        scale: 1.3,
        duration: 10,
        ease: Power1.easeInOut,
      },
      "<.3"
    );
  }
}
