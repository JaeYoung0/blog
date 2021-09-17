import { useEffect, useRef, useState } from "react";
import _ from "lodash";

// FIXME: for문 사용하지 말자
// 쓸데 없이 복잡하게 만들었나...

const makeSwithPointArr = (sectionInfo: any[]) => {
  const offsetHeightArr = sectionInfo.map((item) => item.offsetHeight);
  let switchPoint: number[] = [];
  for (let index = 0; index < offsetHeightArr.length; index++) {
    switchPoint[index] = offsetHeightArr
      .slice(0, index + 1)
      .reduce((prev, curr) => prev + curr);
  }

  return switchPoint;
};

const findCurrentSection = (sectionInfo: Info[]) => {
  return makeSwithPointArr(sectionInfo).findIndex(
    (el) => el > window.pageYOffset
  );
};

const calcRatioOfCurrentSection = (
  sectionInfo: Info[],
  currentSection: number
) => {
  const preveHeights = sectionInfo
    .map((info) => info.offsetHeight)
    .slice(0, currentSection)
    .reduce((prev, curr) => prev + curr, 0);

  const currHeight = sectionInfo[currentSection].offsetHeight;

  return (
    Math.round(((window.pageYOffset - preveHeights) * 100) / currHeight) / 100
  );
};

interface Info {
  offsetY: number;
  offsetHeight: number;
}

function useCurrentSection(
  classNameOfSections: string,
  lengthOfSections: number
) {
  const [sectionInfo, setSectionInfo] = useState<Info[]>([]);
  const [currentSection, setCurrentSection] = useState(0);
  const [currentRatio, setcurrentRatio] = useState(0);

  const [sectionElements, setSectionElements] =
    useState<NodeListOf<Element> | null>(null);

  useEffect(() => {
    const selectedElements = document.querySelectorAll(
      `.${classNameOfSections}`
    );

    setSectionElements(selectedElements);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const rect = entry.boundingClientRect;

        setSectionInfo((prevState) => {
          return [...prevState, { offsetY: rect.y, offsetHeight: rect.height }];
        });
      });
      observer.disconnect();
    });

    selectedElements.forEach((element) => observer.observe(element));
  }, []);

  useEffect(() => {
    setCurrentSection(findCurrentSection(sectionInfo));
  }, [sectionInfo]);

  useEffect(() => {
    if (sectionInfo.length < 4) return;

    window.addEventListener(
      "scroll",
      _.throttle(() => {
        const newCurrent = findCurrentSection(sectionInfo);
        const newRatio = calcRatioOfCurrentSection(sectionInfo, newCurrent);

        setCurrentSection(newCurrent);
        setcurrentRatio(newRatio);
      }, 50)
    );
  }, [sectionInfo, currentSection]);

  const handlePlusClick = () => {
    if (currentSection === lengthOfSections - 1 || !sectionElements) return;

    const target = sectionElements[currentSection + 1] as HTMLElement;
    window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
  };

  const handleMinusClick = () => {
    if (currentSection === 0 || !sectionElements) return;

    const target = sectionElements[currentSection - 1] as HTMLElement;
    // const target = document.getElementsByClassName(
    //   `section__${currentSection - 1}`
    // )[0] as HTMLElement;
    window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
  };

  return { currentSection, currentRatio, handlePlusClick, handleMinusClick };
}

export default useCurrentSection;
