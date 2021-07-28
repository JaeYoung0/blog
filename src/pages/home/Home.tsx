/* eslint-disable @next/next/no-img-element */
import _ from "lodash";
import * as S from "./Home.style";
import useCurrentSection from "@hooks/useCurrentSection";
import Navbar from "@components/Navbar";
import HaruImage from "@components/HaruImage";
// import { COLORS } from "@constants/color";
// import Image from "next/image";
import { useEffect, useRef } from "react";
import { SECTION_INFO } from "./info.data";

// “Be patient toward all that is unsolved in your heart
// and try to love the questions themselves,
// like locked rooms and like books that are now written in a very foreign tongue.
// Do not now seek the answers, which cannot be given you
// because you would not be able to live them.
// And the point is, to live everything.
// Live the questions now.
// Perhaps you will then gradually, without noticing it,
// live along some distant day into the answer.”
// ― Rainer Maria Rilke

//

type EffectName = "opacity";

export const calcEffect = (
  name: string,
  currentRatio: number,
  effects?: any
) => {
  if (!effects) return;
  const { valueRange, scrollRange } = effects[name];

  let slope;
  let interceptY;
  let value;
  for (let i = 0; i < scrollRange.length - 1; i++) {
    slope =
      (valueRange[i + 1] - valueRange[i]) /
      (scrollRange[i + 1] - scrollRange[i]);
    interceptY = valueRange[i] - slope * scrollRange[i];
    value = slope * currentRatio + interceptY;
    // console.log("@@ slope, value", slope, value);

    if (currentRatio >= scrollRange[i] && currentRatio <= scrollRange[i + 1]) {
      return Math.round(value * 10) / 10;
    }
  }
};

export default function HomePage() {
  const { currentSection, currentRatio } = useCurrentSection();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // console.log("@@section num, ratio", currentSection, currentRatio);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    console.log("@@canvas", canvas);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    console.log("@@ctx", ctx);

    const woww = calcEffect("flipVideo", currentRatio, SECTION_INFO[1].effects);
    console.log("@@woww", woww);

    if (!woww) return;
    const oh = Math.round(woww).toString().padStart(2, "0");
    console.log("@@oh", oh);

    const myImg = new Image();
    myImg.src = `/frames_demo2/frame_${oh}_delay-0.2s.jpg`;

    myImg.alt = "fallback";
    myImg.width = canvas.width;
    myImg.height = canvas.height;
    console.log("@@myImg", myImg);
    myImg.addEventListener("load", () => {
      ctx.drawImage(myImg, 0, 0, myImg.width, myImg.height);
    });

    // ctx.fillStyle = "green";
    // ctx.fillRect(20, 10, 150, 100);
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, [canvasRef, currentRatio]);

  console.log("@@currentRatio", currentRatio);

  return (
    <S.HomePageContainer>
      <Navbar />
      <S.SectionContainer currentSection={currentSection}>
        {/* <img src="/shine2.gif" alt="" /> */}
        {/* <div
          style={{
            display: `${currentRatio > 0 ? "none" : "flex"}`,
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <img src="/cloudpapa.png" style={{ width: "100vw" }} />
        </div> */}
        {SECTION_INFO.map((section, idx) => {
          return (
            <S.Section
              height={section.vh}
              currentRatio={currentRatio}
              currentSection={currentSection}
              show={idx === currentSection}
              key={idx}
              className="main__section"
            >
              <h1>{section.title}</h1>
              <h1>{section.eng}</h1>
              {section.image && <img src={section.image} />}
              {idx === 1 && (
                <canvas
                  ref={canvasRef}
                  width={600}
                  height={500}
                  // width="500"
                  // height="400"
                ></canvas>
              )}
            </S.Section>
          );
        })}
      </S.SectionContainer>

      <S.Footer>
        <span>Footer</span>
      </S.Footer>
    </S.HomePageContainer>
  );
}
