import { Box, CssBaseline, Stack } from "@mui/material";
import { ReactNode } from "react";
import NavigationBar from "./NavigationBar";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <NavigationBar />
      <Box component="main" sx={{ p: 3 }}>
        {children}
      </Box>
    </Box>
  );
}
