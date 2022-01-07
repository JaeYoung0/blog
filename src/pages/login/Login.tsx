import Input from "@components/Input";
import { css } from "@emotion/react";
import { useRouter } from "next/router";
import CloudLayout from "src/layouts/CloudLayout";
import { useForm } from "react-hook-form";
import { ILoginValues } from "src/services/auth";
import useUser from "@hooks/useUser";

function Login() {
  const router = useRouter();

  const { register, handleSubmit } = useForm<ILoginValues>();
  const { login } = useUser();

  const onSubmit = async (data: ILoginValues) => {
    await login(data);
    router.replace("/");
  };

  return (
    <>
      <CloudLayout>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          <button>Login with Kakao</button>
          <button>Login with Google</button>
        </div>

        <p
          css={css`
            margin-top: 5rem;
            font-size: 1.4rem;
            color: #ffffff;
          `}
        >
          -OR-
        </p>

        <div
          css={css`
            margin-top: 2rem;
          `}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...register("email")}
              type="text"
              name="email"
              placeholder="email"
            />
            <Input
              {...register("password")}
              type="password"
              name="password"
              placeholder="password"
            />

            <button
              css={css`
                width: 100%;
                height: 5rem;

                border-radius: 10px;
                color: #ffffff;
                font-weight: bold;

                margin-top: 5rem;
                background: linear-gradient(to right, #0898e1, #25cbef);
              `}
            >
              Login
            </button>
          </form>

          <button
            onClick={() => router.push("/signup")}
            css={css`
              width: 100%;
              height: 5rem;

              border-radius: 10px;
              color: #ffffff;
              font-weight: bold;

              margin-top: 2rem;
              border: 2px solid #ffffff;
              background: transparent;
            `}
          >
            Sign Up
          </button>
        </div>
      </CloudLayout>
    </>
  );
}

export default Login;
