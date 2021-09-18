import * as S from "./Hamburger.style";

interface Props {
  open: boolean;
  onClick: () => void;
}
function Hamburger({ open, onClick }: Props) {
  return (
    <>
      <S.HamburgerButton onClick={onClick}>
        <S.Line isOpened={open} />
      </S.HamburgerButton>
    </>
  );
}

export default Hamburger;
