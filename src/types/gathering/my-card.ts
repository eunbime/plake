import { IGathering } from ".";

export interface IMyGathering extends IGathering {
  joinedAt: string;
  isCompleted: boolean;
  isReviewed: boolean;
}

export interface StatusProps {
  label: string;
  className: string;
}

export interface ButtonProps {
  label: string;
  variant: "purple" | "purple-outline";
  onClick: () => void;
}

export interface MyCardItemProps {
  gathering: IMyGathering;
  direction: "mypage" | "reviews" | "gathering";
  statusProps: StatusProps[];
  buttonProps: ButtonProps;
}
