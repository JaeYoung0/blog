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
}
export default function AvatarMesh({ position, name, imgUrl }: Props) {
  console.log("@@imgUrl", imgUrl);

  return (
    <>
      <mesh position={position}>
        <Html distanceFactor={10}>
          <div
            onClick={() =>
              alert(`안녕 내 위치는 ${position}이고 이름은 ${name}이야.`)
            }
          >
            <RoundedFrame>
              <img
                src={imgUrl}
                css={css`
                  ${S.center}
                  width: 50px;
                  height: 50px;
                  border-radius: 50%;
                `}
              />
              <S.Name
                css={css`
                  position: absolute;
                  bottom: -2rem;
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