import { Box, Container, Toolbar, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box
        component="main"
        height="100vh"
        width="100%"
        mx="auto"
        p="4px"
        display="flex"
        alignItems="center"
        sx={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('header_background.jpg')`,
          backgroundSize: "cover",
        }}
      >
        <Box
          maxWidth="md"
          display="flex"
          flexDirection="column"
          gap={4}
          alignSelf="center"
          mx="auto"
        >
          <Box component="section">
            <Typography variant="h2" textAlign="center" mb={4} fontWeight={700}>
              GDG Burnaby
            </Typography>
            <Typography textAlign="center">
              We are a volunteer-run, community-driven official chapter of
              Google's worldwide developer network, known as Google Developer
              Groups (GDGs). We are an open, inclusive community of over 100
              members focused on developer success.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        component="section"
        maxWidth="md"
        display="flex"
        flexDirection="column"
        gap={4}
        alignSelf="center"
        mx="auto"
      >
        <Typography
          variant="h4"
          textAlign="center"
          mb={4}
          mt={32}
          fontWeight={700}
        >
          Upcoming events
        </Typography>
        <Typography textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Box>
    </>
  );
}
