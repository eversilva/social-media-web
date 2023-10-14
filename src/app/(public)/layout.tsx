import { Container } from "@radix-ui/themes";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return <Container size="1">{children}</Container>;
}
