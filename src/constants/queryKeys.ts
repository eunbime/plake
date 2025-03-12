interface IQueryKeys {
  GATHERING: {
    all: readonly ["gathering"];
    detail: (id: string) => readonly [...["gathering"], string];
    participants: (
      id: string,
    ) => readonly [...["gathering"], string, "participants"];
  };
  REVIEW: {
    all: readonly ["review"];
    list: readonly ["review", "list"];
  };
}

const createQueryKeys = (): IQueryKeys => {
  const keys = {
    GATHERING: {
      all: ["gathering"] as const,
      list: [...QUERY_KEYS.GATHERING.all, "list"] as const,
      detail: (id: string) => [...QUERY_KEYS.GATHERING.all, id] as const,
      participants: (id: string) =>
        [...QUERY_KEYS.GATHERING.all, id, "participants"] as const,
    },
    REVIEW: {
      all: ["review"] as const,
      list: [...QUERY_KEYS.REVIEW.all, "list"] as const,
    },
  } as const;

  return keys;
};

export const QUERY_KEYS = createQueryKeys();
