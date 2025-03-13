import { IUser } from "@/types/user";

export enum GatheringType {
  MINDFULNESS = "MINDFULNESS",
  DALLAEMFIT = "DALLAEMFIT",
  OFFICE_STRETCHING = "OFFICE_STRETCHING",
  WORKATION = "WORKATION",
}

export interface IGathering {
  id: number;
  teamId: string;
  name: string;
  type: GatheringType;
  location: string;
  dateTime: string;
  registrationEnd: string;
  capacity: number;
  participantCount: number;
  image: string | null;
  createdBy: number;
  canceledAt: string | null;
}

export interface IParticipant {
  User: IUser;
  userId: string;
  teamId: string;
  gatheringId: string;
  joinedAt: string;
}
