const AUTH_ALL = ["auth"] as const;
const GATHERING_ALL = ["gathering"] as const;
const REVIEW_ALL = ["review"] as const;

export const QUERY_KEYS = {
  AUTH: {
    all: AUTH_ALL,
  },
  GATHERING: {
    all: GATHERING_ALL,
    list: [...GATHERING_ALL, "list"] as const,
    detail: (id: string) => [...GATHERING_ALL, id] as const,
    participants: (id: string) =>
      [...GATHERING_ALL, id, "participants"] as const,
  },
  REVIEW: {
    all: REVIEW_ALL,
    list: [...REVIEW_ALL, "list"] as const,
  },
};
