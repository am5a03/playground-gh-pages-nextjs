export interface SessionDto {
  id: string;
  title: string;
  description: string;
  startsAt: string;
  endsAt: string;
  isServiceSession: boolean;
  isPlenumSession: boolean;
  speakers: string[];
  categoryItems: any[];
  questionAnswers: any[];
  roomId: number;
  liveUrl: string | null;
  recordingUrl: string | null;
  status: string;
  isInformed: boolean;
  isConfirmed: boolean;
}

export interface SpeakerDto {
  id: string;
  firstName: string;
  lastName: string;
  bio: string;
  tagLine: string;
  profilePicture: string;
  isTopSpeaker: boolean;
  links: any[];
  sessions: number[];
  fullName: string;
  categoryItems: any[];
  questionAnswers: any[];
}

export interface QuestionDto {
  id: string;
  text: string;
  sessionId: string;
  speakerId: string;
  createdAt: string;
  updatedAt: string;
  isAnswered: boolean;
  answer: string | null;
}

export interface CategoryDto {
  id: string;
  name: string;
  description: string;
  image: string;
  color: string;
  sessions: number[];
}

export interface RoomDto {
  id: number;
  name: string;
  sort: number;
}

export interface SessionizeAPIResponse {
  sessions: SessionDto[];
  speakers: SpeakerDto[];
  questions: QuestionDto[];
  categories: CategoryDto[];
  rooms: RoomDto[];
}

export interface Room {
  id: number;
  name: string;
  sort: number;
}

export interface Speaker {
  id: string;
  firstName: string;
  lastName: string;
  bio: string;
  tagLine: string;
  profilePicture: string;
  isTopSpeaker: boolean;
  links: any[];
  fullName: string;
}

export interface Session {
  id: string;
  title: string;
  description: string;
  startsAt: string;
  endsAt: string;
  isServiceSession: boolean;
  isPlenumSession: boolean;
  speakers: Speaker[];
  categoryItems: any[];
  questionAnswers: any[];
  room: Room;
  liveUrl: string | null;
  recordingUrl: string | null;
  status: string;
  isInformed: boolean;
  isConfirmed: boolean;
}
