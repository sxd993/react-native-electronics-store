import type { CartItem } from '../model/cart.types';

export const addItem = (items: CartItem[], item: CartItem): CartItem[] => {
    const existing = items.find((i) => i.id === item.id);
    if (existing) {
        return items.map((i) => (i.id === item.id ? { ...i, qty: i.qty + item.qty } : i));
    }
    return [...items, item];
};

export const removeItem = (items: CartItem[], id: number): CartItem[] =>
    items.filter((i) => i.id !== id);

export const changeItemQty = (items: CartItem[], id: number, qty: number): CartItem[] =>
    items.map((i) => (i.id === id ? { ...i, qty: Math.max(qty, 1) } : i));

export const clearItems = (): CartItem[] => [];
