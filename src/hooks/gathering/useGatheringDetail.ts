import { QueryClient, useQuery } from "@tanstack/react-query";

import { IGathering } from "@/types/gathering";

export const getGathering = async (id: string): Promise<IGathering> => {
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
    return useQuery<IGathering>({
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
    return queryClient.prefetchQuery<IGathering>({
      queryKey: ["gathering", id],
      queryFn: () => getGathering(id),
    });
  } catch (error) {
    throw error;
  }
};
