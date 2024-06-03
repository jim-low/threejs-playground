import Cube from "./src/Cube.js";
import Dick from "./src/Dick.js"

const cube = new Cube(1, 1, 1);
function animate() {
  cube.update();
  cube.render();
  requestAnimationFrame(animate)
}
animate()


const dick = new Dick(4)
function drawDick() {
  dick.update()
  dick.render()
  requestAnimationFrame(drawDick)
}
drawDick()
