import { Box, Container } from "@mui/material";

export default function EventCalender() {
  return (
    <Box width={{ md: 600, xs: 400 }}>
      <iframe
        src="https://lu.ma/embed/calendar/cal-TMtGuSNXHei1Y5y/events?"
        width="100%"
        height="450"
        frameBorder="0"
        style={{
          border: "1px solid #323232",
          borderRadius: "4px",
        }}
        allowFullScreen={false}
        aria-hidden="false"
        tabIndex={0}
      />
    </Box>
  );
}
