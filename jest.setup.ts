import "@testing-library/jest-dom";

jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  usePathname: jest.fn(() => "/"),
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
    prefetch: jest.fn(),
  })),
  useSearchParams: jest.fn(() => ({
    get: jest.fn(() => null),
    getAll: jest.fn(() => []),
    forEach: jest.fn(),
    entries: jest.fn(() => []),
    keys: jest.fn(() => []),
    values: jest.fn(() => []),
    has: jest.fn(() => false),
  })),
}));

jest.mock("@/stores/useUserStore", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    user: null,
    isLoggedIn: false,
    isHydrated: true,
  })),
  useShallow: jest.fn(fn => fn),
}));
