"use client";

import { useForm } from "react-hook-form";

import LoginJoinLayout from "@/components/layout/LoginJoinLayout";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { JOIN_INPUTS } from "@/constants/loginJoin";

interface IFormInput {
  name: string;
  email: string;
  company: string;
  password: string;
  passwordConfirm: string;
}

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
