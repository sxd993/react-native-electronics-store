import { ReactElement, useMemo } from "react";
import { FlatList } from "react-native";
import { ProductCard } from "@/entities/product/ui/ProductCard";
import { useProductList } from "@/features/get-products";

type ProductListProps = {
  listHeader?: ReactElement | null;
  searchQuery?: string;
};

export const ProductList = ({ listHeader, searchQuery }: ProductListProps) => {
  const { products } = useProductList();

  const filteredProducts = useMemo(() => {
    const query = searchQuery?.trim().toLowerCase();
    if (!query) return products || [];

    return (products || []).filter((product) =>
      product.title.toLowerCase().includes(query)
    );
  }, [products, searchQuery]);

  return (
    <FlatList
      data={filteredProducts}
      className="flex-1"
      numColumns={2}
      columnWrapperStyle={{justifyContent: 'space-between'}}
      keyExtractor={(product) => product.id.toString()}
      renderItem={({ item }) => <ProductCard product={item} />}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={listHeader}
      contentContainerStyle={{
        gap: 16,
        paddingHorizontal: 24,
        paddingBottom: 72,
      }}
    />
  );
};
