import { create } from "zustand";

interface TabStore {
  isSubTabChange: boolean;
  onSubTabChangeOn: () => void;
  onSubTabChangeOff: () => void;
}

const useTabStore = create<TabStore>(set => ({
  isSubTabChange: false,
  onSubTabChangeOn: () => set({ isSubTabChange: true }),
  onSubTabChangeOff: () => set({ isSubTabChange: false }),
}));

export default useTabStore;
