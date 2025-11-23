import { FiltersBar } from "@/features/filters";
import { ProductList } from "@/widgets/products-list/ProductList";
import { Text, View } from "react-native";

export default function IndexScreen() {
  return (
    <View className="bg-white flex-1 p-6">
      <View>
        <Text className="text-4xl font-semibold text-gray-900 tracking-tight">Каталог</Text>
        <Text className="text-gray-500 mt-1">Выбирайте лучшее — от техники до мелочей для дома.</Text>
      </View>

      <FiltersBar />

      <View className="flex-1">
        <ProductList />
      </View>
    </View>
  );
}
