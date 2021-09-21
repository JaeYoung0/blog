import axios from "axios";

export interface ISignupValues {
  email: string;
  phone: string;
  password: string;
  passwordCheck: string;
}

export interface RegisterResponse {
  status: string | number;
  email: string;
}

export const RegisterUser = async (command: ISignupValues) => {
  try {
    const { data } = await axios.post<RegisterResponse>(
      "http://localhost:8001/api/auth/register",
      command
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export interface ILoginValues {
  email: string;
  password: string;
}

export interface UserModel {
  id: number;
  email: string;
  phone: string;
}

export const login = async (command: ILoginValues) => {
  try {
    const { data } = await axios.post<UserModel>(
      "http://localhost:8001/api/auth/login",
      command,
      { withCredentials: true }
    );

    return data;
  } catch (error) {}
};

export const getMe = async () => {
  try {
    const { data } = await axios.get<UserModel>(
      "http://localhost:8001/api/auth/me",
      {
        withCredentials: true,
      }
    );
    return data;
  } catch (error) {}
};

export const logout = async () => {
  try {
    await axios.post("http://localhost:8001/api/auth/logout", "", {
      withCredentials: true,
    });
  } catch (error) {}
};
