import { Session } from "@/app/data/types";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";

interface Props {
  session: Session;
}
export default function SessionCard({ session }: Props) {
  const startTime = dayjs(session.startsAt).format("h:mm a");
  const endTime = dayjs(session.endsAt).format("h:mm a");
  return (
    <Card sx={{ width: 320 }}>
      <CardContent>
        <Typography>
          {startTime} - {endTime}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {session.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Speaker:{" "}
          {session.speakers.map((speaker) => speaker.fullName).join(",")}
        </Typography>
        <Box gap={2} display="flex" flexDirection="row" paddingTop={4}>
          <Chip label={session.room.name} />
        </Box>
      </CardContent>
    </Card>
  );
}
