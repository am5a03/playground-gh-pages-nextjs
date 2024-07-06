"use client";

import { ThemeProvider, createTheme, useMediaQuery } from "@mui/material";
import React, { useMemo } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useMemo(
    () =>
      createTheme({
        spacing: 2,
        typography: {
          fontFamily: "Open Sans, Arial",
        },
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
