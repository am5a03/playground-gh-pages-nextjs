"use client";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

export default function NavigationBar() {
  const navItems = ["Home", "About", "Contact"];

  return (
    <AppBar component="nav" color="primary">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => {}}
          sx={{ mr: 2, display: { sm: "none" } }}
        />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          GDGBurnaby
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
