import { Box, Typography } from "@mui/material";
import TeamMemberList from "./TeamMemeberList";
import { teamMembers } from "@/app/team/teamData";

export default function TeamSection() {
  return (
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
  );
}
