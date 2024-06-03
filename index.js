const FOV = 75
const WINDOW_WIDTH = window.innerWidth
const WINDOW_HEIGHT = window.innerHeight
const ASPECT_RATIO = WINDOW_WIDTH / WINDOW_HEIGHT

const scene = new THREE.Scene()
const camera = new  THREE.PerspectiveCamera(FOV, ASPECT_RATIO)
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(WINDOW_WIDTH, WINDOW_HEIGHT)
document.body.appendChild(renderer.domElement)

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: "blue", wireframe: true })
const cube = new THREE.Mesh(geometry, material)
cube.position.z = -15;
// scene.add(cube)

function animate() {
  cube.rotation.z += 0.005;
  cube.rotation.x += 0.001;
  renderer.render(scene, camera)
  requestAnimationFrame(animate)
}
// animate()

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

const dick = new Dick(4)
function drawDick() {
  dick.update()
  dick.render()
  requestAnimationFrame(drawDick)
}
drawDick()
