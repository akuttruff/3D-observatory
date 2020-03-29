const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

const spaceTexture = THREE.ImageUtils.loadTexture("img/sky.jpg");
const spaceSphereGeometry = new THREE.SphereGeometry(20, 20, 20);
const spaceSphereMaterial = new THREE.MeshPhongMaterial();
spaceSphereMaterial.map = spaceTexture;

const spaceSphere = new THREE.Mesh(spaceSphereGeometry, spaceSphereMaterial);

// space sphere needs to be double sided as the camera is within the space sphere
spaceSphere.material.side = THREE.DoubleSide;
spaceSphere.material.map.wrapS = THREE.RepeatWrapping;
spaceSphere.material.map.wrapT = THREE.RepeatWrapping;
spaceSphere.material.map.repeat.set( 1, 1);

scene.add(spaceSphere);

// position camera
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = -15;
camera.lookAt(scene.position);

// create two spotlights to illuminate the scene
const spotlight = new THREE.SpotLight(0xffffff);
spotlight.position.set( -40, 60, -10 );
spotlight.intensity = 1;
scene.add( spotlight );

const spotlight2 = new THREE.SpotLight(0x5192e9);
spotlight2.position.set( 40, -60, 30 );
spotlight2.intensity = 1.5;
scene.add( spotlight2 );

document.body.appendChild(renderer.domElement);

function render() {
  requestAnimationFrame(render);
  //rotate space sphere
  spaceSphere.rotation.y += 0.001;
  renderer.render(scene, camera);
}

render();
