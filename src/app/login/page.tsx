"use client";

import { useForm } from "react-hook-form";

import LoginJoinLayout from "@/components/layout/LoginJoinLayout";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

interface IFormInput {
  email: string;
  password: string;
}
const Page = () => {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => console.log(data);

  return (
    <LoginJoinLayout pageTitle="login">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <Input
          {...register("email")}
          id="email"
          type="email"
          label="아이디"
          required
          disabled={false}
          placeholder="이메일을 입력해주세요."
        />
        <Input
          {...register("password")}
          id="password"
          type="password"
          label="비밀번호"
          required
          disabled={false}
          placeholder="비밀번호를 입력해주세요."
        />
        <Button
          variant={"purple"}
          type="submit"
          className="mb-6 mt-10 text-sm font-semibold md:text-base"
          aria-label="login-btn"
        >
          로그인
        </Button>
      </form>
    </LoginJoinLayout>
  );
};

export default Page;
