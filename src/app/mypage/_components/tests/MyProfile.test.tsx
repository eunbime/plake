import { fireEvent, render, screen } from "@testing-library/react";

import MyProfile from "@/app/mypage/_components/MyProfile";
import useUserStore from "@/stores/useUserStore";
import { mockUser } from "@/utils/test-utils/userMocking";

jest.mock("@/components/modals/edit-profile-modal/EditProfileModal", () => ({
  __esModule: true,
  default: () => <div data-testid="edit-profile-modal">프로필 수정하기</div>,
}));
jest.mock("@/stores/useUserStore");

describe("MyProfile", () => {
  const mockUseUserStore = useUserStore as unknown as jest.Mock;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("유저 정보가 있을 때 프로필 정보가 렌더링된다.", () => {
    mockUseUserStore.mockImplementation(selector =>
      selector({
        user: mockUser,
        isLoggedIn: true,
        isHydrated: true,
      }),
    );

    render(<MyProfile />);
    expect(screen.getByText("내 프로필")).toBeInTheDocument();
    expect(screen.getByText(mockUser.name)).toBeInTheDocument();
    expect(screen.getByText(mockUser.companyName)).toBeInTheDocument();
    expect(screen.getByText(mockUser.email)).toBeInTheDocument();
  });

  it("유저 정보가 있을 때 수정 버튼이 활성화된다.", () => {
    mockUseUserStore.mockImplementation(selector =>
      selector({
        user: mockUser,
        isLoggedIn: true,
        isHydrated: true,
      }),
    );

    render(<MyProfile />);
    const button = screen.getByRole("button");
    expect(button).not.toBeDisabled();
  });

  it("유저 정보가 없을 때 MyProfileSkeleton이 렌더링된다.", () => {
    mockUseUserStore.mockImplementation(selector =>
      selector({
        user: null,
        isLoggedIn: false,
        isHydrated: true,
      }),
    );

    render(<MyProfile />);
    expect(screen.getByTestId("profile-skeleton")).toBeInTheDocument();
  });

  it("수정 버튼 클릭 시 EditProfileModal이 열린다.", () => {
    mockUseUserStore.mockImplementation(selector =>
      selector({
        user: mockUser,
        isLoggedIn: true,
        isHydrated: true,
      }),
    );

    render(<MyProfile />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(screen.getByTestId("edit-profile-modal")).toBeInTheDocument();
  });
});
