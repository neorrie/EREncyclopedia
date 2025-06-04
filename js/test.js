import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

// Scene setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb); // Light sky blue background

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
const container = document.getElementById("model");
container.appendChild(renderer.domElement);
renderer.setSize(container.clientWidth, container.clientHeight);

// Better lighting setup for PBR materials
const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Soft ambient light
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2); // Stronger directional light
directionalLight.position.set(5, 10, 7.5); // Angled light
scene.add(directionalLight);

// Global model reference
let model;

// Load GLTF Model
const loader = new GLTFLoader();
loader.load(
  "/assets/models/blade_gltf/scene.gltf", // path to your GLTF or GLB file
  function (gltf) {
    model = gltf.scene;
    model.position.set(0, 0, 0);
    scene.add(model);
  },
  undefined,
  function (error) {
    console.error("An error occurred while loading the model:", error);
  }
);

// Camera position
camera.position.set(10, 20, 5);

// Controls (optional)
const controls = new OrbitControls(camera, renderer.domElement);

// Animate
function animate() {
  requestAnimationFrame(animate);

  if (model) {
    model.rotation.y += 0.01; // Rotate the model around Y-axis
  }

  controls.update();
  renderer.render(scene, camera);
}
animate();
