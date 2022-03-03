import fragmentShader from "./shaders/fragment.glsl";
import vertexShader from "./shaders/vertex.glsl";
import atmosphereFragmentShader from "./shaders/atmosphereFragment.glsl";
import atmosphereVertex from "./shaders/atmosphereVertex.glsl";
import { useRef } from "react";
import * as THREE from "three";
import { MeshProps } from "@react-three/fiber";

/**
 * shader는 raw-loader로 string만 읽어온다.
 */
export default function EarthWithShader() {
  const earthRef = useRef<MeshProps>();

  //
  return (
    <>
      <mesh position={[-3, 3, -5]} ref={earthRef}>
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
      <mesh position={[-3, 3, -5]} scale={[1.5, 1.5, 1.5]}>
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
