import { useEffect, useState } from "react";
import Link from "next/link";

import RSPGame from "./components/RSPGame";
import RotateGame from "./components/RotateGame";
import UpdownGame from "./components/UpdownGame";
import IntervalGame from "./components/IntervalGame";
import Paging from "./components/Paging";

import WildGeese from "./components/WildGeese";
import StarsBg from "./components/StarsBg";
import Albums from "./components/Albums";
import CardScatter from "./components/CardScatter";

import Spinner from "@icons/Spinner";

function Play() {
  return (
    <>
      {/* <RSPGame /> */}
      {/* <RotateGame /> */}
      {/* <UpdownGame /> */}
      {/* <IntervalGame /> */}
      {/* <Paging /> */}
      {/* <WildGeese /> */}
      {/* <StarsBg /> */}
      {/* <Albums /> */}

      {/* <Spinner strokeColor="#2959ff" /> */}

      <CardScatter />
    </>
  );
}

export default Play;
