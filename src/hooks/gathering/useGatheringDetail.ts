import { QueryClient, useQuery } from "@tanstack/react-query";

import { Gathering } from "@/types/gathering";

export const getGathering = async (id: string): Promise<Gathering> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/gatherings/${id}`,
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const useGatheringDetail = (id: string) => {
  try {
    return useQuery<Gathering>({
      queryKey: ["gathering", id],
      queryFn: () => getGathering(id),
    });
  } catch (error) {
    throw error;
  }
};

export const prefetchGatheringDetail = async (
  id: string,
  queryClient: QueryClient,
) => {
  try {
    return queryClient.prefetchQuery<Gathering>({
      queryKey: ["gathering", id],
      queryFn: () => getGathering(id),
    });
  } catch (error) {
    throw error;
  }
};
