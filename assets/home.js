import * as main from './main.js';

export function init() {
    let timeline_eggsliced = gsap.timeline({
        repeat: 0
    });

    timeline_eggsliced.to('.egg-sliced', {
        opacity: 1,
        top: '50%',
        duration: 1.5,
    });

    timeline_eggsliced.to('#egg-sliced-top', {
        opacity: 1,
        ease: Power1.easeOut,
        duration: .5
    });

    timeline_eggsliced.to('.opening-logo-fhs', {
        opacity: 1,
        duration: .25
    });

    timeline_eggsliced.to('.opening-logo-fhs', {
        opacity: 1,
        left: ($(window).width() > 1023) ? 110 : 97,
        top: ($(window).width() > 1023) ? 60 : 69,
        scale: .5,
        rotation: 0,
        duration: .5
    });

    timeline_eggsliced.to('.opening-logo-idone', {
        opacity: 1,
        duration: .25
    }, '<');
    timeline_eggsliced.to('.opening-logo-idone', {
        opacity: 1,
        right: ($(window).width() > 1023) ? 80 : 69,
        top: 70,
        scale: .55,
        duration: .5,
        rotation: 0
    }, '> + 3');

    

    timeline_eggsliced.call(animateTextIn, ['#quote'], '<');
    timeline_eggsliced.to('.container-copyright',{opacity: 1, duration: 2, onComplete: ()=>{
        $('.btn-fast-track').fadeIn();
    }}, '<+1')
    timeline_eggsliced.call(animateTextOut, ['#quote'], '>+1');
    timeline_eggsliced.to('.container-copyright',{opacity: 0, duration: 2}, '<')

    timeline_eggsliced.to('.egg-sliced', {
        scale: .8, top: '55%', duration: .8
    }, '<');

    timeline_eggsliced.call(showMenu, null, '>-.2');

    function showMenu() {
        main.initMenu();
        timeline_eggsliced.to('.egg-sliced', {
            opacity: 0, scale: 0, duration: 1, delay: 1, onComplete: function () {
                $('.egg-full').fadeOut();
                $('.egg-sliced').fadeOut();
                $('.container-quote').fadeOut();
            }
        });
        // $('.egg-sliced').fadeOut();
    }
}

function pulse(el) {
    const element = el;
    let pulse_loop = gsap.timeline({ repeat: -1, yoyo: true });
    pulse_loop.to(element, { scale: '-=.1', duration: 2, ease: Power1.easeOut });
    pulse_loop.to(element, { scale: '+=.1', duration: 2, ease: Power1.easeIn });
}

function animateTextIn(elementClass) {
    var st = new SplitText(elementClass, { type: "words" }),
        tl = new TimelineLite(),
        numWords = st.words.length;

    TweenLite.delayedCall(0.08, function () {
        $(elementClass).css('opacity', '1');
        let delay = 0;
        for (var i = 0; i < numWords; i++) {
            tl.from(st.words[i], 2, { force3D: true, scale: Math.random() > 0.2 ? 0 : 2, opacity: 0 }, delay);
            delay += .2;
        }
    });
}

function animateTextOut(elementClass) {
    var st = new SplitText(elementClass, { type: "words" }),
        tl = new TimelineLite(),
        numWords = st.words.length;

    TweenLite.delayedCall(0.08, function () {
        $(elementClass).css('opacity', '1');
        let delay = 0;
        tl = new TimelineLite();
        for (var i = 0; i < numWords; i++) {
            tl.to(st.words[i], 1, { force3D: true, scale: Math.random() > 0.2 ? 0 : 2, opacity: 0 }, delay);
            delay += .2;
        }

    });
}