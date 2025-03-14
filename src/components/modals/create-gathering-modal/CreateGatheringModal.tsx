"use client";

import { useEffect, useState } from "react";

import Dropdown from "@/components/common/Dropdown";
import DateTimePicker from "@/components/modals/create-gathering-modal/DateTimePicker";
import ImageUploader from "@/components/modals/create-gathering-modal/ImageUploader";
import ServiceSelector from "@/components/modals/create-gathering-modal/ServiceSelector";
import Modal from "@/components/modals/Modal";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";

const labelTitleStyle = "text-base font-semibold text-gray-800";

const CreateGatheringModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="모임 만들기">
      <div className="flex flex-col justify-between gap-10">
        <div className="flex flex-col gap-4">
          <Input
            label="모임 이름"
            type="text"
            id="gathering-name"
            placeholder="모임 이름을 입력해주세요."
          />
          <div className="flex flex-col gap-2">
            <Label className={labelTitleStyle}>장소</Label>
            <Dropdown type="form" placeholder="장소를 선택해주세요." />
          </div>
          <div className="flex flex-col gap-2">
            <Label className={labelTitleStyle}>이미지</Label>
            <ImageUploader />
          </div>
          <div className="flex flex-col gap-2">
            <Label className={labelTitleStyle}>선택 서비스</Label>
            <ServiceSelector />
          </div>
          <DateTimePicker />
          <div>
            <Input
              type="number"
              id="gathering-capacity"
              label="모임 정원"
              placeholder="모임 정원을 입력해주세요. (5~20)"
            />
          </div>
        </div>
        <Button variant="purple" className="w-full">
          확인
        </Button>
      </div>
    </Modal>
  );
};

export default CreateGatheringModal;
