"use client";

import { useForm } from "react-hook-form";

import LoginJoinLayout from "@/components/layout/LoginJoinLayout";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { LOGIN_INPUTS } from "@/constants/loginJoin";

interface IFormInput {
  email: string;
  password: string;
}
const Page = () => {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => console.log(data);

  return (
    <LoginJoinLayout page="login">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        {LOGIN_INPUTS.map(input => (
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
          aria-label="login-btn"
        >
          로그인
        </Button>
      </form>
    </LoginJoinLayout>
  );
};

export default Page;
