import useNavbar from "@hooks/useNavbar";
import Link from "next/link";
import * as S from "./Navbar.style";

export default function Navbar() {
  const { hideNavbar } = useNavbar();

  return (
    <S.Navigation hideNavbar={hideNavbar}>
      <Link href="#">하루하늘</Link>
      <Link href="#">메뉴1</Link>
      <Link href="#">메뉴2</Link>
      <Link href="#">메뉴3</Link>
    </S.Navigation>
  );
}
