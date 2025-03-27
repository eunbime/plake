import { IGathering } from ".";

export interface IMyGathering extends IGathering {
  joinedAt: string;
  isCompleted: boolean;
  isReviewed: boolean;
}

export interface StatusProps {
  label: string;
  className: string;
  icon?: React.ReactNode;
}

export interface ButtonProps {
  label: string;
  variant: "purple" | "purple-outline";
  onClick: () => void;
}

export interface IMyGatheringFilterParams {
  completed?: "true" | "false";
  reviewed?: "true" | "false";
  limit?: string;
  offset?: string;
  sortBy?: "dateTime" | "registrationEnd" | "joinedAt";
  sortOrder?: "asc" | "desc";
}
