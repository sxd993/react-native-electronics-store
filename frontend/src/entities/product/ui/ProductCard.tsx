import { router } from 'expo-router';
import { Image, Pressable, Text, View } from "react-native";
import { AddToCartButton } from '@/features/add-to-cart';
import type { Product } from '../model/product.types';
import { StarIcon } from 'lucide-react-native';

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Pressable
      className="w-full p-5 rounded-3xl bg-white border border-gray-100 shadow-sm active:opacity-90"
      onPress={() => router.push(`/product/${product.id}`)}
    >
      <View className="flex-row items-start gap-3 w-full">
        <View className="flex-1">
          <Text className="text-[11px] uppercase tracking-[1.5px] text-gray-400">
            {product.category || "Новинка"}
          </Text>
          <Text className="font-semibold text-xl text-gray-900 leading-snug mt-1">
            {product.title}
          </Text>
        </View>
        {product.reviews_count > 0
          ?
          <View className="px-3 py-1 gap-1 items-center rounded-full  flex-row">
            <StarIcon
              className='text-amber-500'
            />
            <Text className="text-gray-900 font-semibold text-base">{product.reviews_count}</Text>
          </View>
          :
          <Text className='px-3 py-1 gap-1 items-center rounded-full bg-gray-100'>
            Нет рейтинга
          </Text>

        }
      </View>

      <Image
        source={{ uri: product.image || undefined }}
        className="w-full h-56 rounded-2xl mt-4 bg-white"
        resizeMode="contain"
      />

      <View className="flex-row justify-between items-center mt-4 w-full">
        <View>
        </View>
        {/* Кнопка добавить в корзину */}
        <AddToCartButton product={product} />
      </View>
    </Pressable>
  );
};
