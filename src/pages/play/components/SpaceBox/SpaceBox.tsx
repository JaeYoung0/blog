import { Suspense } from "react";
import * as S from "./SpaceBox.style";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import AvatarMesh from "./AvatarMesh";

const randomNum = (size: number) => {
  const prefix = Math.random() > 0.5 ? 1 : -1;
  const random = Math.floor(Math.random() * size);
  return prefix * random;
};

const randomName = () =>
  [
    "토토",
    "막스",
    "은호",
    "송이",
    "참치",
    "로이",
    "민트",
    "토숭",
    "곤지",
    "조이",
    "뽀찌",
    "밀키",
  ][Math.floor(Math.random() * 12)];

const randomImg = () => {
  return `/pets/pet${1 + Math.floor(Math.random() * 11)}.png`;
};

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

          <AvatarMesh
            name="재영의 펫"
            imgUrl={randomImg()}
            position={[0, 0, 0]}
          />
          {Array(40)
            .fill(0)
            .map((_, idx) => (
              <AvatarMesh
                key={idx}
                name={randomName()}
                position={[randomNum(10), randomNum(10), randomNum(10)]}
                imgUrl={randomImg()}
              />
            ))}

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
