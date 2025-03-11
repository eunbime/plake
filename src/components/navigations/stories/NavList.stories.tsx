import type { Meta, StoryObj } from "@storybook/react";

import NavList from "../NavList";

const meta: Meta<typeof NavList> = {
  title: "Components/Navigation/NavList",
  component: NavList,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "페이지를 이동할 수 있는 네비게이션 목록",
    docs: {
      description: {
        component:
          "사용자가 다른 페이지로 이동할 수 있는 네비게이션 링크 목록입니다.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        story: "모바일 환경에서의 모습입니다.",
      },
    },
  },
};
export const Horizontal: Story = {
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
    docs: {
      description: {
        story: "태블릿,데스크탑 환경에서의 모습입니다.",
      },
    },
  },
};
