import { Image, Text, View } from "react-native";
import type { Product } from "./types";

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <View className="w-[90%] justify-center items-center my-2 p-4">
      <Image
        source={{ uri: product.image }}
        className="w-[250px] h-[250px] rounded-xl"
        resizeMode="contain"
      />

      <Text className="font-bold text-lg mt-2 text-center">
        {product.title}
      </Text>

      <Text className="text-gray-600 text-sm text-center">
        {product.description}
      </Text>
    </View>
  );
};
