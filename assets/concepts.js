import * as main from "./main.js";

let started = 0;
let fromRandom = 0;

export function init() {
  if ($(window).width() > 1023) {
    $(".card img").attr("width", 200);
  } else {
    $(".card img").attr("width", 120);
  }

  defineRandomContent();

  if (!started) {
    started = 1;

    var showcase = $(".slider-concepts");

    showcase.Cloud9Carousel({
      yPos: 42,
      yRadius: $(window).width() > 1023 ? 48 : 100,
      xRadius: $(window).width() > 1023 ? 500 : 140,
      itemClass: "card",
      buttonLeft: $(".slider-concepts-left"),
      buttonRight: $(".slider-concepts-right"),
      autoPlay: false,
      bringToFront: true,
      onRendered: showcaseUpdated,
      onLoaded: function () {
        showcase.css("visibility", "visible");
        showcase.css("display", "none");
        showcase.fadeIn(1500);
      },
    });

    function showcaseUpdated(showcase) {
      var title = $("#item-title").html($(showcase.nearestItem()).attr("alt"));

      var c = Math.cos((showcase.floatIndex() % 1) * 2 * Math.PI);
      title.css("opacity", 0.5 + 0.5 * c);
    }

    $(".nav > button").click(function (e) {
      var b = $(e.target).addClass("down");
      setTimeout(function () {
        b.removeClass("down");
      }, 80);
    });

    $(document).keydown(function (e) {
      //
      // More codes: http://www.javascripter.net/faq/keycodes.htm
      //
      switch (e.keyCode) {
        /* left arrow */
        case 37:
          $(".nav > .left").click();
          break;

        /* right arrow */
        case 39:
          $(".nav > .right").click();
      }
    });
  }
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const isEnglish = urlParams.get("l") === "en" ? true : false;
let randomData = "";

if (!isEnglish) {
  randomData = {
    1: {
      title: "Fator Potencial Humano",
      text: '"Fator Potencial Humano é vida, crescimento, ampliação da consciência."',
    },
    2: {
      title: "Liderar",
      text: '"Quem lidera deve modificar-se antes de solicitar a modificação do próximo."',
    },
    3: {
      title: "Educação",
      text: '"A educação se inicia quando alguém exerce uma função em relação a outro, a partir de um ponto de vista que está incluindo alguma coisa nova na vida daquela pessoa."',
    },
    4: {
      title: "Viver",
      text: '"Viver por antecipação ou não viver a realidade estando bloqueado para ela, implica falta de consciência de si próprio."',
    },
    5: {
      title: "Ensino",
      text: '"O Ensino de disciplinas deve ser precedido pelo ensino de si mesmo."',
    },
    6: {
      title: "Respeito",
      text: '"É preciso que tenhamos a coragem de dizer que o respeito é antes de tudo, um respeito devido a si mesmo."',
    },
    7: {
      title: "Líder",
      text: '"Qualquer pessoa pode ser líder em determinada linha de conhecimento específico."',
    },
    8: {
      title: "Liderança",
      text: '"As pessoas podem reconhecer em você extremo poder de liderança sem capacidade de utilizá-la."',
    },
    9: {
      title: "Saúde Mental",
      text: '"Quando o ponto de vista é ampliado ao nível de reconhecer prós e contras na mesma questão, concluímos daí que existe Saúde Mental verdadeira."',
    },
    10: {
      title: "Ponto Cego",
      text: '"O ponto cego inevitável de todos nós é acreditarmos no nosso ponto de vista, mesmo que ele se constitua como dúvida."',
    },
    11: {
      title: "Abstração",
      text: '"A palavra síntese é a essência que se manifesta à capacidade de abstração."',
    },
    12: {
      title: "Palavra interna",
      text: '"A palavra interna é a capacidade de ou dom natural de pensar."',
    },
    13: {
      title: "Sentimentos nas relações interpessoais",
      text: '"Nas relações interpessoais, a intensidade emocional está baseada essencialmente nos sentimentos de Angústia, Ansiedade e Humor."',
    },
    14: {
      title: "Prazer Profissional",
      text: '"Toda a sua atividade profissional pode constituir-se em fonte de prazer."',
    },
    15: {
      title: "Civilização",
      text: '"A saúde mental constitui entre nós o motivo principal da civilização mesmo que essa não seja admitida por todos."',
    },
    16: {
      title: "Equilíbrio",
      text: '"Quando existe equilíbrio entre as partes envolvidas existe saúde."',
    },
    17: {
      title: "Ponto de vista",
      text: '"O ponto de vista é escravo do sentimento do momento, muda o sentimento, muda o ponto de vista."',
    },
  };
} else {
  randomData = {
    1: {
      title: "Human Potential Factor",
      text: '"Human Potential Factor is life, growth, expansion of awareness."',
    },
    2: {
      title: "Lead",
      text: '"The one who leads must change themselves before requiring the changing of others."',
    },
    3: {
      title: "Education",
      text: '"Education takes place when someone has a function regarding the other, as of a point of view that includes something new in that person’s life."',
    },
    4: {
      title: "Live",
      text: '"To live by anticipation or not live the reality, being blocked by it, implies lack of awareness of oneself."',
    },
    5: {
      title: "Teaching",
      text: '"The teaching of disciplines must be preceded by the teaching of oneself."',
    },
    6: {
      title: "Respect",
      text: '"We must have courage to say that, before anything, respect is due to yourself."',
    },
    7: {
      title: "Leader",
      text: '"Anyone can be a leader in a given line of specific expertise."',
    },
    8: {
      title: "Leadership",
      text: '"People can recognize in you extreme power of leadership without the capacity to utilize it."',
    },
    9: {
      title: "Mental Health",
      text: '"When the point of view is amplified to the level where pros and cons can be recognized in the same issue, we conclude that there is mental health."',
    },
    10: {
      title: "Blind Spot",
      text: '"The blind spot is inevitable in all of us and we believe in our own point of view, even if it constitutes as uncertainty."',
    },
    11: {
      title: "Abstraction",
      text: '"The word synthesis is the essence that manifests itself to the capacity of abstraction."',
    },
    12: {
      title: "Internal World",
      text: '"The internal word is the capacity, or natural endowment, to think."',
    },
    13: {
      title: "Feelings in the Interpersonal Relationships",
      text: '"In the interpersonal relationships, the emotional intensity is based essentially on the feelings of Anguish, Anxiety and Humor."',
    },
    14: {
      title: "Professional Pleasure",
      text: '"Every professional activity can constitute itself in a source of pleasure."',
    },
    15: {
      title: "Civilization",
      text: '"Mental Health constitutes among us the main motive of civilization, even though it is not acknowledged by all."',
    },
    16: {
      title: "Equilibrium",
      text: '"When there is equilibrium between all involved parts, there is health."',
    },
    17: {
      title: "Point of View",
      text: '"The point of view is slave to the moment. the feeling changes, the point of view."',
    },
  };
}

let randomNumber = 0;

function defineRandomContent() {
  // let randomNumber = Math.ceil(Math.random() * 17);
  randomNumber++;

  if (randomNumber > 17) {
    randomNumber = 1;
  }

  console.log(randomNumber);

  let title = randomData[randomNumber].title;
  let text = randomData[randomNumber].text;

  $(".randomTitleEgg").html(title);

  setTimeout(function () {
    $(".randomTitle").html(title);
    $(".randomText").html(text);
  }, 200);
}

export function showRandom() {
  fromRandom = 1;

  $(".container-concepts").fadeOut("fast", function () {
    $(".concept-random").fadeIn();

    animateTextIn(".opening-text-concept-random");
  });
}

export function showPotency() {
  $(".container-concepts").fadeOut("fast", function () {
    $(".concept-potency").fadeIn();

    animateTextIn(".opening-text-concept-potency");
  });
}

export function showFaculties() {
  $(".container-concepts").fadeOut("fast", function () {
    $(".concept-9-faculties").fadeIn();
  });
}

export function showRestitution() {
  $(".container-concepts").fadeOut("fast", function () {
    $(".concept-restitution").fadeIn();
  });
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

$(document).on("click", ".btn-close-concept-in", function () {
  $(".opening-text-concept-potency").css("opacity", "0");

  $(
    ".concept-potency, .concept-random, .concept-9-faculties, .concept-restitution"
  ).fadeOut("fast", function () {
    if (fromRandom) {
      fromRandom = 0;
      defineRandomContent();
    }

    $(".container-concepts").fadeIn();
  });
});
