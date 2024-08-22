import { Box, Container, Typography } from "@mui/material";
import TypeWriterText from "../common/TypeWriterText";

export default function DevFestPromoSection() {
  return (
    <Box
      id="devfest-2024"
      component="section"
      width="100%"
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
        DevFest 2024 by GDG Burnaby
      </Typography>
      <Box pl={32} maxWidth="md" display="flex" flexDirection="column" gap={4}>
        <TypeWriterText
          texts={[
            "Date: November 30, 2024",
            "Venue: Northeastern University - Vancouver",
          ]}
          fontSize="28px"
          speed={80}
        />
      </Box>
      <img
        src="devfest_header_2024.png"
        aria-label="devest_2024_header_banner"
        alt="devfest-2024"
        loading="lazy"
      />
      <Box
        maxWidth="md"
        alignSelf="center"
        display="flex"
        flexDirection="column"
        gap={4}
      >
        <Typography textAlign="justify" lineHeight="1.7" variant="body1" px={8}>
          Get ready for a tech adventure at DevFest Burnaby, where innovation
          meets fun! 🎉🚀 Join fellow enthusiasts for an unforgettable event
          featuring cutting-edge Google technologies like Firebase, TensorFlow,
          and Responsible AI. 🌐🔬
        </Typography>
        <Typography textAlign="justify" lineHeight="1.7" variant="body1" px={8}>
          Meet experts, connect with peers, and dive into the world of GenAI,
          Mobile, Web, Cloud, AR/VR, and IoT. 🌟✨ This isn't just a conference;
          it's a tech carnival at Northeastern University\'s Downtown Vancouver
          campus, designed to inspire, educate, and bring the community
          together. 🎪💼
        </Typography>
        <Typography textAlign="center" lineHeight="1.7" variant="h4" px={8}>
          Mark your calendar—DevFest is where magic and technology collide! 🎩🔮
        </Typography>
      </Box>
      <Box
        width="70%"
        alignSelf="center"
        display="flex"
        flexDirection="column"
        gap={4}
      >
        <Typography fontWeight={500}>
          Northeastern University - Vancouver (410 W Georgia St #1400,
          Vancouver, BC V6B 1Z3, Canada)
        </Typography>
        <Box flexDirection="row" display="flex">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.7739823863626!2d-123.1156822!3d49.280679799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486710a689ab2b5%3A0xae55dc25eb71e3d6!2sNortheastern%20University%20-%20Vancouver!5e0!3m2!1sen!2shk!4v1724340277511!5m2!1sen!2shk"
            width="100%"
            height="300"
            style={{
              border: 0,
            }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <Box>
            Accessible: Wheelchair seating is on the orchestra level. There are
            5 wheelchair spaces in the theatre. Parking: EasyPark can be found
            beneath the theatre itself. More information can be found . Public
            Transit: Stadium-Chinatown SkyTrain station: on Dunsmuir Street one
            block east of the theatre. Vancouver City Centre Canada Line
            station: on West Georgia Street five blocks west of the theatre Bike
            Share: There are several City of Vancouver Mobi bike-share station
            that are location at and nearby our venues. Please visit for more
            details.
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
