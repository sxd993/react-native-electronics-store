import Animated from "react-native-reanimated";
import type { ScrollViewProps } from "react-native";
import { ProductDetails } from "@/widgets/product-details/ui/ProductDetails";

type ProductDetailsPageProps = {
  onScroll?: ScrollViewProps["onScroll"];
  scrollEventThrottle?: number;
};

export const ProductDetailsPage = ({ onScroll, scrollEventThrottle }: ProductDetailsPageProps) => {
  return (
    <Animated.ScrollView
      className="flex-1 bg-white"
      onScroll={onScroll}
      scrollEventThrottle={scrollEventThrottle ?? 16}
      contentContainerStyle={{ paddingBottom: 28 }}
    >
      <ProductDetails />
    </Animated.ScrollView>
  );
};
