import { z } from "zod";

export const CreateGatheringFormSchema = z.object({
  name: z.string().min(1, { message: "이름을 입력해주세요." }),
  location: z.string(),
  image: z.string().min(1, { message: "이미지를 입력해주세요." }),
  type: z.string().min(1, { message: "서비스를 선택해주세요." }),
  subType: z.string().min(1, { message: "서브서비스를 선택해주세요." }),
  dateTime: z.string().min(1, { message: "날짜와 시간을 입력해주세요." }),
  registrationEnd: z
    .string()
    .min(1, { message: "등록 마감 시간을 입력해주세요." }),
  capacity: z
    .number({
      message: "모임 정원을 입력해주세요.",
    })
    .refine(val => val >= 5 && val <= 20, {
      message: "최소 5명 이상 최대 20명 이하 입력해주세요.",
    }),
});
