import clsx from "clsx";

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
  setValue: (value: string) => void;
  value: string;
}

const ServiceSelector = ({ setValue, value }: ServiceSelectorProps) => {
  const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, id } = e.target;
    if (checked) {
      setValue(id);
    } else {
      setValue("");
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
              value === service.id && "bg-gray-900",
            )}
          >
            <input
              type="checkbox"
              id={service.id}
              onChange={handleServiceChange}
              checked={value === service.id}
              className="cursor-pointer"
            />
            <Label
              htmlFor={service.id}
              className={clsx(
                "cursor-pointer text-base font-medium",
                value === service.id && "text-white",
              )}
            >
              {service.label}
            </Label>
          </div>
        ))}
      </div>
      {/* <SubTab tabList={TAB_LIST} /> */}
    </>
  );
};

export default ServiceSelector;
