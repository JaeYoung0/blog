import { css } from "@emotion/react";
import { Html } from "@react-three/drei";

import * as S from "./AvatarMesh.style";
interface FrameProps {
  children: React.ReactNode;
  isMe: boolean;
}

function RoundedFrame({ children, isMe }: FrameProps) {
  return <S.AvatarWrapper isMe={isMe}>{children}</S.AvatarWrapper>;
}

interface Props {
  name: string;
  position: [number, number, number];
  imgUrl: string;
  swapCamera: (position: THREE.Vector3Tuple) => void;
  me?: boolean;
}
export default function AvatarMesh({
  position,
  name,
  imgUrl,
  swapCamera,
  me = false,
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
            <RoundedFrame isMe={me}>
              <img
                src={imgUrl}
                css={css`
                  ${S.center}
                  width: ${me ? `85px` : `35px`};
                  height: ${me ? `85px` : `35px`};

                  /* width:100%; */
                  /* height: 100%; */
                  border-radius: 50%;
                  border: 3px solid #7e71f3;
                `}
              />
              <S.Name
                css={css`
                  position: absolute;
                  bottom: -2rem;
                  width: 100%;
                  text-align: center;
                  font-size: 12px;
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
