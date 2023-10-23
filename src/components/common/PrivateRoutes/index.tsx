"use client";

import React, { useEffect } from "react";
import { APP_ROUTES } from "@/config/app-routes";
import { useRouter } from "next/navigation";
import { checkIsAuthenticate } from "@/helpers/check-is-authenticate";

type Props = {
  children: React.ReactNode;
};

const PrivateRoutes = ({ children }: Props) => {
  const { push } = useRouter();

  const isUserAuthenticate = checkIsAuthenticate();

  useEffect(() => {
    if (!isUserAuthenticate) {
      push(APP_ROUTES.public.login);
    }
  }, [isUserAuthenticate, push]);

  return (
    <>
      {!isUserAuthenticate && null}
      {isUserAuthenticate && children}
    </>
  );
};

export default PrivateRoutes;
