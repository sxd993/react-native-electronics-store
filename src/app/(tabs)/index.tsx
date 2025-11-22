import { ProductList } from "@/features/get-product-list/ui/ProductList";
import { Text, View } from "react-native";


export default function IndexScreen() {
  return (
    <View className="bg-white">
      <Text
        className="bg-white text-3xl ml-6">
        Каталог
      </Text>
      <ProductList />
    </View>
  );
}
