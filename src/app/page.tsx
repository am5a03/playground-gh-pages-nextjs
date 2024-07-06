import { Box, Container, Toolbar, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Toolbar />
      <Box
        maxWidth="md"
        height="90vh"
        display="flex"
        flexDirection="column"
        gap={4}
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
        <Box component="section">
          <Typography
            variant="h4"
            textAlign="center"
            mb={4}
            mt={4}
            fontWeight={700}
          >
            Upcoming events
          </Typography>
        </Box>
      </Box>
    </>
  );
}
