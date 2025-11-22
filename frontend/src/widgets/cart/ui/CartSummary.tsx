import { Pressable, Text, View } from 'react-native';
import { useCartTotalPrice, useCartTotalQty } from '@/entities/cart/store/store';

type CartSummaryProps = {
    onCheckout?: () => void;
};

export const CartSummary = ({ onCheckout }: CartSummaryProps) => {
    const totalQty = useCartTotalQty();
    const totalPrice = useCartTotalPrice();

    return (
        <View className="p-4 bg-white border-t border-gray-100 shadow-lg rounded-t-3xl">
            <View className="flex-row justify-between items-center mb-4">
                <Text className="text-base text-gray-600">Итого ({totalQty} шт)</Text>
                <Text className="text-xl font-semibold text-gray-900">{totalPrice.toFixed(2)}$</Text>
            </View>
            <Pressable
                className="w-full py-4 rounded-2xl bg-black items-center active:opacity-80"
                onPress={onCheckout}
            >
                <Text className="text-white text-base font-semibold">Оформить</Text>
            </Pressable>
        </View>
    );
};
