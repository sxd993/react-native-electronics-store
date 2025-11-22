import { FlatList, Text, View } from 'react-native';
import { useCartItems } from '@/entities/cart/store/store';
import { CartItemRow } from './CartItemRow';

export const CartList = () => {
    const items = useCartItems();

    if (items.length === 0) {
        return (
            <View className="flex-1 items-center justify-center py-24">
                <Text className="text-lg text-gray-500">Корзина пуста</Text>
            </View>
        );
    }

    return (
        <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View className="mb-4">
                    <CartItemRow item={item} />
                </View>
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 120 }}
        />
    );
};
