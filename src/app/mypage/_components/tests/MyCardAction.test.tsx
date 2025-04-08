import { fireEvent, render, screen } from "@testing-library/react";
import { useRouter } from "next/navigation";

import MyCardAction from "@/app/mypage/_components/my-card-item/MyCardAction";
import { MY_CARD_ACTION_TEXT } from "@/constants/ui";
import { useLeaveGatheringMutation as _useLeaveGatheringMutation } from "@/hooks/gathering/useJoinGathering";
import { mockUser } from "@/utils/test-utils/userMocking";

const mockMutate = jest.fn();
const mockPush = jest.fn();
const mockOpenConfirm = jest.fn();
const mockOpenCreateReview = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));
jest.mock("@/hooks/gathering/useJoinGathering");
jest.mock("@/stores/useModalStore", () => ({
  __esModule: true,
  default: jest.fn(selector =>
    selector({
      openConfirm: mockOpenConfirm,
      openCreateReview: mockOpenCreateReview,
    }),
  ),
}));

describe("MyCardAction", () => {
  beforeEach(() => {
    (_useLeaveGatheringMutation as jest.Mock).mockReturnValue({
      mutate: mockMutate,
    });

    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });

    jest.clearAllMocks();
  });

  it('"cancel" 타입이면 예약 취소 버튼이 렌더링되고, 클릭 시 openConfirm 호출된다.', () => {
    render(<MyCardAction type="cancel" id={mockUser.id} />);

    const button = screen.getByText(MY_CARD_ACTION_TEXT.CANCEL);
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(mockOpenConfirm).toHaveBeenCalledWith(
      "참여를 취소하시겠습니까?",
      expect.any(Function),
    );
  });

  it('"viewReview" 타입이면 내가 쓴 리뷰 보기 버튼이 렌더링되고, 클릭 시 router.push 호출된다.', () => {
    render(<MyCardAction type="viewReview" id={mockUser.id} />);

    const button = screen.getByText(MY_CARD_ACTION_TEXT.VIEW_REVIEW);
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(mockPush).toHaveBeenCalledWith("/mypage/reviews?type=written");
  });

  it('"writeReview" 타입이면 리뷰 작성하기 버튼이 렌더링되고, 클릭 시 openCreateReview 호출된다.', () => {
    render(<MyCardAction type="writeReview" id={mockUser.id} />);

    const button = screen.getByText(MY_CARD_ACTION_TEXT.WRITE_REVIEW);
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(mockOpenCreateReview).toHaveBeenCalledWith(mockUser.id);
  });
});
