"use client";

import React from "react";
import { Theme } from "@radix-ui/themes";
import useTheme from "@/hooks/useTheme";

type Props = {
  children: React.ReactNode;
};

const PublicRouteTemplate = ({ children }: Props) => {
  const { selectedTheme } = useTheme();

  return (
    <Theme appearance={selectedTheme} accentColor="iris">
      {children}
    </Theme>
  );
};

export default PublicRouteTemplate;
