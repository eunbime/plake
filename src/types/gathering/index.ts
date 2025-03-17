import { IUser } from "@/types/user";

export enum GatheringType {
  MINDFULNESS = "MINDFULNESS",
  DALLAEMFIT = "DALLAEMFIT",
  OFFICE_STRETCHING = "OFFICE_STRETCHING",
  WORKATION = "WORKATION",
}

export interface IGathering {
  teamId: number;
  id: number;
  name: string;
  type: GatheringType;
  dateTime: string;
  registrationEnd: string;
  location: string;
  participantCount: number;
  capacity: number;
  image: string;
  createdBy: number;
  canceledAt: string | null;
}

export interface IParticipant {
  User: IUser;
  teamId: number;
  userId: number;
  gatheringId: number;
  joinedAt: string;
}

export interface IMyGathering extends IGathering {
  joinedAt: string;
  isCompleted: boolean;
  isReviewed: boolean;
}
