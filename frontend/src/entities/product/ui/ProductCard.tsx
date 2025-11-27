import { router } from 'expo-router';
import { Image, Pressable, Text, View } from "react-native";
import { Heart, StarIcon } from "lucide-react-native";
import { AddToCartButton } from "@/features/add-to-cart";
import type { Product } from "../model/product.types";

export const ProductCard = ({ product }: { product: Product }) => {
  const basePrice = Math.max(product.price, 1);
  const oldPrice = Math.round(basePrice * 1.15);
  const discountPercent = Math.max(
    5,
    Math.min(80, Math.round(((oldPrice - basePrice) / oldPrice) * 100))
  );

  return (
    <Pressable
      className="w-[49%] bg-white rounded-2xl p-3 border border-neutral-200 shadow-[0_4px_16px_rgba(0,0,0,0.05)] max-h-200"
      onPress={() => router.push(`/product/${product.id}`)}
    >
      {/* Картинка и бейджи */}
      <View className="relative w-full h-40 bg-neutral-100 rounded-xl overflow-hidden items-center justify-center">
        {product.image && (
          <Image
            source={{ uri: product.image }}
            resizeMode="contain"
            className="w-full h-full"
          />
        )}
        <View className="absolute top-2 left-2 bg-black px-2 py-[2px] rounded-full">
          <Text className="text-white text-[11px] font-semibold">
            -{discountPercent}%
          </Text>
        </View>
        <View className="absolute top-2 right-2 bg-white/80 rounded-full p-1">
          <Heart size={18} color="#000" strokeWidth={1.5} />
        </View>
      </View>

      {/* Название, детали и цена */}
      <View className="mt-3 flex-1">
        <View className="gap-1">
          <Text
            numberOfLines={2}
            className="text-[15px] font-semibold text-black leading-5"
          >
            {product.title}
          </Text>
          <Text className="text-[12px] text-neutral-500">
            {product.brand || product.category || "Категория неизвестна"}
          </Text>
        </View>

        <View className="mt-2 gap-1">
          <View className="flex-row items-end gap-2">
            <Text className="text-[18px] font-bold text-black">{product.price} ₽</Text>
            <Text className="text-[12px] text-neutral-400 line-through">{oldPrice} ₽</Text>
          </View>
          <View className="flex-row items-center gap-1">
            <StarIcon size={16} color="#FFC107" />
            <Text className="text-[13px] text-black">
              {product.reviews_count && product.reviews_count > 0
                ? `${product.reviews_count} рейтинг`
                : "Нет рейтинга"}
            </Text>
          </View>
        </View>
      </View>

      {/* Кнопка Добавить */}
      <View className="mt-3 w-full">
        <AddToCartButton product={product} />
      </View>
    </Pressable>
  );
};
