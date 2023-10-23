"use client";

import { FormEvent, ChangeEvent, useState } from "react";
import AuthFormFeedback from "./Feedback";
import NextLink from "next/link";
import checkIsValidEmail from "@/helpers/check-is-valid-email";
import { fetchAuthLogin } from "@/data/auth";
import { useRouter } from "next/navigation";
import { Eye as EyeIcon, EyeOff as EyeOffIcon } from "lucide-react";
import { APP_ROUTES } from "@/config/app-routes";

const MINUMUM_PASSWORD_LENGTH = 6;

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const { push } = useRouter();

  const handleChangeFormInput = (event: ChangeEvent<HTMLInputElement>) => {
    setErrorMessage(null);
    const { value, name } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleValidateForm = () => {
    if (
      formData.password.length >= MINUMUM_PASSWORD_LENGTH &&
      checkIsValidEmail(formData.email)
    ) {
      return true;
    }
    return false;
  };

  const handleToggleShowPassword = () => {
    setIsShowPassword((prevState) => !prevState);
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { email, password } = formData;

    fetchAuthLogin({ email, password })
      .then(() => {
        push(APP_ROUTES.private.dashboard.root);
      })
      .catch((error) => {
        setErrorMessage(error?.message);
      });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h3>Acessar a conta</h3>
      <label htmlFor="email">E-mail</label>
      <input
        placeholder="example@gmail.com"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChangeFormInput}
      />

      <label htmlFor="password">Senha</label>
      <input
        placeholder="******"
        name="password"
        id="password"
        value={formData.password}
        onChange={handleChangeFormInput}
        type={isShowPassword ? "text" : "password"}
      />
      <button
        aria-label="toggleShowPassword"
        type="button"
        onClick={handleToggleShowPassword}
      >
        {isShowPassword && <EyeOffIcon />}
        {!isShowPassword && <EyeIcon />}
      </button>

      <div>
        <NextLink href="/register">Criar conta</NextLink>
        <button disabled={!handleValidateForm() || !!errorMessage}>
          Acessar
        </button>
      </div>
      <NextLink href="/forgot-password">Esqueceu a senha?</NextLink>

      {errorMessage && <AuthFormFeedback message={errorMessage} />}
    </form>
  );
};

export default LoginForm;
