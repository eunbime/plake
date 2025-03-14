"use client";

import { useForm } from "react-hook-form";

import LoginJoinLayout from "@/components/layout/LoginJoinLayout";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

interface IFormInput {
  name: string;
  email: string;
  company: string;
  password: string;
  passwordConfirm: string;
}

const JOIN_INPUTS = [
  {
    id: "name",
    type: "text",
    label: "이름",
    placeholder: "이름을 입력해주세요.",
  },
  {
    id: "email",
    type: "email",
    label: "아이디",
    placeholder: "이메일을 입력해주세요.",
  },
  {
    id: "company",
    type: "text",
    label: "회사명",
    placeholder: "회사명을 입력해주세요.",
  },
  {
    id: "password",
    type: "password",
    label: "비밀번호",
    placeholder: "비밀번호를 입력해주세요.",
  },
  {
    id: "passwordConfirm",
    type: "password",
    label: "비밀번호 확인",
    placeholder: "비밀번호를 다시 한 번 입력해주세요.",
  },
] as const;

const Page = () => {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };

  return (
    <LoginJoinLayout page="join">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        {JOIN_INPUTS.map(input => (
          <Input
            {...register(input.id)}
            key={input.id}
            id={input.id}
            type={input.type}
            label={input.label}
            disabled={false}
            placeholder={input.placeholder}
          />
        ))}
        <Button
          variant={"purple"}
          type="submit"
          className="mb-6 mt-10 h-[40px] text-sm font-semibold md:text-base"
          aria-label="join-btn"
        >
          회원가입
        </Button>
      </form>
    </LoginJoinLayout>
  );
};

export default Page;
