const GATHERING_ALL = ["gathering"] as const;
const REVIEW_ALL = ["review"] as const;
const MYPAGE_ALL = ["mypage"] as const;

export const QUERY_KEYS = {
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
  MYPAGE: {
    all: MYPAGE_ALL,
    list: [...MYPAGE_ALL, "list"] as const,
  },
};
