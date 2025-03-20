/**
 * 메인 탭 영역에서 사용하는 데이터
 * @constant
 */
export const MAIN_TAB = [
  { name: "오프라인", value: "offline" },
  { name: "온라인", value: "online" },
] as const;

/**
 * 서브 탭 영역에서 사용하는 데이터
 * @constant
 */
export const SUB_TAB = {
  OFFLINE: [
    { name: "전체", value: "offline" },
    { name: "운동", value: "exercise" },
    { name: "미식", value: "dining" },
  ],
  ONLINE: [
    { name: "전체", value: "online" },
    { name: "게임", value: "game" },
    { name: "코딩", value: "coding" },
  ],
} as const;

export const MY_REVIEW_TAB = [
  { name: "작성 가능한 리뷰", value: "writable" },
  { name: "작성한 리뷰", value: "written" },
] as const;
