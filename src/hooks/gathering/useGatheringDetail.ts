import { QueryClient, useQuery } from "@tanstack/react-query";

import { GatheringType, IGathering } from "@/types/gathering";

const initialData: IGathering = {
  id: 0,
  teamId: "",
  name: "",
  type: GatheringType.MINDFULNESS,
  location: "",
  dateTime: "",
  registrationEnd: "",
  capacity: 0,
  participantCount: 0,
  image: "",
  createdBy: 0,
  canceledAt: null,
};

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
      initialData,
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
      initialData,
    });
  } catch (error) {
    throw error;
  }
};
