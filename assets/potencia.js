import * as THREE from '../../build/three.module.js';
import * as main from './main.js';

let camera, scene, renderer, material;
let mouseXParticlesPotency = 0, mouseYParticlesPotency = 0;

let windowHalfXParticlesPotency = window.innerWidth / 2;
let windowHalfYParticlesPotency = window.innerHeight / 2;
let particlesParticlesPotency = new THREE.Object3D();

let raycasterParticlesPotency = new THREE.Raycaster();
let mouseParticlesPotency = new THREE.Vector2();

export let serieControl = 1;

let animateFirst = true;
let state;

function captureState(elements) {
    let state = [];
    gsap.utils.toArray(elements).forEach(element => state.push(element, element.style.cssText));
    return state;
}
// revert the inline styles
function revertState(state) {
    for (let i = 0; i < state.length; i += 2) {
        state[i].style.cssText = state[i + 1];
    }
}

export function resetAnimation() {
    serieControl = 1;
    initStateParticles();
    TweenMax.to('.egg-energy', {scale: .1});
    state = captureState(".egg-energy, .egg-loader-bar, .container-particles-potency, .po-egg");
}

export function initAnimation() {

    let timelinePotency = gsap.timeline({
        repeat: 0
    });
    timelinePotency.to('#container', { opacity: 0, duration: 1, delay: 0 });
    timelinePotency.to('.egg-energy', { opacity: 1, scale: 1, duration: 1, ease: Power2.easeIn }, '<');
    timelinePotency.to('.container-particles-potency', { opacity: 1, duration: 2, ease: Power2.easeIn }, '<');
    timelinePotency.to('.po-egg', { opacity: 0, duration: 1, ease: Power2.easeIn });
}

export function init() {
    camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 2, 2000);
    camera.position.z = 1000;
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.001);

    for (let i = 0; i < 1000; i++) {

        const x = 2000 * Math.random() - 1000;
        const y = 2000 * Math.random() - 1000;
        const z = 2000 * Math.random() - 1000;

        let position = {
            'x': x,
            'y': y,
            'z': z
        }

        const map = new THREE.TextureLoader().load('./textures/sprites/disc.png');

        let opacity = 1;
        let size = 20;

        const material = new THREE.SpriteMaterial({ map: map, color: 0x27364f, depthWrite: false });
        material.map.minFilter = THREE.LinearFilter;
        material.opacity = opacity;
        const sprite = new THREE.Sprite(material);
        sprite.position.set(position.x, position.y, position.z);
        sprite.scale.set(size, size, size);

        if (i <= 500) {
            sprite.serie = 1;
        } else if (i > 500) {
            sprite.serie = 2;
        }

        particlesParticlesPotency.add(sprite);
    }

    scene.add(particlesParticlesPotency);

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('potency-block').appendChild(renderer.domElement);

    document.getElementById('potency-block').addEventListener('mousedown', onDocMouseDown);
    document.getElementById('potency-block').addEventListener('mousemove', onDocMouseMove);
    window.addEventListener('resize', onWindowResize);

    animate();
}

function onWindowResize() {

    windowHalfXParticlesPotency = window.innerWidth / 2;
    windowHalfYParticlesPotency = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onDocMouseMove(event) {

    if (event.isPrimary === false) return;

    // for (let i = 0; i < particlesParticlesPotency.children.length; i++) {
    //     if (particlesParticlesPotency.children[i].material.opacity === 1 && !particlesParticlesPotency.children[i].clicked) {
    //         // particlesParticlesPotency.children[i].material.opacity = .7;
    //         particlesParticlesPotency.children[i].material.color = new THREE.Color(0x27364f);
    //     }
    // }

    mouseXParticlesPotency = event.clientX - windowHalfXParticlesPotency;
    mouseYParticlesPotency = event.clientY - windowHalfYParticlesPotency;

    let mouseX = event.clientX;
    let mouseY = event.clientY;

    mouseX = (mouseX / window.innerWidth) * 2 - 1;
    mouseY = -(mouseY / window.innerHeight) * 2 + 1;

    // raycasterParticlesPotency.setFromCamera(mouseParticlesPotency, camera);

    mouseParticlesPotency.x = mouseX;
    mouseParticlesPotency.y = mouseY;

    // let intersects = raycasterParticlesPotency.intersectObjects(particlesParticlesPotency.children);

    // if (intersects.length > 0) {
    //     if (intersects[0].object.material.opacity == .7) {
    //         intersects[0].object.material.opacity = 1;
    //         intersects[0].object.material.color = new THREE.Color(0xffffff);
    //         document.body.style.cursor = "pointer";
    //     }

    // }
    // else {
    //     document.body.style.cursor = "default";
    // }

}

function onDocMouseDown(event) {

    let mouseX = event.clientX;
    let mouseY = event.clientY;

    mouseX = (mouseX / window.innerWidth) * 2 - 1;
    mouseY = -(mouseY / window.innerHeight) * 2 + 1;

    // raycasterParticlesPotency.setFromCamera(mouseParticlesPotency, camera);

    mouseParticlesPotency.x = mouseX;
    mouseParticlesPotency.y = mouseY;

    // let intersects = raycasterParticlesPotency.intersectObjects(particlesParticlesPotency.children);

    // if (intersects.length > 0 && !intersects[0].object.clicked) {
        // const selectedSerie = intersects[0].object.serie;

        for (let i = 0; i < particlesParticlesPotency.children.length; i++) {
            // if (particlesParticlesPotency.children[i].serie === selectedSerie) {
                // particlesParticlesPotency.children[i].clicked = true;
                particlesParticlesPotency.children[i].material.opacity = 1;
                particlesParticlesPotency.children[i].material.color = new THREE.Color(0xffffff);
            // }
        }

        handleParticlesPotencyClick();
    // }
}

function initStateParticles() {
    for (let i = 0; i < particlesParticlesPotency.children.length; i++) {
        particlesParticlesPotency.children[i].clicked = false;
        particlesParticlesPotency.children[i].material.opacity = .7;
        particlesParticlesPotency.children[i].material.color = new THREE.Color(0x27364f);
    }
}

let stopAnimation = false;

export function functionStop() {
    stopAnimation = true;
}

export function functionStart() {
    stopAnimation = false;
}

export function animate() {

    if (stopAnimation) return;

    // console.log(stopAnimation);

    requestAnimationFrame(animate);
    render();

    const time = performance.now();

    for (let i = 0, l = particlesParticlesPotency.children.length; i < l; i++) {

        const object = particlesParticlesPotency.children[i];
        const scale = Math.sin((Math.floor(object.position.x) + time) * 0.005) * 1 + 22;
        object.scale.set(scale, scale, scale);

    }

}

function render() {

    const time = Date.now() * 0.00005;

    camera.position.x += (mouseXParticlesPotency - camera.position.x) * 0.05;
    camera.position.y += (- mouseYParticlesPotency - camera.position.y) * 0.05;

    camera.lookAt(scene.position);

    renderer.render(scene, camera);

}

function handleParticlesPotencyClick() {
    const height = serieControl * 50;
    let eggEnergyBarTimeline = gsap.timeline({ repeat: 0 });
    eggEnergyBarTimeline.to('.egg-energy', { scale: .9, duration: .2 });
    eggEnergyBarTimeline.to('.egg-energy', { scale: 1.5, duration: .5, ease: 'elastic.out(2.5,1)' });
    eggEnergyBarTimeline.to('.egg-loader-bar', { height: `${height}%`, duration: .5, ease: 'back.out(2)' });
    if (serieControl < 2) {
        eggEnergyBarTimeline.to('.egg-energy', { scale: 1, duration: .5, ease: 'elastic.out(1,1)' });
    } else {
        eggEnergyBarTimeline.to('.egg-energy', {
            scale: 10, duration: .5, ease: 'elastic.out(1,1)', onComplete: function () {

                setTimeout(function () { revertState(state); }, 1000);
                setTimeout(function () { resetAnimation(); }, 2000);
                main.showPotencyVideo();
            }
        });
    }

    serieControl++;
}
