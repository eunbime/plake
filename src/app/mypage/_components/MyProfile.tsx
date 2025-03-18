import Image from "next/image";

import Avatar from "@/components/common/Avatar";
import { IUser } from "@/types/user";

const mockUser: IUser = {
  teamId: 1,
  id: 123,
  email: "user@exaasdfasdfasdfasdmple.com",
  name: "홍길동",
  companyName: "코드잇",
  image: "/images/avator_default.png",
  createdAt: "2025-03-17T02:20:53.293Z",
  updatedAt: "2025-03-17T02:20:53.293Z",
};

interface MyProfileProps {
  user?: IUser;
}

const MyProfile = ({ user = mockUser }: MyProfileProps) => {
  const profileInfo = [
    { label: "company.", value: user.companyName },
    { label: "E-mail.", value: user.email },
  ];

  return (
    <section className="overflow-hidden rounded-3xl border-2 border-gray-200">
      <div className="relative">
        <div className="relative flex h-[65px] items-center justify-between bg-purple-300 px-6">
          <h2 className="z-10 mt-[-6px] text-lg font-semibold">내 프로필</h2>
          <Image
            className="absolute bottom-2 left-1/2 -translate-x-1/3 sm:left-2/3 sm:-translate-x-1/2"
            src="/images/profile-background.png"
            alt="background-image"
            width={158}
            height={47}
            style={{ width: "158px", height: "47px" }}
          />
          <button className="z-10">
            <Image
              src="/images/edit-button.png"
              alt="수정"
              width={32}
              height={32}
            />
          </button>
        </div>
        <div className="absolute bottom-2 w-full border-b-2 border-purple-400 px-6"></div>
      </div>

      <div className="flex h-[109px] gap-3 bg-white px-6">
        <div className="mt-[-16px]">
          <Avatar size={"large"} type={"editable"} />
        </div>
        <div>
          <p className="mb-2 mt-1 truncate font-semibold">{user.name}</p>
          <dl className="space-y-1">
            {profileInfo.map((info, index) => (
              <div key={index} className="flex flex-wrap">
                <dt className="w-[72px] text-left text-sm font-semibold text-gray-800">
                  {info.label}
                </dt>
                <dd className="w-[calc(100%-72px)] truncate text-sm text-gray-700">
                  {info.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
