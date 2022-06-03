import * as THREE from '../build/three.module.js';

import { TWEEN } from '../jsm/libs/tween.module.min.js';
import { TrackballControls } from '../jsm/controls/TrackballControls.js';
import { CSS3DRenderer, CSS3DSprite } from '../jsm/renderers/CSS3DRenderer.js';

let camera, scene, renderer;
let controls;

const particlesTotal = 512;
const positions = [];
const objects = [];
let current = 0;
let completed = false;
let once = 0;

// init();
// animate();

export function init() {

    if(once > 0){
        completed = false;
        current = 0;
        transition();
        return;
    }

    once++;

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 5000);
    camera.position.set(600, 400, 1500);
    camera.lookAt(0, 0, 0);
    let angle = 7000;
    camera.position.z = 1000 * Math.cos(angle) * .6;
    camera.position.x = 2000 * Math.cos(angle) * .6;
    camera.position.y = 13000 * Math.sin(angle);
    camera.fov *= .95;
    camera.updateProjectionMatrix();

    scene = new THREE.Scene();

    const image = document.createElement('img');
    image.addEventListener('load', function () {

        for (let i = 0; i < particlesTotal; i++) {

            let img = image.cloneNode();
            img.src = "textures/egg-texture.png";
            img.className = "egg-main-3d";
            const object = new CSS3DSprite(img);

            object.position.x = 0,
                object.position.y = -100,
                object.position.z = 0;
            scene.add(object);

            objects.push(object);

        }

        transition();

    });
    image.src = 'textures/egg-texture.png';

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

    renderer = new CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('container-brigde').appendChild(renderer.domElement);

    controls = new TrackballControls(camera, renderer.domElement);

    window.addEventListener('resize', onWindowResize);
}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

}

export function transition(stop = false) {

    console.log(stop);
    const offset = current * particlesTotal * 3;
    const duration = 2000;
    let k = 0;

    if (stop) {
        for (let i = 0, j = offset; i < particlesTotal; i++, j += 3) {

            const object = objects[i];

            new TWEEN.Tween(object.position)
                .to({
                    x: 0,
                    y: 0,
                    z: 0
                }, Math.random() * duration + duration)
                .onComplete(function(){
                    k++;
                    if(k === particlesTotal)
                    {
                        completed = true;
                    }
                    
                })
                .easing(TWEEN.Easing.Exponential.InOut)
                .start();

        }

    } else {
        for (let i = 0, j = offset; i < particlesTotal; i++, j += 3) {

            const object = objects[i];

            new TWEEN.Tween(object.position)
                .to({
                    x: positions[j],
                    y: positions[j + 1],
                    z: positions[j + 2]
                }, Math.random() * duration + duration)
                .easing(TWEEN.Easing.Exponential.InOut)
                .start();

        }
    }
}

export function animate() {

    if(!completed){
        requestAnimationFrame(animate);
    }
    

    TWEEN.update();
    controls.update();

    const time = performance.now();

    for (let i = 0, l = objects.length; i < l; i++) {

        const object = objects[i];
        const scale = Math.sin((Math.floor(object.position.x) + time) * 0.002) * 0.3 + 1;
        object.scale.set(scale, scale, scale);

    }

    renderer.render(scene, camera);

}