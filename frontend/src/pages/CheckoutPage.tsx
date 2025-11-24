import { View, type ScrollViewProps } from "react-native";
import { Checkout } from "@/widgets/checkout";

type CheckoutPageProps = {
  onScroll?: ScrollViewProps["onScroll"];
  scrollEventThrottle?: number;
};

export const CheckoutPage = ({ onScroll, scrollEventThrottle }: CheckoutPageProps) => {
  return (
    <View className="flex-1 bg-white">
      <Checkout onScroll={onScroll} scrollEventThrottle={scrollEventThrottle} />
    </View>
  );
};
