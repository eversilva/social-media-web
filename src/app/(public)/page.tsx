import { RocketIcon } from "@radix-ui/react-icons";
import { Button, Heading } from "@radix-ui/themes";
import NextLink from "next/link";

export default function Home() {
  return (
    <>
      <Heading>Home</Heading>
      <Button variant="classic" asChild>
        <NextLink href="/login">
          Go to login <RocketIcon />
        </NextLink>
      </Button>
    </>
  );
}
