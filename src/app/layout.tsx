"use client";

import PrivateRoutes from "@/components/common/PrivateRoutes";
import { checkIsPublicRoute } from "@/helpers/check-is-public-route";
import { Roboto } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  const pathname = usePathname();
  const isPublicRoute = checkIsPublicRoute(pathname);

  return (
    <html lang="pt-br" className={roboto.className} suppressHydrationWarning>
      <body>
        {isPublicRoute ? children : <PrivateRoutes>{children}</PrivateRoutes>}
      </body>
    </html>
  );
}
