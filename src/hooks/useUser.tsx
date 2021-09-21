import { useRecoilState, selector } from "recoil";
import { userAtom } from "src/atoms/auth";
import * as authService from "@services/auth";

function useUser() {
  const [me, setMe] = useRecoilState(userAtom);

  const login = async (command: authService.ILoginValues) => {
    const res = await authService.login(command);
    if (res) {
      setMe(res);
    }
  };

  const logout = async () => {
    await authService.logout();
    setMe(null);
  };

  return {
    me,
    setMe,
    login,
    logout,
  };
}

export default useUser;
