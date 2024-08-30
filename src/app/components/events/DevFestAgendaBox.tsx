"use client";

import { roomMapper, sessionMapper, speakerMapper } from "@/app/data/mappers";
import {
  Room,
  Session,
  SessionizeAPIResponse,
  Speaker,
} from "@/app/data/types";
import { useRequest } from "ahooks";

const SESSIONIZE_API_URL = "https://sessionize.com/api/v2/cy68ckxy/view/All";

const fetchSessions = async () => {
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
    return "";
  }
};

export default function DevFestAgendaBox() {
  const { data, error, loading } = useRequest(fetchSessions, {
    cacheKey: "agenda",
    cacheTime: 300000,
    staleTime: 300000,
  });

  return <></>;
}
