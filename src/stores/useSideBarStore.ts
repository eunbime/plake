import { create } from "zustand";

type SideBarStore = {
  isOpen: boolean;
  toggleSideBar: (flag: boolean) => void;
};

const useSideBarStore = create<SideBarStore>(set => ({
  isOpen: false,
  toggleSideBar: (flag: boolean) => set({ isOpen: flag }),
}));

export default useSideBarStore;
