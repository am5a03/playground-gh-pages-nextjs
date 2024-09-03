"use client";

import localFont from "@next/font/local";
import { ThemeProvider, createTheme, useMediaQuery } from "@mui/material";
import React, { useMemo } from "react";

const googleSans = localFont({
  src: [
    {
      path: "../../public/fonts/GoogleSansDisplay-Regular-v1.27.ttf",
      weight: "normal",
    },
    {
      path: "../../public/fonts/GoogleSansDisplay-Medium-v1.27.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/GoogleSansDisplay-MediumItalic-v1.27.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/GoogleSansDisplay-Bold-v1.27.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/GoogleSansDisplay-BoldItalic-v1.27.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});

export function Providers({ children }: { children: React.ReactNode }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useMemo(
    () =>
      createTheme({
        spacing: 2,
        typography: {
          fontFamily: googleSans.style.fontFamily,
        },
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
          primary: {
            main: "#D9B487",
          },
          secondary: {
            main: "#87D9B4",
          },
          background: {
            default: "#333333",
          },
          // @ts-ignore
          tertiary: {
            main: "#B487D9",
            light: "#E9DB5D",
            dark: "#A29415",
            contrastText: "#242105",
          },
        },
      }),
    [prefersDarkMode]
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
