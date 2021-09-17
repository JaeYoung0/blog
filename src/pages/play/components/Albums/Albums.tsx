import React, { useState, useEffect, useRef } from "react";
import * as S from "./Albums.style";

const IU_DATA = [
  {
    id: 1,
    bgGradient: "linear-gradient(120deg, #0272a4, #f6a564)",
    diskColor: "#0473a4",
    imgUrl: `/images/albums/iu_0.jpg`,
  },
  {
    id: 2,
    bgGradient: "linear-gradient(120deg, #bfc6cc, #3a6663)",
    diskColor: "#bec1c9",
    imgUrl: `/images/albums/iu_1.jpg`,
  },
  {
    id: 3,
    bgGradient: "linear-gradient(120deg, #4b405b, #d3a590)",
    diskColor: "#514057",
    imgUrl: `/images/albums/iu_2.jpg`,
  },
  {
    id: 4,
    bgGradient: "linear-gradient(120deg, #3a3a2b, #d19776)",
    diskColor: "#72523f",
    imgUrl: `/images/albums/iu_3.jpg`,
  },
  {
    id: 5,
    bgGradient: "linear-gradient(120deg, #e8ccba, #b13334)",
    diskColor: "#dc5158",
    imgUrl: `/images/albums/iu_4.jpg`,
  },
  {
    id: 6,
    bgGradient: "linear-gradient(120deg, #a7b0ab, #5e8187)",
    diskColor: "#61848d",
    imgUrl: `/images/albums/iu_5.jpg`,
  },
];

const isMobileAgent = () => {
  const mobileKeys = [
    "Android",
    "iPhone",
    "iPod",
    "BlackBerry",
    "Windows CE",
    "SAMSUNG",
    "LG",
    "MOT",
    "SonyEricsson",
  ];

  if (
    mobileKeys
      .map((item) => navigator.userAgent.includes(item))
      .filter((item) => item).length !== 0
  )
    return true;
  return false;
};

function Albums() {
  const [page, setPage] = useState(0);

  const target = useRef<HTMLDivElement>(null);

  const handleClick = (type: string) => {
    switch (type) {
      case "next":
        if (page === IU_DATA.length - 1) return setPage(0);
        setPage(page + 1);
        break;
      case "prev":
        if (page === 0) return setPage(IU_DATA.length - 1);
        setPage(page - 1);

      default:
        break;
    }
  };

  const [START_X, setSTART_X] = useState(0);
  const [END_X, setEND_X] = useState(0);

  useEffect(() => {
    const touchFunc = (e: TouchEvent) => {
      switch (e.type) {
        case "touchstart":
          setSTART_X(e.changedTouches[0].clientX);

          break;

        case "touchend":
          setEND_X(e.changedTouches[0].clientX);

          break;

        default:
          break;
      }
    };

    if (isMobileAgent()) {
      if (!target.current) return;

      target.current.addEventListener("touchstart", touchFunc);
      target.current.addEventListener("touchend", touchFunc);
    }

    return () => {
      if (!target.current) return;
      target.current.removeEventListener("touchstart", touchFunc);
      target.current.removeEventListener("touchend", touchFunc);
    };
  }, []);

  useEffect(() => {
    console.log("@@START_X", START_X);
    console.log("@@END_X", END_X);
    console.log("@@END_X - START_X", END_X - START_X);

    if (END_X - START_X > 150) handleClick("prev");
    if (END_X - START_X < -150) handleClick("next");
  }, [END_X]);

  return (
    <S.Container bgGradient={IU_DATA[page].bgGradient}>
      <h1>Albums</h1>
      <h1>page:{page}</h1>

      <S.AlbumSection ref={target}>
        {IU_DATA.map((item, idx) => (
          <S.Disk key={idx} diskColor={item.diskColor} show={idx === page}>
            <div />
          </S.Disk>
        ))}

        {IU_DATA.map((item, idx) => (
          <S.Img key={idx} src={`${item.imgUrl}`} show={idx === page} />
        ))}
      </S.AlbumSection>

      <S.BottomNav>
        <button onClick={() => handleClick("prev")}>PREV</button>
        <S.PointWrap page={page}>
          {new Array(IU_DATA.length).fill(0).map((item, idx) => (
            <li
              key={idx}
              value={idx}
              onClick={(e) => {
                setPage(e.currentTarget.value);
              }}
            ></li>
          ))}
        </S.PointWrap>
        <button onClick={() => handleClick("next")}>NEXT</button>
      </S.BottomNav>
    </S.Container>
  );
}

export default Albums;
