import React, { useRef, useEffect } from "react";
import * as S from "./CardScatter.style";
import Head from "next/head";

const CARD_DATA = [
  { id: 1, bgGradient: "linear-gradient(20deg, black 0%, #fc00ff 100%)" },
  { id: 2, bgGradient: "linear-gradient(40deg, #fd1d1d, #833ab4)" },
  { id: 3, bgGradient: "linear-gradient(160deg, #0093e9, #80d0c7)" },
  { id: 4, bgGradient: "linear-gradient(20deg, #ff5e7e, #ff99ac)" },
  { id: 5, bgGradient: "linear-gradient(62deg, #fbab7e, #f7ce68)" },
];

function CardScatter() {
  const refs = useRef<any[]>([]);
  const bottomRef = useRef(null);
  useEffect(() => {
    console.log("@@refs.current", refs.current);
    resetCards();
  }, [refs]);

  useEffect(() => {
    if (!bottomRef.current) return;
    bottomRef.current.querySelectorAll("button").forEach((item, idx) => {
      TweenMax.from(item, 0.4, {
        top: -200,
        autoAlpha: 0,
        ease: Power3.easeInOut,
        delay: idx * 0.1 + 1,
      });
    });
    console.log("@@querySelectorAll", bottomRef.current);
  }, [bottomRef]);

  const resetCards = () => {
    TweenMax.killTweensOf(refs.current);
    refs.current.forEach((item, idx) => {
      console.log("@@item", item);

      TweenMax.to(item, 1, {
        top: window.innerHeight / 2 - idx * 40,
        left: window.innerWidth / 2 + idx * 40 - 200,
        rotation: 0,
        ease: Power3.easeInOut,
        delay: idx * 0.2,
      });
    });
  };

  const scatterCards = () => {
    refs.current.forEach((item, idx) => {
      TweenMax.to(item, 1, {
        top: Math.random() * window.innerHeight,
        left: Math.random() * window.innerWidth,
        rotation: Math.random() * 180,
        ease: Power4.easeInOut,
        delay: idx * 0.1,
      });
    });
  };

  const rotateCards = () => {
    refs.current.forEach((item, idx) => {
      TweenMax.to(item, 1, {
        top: Math.random() * (window.innerHeight / 2) + 100,
        left: Math.random() * (window.innerWidth - 300) + 100,
        rotationX: "random(-60,60)",
        rotationY: "random(-60,60)",
        rotationZ: "random(-90,90)",
        ease: Power4.easeInOut,
        delay: "random(0,0.5)",
      });
    });
  };

  useEffect(() => {
    window.addEventListener("resize", resetCards);

    return () => window.removeEventListener("resize", resetCards);
  }, []);

  return (
    <>
      <Head>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js"
          integrity="sha512-UxP+UhJaGRWuMG2YC6LPWYpFQnsSgnor0VUF3BHdD83PS/pOpN+FYbZmrYN+ISX8jnvgVUciqP/fILOXDjZSwg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        ></script>
      </Head>
      <S.Container>
        <h1>CardScatter</h1>
        <S.CardsWrap>
          {CARD_DATA.map((item, idx) => (
            <S.Card
              key={item.id}
              style={{ background: `${item.bgGradient}` }}
              ref={(el) => {
                refs.current.push(el);
              }}
            >
              Card
            </S.Card>
          ))}
        </S.CardsWrap>

        <S.BottomWrap ref={bottomRef}>
          <button onClick={scatterCards}>Scatter</button>
          <button onClick={resetCards}>Reset</button>
          <button onClick={rotateCards}>Rotate</button>
        </S.BottomWrap>
      </S.Container>
    </>
  );
}

export default CardScatter;
