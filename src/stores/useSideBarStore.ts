import { create } from "zustand";

type SideBarStore = {
  isOpen: boolean;
  onToggleSideBar: (flag: boolean) => void;
};

const useSideBarStore = create<SideBarStore>(set => ({
  isOpen: false,
  onToggleSideBar: (flag: boolean) => set({ isOpen: flag }),
}));

export default useSideBarStore;
