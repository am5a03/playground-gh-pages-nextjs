"use client";
import { TeamMemberProps } from "@/app/team/teamData";
import {
  Avatar,
  Box,
  Button,
  ButtonBase,
  Stack,
  Typography,
} from "@mui/material";

export interface TeamMemberCardProps {
  member: TeamMemberProps;
  onClickMember: () => void;
}

export default function TeamMemberCard({
  member,
  onClickMember,
}: TeamMemberCardProps) {
  const { name, title, avatar, company, bio, website } = member;
  return (
    <Stack
      gap={4}
      py={16}
      alignItems="center"
      justifyContent="center"
      maxWidth="300px"
    >
      <Avatar alt={name} src={avatar} sx={{ width: 96, height: 96 }} />
      <ButtonBase onClick={onClickMember} component="div">
        <Typography
          textAlign="center"
          fontWeight={500}
          px={4}
          py={2}
          borderRadius={4}
        >
          {name}
        </Typography>
      </ButtonBase>
    </Stack>
  );
}
