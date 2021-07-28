import React from "react";
import * as S from "./WildGeese.style";
import useCurrentSection from "@hooks/useCurrentSection";

const DATA = [
  {
    content: `You do not have to be good.\nYou do not have to walk on your knees\nfor a hundred miles through the desert repenting.`,
  },
  {
    content: `You only have to let the soft animal of your body\nlove what it loves.\nTell me about despair, yours, and I will tell you mine.\n`,
  },
  { content: `` },
  { content: `` },
];

function WildGeese() {
  const { currentRatio, currentSection } = useCurrentSection("poem", 4);
  console.log("^^^^currentSection", currentSection);

  return (
    <S.Container currentSection={currentSection}>
      {/* <h1>WildGeese</h1> */}

      <section className="poem">
        <article>
          <p>You do not have to be good.</p>
          <p>You do not have to walk on your knees</p>
          <p>for a hundred miles through the desert repenting.</p>
        </article>
        <img src={`./geese_${currentSection}.jpeg`} />
      </section>
      <section className="poem">
        <article>
          <p>You only have to let the soft animal of your body</p>
          <p>love what it loves.</p>
          <p>Tell me about despair, yours, and I will tell you mine.</p>
        </article>
      </section>
      <section className="poem">
        <article>
          <p>Meanwhile the world goes on.</p>
          <p>Meanwhile the sun and the clear pebbles of the rain</p>
          <p>are moving across the landscapes,</p>
          <p>over the prairies and the deep trees,</p>
          <p>the mountains and the rivers.</p>
          <p>Meanwhile the wild geese, high in the clean blue air,</p>
          <p>are heading home again.</p>
        </article>
      </section>
      <section className="poem">
        <article>
          <p>Whoever you are, no matter how lonely,</p>
          <p>the world offers itself to your imagination,</p>
          <p>calls to you like the wild geese, harsh and exciting -</p>
          <p>over and over announcing your place</p>
          <p>in the family of things.</p>
        </article>
      </section>
    </S.Container>
  );
}

export default WildGeese;
