import { render } from "@/test/utils";
import LoginForm from ".";

describe("Login Form", () => {
  it("should render title", () => {
    const { getByText } = render(<LoginForm />);

    expect(getByText("Acessar a conta")).toBeInTheDocument();
  });
});
