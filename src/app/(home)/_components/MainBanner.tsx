import Image from "next/image";

const MainBanner = () => {
  return (
    <div className="relative h-[90vh] w-full overflow-hidden bg-gray-500">
      <Image
        src="/images/main_banner.jpg"
        alt="main_banner"
        fill
        objectFit="cover"
      />
      <div className="base-wrap absolute bottom-0 left-0 right-0 flex h-full flex-col justify-end gap-5 py-28 text-5xl font-extrabold text-white">
        <p>{"지친 일상을 잠시 멈추고"}</p>
        <p>
          {"함께 "}
          <span className="rounded-lg bg-black/40 px-4 py-2">{'"러닝"'}</span>
          {" 어떠세요?"}
        </p>
      </div>
    </div>
  );
};

export default MainBanner;
