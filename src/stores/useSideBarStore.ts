import { create } from "zustand";

type SideBarStore = {
  isOpen: boolean;
  toggleSideBar: () => void;
};

const useSideBarStore = create<SideBarStore>(set => ({
  isOpen: false,
  toggleSideBar: () => set(prev => ({ isOpen: !prev.isOpen })),
}));

export default useSideBarStore;
