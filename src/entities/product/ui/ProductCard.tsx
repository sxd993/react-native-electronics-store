import { router } from 'expo-router';
import { Image, Pressable, Text, View } from "react-native";
import { AddToCartButton } from '@/features/add-to-cart';
import type { Product } from '../model/product.types';

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Pressable
      className="items-center my-3 p-5 rounded-3xl bg-white border border-gray-100 shadow-sm active:opacity-90"
      onPress={() => router.push(`/product/${product.id}`)}
    >
      <Image source={{ uri: product.image }} className="w-56 h-56 rounded-2xl" resizeMode="contain" />

      <Text className="font-semibold text-xl mt-4 text-center text-gray-900">
        {product.title}
      </Text>
      <View className="flex-row gap-3 mt-3">
        {/* Кнопка добавить в корзину */}
        <AddToCartButton product={product} />
      </View>
    </Pressable>
  );
};
