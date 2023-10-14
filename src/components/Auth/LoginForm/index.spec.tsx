import { render } from "@/helpers/test-utils";
import LoginForm from ".";

describe("Login Form", () => {
  it("should render title", () => {
    const { getByText } = render(<LoginForm />);
  });
});
