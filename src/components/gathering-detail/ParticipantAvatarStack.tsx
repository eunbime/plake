import Avatar from "@/components/common/Avatar";
import { useParticipants } from "@/hooks/gathering/useParticipants";

interface IParticipantAvatarStackProps {
  id: string;
}

const ParticipantAvatarStack = ({ id }: IParticipantAvatarStackProps) => {
  const { data } = useParticipants(id);

  const slicedData = data.slice(0, 4);

  return (
    <div className="flex -space-x-3">
      {slicedData.map(({ User }) => (
        <Avatar
          key={User.id}
          type="default"
          size="small"
          imgPath={User.image ?? ""}
        />
      ))}
      {data.length > 4 && (
        <div className="z-10 flex h-[25px] w-[25px] items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-700">
          +{data.length - 4}
        </div>
      )}
    </div>
  );
};

export default ParticipantAvatarStack;
