import GatheringDetailInformation from "@/components/gathering-detail/GatheringInformation";
import GatheringImage from "@/components/gathering-detail/GathetingImage";

const GatheringInformation = () => {
  return (
    <section className="flex w-full flex-col gap-10 md:flex-row">
      <GatheringImage />
      <GatheringDetailInformation />
    </section>
  );
};

export default GatheringInformation;
