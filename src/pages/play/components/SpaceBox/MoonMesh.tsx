import { useRef } from "react";
import * as THREE from "three";
import { MeshProps, useLoader, useFrame } from "@react-three/fiber";
import MoonMap from "./assets/textures/8k_moon_map.jpeg";

export default function MoonMesh() {
  const [moonMap] = useLoader(THREE.TextureLoader, [MoonMap.src]);

  const moonRef = useRef<MeshProps>();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    moonRef.current?.setRotationFromEuler?.(
      new THREE.Euler(0, elapsedTime / 6)
    );
  });

  return (
    <mesh ref={moonRef} position={[0, 3, -5]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial map={moonMap} />
    </mesh>
  );
}
