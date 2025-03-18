export const GATHERING = {
  CAPACITY: {
    MIN: 5,
    MAX: 20,
  },
} as const;

export const GATHERING_FORM = {
  name: "",
  location: "",
  image: "",
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
