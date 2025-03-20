import { CreateGatheringFormType } from "@/schemas/gatheringSchema";

export const GATHERING = {
  CAPACITY: {
    MIN: 5,
    MAX: 20,
  },
} as const;

export const GATHERING_FORM: CreateGatheringFormType = {
  name: "",
  location: "",
  image: new FormData(),
  type: "",
  dateTime: "",
  registrationEnd: "",
  capacity: 0,
} as const;

export const SERVICE_LIST = {
  OFFLINE: {
    value: "offline",
    name: "오프라인",
  },
  ONLINE: {
    value: "online",
    name: "온라인",
  },
} as const;

export const SUB_SERVICE_LIST = {
  OFFLINE: [
    { name: "운동", value: "DALLAEMFIT" },
    { name: "미식", value: "OFFICE_STRETCHING" },
  ],
  ONLINE: [
    { name: "게임", value: "MINDFULNESS" },
    { name: "코딩", value: "WORKATION" },
  ],
} as const;
