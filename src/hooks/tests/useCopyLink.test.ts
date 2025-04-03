import { renderHook } from "@testing-library/react";
import { usePathname } from "next/navigation";
import { act } from "react";

import useCopyLink from "@/hooks/useCopyLink";

const mockOpenAlert = jest.fn();

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

jest.mock("@/stores/useModalStore", () => ({
  __esModule: true,
  default: (selector: (state: { openAlert: jest.Mock }) => jest.Mock) => {
    const store = {
      openAlert: mockOpenAlert,
    };
    return selector(store);
  },
}));

describe("useCopyLink 테스트", () => {
  const mockPathname = "/test-path";

  beforeEach(() => {
    jest.clearAllMocks();
    (usePathname as jest.Mock).mockReturnValue(mockPathname);
  });

  it("링크가 복사되고 알림이 표시되어야 한다.", async () => {
    // navigator.clipboard 모킹
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn().mockResolvedValue(undefined),
      },
    });

    const { result } = renderHook(() => useCopyLink());

    act(() => {
      result.current.handleCopyLink();
    });

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      `${window.location.origin}${mockPathname}`,
    );
    expect(mockOpenAlert).toHaveBeenCalledWith("링크가 복사되었습니다.");
  });
});
