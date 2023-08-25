import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";

interface TOCItem {
  type: "h1" | "h2" | "h3";
  content: string;
  id: string;
}

const TableOfContents = ({ children }: { children: React.ReactNode }) => {
  const [tocItems, setTocItems] = useState<TOCItem[]>([]);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const gatherTOC = (): TOCItem[] => {
      if (!contentRef.current) return [];
      const headings = Array.from(
        contentRef.current.querySelectorAll("h1, h2, h3")
      );
      return headings.map((heading) => {
        const type = heading.tagName.toLowerCase() as "h1" | "h2" | "h3";
        const content = heading.textContent || "";

        if (!heading.id) {
          heading.id = content.toLowerCase();
        }
        return {
          type,
          content,
          id: heading.id,
        };
      });
    };
    setTocItems(gatherTOC());
  }, [children]);

  const handleScrollTo =
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      const target = document.getElementById(id);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 65,
          behavior: "smooth",
        });
      }
    };

  return (
    <>
      <Wrapper>
        <p>[목차]</p>
        <ul>
          {tocItems.map((item, index) => (
            <li
              key={index}
              css={css`
                margin-left: (
                    item.type === "h1" ? 0: item.type === "h2" ? 20: 40
                  ) + "px";
              `}
            >
              <a href={`#${item.id}`} onClick={handleScrollTo(item.id)}>
                {item.content}
              </a>
            </li>
          ))}
        </ul>
      </Wrapper>
      <div ref={contentRef}>{children}</div>
    </>
  );
};

const Wrapper = styled.div`
  max-width:84rem;

  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #e4e5e7;

  p {
    color: #e4e5e7;
    font-size: 1.6rem;
    line-height: 1.5;
    margin-bottom:1rem;
  }

  ul {
    list-style: inside;
  }

  li{
    margin-bottom:1rem;
  }

  li::marker {
    color: #e4e5e7;
  }

  a {
    color: #e4e5e7;
    font-size: 1.6rem;
    line-height: 1.5;
  }

  @media (min-width: 1450px) {
    position: fixed;
    top: 25%;
    right: 0;
    /* 중앙 콘텐츠 너비 */
    width: calc(100vw - 84rem)
    margin: 0;

  }
`;

export default TableOfContents;
