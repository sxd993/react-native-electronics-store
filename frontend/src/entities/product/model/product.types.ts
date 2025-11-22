export type UUID = string;

export interface Product {
    id: UUID;
    title: string;
    price: number;
    image: string | null;
    brand: string | null;
    category: string | null;
    reviews_count: number | null;
}
