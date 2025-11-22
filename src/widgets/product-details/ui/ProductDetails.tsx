import { ActivityIndicator, Image, Pressable, View, Text } from "react-native";
import { useProductDetails } from "../model/useProductDetails";

export const ProductDetails = () => {
    const { currentProduct, isLoading, error } = useProductDetails();

    if (isLoading) return <ActivityIndicator />;
    if (error) return <Text>Ошибка</Text>;

    return (
        <View className="flex-1 bg-white p-5">
            <View className="items-center mb-6">
                <Image
                    source={{ uri: currentProduct?.image }}
                    className="w-60 h-60 rounded-2xl shadow"
                    resizeMode="contain"
                />
            </View>

            <Text className="text-2xl font-semibold text-gray-900 mb-2 text-center">
                {currentProduct?.title}
            </Text>

            <Text className="text-xl font-bold text-gray-800 mb-4 text-center">
                {currentProduct?.price}$
            </Text>

            <Text className="text-gray-600 text-base leading-6 mb-8">
                {currentProduct?.description}
            </Text>

            <Pressable
                onPress={() => {}}
                className="bg-black py-4 rounded-2xl items-center shadow-sm active:opacity-70"
            >
                <Text className="text-white text-lg font-medium">В корзину</Text>
            </Pressable>
        </View>
    );
}
