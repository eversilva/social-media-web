import LoginForm from "@/components/Auth/Form";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

const Login = () => {
  return <LoginForm />;
};

export default Login;
