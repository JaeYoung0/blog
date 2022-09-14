import React from "react";

import * as S from "./AnnotationLink.style";

type Props = {
  children: React.ReactNode;
  annotation: string;
  order: number;
};

/**
 * 1. annotation을 호버하면 관련 내용이 popover로 보인다.
 * 2. annotation이 걸려있는 영역의 맨 오른쪽의 위쪽에 [1], [2] 같은 형식으로 주석이 달렸음을 표시한다.
 * 3. [1], [2]로 표시된 주석을 클릭하면 최하단 주석모음 영역으로 스크롤 된다.
 * 4. 주석모음 영역에서 [1]을 클릭하면 본문의 [1]자리로 다시 스크롤되어 돌아온다.
 */
function AnnotationLink({ children, annotation, order }: Props) {
  return (
    <S.Container>
      {children}
      <S.Link>[{order}]</S.Link>
    </S.Container>
  );
}

export default AnnotationLink;

/**
 * TODO
 * [] AnnotationLink가 전체 본문에서 몇 번째 인가?
 * [] AnnotationLink에 할당된 key는 무엇인가?
 * ...
 */
