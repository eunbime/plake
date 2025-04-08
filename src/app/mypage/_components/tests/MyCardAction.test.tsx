import { fireEvent, render, screen } from "@testing-library/react";
import { useRouter } from "next/navigation";

import MyCardAction from "@/app/mypage/_components/my-card-item/MyCardAction";
import { MY_CARD_ACTION_TEXT } from "@/constants/ui";
import { useLeaveGatheringMutation as _useLeaveGatheringMutation } from "@/hooks/gathering/useJoinGathering";
import { MyCardActionType } from "@/types/gathering";
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

  it('"cancel" 타입에서 openConfirm 콜백 실행 시 mutate 호출된다.', () => {
    (mockOpenConfirm as jest.Mock).mockImplementation((_, onConfirm) => {
      onConfirm();
    });

    render(<MyCardAction type="cancel" id={mockUser.id} />);
    const button = screen.getByText(MY_CARD_ACTION_TEXT.CANCEL);
    fireEvent.click(button);

    expect(mockMutate).toHaveBeenCalled();
  });

  it('"viewReview" 타입이면 내가 쓴 리뷰 보기 버튼이 렌더링되고, 클릭 시 router.push 호출된다.', () => {
    render(<MyCardAction type="viewReview" id={mockUser.id} />);
    const button = screen.getByText(MY_CARD_ACTION_TEXT.VIEW_REVIEW);
    fireEvent.click(button);

    expect(mockPush).toHaveBeenCalledWith("/mypage/reviews?type=written");
  });

  it('"writeReview" 타입이면 리뷰 작성하기 버튼이 렌더링되고, 클릭 시 openCreateReview 호출된다.', () => {
    render(<MyCardAction type="writeReview" id={mockUser.id} />);

    const button = screen.getByText(MY_CARD_ACTION_TEXT.WRITE_REVIEW);
    fireEvent.click(button);

    expect(mockOpenCreateReview).toHaveBeenCalledWith(mockUser.id);
  });

  it("정의되지 않은 type이면 버튼이 렌더링되지 않는다.", () => {
    render(
      <MyCardAction
        type={"unknown" as unknown as MyCardActionType}
        id={mockUser.id}
      />,
    );
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it('"cancel" 버튼 클릭 시 e.preventDefault()가 호출된다.', () => {
    render(<MyCardAction type="cancel" id={mockUser.id} />);
    const button = screen.getByText(MY_CARD_ACTION_TEXT.CANCEL);
    const event = new MouseEvent("click", { bubbles: true });
    const prevent = jest.fn();
    button.dispatchEvent(Object.assign(event, { preventDefault: prevent }));

    expect(prevent).toHaveBeenCalled();
  });

  it('"viewReview" 버튼 클릭 시 e.preventDefault()가 호출된다.', () => {
    render(<MyCardAction type="viewReview" id={mockUser.id} />);
    const button = screen.getByText(MY_CARD_ACTION_TEXT.VIEW_REVIEW);
    const event = new MouseEvent("click", { bubbles: true });
    const prevent = jest.fn();
    button.dispatchEvent(Object.assign(event, { preventDefault: prevent }));

    expect(prevent).toHaveBeenCalled();
  });

  it('"writeReview" 버튼 클릭 시 e.preventDefault()가 호출된다.', () => {
    render(<MyCardAction type="writeReview" id={mockUser.id} />);
    const button = screen.getByText(MY_CARD_ACTION_TEXT.WRITE_REVIEW);
    const event = new MouseEvent("click", { bubbles: true });
    const prevent = jest.fn();
    button.dispatchEvent(Object.assign(event, { preventDefault: prevent }));

    expect(prevent).toHaveBeenCalled();
  });
});
