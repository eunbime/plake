import { z } from "zod";

import { emailRegex, nameRegex } from "./loginJoinSchema";

export const EditProfileSchema = z.object({
  company: nameRegex
    .min(1, { message: "회사명을 입력해주세요." })
    .max(20, { message: "20자 이하로 입력해주세요." }),
  email: emailRegex,
});
