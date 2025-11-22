import { Plus } from 'lucide-react-native';
import { Pressable, Text } from 'react-native';
import type { Product } from '@/entities/product/model/product.types';
import { useAddToCart } from '../model/useAddToCart';

type AddToCartButtonProps = {
    product: Product;
};

export const AddToCartButton = ({ product }: AddToCartButtonProps) => {
    const { handleAdd } = useAddToCart(product);

    return (
        <Pressable
            className="px-4 py-3 rounded-2xl bg-black flex-row items-center gap-2 active:opacity-70"
            onPress={handleAdd}
        >
            <Text className="text-white font-semibold text-lg">
                {product.price}$
            </Text>
            <Plus width={22} color="#fff" />
        </Pressable>
    );
};
