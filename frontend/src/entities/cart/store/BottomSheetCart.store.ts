import { create } from 'zustand';

type CartBottomSheetState = {
    isOpen: boolean;
};

type CartBottomSheetActions = {
    open: () => void;
    close: () => void;
};

export type CartBottomSheetStore = CartBottomSheetState & CartBottomSheetActions;

const initialState: CartBottomSheetState = {
    isOpen: false,
};

export const useCartBottomSheetStore = create<CartBottomSheetStore>((set) => ({
    ...initialState,
    open: () => set(() => ({ isOpen: true })),
    close: () => set(() => ({ isOpen: false })),
}));

export const useCartBottomSheetIsOpen = () =>
    useCartBottomSheetStore((state) => state.isOpen);
