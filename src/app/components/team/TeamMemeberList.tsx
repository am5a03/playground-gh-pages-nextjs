"use client";
import { TeamMemberProps } from "@/app/team/teamData";
import {
  Box,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Modal,
  Typography,
} from "@mui/material";
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
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TeamMemberList({ members }: TeamMemberListProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
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
            <TeamMemberCard member={member} onClickMember={handleOpen} />
          </Grid>
        ))}
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
