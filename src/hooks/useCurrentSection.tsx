import { useEffect, useRef, useState } from "react";
import _ from "lodash";

// FIXME: for문 사용하지 말자
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

function useCurrentSection() {
  const [sectionInfo, setSectionInfo] = useState<Info[]>([]);
  const [currentSection, setCurrentSection] = useState(0);
  const [currentRatio, setcurrentRatio] = useState(0);

  useEffect(() => {
    const elements = document.querySelectorAll(".main__section");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const rect = entry.boundingClientRect;
        console.log("!!entry.boundingClientRect", rect);

        setSectionInfo((prevState) => {
          return [...prevState, { offsetY: rect.y, offsetHeight: rect.height }];
        });
      });
      observer.disconnect();
    });

    elements.forEach((element) => observer.observe(element));
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
      }, 100)
    );
  }, [sectionInfo, currentSection]);

  return { currentSection, currentRatio };
}

export default useCurrentSection;
