"use server";

import { cookies } from "next/headers";

import { IUser } from "@/types/user";

const userCheckAction = async () => {
  const TOKEN = cookies().get("authToken")?.value;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auths/user`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      },
    );

    if (!response.ok) {
      throw new Error(await response.text());
    }

    // 유저 정보 받아와서 image null 처리
    const resUser: IUser = await response.json();
    resUser.image = resUser.image || "";
    return {
      status: true,
      user: resUser,
      error: "",
    };
  } catch (err) {
    return {
      status: false,
      user: null,
      error: `${(err as Error).message}`,
    };
  }
};

export default userCheckAction;
