import { css } from "@emotion/react";
import { Html } from "@react-three/drei";

import * as S from "./AvatarMesh.style";
interface FrameProps {
  children: React.ReactNode;
}

function RoundedFrame({ children }: FrameProps) {
  return <S.AvatarWrapper>{children}</S.AvatarWrapper>;
}

interface Props {
  name: string;
  position: [number, number, number];
  imgUrl: string;
  swapCamera: (position: THREE.Vector3Tuple) => void;
}
export default function AvatarMesh({
  position,
  name,
  imgUrl,
  swapCamera,
}: Props) {
  return (
    <>
      <mesh position={position}>
        <Html
        // distanceFactor={10}
        >
          <div
            onClick={() => {
              const go = confirm(`${name}으로 이동하시겠어요?`);
              if (go) {
                swapCamera(position);
              }
            }}
          >
            <RoundedFrame>
              <img
                src={imgUrl}
                css={css`
                  ${S.center}
                  width: 50px;
                  height: 50px;
                  border-radius: 50%;
                  border: 2px solid #7e71f3;
                `}
              />
              <S.Name
                css={css`
                  position: absolute;
                  bottom: -3.5rem;
                  width: 100%;
                  text-align: center;
                `}
              >
                {name}
              </S.Name>
            </RoundedFrame>
          </div>
        </Html>
      </mesh>
    </>
  );
}
