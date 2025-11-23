import { useState } from "react";
import { FiltersBar } from "@/features/filters";
import { SearchInput } from "@/features/search";
import { ProductList } from "@/widgets/products-list/ProductList";
import { Text, View } from "react-native";

type CatalogHeaderProps = {
  search: string;
  onChangeSearch: (value: string) => void;
};

const CatalogHeader = ({ search, onChangeSearch }: CatalogHeaderProps) => (
  <View className="pt-6 pb-4">
    <Text className="text-4xl font-semibold text-gray-900 tracking-tight">Каталог</Text>
    <Text className="text-gray-500 mt-1">Выбирайте лучшее — от техники до мелочей для дома.</Text>
    <View className="mt-4">
      <SearchInput value={search} onChangeText={onChangeSearch} />
    </View>
    <View className="mt-3">
      <FiltersBar />
    </View>
  </View>
);

export default function IndexScreen() {
  const [search, setSearch] = useState("");

  return (
    <View className="flex-1 bg-white">
      <ProductList
        listHeader={<CatalogHeader search={search} onChangeSearch={setSearch} />}
        searchQuery={search}
      />
    </View>
  );
}
