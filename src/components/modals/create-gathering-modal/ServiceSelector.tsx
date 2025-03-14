import clsx from "clsx";
import { useState } from "react";

import { Label } from "@/components/ui/Label";

const SERVICE_LIST = {
  OFFLINE: "offline",
  ONLINE: "online",
} as const;

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

const ServiceSelector = () => {
  const [selectedService, setSelectedService] = useState<string>();
  const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, id } = e.target;
    if (checked) {
      setSelectedService(id);
    } else {
      setSelectedService(undefined);
    }
  };
  return (
    <div className="flex items-center">
      {serviceList.map(service => (
        <div
          key={service.id}
          className={clsx(
            "flex flex-1 items-center gap-2 rounded-lg bg-gray-50 px-4 py-3",
            selectedService === service.id && "bg-gray-900",
          )}
        >
          <input
            type="checkbox"
            id={service.id}
            onChange={handleServiceChange}
            checked={selectedService === service.id}
            className="cursor-pointer"
          />
          <Label
            htmlFor={service.id}
            className={clsx(
              "cursor-pointer text-base font-medium",
              selectedService === service.id && "text-white",
            )}
          >
            {service.label}
          </Label>
        </div>
      ))}
    </div>
  );
};

export default ServiceSelector;
