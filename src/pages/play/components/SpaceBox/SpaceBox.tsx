import { Suspense } from "react";
import * as S from "./SpaceBox.style";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import EarthWithShader from "./EarthWithShader";
import EarthMesh from "./EarthMesh";
import MoonMesh from "./MoonMesh";

function SpaceBox() {
  return (
    <S.CanvasContainer>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <Stars
            radius={300}
            depth={100}
            count={5000}
            saturation={50}
            factor={5}
          />
          <EarthMesh />
          <MoonMesh />
          <EarthWithShader />
          <OrbitControls
            enableZoom
            enablePan
            enableRotate
            zoomSpeed={0.6}
            panSpeed={0.6}
            rotateSpeed={1}
          />
        </Suspense>
      </Canvas>
    </S.CanvasContainer>
  );
}

export default SpaceBox;
