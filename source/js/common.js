const browserStateChange = require("./utils/browserStateChange");

AOS.init({
  duration: 800,
  easing: "ease-out-quad"
});

// /**
// * three.js
// *
// */
// let container;
// let camera, scene, renderer;
// let uniforms;

// const w = window.innerWidth;
// const h = window.innerHeight;


// init();
// animate();

// function init() {
//   container = document.getElementById("canvas");

//   camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
//   camera.position.z = 100;

//   scene = new THREE.Scene();

//   const geometry = new THREE.PlaneGeometry(window.innerWidth, window.innerHeight, 1);

//   uniforms = {
//     time: {value: 0.0},
//     resolution: {value: new THREE.Vector2()},
//   };
//   const material = new THREE.ShaderMaterial({
//     uniforms: uniforms,
//     vertexShader: document.getElementById( 'vertexShader' ).textContent,
//     fragmentShader: document.getElementById( 'fragmentShader' ).textContent
//   });

//   const mesh = new THREE.Mesh(geometry, material);

//   scene.add(mesh);

//   renderer = new THREE.WebGLRenderer();
//   renderer.setPixelRatio(window.devicePixelRatio);
//   container.appendChild(renderer.domElement);

//   onWindowResize();
//   browserStateChange.resize(onWindowResize);

// }

// function onWindowResize(e) {

//   uniforms.resolution.value.x = w;
//   uniforms.resolution.value.y = h;

//   camera.aspect = w / h;
//   camera.updateProjectionMatrix();

//   renderer.setSize(w, h);
// }

// function animate() {
//   requestAnimationFrame(animate);
//   render();
// }

// function render() {
//   uniforms.time.value += 0.01;
//   renderer.render(scene, camera) 
// }
