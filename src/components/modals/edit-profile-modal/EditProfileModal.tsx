"use client";

import React, { useEffect, useState } from "react";

import Avatar from "@/components/common/Avatar";
import Modal from "@/components/modals/Modal";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { IUser } from "@/types/user";

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: IUser;
}

const EditProfileModal = ({ isOpen, onClose, user }: EditProfileModalProps) => {
  const [avatarImage, setAvatarImage] = useState(user.image);
  const [companyName, setCompanyName] = useState(user.companyName);
  const [email, setEmail] = useState(user.email);

  useEffect(() => {
    if (isOpen) {
      setAvatarImage(user.image);
      setCompanyName(user.companyName);
      setEmail(user.email);
    }
  }, [isOpen]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAvatarImage(URL.createObjectURL(file));
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="프로필 수정하기"
      isGlobal={false}
    >
      <div className="mt-1 flex flex-col gap-6">
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
          label="회사"
          labelCustom="block text-base mb-3"
          type="text"
          id="company"
          value={companyName}
          placeholder="회사를 입력해주세요"
          onChange={e => setCompanyName(e.target.value)}
        />
        <Input
          label="이메일"
          labelCustom="block text-base mb-3"
          type="email"
          id="email"
          value={email}
          placeholder="이메일을 입력해주세요"
          onChange={e => setEmail(e.target.value)}
        />
        <div className="flex gap-4">
          <Button
            variant="purple-outline"
            className="h-[44px] w-full"
            onClick={onClose}
          >
            취소
          </Button>
          <Button variant="purple" className="h-[44px] w-full">
            수정하기
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default EditProfileModal;
