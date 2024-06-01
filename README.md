# ThreeJS Playground
This repository serves the purpose of exploring the intricacies of the Javascript 3D Library - "ThreeJS"

## Notes
<details>
    <summary>Setting Up ThreeJS</summary>
    Boilerplate code
    
    
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
    
    and here
    explanation here...
</details>
