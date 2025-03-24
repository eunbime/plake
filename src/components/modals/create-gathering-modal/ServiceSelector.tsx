import clsx from "clsx";
import { useState } from "react";

import SubServiceSelector from "@/components/modals/create-gathering-modal/SubServiceSelector";
import { Label } from "@/components/ui/Label";
import { SERVICE_LIST } from "@/constants/gathering";

interface ServiceSelectorProps {
  setTypeValue: (value: string) => void;
  setLocationValue: (value: string) => void;
}

const ServiceSelector = ({
  setTypeValue,
  setLocationValue,
}: ServiceSelectorProps) => {
  const [selectedService, setSelectedService] = useState<string>(
    SERVICE_LIST.OFFLINE.value,
  );
  const [selectedSubService, setSelectedSubService] = useState<string>();

  const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    if (id === SERVICE_LIST.ONLINE.value) {
      setLocationValue(SERVICE_LIST.ONLINE.location);
      setTypeValue(SERVICE_LIST.ONLINE.type);
    } else {
      setLocationValue("");
    }
    setSelectedService(id);
    setSelectedSubService(undefined);
  };

  const handleSubServiceChange = (value: string) => {
    setTypeValue(value);
    setSelectedSubService(value);
  };

  return (
    <>
      <div className="flex h-10 items-center">
        {Object.values(SERVICE_LIST).map(service => (
          <div
            key={service.value}
            className={clsx(
              "flex flex-1 items-center gap-2 rounded-lg bg-gray-50 px-4 py-3",
              selectedService === service.value && "bg-gray-900",
            )}
          >
            <input
              type="radio"
              id={service.value}
              name="serviceType"
              onChange={handleServiceChange}
              checked={selectedService === service.value}
              className="cursor-pointer"
            />
            <Label
              htmlFor={service.value}
              className={clsx(
                "cursor-pointer text-base font-medium",
                selectedService === service.value && "text-white",
              )}
            >
              {service.name}
            </Label>
          </div>
        ))}
      </div>
      {selectedService === SERVICE_LIST.OFFLINE.value && (
        <SubServiceSelector
          selectedSubService={selectedSubService}
          onClickTab={handleSubServiceChange}
        />
      )}
    </>
  );
};

export default ServiceSelector;
