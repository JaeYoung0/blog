import { Suspense, useRef, useState } from "react";
import * as S from "./SpaceBox.style";
import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import AvatarMesh from "./AvatarMesh";
import * as THREE from "three";

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

type MockUserModel = {
  id: number;
  position: [number, number, number];
  name: string;
  imgUrl: string;
};

const MOCK_USERS: MockUserModel[] = Array(15)
  .fill(0)
  .map((_, idx) => ({
    id: idx,
    position: [randomNum(10), randomNum(10), randomNum(10)],
    name: `${randomName()}${idx}`,
    imgUrl: randomImg(),
  }));

const MOCK_ME: MockUserModel = {
  id: 117,
  position: [0, 0, 0],
  name: "재영",
  imgUrl: randomImg(),
};

function SpaceBox() {
  const [targetPos, setTargetPos] = useState<THREE.Vector3Tuple>([0, 0, 0]);

  const swapCamera = (position: THREE.Vector3Tuple) => {
    setTargetPos(position);
  };

  return (
    <S.CanvasContainer>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <Stars
            radius={20}
            depth={300}
            count={1000}
            saturation={50}
            factor={5}
          />

          <AvatarMesh
            name={MOCK_ME["name"]}
            imgUrl={MOCK_ME["imgUrl"]}
            position={MOCK_ME["position"]}
            swapCamera={swapCamera}
            me
          />

          {MOCK_USERS.map((user) => (
            <AvatarMesh
              key={user.id}
              name={user.name}
              position={user.position}
              imgUrl={user.imgUrl}
              swapCamera={swapCamera}
            />
          ))}

          <OrbitControls
            minDistance={5}
            maxDistance={10}
            target={targetPos}
            enableZoom
            enablePan
            enableRotate
            autoRotate
            autoRotateSpeed={0.2}
            zoomSpeed={0.7}
            panSpeed={0.7}
            rotateSpeed={1}
          />
        </Suspense>
      </Canvas>
    </S.CanvasContainer>
  );
}

export default SpaceBox;
