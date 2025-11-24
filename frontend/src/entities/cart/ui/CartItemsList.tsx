import { Text, View } from "react-native";
import type { CartItem } from "../model/cart.types";

type CartItemsListProps = {
  items: CartItem[];
};

export const CartItemsList = ({ items }: CartItemsListProps) => {
  if (items.length === 0) {
    return <Text className="text-gray-500">Корзина пока пуста, добавьте товары перед оплатой.</Text>;
  }

  return (
    <View className="space-y-3">
      {items.map((item) => (
        <View key={item.id} className="flex-row items-center justify-between">
          <View className="flex-1 mr-3">
            <Text className="text-base font-semibold text-gray-900" numberOfLines={1}>
              {item.title}
            </Text>
            <Text className="text-sm text-gray-500 mt-0.5">
              {item.qty} шт · {item.price.toFixed(2)}$
            </Text>
          </View>
          <Text className="text-base font-semibold text-gray-900">{(item.qty * item.price).toFixed(2)}$</Text>
        </View>
      ))}
    </View>
  );
};
