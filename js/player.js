export function initPlayer(camera) {
  const keys = {};
  const moveSpeed = 0.12;

  document.addEventListener('keydown', e => keys[e.code] = true);
  document.addEventListener('keyup', e => keys[e.code] = false);

  function updateMovement() {
    let dirX = Number(keys['KeyD']) - Number(keys['KeyA']);
    let dirZ = Number(keys['KeyS']) - Number(keys['KeyW']);

    camera.position.x += dirX * moveSpeed;
    camera.position.z += dirZ * moveSpeed;
  }

  return { updateMovement };
}
