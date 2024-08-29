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
      bgcolor="primary.main"
      pb={32}
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
    </Box>
  );
}
