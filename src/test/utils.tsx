import "@testing-library/jest-dom";
import { ReactElement, ReactNode } from "react";
import { render, RenderOptions } from "@testing-library/react";

type Props = {
  children: ReactNode;
};

const AllTheProviders = ({ children }: Props) => {
  return children;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";

export { customRender as render };
