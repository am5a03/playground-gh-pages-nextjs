"use client";

import { roomMapper, sessionMapper, speakerMapper } from "@/app/data/mappers";
import {
  Room,
  Session,
  SessionizeAPIResponse,
  Speaker,
} from "@/app/data/types";
import { Box, Grid, Typography } from "@mui/material";
import { useRequest } from "ahooks";
import SessionCard from "../SessionCard";

const SESSIONIZE_API_URL = "https://sessionize.com/api/v2/cy68ckxy/view/All";

const fetchSessions = async (): Promise<Session[]> => {
  try {
    const response = await fetch(SESSIONIZE_API_URL);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json: SessionizeAPIResponse = await response.json();

    // Mapping rooms
    const roomsMap: { [id: number]: Room } = {};
    json.rooms.forEach((room) => {
      roomsMap[room.id] = roomMapper(room);
    });

    const speakersMap: { [id: string]: Speaker } = {};
    json.speakers.forEach((speaker) => {
      speakersMap[speaker.id] = speakerMapper(speaker);
    });

    const sessions: Session[] = [];
    json.sessions.forEach((session) => {
      const room = roomsMap[session.roomId];
      const speakers = session.speakers.map((id) => speakersMap[id]);
      sessions.push(sessionMapper(session, room, speakers));
    });

    return sessions;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export default function DevFestAgendaBox() {
  const { data, error, loading } = useRequest<Session[], any[]>(fetchSessions, {
    cacheKey: "agenda",
    cacheTime: 300000,
    staleTime: 300000,
  });

  return loading || error ? (
    <></>
  ) : (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      alignSelf="center"
      bgcolor="tertiary.main"
    >
      <Box
        my={16}
        width="70%"
        flexDirection="column"
        alignSelf="center"
        alignItems="center"
        alignContent="center"
        justifyContent="center"
      >
        <Typography
          fontWeight={500}
          variant="h4"
          alignSelf="center"
          mb={16}
          textAlign="center"
        >
          Agenda
        </Typography>
        <Grid
          justifyContent="center"
          container
          gap={4}
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {data?.map((session) => (
            <SessionCard key={session.id} session={session} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
