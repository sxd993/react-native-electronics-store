import { useLayoutEffect } from "react";
import { router, useNavigation } from "expo-router";
import { ProductDetailsPage } from "@/pages/ProductDetailsPage";
import { CollapsingHeader, useCollapsingHeader } from "@/widgets/collapsing-header";

export default function ProductDetailsScreen() {
  const navigation = useNavigation();
  const { progress, onScroll, scrollEventThrottle } = useCollapsingHeader();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => (
        <CollapsingHeader
          title="Товар"
          onBack={() => router.back()}
          progress={progress}
        />
      ),
    });
  }, [navigation, progress]);

  return <ProductDetailsPage onScroll={onScroll} scrollEventThrottle={scrollEventThrottle} />;
}
