import { create } from 'zustand';
import type { CartItem } from '../model/cart.types';
import { addItem, changeItemQty, clearItems, removeItem } from './CartActions';

export type CartState = {
    items: CartItem[];
};

type CartActions = {
    add: (item: CartItem) => void;
    remove: (id: number) => void;
    changeQty: (id: number, qty: number) => void;
    clear: () => void;
};

export type CartStore = CartState & CartActions;

const initialState: CartState = {
    items: [],
};

export const useCartStore = create<CartStore>((set) => ({
    ...initialState,
    add: (item) => set(({ items }) => ({ items: addItem(items, item) })),
    remove: (id) => set(({ items }) => ({ items: removeItem(items, id) })),
    changeQty: (id, qty) => set(({ items }) => ({ items: changeItemQty(items, id, qty) })),
    clear: () => set(() => ({ items: clearItems() })),
}));
