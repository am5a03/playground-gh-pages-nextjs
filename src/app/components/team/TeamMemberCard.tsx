import { TeamMemberProps } from "@/app/team/teamData";
import { Avatar, Box, Stack, Typography } from "@mui/material";

export default function TeamMemberCard({
  name,
  title,
  avatar,
  company,
  bio,
  website,
}: TeamMemberProps) {
  return (
    <Stack
      gap={4}
      py={16}
      alignItems="center"
      justifyContent="center"
      maxWidth="250px"
    >
      <Avatar alt={name} src={avatar} sx={{ width: 96, height: 96 }} />
      <Typography textAlign="center" fontWeight={500}>
        {name}
      </Typography>
    </Stack>
  );
}
