import type { CartItem } from '@/entities/cart/model/cart.types';
import { CartItemCard } from '@/entities/cart/ui/CartItemCard';
import { View } from 'react-native';

type CartItemRowProps = {
    item: CartItem;
};

export const CartItemRow = ({ item }: CartItemRowProps) => {
    return (
        <View className="flex-col gap-3">
            <CartItemCard item={item} />
        </View>
    );
};
