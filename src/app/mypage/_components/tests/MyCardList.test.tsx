import { render, screen } from "@testing-library/react";

import MyCardList from "@/app/mypage/_components/my-card-list/MyCardList";
import { EMPTY_MESSAGE } from "@/constants/emptyMessage";
import { useSuspenseMyGatheringList as _useSuspenseMyGatheringList } from "@/hooks/gathering/useMyGatheringList";
import { mockMyGatherings } from "@/utils/test-utils/myGatheringMocking";

jest.mock("@/hooks/gathering/useMyGatheringList");
jest.mock("@/hooks/useIntersectionObserver", () => ({
  __esModule: true,
  default: () => ({
    setTarget: jest.fn(),
  }),
}));
// 액션 컴포넌트 테스트 코드 작성 후 삭제될 예정
jest.mock("@/app/mypage/_components/my-card-item/MyCardAction", () => {
  const MockAction = () => <div data-testid="mock-action" />;
  MockAction.displayName = "MockMyCardAction";
  return MockAction;
});

const mockUseSuspenseMyGatheringList = _useSuspenseMyGatheringList as jest.Mock;

describe("MyCardList", () => {
  it("gathering이 없을 경우 EmptyState가 렌더링된다.", () => {
    mockUseSuspenseMyGatheringList.mockReturnValue({
      data: { pages: [] },
      hasNextPage: false,
      fetchNextPage: jest.fn().mockResolvedValue(undefined),
      status: "success",
    });

    render(<MyCardList />);
    expect(screen.getByText(EMPTY_MESSAGE.mypage.default)).toBeInTheDocument();
  });

  it("gathering이 있을 경우 카드 아이템이 렌더링된다.", () => {
    const mockGatherings = mockMyGatherings(2);

    mockUseSuspenseMyGatheringList.mockReturnValue({
      data: { pages: [mockGatherings] },
      hasNextPage: false,
      fetchNextPage: jest.fn().mockResolvedValue(undefined),
      status: "success",
    });

    render(<MyCardList />);
    mockGatherings.forEach(gathering => {
      expect(screen.getByText(gathering.name)).toBeInTheDocument();
    });
    expect(screen.getAllByTestId("mock-action")).toHaveLength(2);
  });

  it("status가 error일 경우 에러 메시지가 표시된다.", () => {
    const mockGatherings = mockMyGatherings(2);

    mockUseSuspenseMyGatheringList.mockReturnValue({
      data: { pages: [mockGatherings] },
      hasNextPage: false,
      fetchNextPage: jest.fn().mockResolvedValue(undefined),
      status: "error",
    });

    render(<MyCardList />);
    expect(screen.getByRole("alert")).toHaveTextContent("에러가 발생했습니다.");
  });
});
