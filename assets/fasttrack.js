import * as main from './main.js';
import * as THREE from '../build/three.module.js';

const sceneFastTrack = new THREE.Scene();
const cameraFastTrack = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, .1, 1000);
const rendererFastTrack = new THREE.WebGLRenderer({ alpha: true, antialias: true });
rendererFastTrack.setPixelRatio(window.devicePixelRatio);
const logoTexture = new THREE.TextureLoader().load('./assets/fast-track/sprite.png');
const logoGeometry = new THREE.PlaneGeometry(2, 2);
const logoMaterial = new THREE.MeshBasicMaterial({ map: logoTexture, color: 0xffffff, side: THREE.DoubleSide, depthWrite: false, alphaTest: 0.5 });
const logoFastTrack = new THREE.Mesh(logoGeometry, logoMaterial);

let mainDot;

let control = new function () {
    this.rotSpeed = .002;
    this.scale = 1;
};

export function init() {

    rendererFastTrack.setSize(window.innerWidth, window.innerHeight);

    document.getElementById('fast-track').appendChild(rendererFastTrack.domElement);

    cameraFastTrack.position.set(0, 0, 10);
    cameraFastTrack.lookAt(sceneFastTrack.position);

    // create centered logo

    logoMaterial.map.minFilter = THREE.LinearFilter;

    if($(window).width() > 1023){
        sceneFastTrack.add(logoFastTrack);
    }    

    let positionsFastTrack = [];

    // create positions
    for (let i = 0; i < 80; i++) {
        const x = Math.random() * 8 - Math.random() * 8;
        const y = Math.random() * 8 - Math.random() * 8;
        const z = Math.random() * 20 - Math.random() * 20;

        let position =
        {
            'x': x,
            'y': y,
            'z': z
        };

        positionsFastTrack.push(position);
    }

    let points = [];
    let sphereGroup = new THREE.Object3D();

    for (let i = 0; i < positionsFastTrack.length; i++) {
        let map;
        let opacity = 1;
        let size = .4;

        if (i % 4 == 0) {
            map = new THREE.TextureLoader().load('./assets/fast-track/egg.png');
            opacity = ($(window).width() > 1023) ? .5 : .2;
        }
        else {
            opacity = ($(window).width() > 1023) ? .5 : .2;
            size = .09;
            map = new THREE.TextureLoader().load('./assets/fast-track/sphere.png');

        }

        const material = new THREE.SpriteMaterial({ map: map, color: 0xffffff, depthWrite: false, alphaTest: ($(window).width() > 1023) ? .5 : .2 });
        material.map.minFilter = THREE.LinearFilter;
        material.opacity = opacity;
        const sprite = new THREE.Sprite(material);
        sprite.position.set(positionsFastTrack[i].x, positionsFastTrack[i].y, positionsFastTrack[i].z);
        sprite.scale.set(size, size, size);
        points.push(sprite.position);
        sphereGroup.add(sprite);
    }

    var lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
    var line = new THREE.Line(lineGeometry, new THREE.LineBasicMaterial({ color: 0xffffff, opacity: ($(window).width() > 1023) ? .5 : .2, transparent: true }));
    sceneFastTrack.add(line);

    sceneFastTrack.add(sphereGroup);



    window.addEventListener('resize', onWindowResizeFastTrack);

    function onWindowResizeFastTrack() {
        cameraFastTrack.aspect = window.innerWidth / window.innerHeight;
        cameraFastTrack.updateProjectionMatrix();
        rendererFastTrack.setSize(window.innerWidth, window.innerHeight);
    }
}

let stop = false;

export function setStop(val){
    stop = val;
}

export function animate() {

    if(!stop){
        requestAnimationFrame(animate);
    }
    else{
        return;
    }
    

    logoFastTrack.rotation.y += .008;
    var x = cameraFastTrack.position.x;
    var z = cameraFastTrack.position.z;
    cameraFastTrack.position.x = x * Math.cos(control.rotSpeed) + z * Math.sin(control.rotSpeed);
    cameraFastTrack.position.z = z * Math.cos(control.rotSpeed) - x * Math.sin(control.rotSpeed);
    cameraFastTrack.lookAt(sceneFastTrack.position);

    rendererFastTrack.render(sceneFastTrack, cameraFastTrack);
}