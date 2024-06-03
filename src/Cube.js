import { camera, renderer, scene } from "./setup.js";

class Cube {
  constructor(width, height, depth) {
    const geometry = new THREE.BoxGeometry(width, height, depth);
    const material = new THREE.MeshBasicMaterial({ color: 'blue', wireframe: true })
    this.cube = new THREE.Mesh(geometry, material)

    scene.add(this.cube)
  }

  update() {
    this.cube.position.z = -5;

    this.cube.rotation.z += 0.005;
    this.cube.rotation.x += 0.001;
  }

  render() {
    renderer.render(scene, camera)
  }
}

export default Cube;
