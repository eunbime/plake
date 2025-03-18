import clsx from "clsx";
import { useState } from "react";

import SubTab from "@/components/navigations/SubTab";
import { Label } from "@/components/ui/Label";
import { SERVICE_LIST } from "@/constants/gathering";

const serviceList = [
  {
    id: SERVICE_LIST.OFFLINE.value,
    label: SERVICE_LIST.OFFLINE.name,
  },
  {
    id: SERVICE_LIST.ONLINE.value,
    label: SERVICE_LIST.ONLINE.name,
  },
];

interface ServiceSelectorProps {
  setTypeValue: (value: string) => void;
}

const ServiceSelector = ({ setTypeValue }: ServiceSelectorProps) => {
  const [selectedService, setSelectedService] = useState<string>(
    SERVICE_LIST.OFFLINE.value,
  );
  const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, id } = e.target;
    if (checked) {
      setSelectedService(id);
    } else {
      setSelectedService("");
    }
  };
  return (
    <>
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
      <SubTab
        onClickTab={setTypeValue}
        isOffline={selectedService === SERVICE_LIST.OFFLINE.value}
      />
    </>
  );
};

export default ServiceSelector;
