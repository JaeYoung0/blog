import { useRef } from "react";
import * as THREE from "three";
import { MeshProps, useLoader, useFrame } from "@react-three/fiber";

import EarthLightsMap from "./assets/textures/10k_earthlights.jpg";
import EarthCloudsMap from "./assets/textures/earthcloudmap.jpg";
import EarthSpecularMap from "./assets/textures/earthspec1k.jpg";

/**
 * 공간 - Scene
 * 피사체 : 부피, 질감 - Mesh : Geometry, Material
 * 카메라 - Camera
 * 빛 - Light
 */

/**
 * meshStandardMaterial: A standard physically based material, using Metallic-Roughness workflow.
 * meshPhongMaterial: 반사 하이라이트가 있는 광택있는 표면 재질을 표현, 빛이 없으면 그냥 검은색으로 보임
 * meshStandard가 meshPhong보다 아래에 있어야 하네?!
 */
export default function EarthMesh() {
  const [lightsMap, cloudsMap, specularMap] = useLoader(THREE.TextureLoader, [
    EarthLightsMap.src,
    EarthCloudsMap.src,
    EarthSpecularMap.src,
  ]);

  const earthRef = useRef<MeshProps>();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current?.setRotationFromEuler?.(
      new THREE.Euler(0, elapsedTime / 6)
    );
  });

  return (
    <mesh ref={earthRef} position={[0, 0, -5]}>
      <sphereGeometry args={[1, 32, 32]} />

      <meshPhongMaterial
        specularMap={specularMap}
        map={specularMap}
        side={THREE.DoubleSide}
      />
      <meshStandardMaterial map={cloudsMap} normalMap={lightsMap} />
    </mesh>
  );
}
