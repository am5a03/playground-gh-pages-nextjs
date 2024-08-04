import { Box, Container, Toolbar, Typography } from "@mui/material";
import TeamMemberList from "./components/team/TeamMemeberList";
import { teamMembers } from "./team/teamData";
import EventCalender from "./components/events/EventsCalendar";

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
      <Box
        id="upcoming-events"
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
        <EventCalender />
      </Box>
      <Box
        id="team"
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
          Team
        </Typography>
        <TeamMemberList members={teamMembers} />
      </Box>
    </>
  );
}
