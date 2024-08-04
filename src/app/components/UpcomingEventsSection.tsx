import { Box, Typography } from "@mui/material";
import EventCalender from "./events/EventsCalendar";

export default function UpcomingEventsSection() {
  return (
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
  );
}
