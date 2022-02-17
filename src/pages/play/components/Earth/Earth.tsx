import { Suspense } from "react";
import * as S from "./Earth.style";
import { Canvas, useLoader } from "@react-three/fiber";

import EarthLightsMap from "./assets/textures/10k_earthlights.jpg";
import EarthCloudsMap from "./assets/textures/earthcloudmap.jpg";
import EarthSpecularMap from "./assets/textures/earthspec1k.jpg";
import * as THREE from "three";
import { TextureLoader } from "three";

import { OrbitControls } from "@react-three/drei";

/**
 * 공간 - Scene
 * 피사체 : 부피, 질감 - Mesh : Geometry, Material
 * 카메라 - Camera
 * 빛 - Light
 */
function EarthGlobe() {
  const [lightsMap, cloudsMap, specularMap] = useLoader(TextureLoader, [
    EarthLightsMap.src,
    EarthCloudsMap.src,
    EarthSpecularMap.src,
  ]);
  console.log(lightsMap);

  return (
    <>
      <ambientLight intensity={0.5} />
      <mesh>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite
          transparent
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        {/* meshPhongMaterial: 반사 하이라이트가 있는 광택있는 표면 재질을 표현, 빛이 없으면 그냥 검은색으로 보임 */}
        <meshPhongMaterial color="red" specularMap={specularMap} />

        {/* A standard physically based material, using Metallic-Roughness workflow. */}
        <meshStandardMaterial map={lightsMap} normalMap={cloudsMap} />

        {/* Orbit controls allow the camera to orbit around a target.
         */}
        <OrbitControls
          enableZoom
          enablePan
          enableRotate
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
      </mesh>
    </>
  );
}

function Earth() {
  return (
    <S.CanvasContainer>
      <Canvas>
        <Suspense fallback={null}>
          <EarthGlobe />
        </Suspense>
      </Canvas>
    </S.CanvasContainer>
  );
}

export default Earth;
