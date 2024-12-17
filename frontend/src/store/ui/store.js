import { create } from "zustand";

export const useUiStore = create((set) => ({

    isSideMenuOpen : false,
    openSideMenu : () => set((state)=> ({isSideMenuOpen: true})),
    closeSideMenu : () => set((state)=> ({isSideMenuOpen: false})),

    isSearchOpen: false,
    openSearch: () => set((state) => ({ isSearchOpen: true })),
    closeSearch: () => set((state) => ({ isSearchOpen: false })),

}))