import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import * as S from "./Home.style";

function Navbar() {
  const navbarHeight = 45;
  const [hideNavbar, setHideNavbar] = useState(false);
  useEffect(() => {
    const handleNavbar = () => {
      if (window.pageYOffset > navbarHeight) setHideNavbar(true);
      if (window.pageYOffset < navbarHeight) setHideNavbar(false);
    };
    document.addEventListener("scroll", handleNavbar);

    () => {
      document.removeEventListener("scroll", handleNavbar);
    };
  }, []);
  return (
    <S.Navigation hideNavbar={hideNavbar}>
      <Link href="#">하루하늘</Link>
      <Link href="#">메뉴1</Link>
      <Link href="#">메뉴2</Link>
      <Link href="#">메뉴3</Link>
    </S.Navigation>
  );
}

export default function HomePage() {
  const targetRefs = useRef<HTMLElement[] | null[]>([]);

  const [currentSection, setCurrentSection] = useState(0);

  const buildThresholdList = () => {
    let thresholds = [];
    let numSteps = 50;

    for (let i = 1.0; i <= numSteps; i++) {
      let ratio = i / numSteps;
      thresholds.push(ratio);
    }

    thresholds.push(0);
    return thresholds;
  };

  useEffect(() => {
    // const target2 = targetRef2.current;
    // if (!target2) return;

    // const target3 = targetRef3.current;
    // if (!target3) return;

    // if (!targetRefs.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry.target.getAttribute("id"));
          console.log("ratio", entry.intersectionRatio);
          console.log("height", entry.intersectionRect.height);

          // console.log(
          //   entry.intersectionRect.height / entry.target.scrollHeight
          // );

          // entry.target.style.opacity = entry.intersectionRatio;
        });
      },
      {
        threshold: buildThresholdList(),
      }
    );
    targetRefs.current.forEach((target) => {
      if (!target) return;
      observer.observe(target);
    });
  }, []);

  const arr = [0, 1, 2, 3];

  return (
    <S.HomePageContainer>
      <Navbar />

      <S.SectionContainer>
        {arr.map((item, idx) => (
          <>
            <section
              id={`scroll-section-${idx}`}
              ref={(element) => {
                targetRefs.current[idx] = element;
              }}
            >
              <h1 style={{ paddingTop: "50vh" }}>{`섹션${item}`}</h1>
            </section>
          </>
        ))}

        {/* <section id="main__section1">
            <h1 style={{ paddingTop: "50vh" }}>섹션1</h1>
          </section>
  
          <section id="main__section2" ref={targetRef2}>
            <h1 style={{ paddingTop: "50vh" }}>섹션2</h1>
          </section>
  
          <section id="main__section3" ref={targetRef3}>
            <h1 style={{ paddingTop: "50vh" }}>섹션3</h1>
          </section>
  
          <section id="main__section4">
            <h1 style={{ paddingTop: "50vh" }}>섹션4</h1>
          </section> */}
      </S.SectionContainer>
      <S.Footer>
        <span>Footer</span>
      </S.Footer>
    </S.HomePageContainer>
  );
}
