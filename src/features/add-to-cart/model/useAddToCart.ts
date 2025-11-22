import type { Product } from '@/entities/product/model/product.types';
import { useCartStore } from '@/entities/cart/store/store';

export const useAddToCart = (product: Product) => {
    const add = useCartStore((state) => state.add);

    const handleAdd = () => {
        add({
            id: product.id,
            productId: product.id,
            title: product.title,
            price: product.price,
            qty: 1,
            image: product.image,
        });
    };

    return { handleAdd };
};
