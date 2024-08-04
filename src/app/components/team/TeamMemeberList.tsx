"use client";
import { TeamMemberProps } from "@/app/team/teamData";
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@material-ui/icons/Close";
import TeamMemberCard from "./TeamMemberCard";
import { useState } from "react";

interface TeamMemberListProps {
  members: TeamMemberProps[];
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  padding: 16,
};

export default function TeamMemberList({ members }: TeamMemberListProps) {
  const [modalMember, setModalMember] = useState<TeamMemberProps | null>(null);
  const [open, setOpen] = useState(false);
  const handleOpen = (member: TeamMemberProps) => {
    setOpen(true);
    setModalMember(member);
  };
  const handleClose = () => setOpen(false);
  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {members.map((member, index) => (
          <Grid
            display="flex"
            justifyContent="center"
            xs={2}
            sm={4}
            md={4}
            key={index}
          >
            <TeamMemberCard
              member={member}
              onClickMember={() => {
                handleOpen(member);
              }}
            />
          </Grid>
        ))}
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-member-label"
        aria-describedby="modal-member-description"
      >
        <Box sx={style}>
          <Box display="flex" justifyContent="flex-end">
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Stack alignItems="center" justifyContent="center" gap={4}>
            <Avatar
              alt={modalMember?.name}
              src={modalMember?.avatar}
              sx={{ width: 192, height: 192 }}
            />
            <Typography variant="h6" component="h2">
              {modalMember?.name}
            </Typography>
            <Typography>{modalMember?.company}</Typography>
            <Typography>{modalMember?.title}</Typography>
            <Box maxHeight={400} overflow="scroll">
              <Typography sx={{ mt: 2 }}>{modalMember?.bio}</Typography>
            </Box>
          </Stack>
        </Box>
      </Modal>
    </>
  );
}
