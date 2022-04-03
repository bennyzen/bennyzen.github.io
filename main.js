import "./tailwind.css";
import "./style.css";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GUI from "lil-gui";
import Stats from "stats.js";
import { BufferGeometry } from "three";
import { Points } from "three";

gsap.registerPlugin(ScrollTrigger);
// only for gsap club members
// let smoother = ScrollSmoother.create();

const gui = new GUI({ width: 400 });
gui.hide();
const clock = new THREE.Clock(true);

// repsonsive
const canvas = document.getElementById("app");
let sizes;
["load", "resize"].forEach((e) => {
  window.addEventListener(e, () => {
    sizes = {
      width: canvas.clientWidth,
      height: canvas.clientHeight,
      aspect: canvas.clientWidth / canvas.clientHeight,
    };
    camera.aspect = sizes.aspect;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height, false);
  });
});

// renderer, scene, camera
const renderer = new THREE.WebGLRenderer({
  canvas,
  alpha: true,
  antialias: true,
});
const scene = new THREE.Scene();

// camera
const cameraGroup = new THREE.Group();
scene.add(cameraGroup);
const camera = new THREE.PerspectiveCamera(45, 0, 0.1, 1000);
camera.position.z = 5;
cameraGroup.add(camera);
gui
  .addFolder("Camera")
  .add(camera.position, "z", 1, 100, 0.01)
  .name("Camera Z");

// stats
const stats = new Stats();
stats.showPanel(0);
document.body.appendChild(stats.dom);

// particles
const numParticles = 50000;
const positions = new Float32Array(numParticles * 3);
for (let i = 0; i < numParticles * 3; i++) {
  positions[i * 3 + 0] = (Math.random() - 0.5) * 20;
  positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
  positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
}
const particlesGeometry = new THREE.BufferGeometry();
particlesGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(positions, 3)
);
const particlesMaterial = new THREE.PointsMaterial({
  sizeAttenuation: false,
  size: 0.03,
});
const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);
particles.position.set(0, -10, 0);

// sections
const mesh1 = new THREE.Mesh(
  new THREE.TorusGeometry(1.5, 0.65, 100, 100),
  new THREE.MeshNormalMaterial({
    // flatShading: true,
    // transparent: true,
    opacity: 0.7,
    // wireframe: true,
    // wireframeLinewidth: 0.01,
    // blending: THREE.AdditiveBlending,
    // side: THREE.DoubleSide,
  })
);
mesh1.position.x = 1;
const mesh2 = new THREE.Mesh(
  new THREE.ConeGeometry(2, 2, 64, 32),
  new THREE.MeshNormalMaterial({
    // opacity: 0.5,
    // blending: THREE.AdditiveBlending,
  })
);
mesh2.position.y = -15;
const mesh3 = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2, 2, 12, 12, 12),
  new THREE.MeshNormalMaterial({
    // flatShading: true,
    // opacity: 0.7,
    // wireframe: true,
  })
);
mesh3.position.y = -20;
scene.add(mesh1, mesh2, mesh3);

// scrollbased animations
gsap.to(camera.position, {
  scrollTrigger: {
    // markers: true,
    scrub: 4,
  },
  duration: 10,
  y: -20,
  // z: 5,
});

// parallax on mousemove
const cursor = { x: 0, y: 0 };
window.addEventListener("mousemove", (e) => {
  cursor.x = e.clientX / canvas.clientWidth - 0.5;
  cursor.y = e.clientY / canvas.clientHeight - 0.5;
});

// animation loop
const tick = () => {
  stats.begin();
  const time = clock.getElapsedTime();

  // your animation code goes here
  mesh1.rotation.x = time / 40;
  mesh1.rotation.y = time / 50;
  mesh2.rotation.x = time / 10;
  mesh3.rotation.y = time / 5;
  mesh3.rotation.x = time / 25;
  particles.rotation.y = time / 100;

  // parallax
  const parallaxX = cursor.x;
  const parallaxY = -cursor.y;
  cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * 0.05;
  cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * 0.05;

  renderer.render(scene, camera);
  stats.end();
  requestAnimationFrame(tick);
};
tick();
