// world.js - HL2 Web Prototype
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.js";

export function createWorld(scene) {
  // --- Ground ---
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(50, 50),
    new THREE.MeshStandardMaterial({ color: 0x444444 })
  );
  ground.rotation.x = -Math.PI / 2;
  scene.add(ground);

  // --- Crates ---
  const crateGeo = new THREE.BoxGeometry(1, 1, 1);
  const crateMat = new THREE.MeshStandardMaterial({ color: 0x555555 });
  for (let i = 0; i < 5; i++) {
    const crate = new THREE.Mesh(crateGeo, crateMat);
    crate.position.set(
      Math.random() * 10 - 5,
      0.5,
      Math.random() * -10
    );
    scene.add(crate);
  }

  // --- Barrels ---
  const barrelGeo = new THREE.CylinderGeometry(0.5, 0.5, 1, 16);
  const barrelMat = new THREE.MeshStandardMaterial({ color: 0x999999 });
  for (let i = 0; i < 3; i++) {
    const barrel = new THREE.Mesh(barrelGeo, barrelMat);
    barrel.position.set(
      Math.random() * 10 - 5,
      0.5,
      Math.random() * -10
    );
    scene.add(barrel);
  }

  // --- Lights ---
  const directional = new THREE.DirectionalLight(0xffffff, 1);
  directional.position.set(10, 15, 10);
  scene.add(directional);

  const ambient = new THREE.AmbientLight(0x404040);
  scene.add(ambient);

  // Return references if needed later
  return {
    ground,
    crates: scene.children.filter(obj => obj.geometry instanceof THREE.BoxGeometry),
    barrels: scene.children.filter(obj => obj.geometry instanceof THREE.CylinderGeometry),
    directional,
    ambient
  };
}
