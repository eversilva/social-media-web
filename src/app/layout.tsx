"use client";

import PrivateRoutes from "@/components/common/PrivateRoutes";
import { ThemeProvider } from "@/contexts/Theme";
import { checkIsPublicRoute } from "@/helpers/check-is-public-route";
import PrivateRouteTemplate from "@/template/PrivateRoute";
import PublicRouteTemplate from "@/template/PublicRoute";
import { usePathname } from "next/navigation";
import { Roboto } from "next/font/google";
const font = Roboto({ subsets: ["latin"], weight: "400" });
import "@radix-ui/themes/styles.css";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  const pathname = usePathname();

  const isPublicRoute = checkIsPublicRoute(pathname);

  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider>
          {isPublicRoute && (
            <PublicRouteTemplate>{children}</PublicRouteTemplate>
          )}
          {!isPublicRoute && (
            <PrivateRoutes>
              <PrivateRouteTemplate>{children}</PrivateRouteTemplate>
            </PrivateRoutes>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
