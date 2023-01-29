import React, { useEffect } from "react";

// unkown이면 타입에러 발생

type OtherAttributes = Record<string, any>;
type Props = React.HTMLProps<HTMLScriptElement> & {
  id: string;
  targetRef: React.MutableRefObject<HTMLDivElement | null>;
} & OtherAttributes;

function useScript({ id, targetRef, ...props }: Props) {
  useEffect(() => {
    if (!targetRef.current) return;

    // utterance의 경우 <script id="foo" /> 태그가 보이지 않고 바로 다른 iframe이 렌더링되기 때문에 script 중복생성 여부를 체크할 수 없다.
    if (document.getElementById(id)) return;

    const script = document.createElement("script");
    script.id = id;
    const keys = Object.keys(props);

    // 동기적으로 처리하고 넘어간다
    keys.forEach((key) => {
      script.setAttribute(key, props[key]);
    });

    targetRef.current.appendChild(script);
  }, [targetRef]);
}

export default useScript;
