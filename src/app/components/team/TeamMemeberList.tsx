import { TeamMemberProps } from "@/app/team/teamData";
import { Grid, IconButton, List, ListItem, ListItemText } from "@mui/material";
import { AddComment } from "@mui/icons-material";
import TeamMemberCard from "./TeamMemberCard";

interface TeamMemberListProps {
  members: TeamMemberProps[];
}

export default function TeamMemberList({ members }: TeamMemberListProps) {
  return (
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
          <TeamMemberCard {...member} />
        </Grid>
      ))}
    </Grid>
  );

  // return (
  //   <List>
  //     {members.map((member) => {
  //       return (
  //         <ListItem sx={{ justifyContent: "center" }}>
  //           <TeamMemberCard {...member} />
  //         </ListItem>
  //       );
  //     })}
  //   </List>
  // );
}
