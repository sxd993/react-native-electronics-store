import { useCartStore } from "@/entities/cart/store/store";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export const CartTabIcon = ({ color, size }: { color: string; size: number }) => {
    const totalQty = useCartStore((state) => state.items.reduce((sum, item) => sum + item.qty, 0));

    return (
        <View className="relative">
            <Ionicons name="cart-outline" color={color} size={size} />
            {totalQty > 0 && (
                <View className="absolute -top-1.5 -right-2 min-w-[18px] h-[18px] px-1 rounded-full bg-red-500 items-center justify-center">
                    <Text className="text-white text-[11px] font-semibold">
                        {totalQty}
                    </Text>
                </View>
            )}
        </View>
    );
};