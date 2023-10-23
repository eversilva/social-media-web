import NextLink from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homepage",
};

export default function Home() {
  return <NextLink href="/login">Go to login</NextLink>;
}
