import { Box, Typography } from "@mui/material";

export default function HomeBanner() {
  return (
    <Box
      component="main"
      height="100vh"
      width="100%"
      mx="auto"
      p="4px"
      display="flex"
      alignItems="center"
      sx={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('header_background.jpg')`,
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
          <Typography textAlign="center" variant="h6">
            We are a volunteer-run, community-driven official chapter of
            Google's worldwide developer network, known as Google Developer
            Groups (GDGs). We are an open, inclusive community of over 100
            members focused on developer success.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
