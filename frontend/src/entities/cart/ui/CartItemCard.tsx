import { ChangeCartQty } from "@/features/change-cart-qty";
import { RemoveFromCartButton } from "@/features/remove-from-cart";
import { Image, Text, View } from "react-native";
import type { CartItem } from "../model/cart.types";

type CartItemCardProps = {
    item: CartItem;
};

export const CartItemCard = ({ item }: CartItemCardProps) => {
    return (
        <View className="bg-white rounded-2xl border border-gray-100 shadow-sm pb-4">
            <View className="flex-row items-start gap-4 px-4 pt-4">
                <View className="w-24">
                    {item.image ? (
                        <Image
                            source={{ uri: item.image }}
                            className="h-24 w-24 rounded-xl"
                            resizeMode="contain"
                        />
                    ) : (
                        <View className="w-full h-20 rounded-xl bg-gray-100" />
                    )}
                </View>

                <View className="flex-1 justify-between">
                    <View className="flex-row justify-between items-start">
                        <View className="flex-1 pr-3">
                            <Text className="text-base font-semibold text-gray-900" numberOfLines={2}>
                                {item.title}
                            </Text>
                            <Text className="text-sm text-gray-500 mt-2">
                                {item.price}$ × {item.qty}
                            </Text>
                        </View>
                        <RemoveFromCartButton itemId={item.id} />
                    </View>
                </View>
            </View>
            <View className="mt-3 flex-row items-center justify-between px-4">
                <ChangeCartQty itemId={item.id} qty={item.qty} />
                <Text className="text-2xl font-semibold text-gray-900">
                    {(item.price * item.qty).toFixed(2)}$
                </Text>
            </View>
        </View>
    );
};
