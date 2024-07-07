import { Box, CssBaseline, Stack, Toolbar, Typography } from "@mui/material";
import { ReactNode } from "react";
import NavigationBar from "./NavigationBar";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <Box display="flex" flexDirection="column">
      <CssBaseline />
      <NavigationBar />
      <Toolbar />
      {children}
    </Box>
  );
}
