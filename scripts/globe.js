var scn = new THREE.Scene();
var cam = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({antialias: true});

cam.position.z = 5;

renderer.setClearColor("#000000");
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    cam.aspect = window.innerWidth/window.innerHeight;
    cam.updateProjectionMatrix();
})

var light = new THREE.PointLight(0xFFFFFF, 1, 500);
light.position.set(10, 10, 10);
scn.add(light);

var geom = new THREE.SphereGeometry(3.5, 24, 20);
var material = new THREE.PointsMaterial({color: 0xFFFFFF, size: 0.035});
var points = new THREE.Points(geom, material);

points.position.x = -3;
points.position.y = -1.5;
points.rotation.x = 10;
scn.add(points);

var render = function() {
    requestAnimationFrame(render);
    points.rotation.y -= 0.0005;
    renderer.render(scn, cam);
}
render();