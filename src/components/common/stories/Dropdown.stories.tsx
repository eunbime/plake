import type { Meta, StoryObj } from "@storybook/react";

import LocationDropdown from "@/components/common/Dropdown";

const meta: Meta<typeof LocationDropdown> = {
  title: "Components/Common/Dropdown",
  component: LocationDropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isFormType: {
      control: { type: "boolean" },
      description:
        "드롭다운의 상태 (true: 폼 타입 드롭다운, false: 폼 타입이 아닌경우의 드롭다운)",
    },
    onSelect: {
      action: "clicked",
      description: "드롭다운 셀렉 핸들러",
    },
  },
};

export default meta;
type Story = StoryObj<typeof LocationDropdown>;

export const Default: Story = {
  args: {
    isFormType: false,
  },
};

export const FormTypeDropdown: Story = {
  args: {
    isFormType: true,
  },
};
