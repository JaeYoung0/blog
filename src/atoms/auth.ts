import { atom } from "recoil";
import { UserModel } from "@services/auth";

export const userAtom = atom<UserModel | null>({
  key: "userAtom",
  default: null,
});
