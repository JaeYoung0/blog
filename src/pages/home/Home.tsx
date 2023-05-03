import _ from "lodash";
import * as S from "./Home.style";
import DefaultLayout from "src/layouts/DefaultLayout";
import Link from "next/link";

function HomePage() {
  return (
    <DefaultLayout>
      <S.Wrapper>
        <S.Banner>
          <h1>롤백가즈아</h1>
        </S.Banner>
      </S.Wrapper>

      <S.Menu>
        <Link href="/">
          <S.Button>이력서</S.Button>
        </Link>
        <Link href="/posts">
          <S.Button>포스트</S.Button>
        </Link>
      </S.Menu>
    </DefaultLayout>
  );
}

export default HomePage;
