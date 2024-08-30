import {
  Room,
  RoomDto,
  Session,
  SessionDto,
  Speaker,
  SpeakerDto,
} from "@/app/data/types";

export const roomMapper = (dto: RoomDto): Room => {
  return {
    id: dto.id,
    name: dto.name,
    sort: dto.sort,
  };
};

export const speakerMapper = (dto: SpeakerDto): Speaker => {
  return {
    id: dto.id,
    firstName: dto.firstName,
    lastName: dto.lastName,
    bio: dto.bio,
    tagLine: dto.tagLine,
    profilePicture: dto.profilePicture,
    isTopSpeaker: dto.isTopSpeaker,
    links: dto.links,
    fullName: dto.fullName,
  };
};

export const sessionMapper = (
  dto: SessionDto,
  room: Room,
  speakers: Speaker[]
): Session => {
  return {
    id: dto.id,
    title: dto.title,
    description: dto.description,
    startsAt: dto.startsAt,
    endsAt: dto.endsAt,
    isServiceSession: dto.isServiceSession,
    isPlenumSession: dto.isPlenumSession,
    speakers: speakers,
    categoryItems: dto.categoryItems,
    questionAnswers: dto.questionAnswers,
    room: room,
    liveUrl: dto.liveUrl,
    recordingUrl: dto.recordingUrl,
    status: dto.status,
    isInformed: dto.isInformed,
    isConfirmed: dto.isConfirmed,
  };
};
