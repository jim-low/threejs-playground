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
scene.add(cube)

cube.position.z = -5;
function animate() {
  cube.rotation.z += 0.01;
  cube.rotation.x += 0.005;
  renderer.render(scene, camera)
  requestAnimationFrame(animate)
}
animate()
