import styled from "@emotion/styled";

export const Wrapper = styled.article`
  .markdown-body {
    box-sizing: border-box;
    min-width: 20rem;
    max-width: 98rem;
    margin: 0 auto;
    padding: 4.5rem;
  }

  @media (max-width: 767px) {
    .markdown-body {
      padding: 1.5rem;
    }
  }

  .hljs-keyword {
    color: #cc99cd;
  }

  .hljs-class {
  }

  .hljs-built_in {
    color: #7ec699;
  }

  .hljs-string {
    color: #f08d49;
  }
`;
