/* eslint-disable @next/next/no-img-element */
import _ from "lodash";
import * as S from "./Home.style";
import { useEffect } from "react";
import { css } from "@emotion/react";

import axios from "axios";
import DefaultLayout from "src/layouts/DefaultLayout";
//

export default function HomePage() {
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/api/roles")
  //     .then((res) => console.log("@@res", res));
  // }, []);
  return (
    <DefaultLayout>
      <S.Wrapper>
        <S.Banner>
          <h1>하루</h1>
          <h2>
            Try to love
            <br />
            all the questions{" "}
          </h2>
        </S.Banner>
      </S.Wrapper>
    </DefaultLayout>
  );
}
