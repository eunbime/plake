import { render, screen } from "@testing-library/react";

// import userEvent from "@testing-library/user-event";
// import useUserStore from "@/stores/useUserStore";
import Avatar from "../Avatar";

describe("Avatar 컴포넌트 테스트", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("기본 렌더링 테스트", () => {
    it("Avatar가 정상적으로 렌더링된다.", () => {
      render(<Avatar type="default" size="default" />);
      const avatar = screen.getByLabelText("avatar-default");
      expect(avatar).toBeInTheDocument();
    });
  });
});
