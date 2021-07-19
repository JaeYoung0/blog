import React, { useState } from "react";
import * as S from "./Hamburger.style";

function Hamburger() {
  const [isOpened, setIsOpened] = useState(false);
  console.log("@@isOpened", isOpened);

  return (
    <>
      <S.HamburgerButton
        onClick={() => {
          setIsOpened(!isOpened);
        }}
      >
        <S.Line isOpened={isOpened} />
      </S.HamburgerButton>
    </>
  );
}

export default Hamburger;
