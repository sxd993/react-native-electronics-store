import { CartBottomSheetModal } from "@/features/cart-bottom-sheet";
import { CatalogPage } from "@/pages/CatalogPage";
import { View } from "react-native";

export default function IndexScreen() {
  return (
    <View className="flex-1">
      <CatalogPage />
      <CartBottomSheetModal />
    </View>
  );
}
