import React, { useEffect, useRef, useState } from "react";
import * as S from "./StarsBg.style";
import Head from "next/head";

function StarsBg() {
  const [scrollY, setScrollY] = useState(0);

  const targets = useRef<(HTMLElement | null)[]>([]);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });
  }, []);

  useEffect(() => {
    console.log("@@targets", targets.current);
    const targetsArr = targets.current;
    targetsArr.forEach((target) =>
      TweenMax.from(target, 1, {
        autoAlpha: 0,
        // scale:4,
        // rotate: Math.random()*360,
        delay: Math.random() * 1,
        ease: Power3.easeInOut,
      })
    );
  }, []);

  useEffect(() => {
    TweenMax.to(window, 2, {
      scrollTo: {
        y: bottomRef.current,
        //autoKill: true
      },
      delay: 1.7,
      ease: Power4.easeInOut,
    });

    TweenMax.from(bottomRef.current, 2.5, {
      scale: 0.7,
      y: 100,
      delay: 2.2,
      ease: Power3.easeInOut,
    });
  }, []);

  const arr = ["별", `이 `, "쏟", "아", "진", "다"];

  return (
    <>
      <Head>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js"
          integrity="sha512-UxP+UhJaGRWuMG2YC6LPWYpFQnsSgnor0VUF3BHdD83PS/pOpN+FYbZmrYN+ISX8jnvgVUciqP/fILOXDjZSwg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/ScrollToPlugin.min.js"
          integrity="sha512-1OG9UO4krPizjtz/c9iDbjCqtXznBYdJeD4ccPaYfJHzC6F1qoQ3P1bgQ3J8lgCoK5qGVCqsY4+/RKjLDzITVQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        ></script>
      </Head>
      <S.Container scrollY={scrollY}>
        <S.FrontGround scrollY={scrollY} />
        <section>
          <h1>
            {arr.map((item, idx) => (
              <span
                key={idx}
                ref={(element) => {
                  targets.current[idx] = element;
                }}
              >
                {item}
              </span>
            ))}
            {/* <span ref={target}>별</span>
            <span ref={target}>이&nbsp;</span>
            <span>쏟</span>
            <span>아</span>
            <span>진</span>
            <span>다</span> */}
          </h1>
        </section>
        <section ref={bottomRef}>
          <ul>
            <li>
              <p>card</p>
            </li>
            <li>
              <p>card</p>
            </li>
            <li>
              <p>card</p>
            </li>
            <li>
              <p>card</p>
            </li>
          </ul>
        </section>
      </S.Container>
    </>
  );
}

export default StarsBg;
