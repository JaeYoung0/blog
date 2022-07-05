import styled from "@emotion/styled";

function Footer() {
  return (
    <StyledFooter>
      <p>Seoul, Korea</p>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;
  padding: 1rem;

  background: #000;

  p {
    text-align: right;
    font-size: 1rem;
    color: #e4e5e7;
  }
`;

export default Footer;
