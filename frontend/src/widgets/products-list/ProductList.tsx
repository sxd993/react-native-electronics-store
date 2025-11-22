
import { FlatList, View } from "react-native";
import { ProductCard } from "@/entities/product/ui/ProductCard";
import { useProductList } from "@/features/get-products";

export const ProductList = () => {
  const { products } = useProductList();

  return (
    <View className="flex-1">
      <FlatList
        data={products}
        keyExtractor={(product) => product.id.toString()}
        renderItem={({ item }) => <ProductCard product={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 8,
          paddingHorizontal: 24,
          paddingBottom: 72,
        }}
      />
    </View>
  );
};
