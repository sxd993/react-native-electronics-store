import { useCartStore } from "@/entities/cart/store/store";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

type CartTabIconProps = {
  size?: number;
  color?: string;
};

export const CartTabIcon = ({ size = 24, color = "white" }: CartTabIconProps) => {
  const totalQty = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.qty, 0)
  );

  return (
    <View className="relative w-8 h-8 items-center justify-center">
      {/* сама иконка */}
      <Ionicons name="cart-outline" size={size} color={color} />

      {/* бейдж в правом верхнем углу именно относительно корзины */}
      {totalQty > 0 && (
        <View className="absolute -top-1 -right-1 min-w-[16px] h-[16px] px-1 rounded-full bg-red-500 items-center justify-center">
          <Text className="text-white text-[10px] font-semibold">
            {totalQty > 99 ? "99+" : totalQty}
          </Text>
        </View>
      )}

    </View>
  );
};
