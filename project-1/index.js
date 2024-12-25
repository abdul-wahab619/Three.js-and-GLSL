import * as THREE from "three";
import { OrbitControls } from "jsm/controls/OrbitControls.js";

const w = window.innerWidth;
const h = window.innerHeight;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

const fov = 75;
const aspect = w / h;
const near = 0.1;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

const scene = new THREE.Scene();

// Add ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Softer ambient light
scene.add(ambientLight);

// Add directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

// Create a more complex geometry
const geometry = new THREE.IcosahedronGeometry(1, 2);

// Create a more interesting material
const material = new THREE.MeshPhongMaterial({
  color: 0x00ff00,
  specular: 0xffffff,
  shininess: 20,
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Add OrbitControls for camera interaction
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

function animate(t = 0) {
  // Animate the mesh's rotation
  mesh.rotation.x = t * 0.001;
  mesh.rotation.y = t * 0.002;

  // Animate the mesh's scale
    mesh.scale.setScalar(1 + Math.sin(t * 0.001) * 0.2);

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();
