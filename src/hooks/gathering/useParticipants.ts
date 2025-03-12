import { useQuery } from "@tanstack/react-query";

import { IParticipant } from "@/types/gathering";

export const getParticipants = async (id: string): Promise<IParticipant[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/gatherings/${id}/participants`,
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data ?? [];
};

export const useParticipants = (id: string) => {
  try {
    return useQuery<IParticipant[]>({
      queryKey: ["gathering", id, "participants"],
      queryFn: () => getParticipants(id),
      initialData: [],
    });
  } catch (error) {
    throw error;
  }
};
