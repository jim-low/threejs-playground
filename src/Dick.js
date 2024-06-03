import { camera, renderer, scene } from "./setup.js";

class Dick {
  constructor(size) {
    this.schlong = this.createCylinder(size);
    this.leftBall = this.createSphere(size);
    this.rightBall = this.createSphere(size);
    this.tip = this.createSphere(size);

    this.schlong.add(this.leftBall)
    this.schlong.add(this.rightBall)
    this.schlong.add(this.tip)
    scene.add(this.schlong)
  }

  createSphere(radius) {
    const geometry = new THREE.SphereGeometry(radius)
    const material = new THREE.MeshBasicMaterial({ color: 'red', wireframe: false })
    const sphere = new THREE.Mesh(geometry, material)
    return sphere;
  }

  createCylinder(radius) {
    const geometry = new THREE.CylinderGeometry(radius, radius, 20, 69);
    const material = new THREE.MeshBasicMaterial({ color: 'red', wireframe: false });
    const cylinder = new THREE.Mesh(geometry, material);
    return cylinder;
  }

  initPosition() {
    this.schlong.position.z = -50;

    this.leftBall.position.x = -3;
    this.leftBall.position.y = -12;

    this.rightBall.position.x = 3;
    this.rightBall.position.y = -12;

    this.tip.position.y = 10;
  }

  update() {
    this.initPosition()

    this.schlong.rotation.x -= 0.01;
    this.schlong.rotation.z -= 0.001;
  }

  render() {
    renderer.render(scene, camera)
  }
}

export default Dick;
