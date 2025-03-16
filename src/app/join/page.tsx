"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import LoginJoinLayout from "@/components/layout/LoginJoinLayout";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { JOIN_INPUTS } from "@/constants/loginJoin";
import { JoinFormSchema } from "@/schemas/loginJoinSchema";

type TJoinForm = z.infer<typeof JoinFormSchema>;

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TJoinForm>({
    resolver: zodResolver(JoinFormSchema),
  });
  const onSubmit = (data: TJoinForm) => console.log(data);

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
            errorMsg={errors[input.id]?.message}
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
