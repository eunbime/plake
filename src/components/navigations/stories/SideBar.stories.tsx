import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import SideBar from "../SideBar";

const meta: Meta<typeof SideBar> = {
  title: "Components/Navigation/SideBar",
  component: SideBar,
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      control: { type: "boolean" },
      description: "사이드바 열림 여부",
    },
    onToggle: {
      action: "clicked",
      description: "사이드바 토글 핸들러",
    },
  },
  args: {
    isOpen: false, // 기본값으로 닫힌 상태 설정
    onToggle: () => {}, // 빈 함수를 기본 핸들러로 설정
  },
  parameters: {
    componentSubtitle: "모바일 스크린에서 보여질 네비게이션 사이드바",
    docs: {
      description: {
        component:
          "모바일 스크린크기에서 네비게이션을 보여주는 컴포넌트입니다.",
      },
    },
  },
  decorators: [
    (Story, context) => {
      return (
        <div
          key={`sidebar-${context.args.isOpen ? "open" : "closed"}`}
          style={{ position: "relative", height: "100px", overflow: "hidden" }}
        >
          <Story
            isOpen={context.args.isOpen}
            onToggle={context.args.onToggle}
          />
        </div>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof SideBar>;

export const Closed: Story = {
  args: {
    isOpen: false,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        story:
          "기본 상태인 닫힌 사이드바입니다. 화면에 보이지 않는 상태로 표시됩니다.",
      },
    },
  },
};
export const Open: Story = {
  args: {
    isOpen: true,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        story:
          "사용자가 메뉴 버튼을 클릭했을 때 표시되는 열린 상태의 사이드바입니다.",
      },
    },
  },
};

export const Interactive: Story = {
  parameters: {
    docs: {
      description: {
        story: "사용자가 직접 제어할 수 있는 사이드바입니다.",
      },
    },
  },
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <div>
        <SideBar isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
      </div>
    );
  },
};
