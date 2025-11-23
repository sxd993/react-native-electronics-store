import { Text, View } from "react-native";
import { CartList, CartSummary } from "@/widgets/cart";
import { useCartItems } from "@/entities/cart/store/store";

export const CartPage = () => {
    const items = useCartItems();

    return (
        <View className="flex-1 bg-white px-6 pb-2">
            <View className="py-6">
                <Text className="text-4xl font-semibold text-gray-900 tracking-tight">Корзина</Text>
            </View>
            <View className="flex-1">
                <CartList />
                {items.length > 0 && (
                    <View className="absolute bottom-0 left-0 right-0">
                        <CartSummary />
                    </View>
                )}
            </View>
        </View>
    );
};
