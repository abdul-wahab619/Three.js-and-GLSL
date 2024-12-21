import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import "./index.css";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Move camera back to view objects
camera.position.z = 30;

// Create a cylinder
const geometry = new THREE.CylinderGeometry(5, 5, 20, 32);
const material = new THREE.MeshBasicMaterial({
  color: "green",
  wireframe: true,
});
const cylinder = new THREE.Mesh(geometry, material);
scene.add(cylinder);

// Set up renderer and link to existing canvas
const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
const controls = new OrbitControls( camera, renderer.domElement );


// Handle browser resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animate the scene
function animate() {
  requestAnimationFrame(animate);
  cylinder.rotation.x += 0.01;
  cylinder.rotation.y += 0.01;
  cylinder.rotation.z += 0.01;
  controls.update();
  renderer.render(scene, camera);
}
animate();
