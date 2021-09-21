import CloudLayout from "src/layouts/CloudLayout";
import Input from "@components/Input";
import { css } from "@emotion/react";
import { useForm } from "react-hook-form";
import { PHONE_REGEXP, EMAIL_REGEXP } from "@constants/regexp";

import { ISignupValues, RegisterUser } from "src/services/auth";

function Signup() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
  } = useForm<ISignupValues>();

  const onSubmit = async (data: ISignupValues) => {
    try {
      const res = await RegisterUser(data);
      if (res) {
        alert(res.email);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CloudLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("email", {
            required: "이메일을 입력해주세요.",
            validate: (value) =>
              EMAIL_REGEXP.test(value) || "올바른 이메일을 입력해주세요.",
          })}
          type="text"
          name="email"
          placeholder="email"
          errorText={errors.email?.message}
        />
        <Input
          {...register("phone", {
            required: "휴대폰번호를 입력해주세요.",
            validate: (value) =>
              PHONE_REGEXP.test(value) || "올바른 휴대폰번호를 입력해주세요.",
          })}
          type="number"
          name="phone"
          placeholder="phone"
          errorText={errors.phone?.message}
        />
        <Input
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
            validate: (value) =>
              value.length >= 8 || "최소 8자 이상 입력해주세요.",
          })}
          type="password"
          name="password"
          placeholder="password"
          errorText={errors.password?.message}
        />
        <Input
          {...register("passwordCheck", {
            required: "비밀번호를 다시 입력해주세요.",
            validate: (value) =>
              value === getValues("password") ||
              "비밀번호를 다시 입력해주세요.",
          })}
          type="password"
          name="passwordCheck"
          placeholder="비밀번호를 다시 입력해주세요."
          errorText={errors.passwordCheck?.message}
        />{" "}
        <button
          type="submit"
          css={css`
            width: 100%;
            height: 5rem;
            margin-top: 5rem;
            background: linear-gradient(to right, #0898e1, #25cbef);
            border-radius: 10px;
            color: #ffffff;
            font-weight: bold;
          `}
        >
          Sign Up
        </button>
      </form>
    </CloudLayout>
  );
}

export default Signup;
