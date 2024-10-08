import { Box, Container, Toolbar, Typography } from "@mui/material";
import EventCalender from "./components/events/EventsCalendar";
import DevFestPromoSection from "./components/events/DevFestPromoSection";
import TeamSection from "./components/team/TeamSection";
import HomeBanner from "./components/HomeBanner";
import UpcomingEventsSection from "./components/UpcomingEventsSection";
import DevFestVenueInfoBox from "./components/events/DevFestVenueInfoBox";
import DevFestAgendaBox from "./components/events/DevFestAgendaBox";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <UpcomingEventsSection />
      <DevFestPromoSection />
      <DevFestVenueInfoBox />
      <DevFestAgendaBox />
      <TeamSection />
    </>
  );
}
