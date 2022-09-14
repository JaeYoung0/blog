import AnnotationLink from "@components/AnnotationLink";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.div`
  min-height: 100vh;
  height: 100%;
  background: #fefefe;

  max-width: 60rem;
  margin: 0 auto;

  p {
    font-size: 1.6rem;
    line-height: 1.5;
  }

  p + p {
    margin-top: 10rem;
  }
`;

function test() {
  return (
    <Wrapper>
      <p>
        dolor sit amet consectetur adipisicing elit. Temporibus quo, tempora
        vitae assumenda nostrum aliquid doloribus atque quod pariatur
        laboriosam. Sapiente odit iusto facere itaque aliquam, nulla possimus
        sint natus
        <AnnotationLink order={1} annotation="1">
          Lorem ipsum,
        </AnnotationLink>
        explicabo a quia beatae veritatis sit molestiae recusandae assumenda
        laborum at veniam quaerat provident eius animi. Sint error eos earum?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
        quo, tempora vitae assumenda nostrum aliquid doloribus atque quod
        pariatur laboriosam. Sapiente odit iusto facere itaque aliquam, nulla
        possimus sint natus explicabo a quia beatae veritatis sit molestiae
        recusandae assumenda laborum at veniam quaerat provident eius animi.
        Sint error eos earum?sdsd
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
        quo, tempora vitae assumenda nostrum aliquid doloribus atque quod
        pariatur laboriosam. Sapiente odit iusto facere itaque aliquam, nulla
        possimus sint natus explicabo a quia beatae veritatis sit molestiae
        recusandae assumenda laborum at veniam quaerat provident eius animi.
        Sint error eos earum?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
        quo, tempora vitae assumenda nostrum aliquid doloribus atque quod
        pariatur laboriosam. Sapiente odit iusto facere itaque aliquam, nulla
        possimus sint natus explicabo a quia beatae veritatis sit molestiae
        recusandae assumenda laborum at veniam quaerat provident eius animi.
        Sint error eos earum?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
        quo, tempora vitae assumenda nostrum aliquid doloribus atque quod
        pariatur laboriosam. Sapiente odit iusto facere itaque aliquam, nulla
        possimus sint natus explicabo a quia beatae veritatis sit molestiae
        recusandae assumenda laborum at veniam quaerat provident eius animi.
        Sint error eos earum?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
        quo, tempora vitae assumenda nostrum aliquid doloribus atque quod
        pariatur laboriosam. Sapiente odit iusto facere itaque aliquam, nulla
        possimus sint natus explicabo a quia beatae veritatis sit molestiae
        recusandae assumenda laborum at veniam quaerat provident eius animi.
        Sint error eos earum?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
        quo, tempora vitae assumenda nostrum aliquid doloribus atque quod
        pariatur laboriosam. Sapiente odit iusto facere itaque aliquam, nulla
        possimus sint natus explicabo a quia beatae veritatis sit molestiae
        recusandae assumenda laborum at veniam quaerat provident eius animi.
        Sint error eos earum?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
        quo, tempora vitae assumenda nostrum aliquid doloribus atque quod
        pariatur laboriosam. Sapiente odit iusto facere itaque aliquam, nulla
        possimus sint natus explicabo a quia beatae veritatis sit molestiae
        recusandae assumenda laborum at veniam quaerat provident eius animi.
        Sint error eos earum?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
        quo, tempora vitae assumenda nostrum aliquid doloribus atque quod
        pariatur laboriosam. Sapiente odit iusto facere itaque aliquam, nulla
        possimus sint natus explicabo a quia beatae veritatis sit molestiae
        recusandae assumenda laborum at veniam quaerat provident eius animi.
        Sint error eos earum?
      </p>
    </Wrapper>
  );
}

export default test;
