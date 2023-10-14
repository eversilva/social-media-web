"use client";
import React, { useEffect } from "react";
import { APP_ROUTES } from "@/config/app-routes";
import { useRouter } from "next/navigation";
import { ThemeProvider } from "@/contexts/Theme";

type Props = {
  children: React.ReactNode;
};

const PrivateRoutes = ({ children }: Props) => {
  const { push } = useRouter();

  const isUserAuthenticate = true;

  useEffect(() => {
    if (!isUserAuthenticate) {
      push(APP_ROUTES.public.app);
    }
  }, [isUserAuthenticate, push]);

  return (
    <React.Fragment>
      {!isUserAuthenticate && null}
      {isUserAuthenticate && children}
    </React.Fragment>
  );
};

export default PrivateRoutes;
