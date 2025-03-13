import clsx from "clsx";
import { useState } from "react";

import { Label } from "@/components/ui/Label";

const SERVICE_LIST = {
  OFFLINE: "offline",
  ONLINE: "online",
} as const;

const serviceLabel = (selectedService: string[]) =>
  clsx(
    "text-base font-semibold",
    selectedService.includes("offline") ? "text-white" : "text-gray-800",
  );

const serviceList = [
  {
    id: SERVICE_LIST.OFFLINE,
    label: "오프라인",
  },
  {
    id: SERVICE_LIST.ONLINE,
    label: "온라인",
  },
];

const SelectService = () => {
  const [selectedService, setSelectedService] = useState<string[]>([]);
  const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, id } = e.target;
    if (checked) {
      setSelectedService([...selectedService, id]);
    } else {
      setSelectedService(selectedService.filter(service => service !== id));
    }
  };
  return (
    <div>
      {serviceList.map(service => (
        <div key={service.id}>
          <input
            type="checkbox"
            id={service.id}
            onChange={handleServiceChange}
            checked={selectedService.includes(service.id)}
          />
          <Label htmlFor={service.id} className={serviceLabel(selectedService)}>
            {service.label}
          </Label>
        </div>
      ))}
    </div>
  );
};

export default SelectService;
