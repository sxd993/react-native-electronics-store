import { useProductList } from "@/features/get-product-list";
import { useLocalSearchParams } from "expo-router";

export const useProductDetails = () => {

    // Айди из ссылки
    const { id } = useLocalSearchParams();
    const urlId = id ? Number(id) : undefined

    // Список всех товаров
    const { products, isLoading, error } = useProductList();

    // Текущий товар
    const currentProduct = products?.find(p => p.id === urlId)

    return {
        currentProduct,
        isLoading,
        error
    }
}

