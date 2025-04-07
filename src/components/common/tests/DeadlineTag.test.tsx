import "@testing-library/jest-dom";
import "dayjs/locale/ko"; // 한국어 가져오기

import { render, screen, waitFor } from "@testing-library/react";
import dayjs from "dayjs";

import DeadlineTag from "../DeadlineTag";

describe("모임이 마감되지 않은 경우(모집 종료일이 지나지 않은 경우) 렌더링 테스트", () => {
  it("DeadlineTag가 보인다.", () => {
    const today = dayjs();
    const registrationEnd = today.add(1, "month"); // 마감일이 1달 이상 남은 경우
    render(<DeadlineTag registrationEnd={registrationEnd} />);

    expect(
      screen.getByLabelText("등록 마감까지 남은 시간"),
    ).toBeInTheDocument();
  });

  it("모집 종료 당일인 경우 마감되는 시간이 보인다.", () => {
    const today = dayjs();

    const registrationEnd = today.add(1, "hour"); // 마감 시간까지 1시간이 남았을 경우
    const deadlineHour = registrationEnd.format("H");

    render(<DeadlineTag registrationEnd={registrationEnd} />);

    expect(screen.getByText(`오늘 ${deadlineHour}시 마감`)).toBeInTheDocument();
  });

  it("모집 종료 당일이 아닌 경우 마감까지 남은 일 수가 보인다.", () => {
    const today = dayjs();
    const registrationEnd = today.add(5, "day"); // 마감 일자까지 5일 남았을 경우
    render(<DeadlineTag registrationEnd={registrationEnd} />);

    expect(screen.getByText("5일 후 마감")).toBeInTheDocument();
  });
});

describe("모임이 마감된 경우(모집 종료일이 지난 경우) 렌더링 테스트", () => {
  it("DeadlineTag가 보이지 않는다.", async () => {
    const today = dayjs();
    const registrationEnd = today.subtract(7, "day"); // 오늘 기준 7일 전에 마감일이 지난 경우

    const { container } = render(
      <DeadlineTag registrationEnd={registrationEnd} />,
    );

    await waitFor(() => {
      expect(container.childElementCount).toEqual(0);
    });
  });
});
