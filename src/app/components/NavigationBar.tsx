"use client";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";

export default function NavigationBar() {
  // const navItems = ["Home", "About", "Contact"];
  const navItems = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Team",
      url: "/team",
    },
  ];

  return (
    <AppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <Box
              component="img"
              sx={{
                width: 300,
                height: 50,
              }}
              alt="GDG Burnaby logo"
              src="banner_logo.png"
            />
          </Box>
          <Box sx={{ display: "flex" }}>
            {navItems.map((navItem) => (
              <Link href={navItem.url} color="inherit" underline="none">
                <Button color="inherit">{navItem.title}</Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
