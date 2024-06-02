# ThreeJS Playground
This repository serves the purpose of exploring the intricacies of the Javascript 3D Library - "ThreeJS"

## Setting Up ThreeJS
```
const FOV = 75
const WINDOW_WIDTH = window.innerWidth
const WINDOW_HEIGHT = window.innerHeight
const ASPECT_RATIO = WINDOW_WIDTH / WINDOW_HEIGHT

const scene = new THREE.Scene()
const camera = new  THREE.PerspectiveCamera(FOV, ASPECT_RATIO)
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(WINDOW_WIDTH, WINDOW_HEIGHT)
document.body.appendChild(renderer.domElement)

```

Explanation:<br>
```Scene``` is where all objects, lights and cameras will be placed in.<br>
```Camera``` is to allow the user to view everything that happens in the Scene.<br>
(Learn more about cameras [here](https://threejs.org/docs/#api/en/cameras/PerspectiveCamera))<br>
```Renderer``` handles all the logic to render visuals onto the Scene.<br>
(Learn more about rendering [here](https://threejs.org/docs/#api/en/renderers/WebGLRenderer))<br>

How it works:<br>
1. Create a scene object reference
2. Create a camera object with the Field Of View(FOV) set to 75 and the aspect ratio set to represent the current window dimensions
3. Create a renderer that uses WebGL Rendering
4. Set the size of the renderer to the current window dimensions
5. append the renderer to the element that you wish to display on (in this case, the renderer is being placed into the entire document.body so that it shows up covering the entire window)

## Rendering a Cube into the Scene
```
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: "blue" })
const cube = new THREE.Mesh(geometry, material)
cube.position.z = -5;
scene.add(cube)
renderer.render(scene, camera)
```

Explanation:<br>
The code above renders a simple cube that is colored ```blue``` onto the screen.<br>
<br>
To create a "shape" in ThreeJS:<br>
* "Shapes" require a ```Geometry``` and a ```Material```
* The complete form of a "shape" is called a ```Mesh```
* ```Geometry``` refers to how the object should be drawn (in this case, it is drawn with the dimensions of a cube. i.e. width, height, depth)
* ```Material``` refers to the appearance of an object. You may use a texture mapping as well, but in this case we are giving it a simple solid color.

How it works:<br>
* Create both the ```Geometry``` and the ```Material``` as shown in the code sample above.
* Create a cube ```Mesh``` reference and pass in both the ```geometry``` and ```material```
* Position the cube 5 units backwards on the ```z-axis```
* add the ```cube``` to the scene
* Render the ```Scene``` and ```Camera``` where the ```Scene``` has the ```cube``` added to it
