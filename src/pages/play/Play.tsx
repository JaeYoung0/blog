import React, { useEffect, useState } from "react";
import Link from "next/link";

import RSPGame from "./components/RSPGame";
import RotateGame from "./components/RotateGame";
import UpdownGame from "./components/UpdownGame";
import IntervalGame from "./components/IntervalGame";
import Paging from "./components/Paging";

import WildGeese from "./components/WildGeese";

function Play() {
  return (
    <>
      {/* <RSPGame /> */}
      {/* <RotateGame /> */}
      {/* <UpdownGame /> */}
      {/* <IntervalGame /> */}
      {/* <Paging /> */}
      <WildGeese />
    </>
  );
}

export default Play;
