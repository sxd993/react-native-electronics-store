export interface CartItem {
    id: number;          // id позиции в корзине
    productId: number;   // id товара
    title: string;      // Название товара
    price: number;       // цена за единицу
    qty: number;         // количество
    image?: string;
}
