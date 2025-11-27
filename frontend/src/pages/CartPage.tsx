import { Text, View } from "react-native";
import { CartList } from "@/widgets/cart";

export const CartPage = () => {
    return (
        <View className="flex-1 bg-white px-6 pb-2">
            <View className="py-6">
                <Text className="text-4xl font-semibold text-gray-900 tracking-tight">Корзина</Text>
            </View>
            <View className="flex-1">
                <CartList />
            </View>
        </View>
    );
};
