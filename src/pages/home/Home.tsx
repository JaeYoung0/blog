/* eslint-disable @next/next/no-img-element */
import _ from "lodash";
import * as S from "../tosim/Tosim.style";
import useCurrentSection from "@hooks/useCurrentSection";
import Navbar from "@components/Navbar";
import HaruImage from "@components/HaruImage";
// import { COLORS } from "@constants/color";
// import Image from "next/image";
import { useEffect, useRef } from "react";
import { SECTION_INFO } from "../tosim/info.data";

//

export default function HomePage() {
  return (
    <S.HomePageContainer>
      <Navbar />

      <S.Footer>
        <span>Footer</span>
      </S.Footer>
    </S.HomePageContainer>
  );
}
