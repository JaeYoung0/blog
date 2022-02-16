import * as THREE from "three";
import { useEffect } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function Skybox() {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      45,
      30000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    function init() {
      camera.position.set(1200, -250, 2000);
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.getElementById("hjySkybox")?.appendChild(renderer.domElement);

      const materialArray = createMaterialArray();

      const skyboxGeo = new THREE.BoxGeometry(10000, 10000, 10000);
      const skybox = new THREE.Mesh(skyboxGeo, materialArray);
      scene.add(skybox);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enabled = true;
      controls.minDistance = 100;
      controls.maxDistance = 1500;

      animate();
    }
    function animate() {
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    function createMaterialArray() {
      const materialArray = [
        "cubeMaps/1.jpeg",
        "cubeMaps/2.jpeg",
        "cubeMaps/3.jpeg",
        "cubeMaps/4.jpeg",
        "cubeMaps/5.jpeg",
        "cubeMaps/6.jpeg",
      ].map((img) => {
        const texture = new THREE.TextureLoader().load(img);
        return new THREE.MeshBasicMaterial({
          map: texture,
          side: THREE.BackSide,
        });
      });

      return materialArray;
    }
    init();
  }, []);
  return <div id="hjySkybox"></div>;
}
