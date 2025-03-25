const GATHERING_ALL = ["gathering"] as const;
const REVIEW_ALL = ["review"] as const;

export const QUERY_KEYS = {
  GATHERING: {
    all: GATHERING_ALL,
    list: [...GATHERING_ALL, "list"] as const,
    popular: [...GATHERING_ALL, "list", "popular"] as const,
    deadline: [...GATHERING_ALL, "list", "deadline"] as const,
    detail: (gatheringId: string) =>
      [...GATHERING_ALL, { gatheringId }] as const,
    participants: (gatheringId: string) =>
      [...GATHERING_ALL, { gatheringId }, "participants"] as const,
  },
  REVIEW: {
    all: REVIEW_ALL,
    list: [...REVIEW_ALL, "list"] as const,
    listByGatheringId: (gatheringId: string) =>
      [...REVIEW_ALL, "list", { gatheringId }] as const,
  },
};
