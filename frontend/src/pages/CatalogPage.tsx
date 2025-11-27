import { useCartItems } from "@/entities/cart/store/store";
import { CartSummary } from "@/widgets/cart";
import { CatalogView } from "@/widgets/catalog/catalog-view/ui/CatalogView";
import { useState } from "react";
import { View } from "react-native";

export const CatalogPage = () => {
    const [search, setSearch] = useState("");
    const items = useCartItems();

    return (
        <View className="flex-1">
            <CatalogView
                search={search}
                onChangeSearch={setSearch}
            />
            {items.length > 0 && (
                <View className="absolute bottom-0 left-0 right-0">
                    <CartSummary />
                </View>
            )}
        </View>
    )
};
