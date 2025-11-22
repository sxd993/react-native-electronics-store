
import { FlatList, View } from "react-native";
import { useProductList } from "../hooks/useProductList";
import { ProductCard } from "@/entities/product/ui/ProductCard";

export const ProductList = () => {
  const { products } = useProductList();

  return (
    <View>
      <FlatList
        className="pt-2 px-6"
        data={products}
        keyExtractor={(product) => product.id.toString()}
        renderItem={({ item }) => <ProductCard product={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 72 }}
      />
    </View>
  );
};
