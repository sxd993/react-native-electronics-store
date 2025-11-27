import { Pressable, Text, View } from "react-native";
import { useCartSummary } from "../hooks/useCartSummary";
import { CartTabIcon } from "@/shared/icons";

export const CartSummary = () => {
  const { onOpenBottomSheet, totalPrice } = useCartSummary();

  return (
    <View className="absolute bottom-3 w-full items-center">
      <Pressable
        onPress={onOpenBottomSheet}
        className="w-[80%] flex-row items-center justify-between p-4 bg-blue-500 border-t border-gray-100 shadow-lg rounded-xl"
      >
        <View className="flex-row items-center gap-3">
          <CartTabIcon />
          <Text className="text-xl text-white">Корзина</Text>
        </View>
        <Text className="text-xl text-white">{totalPrice}$</Text>
      </Pressable>
    </View>
  );
};
