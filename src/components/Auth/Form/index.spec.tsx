import { fireEvent, getByPlaceholderText, render, screen } from "@/test/utils";
import LoginForm from ".";

describe("Login Form", () => {
  beforeEach(() => {
    render(<LoginForm />);
  });

  describe("Validations", () => {
    it("renders submit button disabled", () => {
      const { getByText } = screen;

      expect(getByText("Acessar")).toBeDisabled();
    });

    it("keeps submit button disabled when type a invalid e-mail", () => {
      const { getByPlaceholderText, getByText } = screen;

      const emailInput = getByPlaceholderText("example@gmail.com");
      const passwordInput = getByPlaceholderText("******");

      fireEvent.focus(emailInput);
      fireEvent.change(emailInput, {
        target: { value: "everson.gmail.com" },
      });

      fireEvent.focus(passwordInput);
      fireEvent.change(passwordInput, { target: { value: "123456" } });

      expect(getByText("Acessar")).toBeDisabled();
    });

    it("should enable the submit button when entering your e-mail and password", () => {
      const { getByPlaceholderText, getByText } = screen;

      const emailInput = getByPlaceholderText("example@gmail.com");
      const passwordInput = getByPlaceholderText("******");

      fireEvent.focus(emailInput);
      fireEvent.change(emailInput, {
        target: { value: "everson.barbosa@gmail.com" },
      });

      fireEvent.focus(passwordInput);
      fireEvent.change(passwordInput, { target: { value: "123456" } });

      expect(getByText("Acessar")).not.toBeDisabled();
    });

    it("should toggle visibility on input password", () => {
      const { getByPlaceholderText, getByRole } = screen;

      const togglePasswordButton = getByRole("button", {
        name: /toggleShowPassword/i,
      });
      const passwordInput = getByPlaceholderText("******");

      expect(passwordInput).toHaveAttribute("type", "password");

      fireEvent.click(togglePasswordButton);

      expect(passwordInput).toHaveAttribute("type", "text");

      fireEvent.click(togglePasswordButton);

      expect(passwordInput).toHaveAttribute("type", "password");
    });
  });

  describe("Flow links", () => {
    it("renders forgot password link", () => {
      const { getByText } = screen;

      expect(getByText("Esqueceu a senha?")).toHaveAttribute(
        "href",
        "/forgot-password"
      );
    });

    it("renders register user button", () => {
      const { getByText } = screen;

      expect(getByText("Criar conta")).toHaveAttribute("href", "/register");
    });
  });
});
