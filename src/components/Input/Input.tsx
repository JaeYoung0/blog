import { forwardRef } from "react";
import { css } from "@emotion/react";
import { MEDIA_QUERY_ARR } from "@styles/MediaQuery";
import { UseFormRegister } from "react-hook-form";

interface InputProps {
  type: string;
  name: string;
  placeholder?: string;
  errorText?: string;
}

const Input = forwardRef<
  HTMLInputElement,
  InputProps & ReturnType<UseFormRegister<any>>
>(({ type, name, placeholder, errorText, onChange }, ref) => (
  <div
    css={css`
      input {
        outline: none;
        border: none;
        width: 100%;
        background: transparent;
        border-bottom: 1px solid #ffffff;
        padding: 1rem 0rem;
        font-size: 1.4rem;

        &:focus {
          background: transparent;
        }
      }
      & ~ & {
        margin-top: 3rem;
      }

      ${MEDIA_QUERY_ARR("large")} {
        input {
          font-size: 2rem;
        }
        & ~ & {
          margin-top: 5rem;
        }
      }
    `}
  >
    <input
      ref={ref}
      type={type}
      name={name}
      placeholder={placeholder}
      autoComplete="off"
      onChange={onChange}
      css={css`
        ::placeholder {
          color: #ffffff;
        }
      `}
    />
    {errorText && (
      <p
        css={css`
          width: 100%;
          text-align: left;
          padding: 1rem 0rem;
          color: blue;
        `}
      >
        {errorText}
      </p>
    )}
  </div>
));

export default Input;
