import { create } from 'zustand';
import type { CartItem } from '../model/cart.types';

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
    add: (item) =>
        set(({ items }) => {
            const existing = items.find((i) => i.id === item.id);
            if (existing) {
                return { items: items.map((i) => (i.id === item.id ? { ...i, qty: i.qty + item.qty } : i)) };
            }
            return { items: [...items, item] };
        }),
    remove: (id) => set(({ items }) => ({ items: items.filter((i) => i.id !== id) })),
    changeQty: (id, qty) =>
        set(({ items }) => ({
            items: items.map((i) => (i.id === id ? { ...i, qty: Math.max(qty, 1) } : i)),
        })),
    clear: () => set(() => ({ items: [] })),
}));

export const useCartItems = () => useCartStore((state) => state.items);

export const useCartTotalQty = () =>
    useCartStore((state) => state.items.reduce((sum, item) => sum + item.qty, 0));

export const useCartTotalPrice = () =>
    useCartStore((state) => state.items.reduce((sum, item) => sum + item.qty * item.price, 0));
