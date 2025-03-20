"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import Avatar from "@/components/common/Avatar";
import Modal from "@/components/modals/Modal";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import useDebounce from "@/hooks/useDebounce";
import { EditProfileSchema } from "@/schemas/profileSchema";
import { IUser } from "@/types/user";

type TEditProfileForm = z.infer<typeof EditProfileSchema>;

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: IUser;
}

const EditProfileModal = ({ isOpen, onClose, user }: EditProfileModalProps) => {
  const [avatarImage, setAvatarImage] = useState(user.image);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
    reset,
  } = useForm<TEditProfileForm>({
    resolver: zodResolver(EditProfileSchema),
    defaultValues: {
      company: user.companyName,
      email: user.email,
    },
  });

  useEffect(() => {
    if (isOpen) {
      setAvatarImage(user.image);

      reset({
        company: user.companyName,
        email: user.email,
      });
    }
  }, [isOpen, user, setValue]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAvatarImage(URL.createObjectURL(file));
    }
  };

  const debouncedValidation = useDebounce(fieldName => {
    trigger(fieldName);
  }, 500);

  const onSubmit = (data: TEditProfileForm) => {
    // TODO: 프로필 업데이터 API 호출
    console.log("프로필 수정 데이터:", { avatarImage, ...data });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="프로필 수정하기">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-1 flex flex-col gap-6"
      >
        <div className="w-[56px]">
          <label htmlFor="image-upload" className="relative cursor-pointer">
            <Avatar size={"large"} type={"editable"} imgPath={avatarImage} />
            <input
              type="file"
              id="image-upload"
              accept="image/jpeg, image/png, image/gif, image/webp"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
        </div>

        <Input
          {...register("company")}
          label="회사"
          labelCustom="block text-base mb-3"
          type="text"
          id="companyName"
          placeholder="회사를 입력해주세요"
          errorMsg={errors.company?.message}
          onChange={e => {
            register("company").onChange(e);
            debouncedValidation("companyName");
          }}
        />

        <Input
          {...register("email")}
          label="이메일"
          labelCustom="block text-base mb-3"
          type="email"
          id="email"
          placeholder="이메일을 입력해주세요"
          errorMsg={errors.email?.message}
          onChange={e => {
            register("email").onChange(e);
            debouncedValidation("email");
          }}
        />

        <div className="flex gap-4">
          <Button
            variant="purple-outline"
            className="h-[44px] w-full"
            type="button"
            onClick={onClose}
          >
            취소
          </Button>
          <Button variant="purple" className="h-[44px] w-full" type="submit">
            수정하기
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default EditProfileModal;
