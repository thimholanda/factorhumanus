import * as THREE from '../build/three.module.js';
import * as main from './main.js';
import * as home from './home.js';
import { TWEEN } from '../jsm/libs/tween.module.min.js';
import { TrackballControls } from '../jsm/controls/TrackballControls.js';
import { CSS3DRenderer, CSS3DSprite } from '../jsm/renderers/CSS3DRenderer.js';

let camera, scene, renderer;
scene = new THREE.Scene();
let controls;
const particlesTotal = 512;
const positions = [];
const objects = [];
let current = 0;
let currentScene = 'main';
let transitionCenter = false;
let tweenArray = [];
let transitionTween;
const image = document.createElement('img');

export function loadParticlesMenu() {
    image.addEventListener('load', function () {

        for (let i = 0; i < particlesTotal; i++) {

            let img = image.cloneNode();
            img.src = "textures/egg-texture-mobile.png";
            img.className = "egg-main-3d";
            const object = new CSS3DSprite(img);

            object.position.x = 0,
                object.position.y = -100,
                object.position.z = 0;
            scene.add(object);

            objects.push(object);

            if(i == particlesTotal - 1){
                home.init();
            }
        }

    });

    image.src = 'textures/egg-texture-mobile.png';
}

export function init() {
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 5000);
    camera.position.set(600, 400, 1500);
    camera.lookAt(0, 0, 0);
    let angle = 7000;
    camera.position.z = 1000 * Math.cos(angle) * .6;
    camera.position.x = 2000 * Math.cos(angle) * .6;
    camera.position.y = 2000 * Math.sin(angle);
    camera.fov *= .95;
    camera.updateProjectionMatrix();

    // Real Plane

    const amountX2 = 16;
    const amountZ2 = 28;
    const separationPlane2 = 150;
    const offsetX2 = ((amountX2 - 1) * separationPlane2) / 2;
    const offsetZ2 = ((amountZ2 - 1) * separationPlane2) / 2;

    for (let i = 0; i < particlesTotal; i++) {

        const x = (i % amountX2) * separationPlane2;
        const z = Math.floor(i / amountX2) * separationPlane2;
        const y = (Math.sin(x * 0.5) - Math.sin(z * 0.5)) * 500;

        positions.push(x - offsetX2, y, z - offsetZ2);

    }


    // Sphere 1

    const radius3 = 600;

    for (let i = 0; i < particlesTotal; i++) {

        const phi3 = Math.acos(- 1 + (2 * i) / particlesTotal);
        const theta3 = Math.sqrt(particlesTotal * Math.PI) * phi3;

        positions.push(
            radius3 * Math.cos(theta3) * Math.sin(phi3),
            radius3 * Math.sin(theta3) * Math.sin(phi3),
            (radius3 * Math.cos(phi3)) * 8
        );

    }

    // Sphere 2

    const radius2 = 1600;

    for (let i = 0; i < particlesTotal; i++) {

        const phi2 = Math.acos(- 1 + (2 * i) / particlesTotal);
        const theta2 = Math.sqrt(particlesTotal * Math.PI) * phi2;

        positions.push(
            radius2 * Math.cos(theta2) * Math.sin(phi2),
            radius2 * Math.sin(theta2) * Math.sin(phi2),
            radius2 * Math.cos(phi2)
        );

    }

    // Sphere 3

    const radius = 750;

    for (let i = 0; i < particlesTotal; i++) {

        const phi = Math.acos(- 1 + (2 * i) / particlesTotal);
        const theta = Math.sqrt(particlesTotal * Math.PI) * phi;

        positions.push(
            radius * Math.cos(theta) * Math.sin(phi),
            radius * Math.sin(theta) * Math.sin(phi),
            radius * Math.cos(phi)
        );

    }

    // Random

    for (let i = 0; i < particlesTotal; i++) {

        positions.push(
            Math.random() * 4000 - 2000,
            Math.random() * 4000 - 2000,
            Math.random() * 4000 - 2000
        );

    }

    // Sphere 0

    const radius4 = 800;

    for (let i = 0; i < particlesTotal; i++) {

        const phi4 = Math.acos(- 1 + (2 * i) / particlesTotal);
        const theta4 = Math.sqrt(particlesTotal * Math.PI) * phi4;

        positions.push(
            radius4 * Math.cos(theta4) * Math.sin(phi4) / 10,
            radius4 * Math.sin(theta4) * Math.sin(phi4) / 1,
            (radius4 * Math.cos(phi4)) * 8
        );

    }

    addRender(); animate(); setTimeout(() => { transition(); }, 200);
}

function addRender() {
    renderer = new CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('container-menu').appendChild(renderer.domElement);

    controls = new TrackballControls(camera, renderer.domElement);

    window.addEventListener('resize', onWindowResize);
}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

}

// create instance to controll tween

let objectsTween;

// create controll to check when transition to center was completed
let transitionCenterComplete = false;
export let tweenStatus;

function transition() {

    // console.log('init transition');
    // console.log(tweenStatus);

    if (transitionCenter) {

        // stop all previous tween

        // console.log('init reset all tweens');

        // transitionTween.stop();
        // transitionTween.update();

        for (let i = 0; i < tweenArray.length; i++) {
            // console.log(i);
            tweenArray[i].stop();
            // tweenArray[i].update();
        }

        tweenArray = [];


        const offset = current * particlesTotal * 3;
        const duration = 1000;
        let k = 0;

        // while (tweenStatus == 'started') return;
        // console.log('transition center')

        for (let i = 0, j = offset; i < particlesTotal; i++, j += 3) {

            const object = objects[i];
            // objectsTween.stop();

            new TWEEN.Tween(object.position)
                .to({
                    x: 0,
                    y: 0,
                    z: 0
                }, Math.random() * duration + duration)
                .onComplete(function () {
                    k++;
                    if (k === particlesTotal) {
                        transitionCenterComplete = true;
                        transitionCenter = false;
                        main.changeScreen();
                        // console.log('change screen after completed');
                    }

                })
                .easing(TWEEN.Easing.Exponential.InOut)
                .start();
        }

    } else {
        const offset = current * particlesTotal * 3;
        const duration = 2000;

        let k = 0;

        tweenStatus = 'started';

        tweenArray = [];

        for (let i = 0, j = offset; i < particlesTotal; i++, j += 3) {

            const object = objects[i];

            objectsTween = new TWEEN.Tween(object.position)
                .to({
                    x: positions[j],
                    y: positions[j + 1],
                    z: positions[j + 2]
                }, Math.random() * duration + duration)
                .onComplete(function () {
                    k++;
                    if (k === particlesTotal) {
                        tweenStatus = 'completed';
                    }

                })
                .easing(TWEEN.Easing.Exponential.InOut)
                .start();

            tweenArray.push(objectsTween);

        }

        transitionTween = new TWEEN.Tween()
            .to({}, duration * 3)
            .onComplete(function () {
                transition();
                // console.log(tweenArray);                
            })
            .start();

        current = (current + 1) % 6;
    }

}

export function transitionToCenter() {
    transitionCenter = true;
    currentScene = 'center';
    transitionTween.stop();
    transition();
}

export function expandEggs() {

    transitionCenterComplete = false;
    currentScene = 'main';
    transitionTween.stop();
    animate();
    transition();
}

// $(document).on('click touchend', '.egg-main-3d', function (e) {

//     console.log('clicou');
//     transitionCenter = true;
//     currentScene = 'potency';
//     transitionTween.stop();
//     transition();
//     // animate();
// });

export function animate() {
    // requestAnimationFrame(animate);
    // if(currentScene === 'main'){
    //     requestAnimationFrame(animate);
    // }else if (transitionCenter === true){
    //     requestAnimationFrame(animate);
    //     handlePotencyContentOpening();
    //     return;
    // }else{
    //     return;
    // }

    // =>

    // if (currentScene == 'fast-track') return;

    // if (!transitionCenterComplete) {
    //     requestAnimationFrame(animate);
    // } else {
    //     if (currentScene == 'potency') {
    //         handlePotencyContentOpening();
    //     }
    //     return;
    // }

    requestAnimationFrame(animate);

    TWEEN.update();
    controls.update();

    const time = performance.now();

    for (let i = 0, l = objects.length; i < l; i++) {

        const object = objects[i];
        const scale = Math.sin((Math.floor(object.position.x) + time) * 0.002) * 0.2 + 1;
        object.scale.set(scale, scale, scale);

    }

    renderer.render(scene, camera);

}

export function setScene(val) {
    currentScene = val;
}