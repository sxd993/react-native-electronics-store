import { Text, View } from "react-native";

type CartSummaryProps = {
  totalQty: number;
  totalPrice: number;
};

export const CartSummary = ({ totalQty, totalPrice }: CartSummaryProps) => {
  return (
    <View className="flex-row items-center justify-between">
      <Text className="text-base text-gray-600">Итого ({totalQty} шт)</Text>
      <Text className="text-2xl font-semibold text-gray-900">{totalPrice.toFixed(2)}$</Text>
    </View>
  );
};
