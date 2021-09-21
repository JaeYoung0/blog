import { forwardRef } from "react";
import { css } from "@emotion/react";
import { UseFormRegister } from "react-hook-form";
import * as S from "./Input.style";

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
  <S.Wrapper>
    <S.Input
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
    {errorText && <S.errorText>{errorText}</S.errorText>}
  </S.Wrapper>
));

export default Input;
