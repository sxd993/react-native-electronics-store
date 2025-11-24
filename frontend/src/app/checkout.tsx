import { useLayoutEffect } from "react";
import { router, useNavigation } from "expo-router";
import { CheckoutPage } from "@/pages";
import { CollapsingHeader, useCollapsingHeader } from "@/widgets/collapsing-header";

export default function CheckoutScreen() {
  const navigation = useNavigation();
  const { progress, onScroll, scrollEventThrottle } = useCollapsingHeader();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => (
        <CollapsingHeader
          title="Оформление"
          onBack={() => router.back()}
          progress={progress}
        />
      ),
    });
  }, [navigation, progress]);

  return <CheckoutPage onScroll={onScroll} scrollEventThrottle={scrollEventThrottle} />;
}
