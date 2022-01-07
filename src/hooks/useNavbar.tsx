import { useEffect, useState } from "react";

function useNavbar() {
  const navbarHeight = 45;
  const [hideNavbar, setHideNavbar] = useState(false);

  useEffect(() => {
    const handleNavbar = () => {
      if (window.pageYOffset > navbarHeight) setHideNavbar(true);
      if (window.pageYOffset < navbarHeight) setHideNavbar(false);
    };
    document.addEventListener("scroll", handleNavbar);

    () => {
      document.removeEventListener("scroll", handleNavbar);
    };
  }, []);

  return {
    hideNavbar,
  };
}

export default useNavbar;
