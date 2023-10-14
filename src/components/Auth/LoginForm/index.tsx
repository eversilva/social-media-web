"use client";

import { FormEvent, ChangeEvent, useState } from "react";
import { EnterIcon, EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import {
  Button,
  Flex,
  Heading,
  IconButton,
  Link,
  Text,
  TextField,
} from "@radix-ui/themes";
import NextLink from "next/link";
import checkIsValidEmail from "@/helpers/check-is-valid-email";

const MINUMUM_PASSWORD_LENGTH = 6;

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleChangeFormInput = (event: ChangeEvent<HTMLInputElement>) => {
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
  };

  return (
    <Flex direction="column" gap="3" asChild>
      <form onSubmit={handleFormSubmit}>
        <Heading align="center">Acessar a conta</Heading>
        <Text as="label" htmlFor="email" weight="medium">
          E-mail
        </Text>
        <TextField.Root>
          <TextField.Input
            placeholder="example@gmail.com"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChangeFormInput}
          />
        </TextField.Root>

        <Flex direction="column" gap="1">
          <Text as="label" htmlFor="password" weight="medium">
            Senha
          </Text>
          <TextField.Root>
            <TextField.Input
              placeholder="******"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChangeFormInput}
              type={isShowPassword ? "name" : "password"}
            />
            <TextField.Slot>
              <IconButton
                type="button"
                radius="full"
                variant="ghost"
                onClick={handleToggleShowPassword}
              >
                {isShowPassword && <EyeClosedIcon />}
                {!isShowPassword && <EyeOpenIcon />}
              </IconButton>
            </TextField.Slot>
          </TextField.Root>
        </Flex>

        <Flex direction="row-reverse" justify="between">
          <Flex justify="end" gap="3">
            <Button variant="soft">Criar conta</Button>
            <Button variant="solid" disabled={!handleValidateForm()}>
              Acessar <EnterIcon />
            </Button>
          </Flex>
          <Link size="3" asChild>
            <NextLink href="/forgot-password">Esqueceu a senha?</NextLink>
          </Link>
        </Flex>
      </form>
    </Flex>
  );
};

export default LoginForm;
