import { create } from "zustand";

export interface SideBarState {
    status: boolean;
    isMinimal: boolean;
    handleClose: () => void;
    handleOpenOrClose: () => void;
    handleChangeSidebar: () => void;
}

export const useSideBarStore = create<SideBarState>()((set) => ({
    status: false,
    isMinimal: false,
    handleClose: () => set((state) => ({ ...state, status: false })),
    handleOpenOrClose: () => set((state) => ({ ...state, status: !state.status })),
    handleChangeSidebar: () => set((state) => ({ ...state, isMinimal: !state.isMinimal }))
}))