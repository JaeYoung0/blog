import { Suspense, useRef } from "react";
import * as S from "./SpaceBox.style";
import { Canvas, MeshProps, useFrame, useLoader } from "@react-three/fiber";

import EarthLightsMap from "./assets/textures/10k_earthlights.jpg";
import EarthCloudsMap from "./assets/textures/earthcloudmap.jpg";
import EarthSpecularMap from "./assets/textures/earthspec1k.jpg";
import MoonMap from "./assets/textures/8k_moon_map.jpeg";
import * as THREE from "three";
import { Euler, TextureLoader } from "three";

import { OrbitControls, Stars } from "@react-three/drei";
import fragmentShader from "./shaders/fragment.glsl";
import vertexShader from "./shaders/vertex.glsl";
import atmosphereFragmentShader from "./shaders/atmosphereFragment.glsl";
import atmosphereVertex from "./shaders/atmosphereVertex.glsl";
/**
 * 공간 - Scene
 * 피사체 : 부피, 질감 - Mesh : Geometry, Material
 * 카메라 - Camera
 * 빛 - Light
 */
function GlobeAndStars() {
  const nextImgSrc = async (path: string) => {
    // public 폴더가 아니라 인접폴더에서 불러오고 싶다.
    // 만약에 이걸 쓰다면, promise를 어떻게 풀어낼까
    const result = await import(
      `@pages/play/components/SpaceBox/assets/textures/${path}`
    );

    return result.default.src;
  };

  nextImgSrc("earth_nasa.jpeg");

  const [lightsMap, cloudsMap, specularMap, moonMap] = useLoader(
    TextureLoader,
    [EarthLightsMap.src, EarthCloudsMap.src, EarthSpecularMap.src, MoonMap.src]
  );

  const earthRef = useRef<MeshProps>();

  // uuid도 들어있음
  console.log("@@earthRef", earthRef);

  const moonRef = useRef<MeshProps>();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current?.setRotationFromEuler?.(new Euler(0, elapsedTime / 6));
    moonRef.current?.setRotationFromEuler?.(new Euler(0, elapsedTime / 6));
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <Stars radius={300} depth={100} count={5000} saturation={50} factor={5} />

      <mesh ref={earthRef} position={[0, 0, -5]}>
        <sphereGeometry args={[1, 32, 32]} />

        {/* meshPhongMaterial: 반사 하이라이트가 있는 광택있는 표면 재질을 표현, 빛이 없으면 그냥 검은색으로 보임 */}
        <meshPhongMaterial
          specularMap={specularMap}
          map={specularMap}
          side={THREE.DoubleSide}
        />

        {/* A standard physically based material, using Metallic-Roughness workflow. */}
        {/* meshStandard가 meshPhong보다 아래에 있어야 하네?! */}
        <meshStandardMaterial map={cloudsMap} normalMap={lightsMap} />

        {/* Orbit controls allow the camera to orbit around a target.
         */}
        <OrbitControls
          enableZoom
          enablePan
          enableRotate
          zoomSpeed={0.6}
          panSpeed={0.6}
          rotateSpeed={1}
        />
      </mesh>

      <mesh ref={moonRef} position={[2, 0, -10]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial />
        <meshStandardMaterial map={moonMap} normalMap={moonMap} />
      </mesh>
    </>
  );
}

function GlobeWithShaders() {
  const earthRef = useRef<MeshProps>();

  // shader는 raw-loader로 string만 읽어온다.
  return (
    <>
      <mesh position={[-2, 3, -10]} ref={earthRef}>
        <sphereGeometry args={[1, 50, 50]} />
        <shaderMaterial
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          uniforms={{
            globeTexture: {
              value: new THREE.TextureLoader().load("textures/earth_nasa.jpeg"),
            },
          }}
        />
      </mesh>
      <mesh position={[-2, 3, -10]} scale={[1.1, 1.1, 1.1]}>
        <sphereGeometry args={[1, 50, 50]} />
        <shaderMaterial
          fragmentShader={atmosphereFragmentShader}
          vertexShader={atmosphereVertex}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
        />
      </mesh>
    </>
  );
}

function SpaceBox() {
  return (
    <S.CanvasContainer>
      <Canvas>
        <Suspense fallback={null}>
          <GlobeAndStars />
          <GlobeWithShaders />
        </Suspense>
      </Canvas>
    </S.CanvasContainer>
  );
}

export default SpaceBox;
