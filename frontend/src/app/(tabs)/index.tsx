import { ProductList } from "@/widgets/products-list/ProductList";
import { Text, View } from "react-native";


export default function IndexScreen() {
  return (
    <View className="bg-white flex-1">
      <Text
        className="bg-white text-3xl ml-6">
        Каталог
      </Text>
      <ProductList />
    </View>
  );
}
