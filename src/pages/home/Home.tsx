import _ from "lodash";
import * as S from "./Home.style";
import DefaultLayout from "src/layouts/DefaultLayout";

import useUser from "@hooks/useUser";
import MarkdownRenderer from "@components/MarkdownRenderer";

function HomePage() {
  const { me } = useUser();

  return (
    <DefaultLayout>
      <S.Wrapper>
        <S.Banner>
          <h1>Hinu</h1>
          {me && <h2>{me?.email}님, </h2>}

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

export default HomePage;
