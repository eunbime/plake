"use client";

import { useState } from "react";

import Dropdown from "@/components/common/Dropdown";
import Modal from "@/components/providers/Modal";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";

import SelectDate from "./SelectDate";
import SelectService from "./SelectService";

const labelTitle = "text-base font-semibold text-gray-800";

const CreateGatheringModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <Input
            label="모임 이름"
            type="text"
            id="gathering-name"
            placeholder="모임 이름을 입력해주세요."
          />
          <div className="flex flex-col gap-2">
            <Label className={labelTitle}>장소</Label>
            <Dropdown type="form" />
          </div>
          <div className="flex flex-col gap-2">
            <Label className={labelTitle}>이미지</Label>
            <div>
              <div className="flex items-center">
                <p>이미지를 첨부해주세요</p>
              </div>
              <input type="file" className="hidden" id="image-file" />
              <Button
                variant="purple-outline"
                onClick={() => document.getElementById("image-file")?.click()}
              >
                파일 찾기
              </Button>
            </div>
          </div>
          <div>
            <Label className={labelTitle}>선택 서비스</Label>
            <SelectService />
            {/* subtap */}
          </div>
          <SelectDate />
          <div>
            <Input type="number" id="gathering-capacity" label="모임 정원" />
          </div>
        </div>
        <div>
          <Button variant="purple">확인</Button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateGatheringModal;
