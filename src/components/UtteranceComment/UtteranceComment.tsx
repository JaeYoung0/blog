import { useState } from "react";

function UtteranceComment() {
  // FIXME: loading state
  const [loading, setLoading] = useState(false);

  const loadUtterance = (el: HTMLDivElement | null) => {
    if (!el) return;

    const alreadyAppended =
      document.getElementsByClassName("utterances-frame").length !== 0;

    if (alreadyAppended) return;

    setLoading(true);
    const scriptEl = document.createElement("script");
    scriptEl.src = "https://utteranc.es/client.js";
    scriptEl.async = true;
    scriptEl.setAttribute("repo", "JaeYoung0/j.young-blog-frontend");
    scriptEl.setAttribute("issue-term", "pathname");
    scriptEl.setAttribute("theme", "github-dark");
    scriptEl.setAttribute("label", "blog-comment");
    scriptEl.crossOrigin = "anonymous";
    el.appendChild(scriptEl);

    setLoading(false);
  };

  if (loading) return <h1 style={{ color: "#fff" }}>loading...</h1>;

  return <div id="utterance-root" ref={loadUtterance} />;
}

export default UtteranceComment;
