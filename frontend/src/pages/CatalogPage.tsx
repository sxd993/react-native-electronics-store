
import { useState } from "react";
import { View } from "react-native";
import { ProductList } from "@/widgets/products-list/ProductList";
import { ProductListHeader } from "@/widgets/products-list/ProductListHeader";

export const CatalogPage = () => {
    const [search, setSearch] = useState("");

    return (
        <View className="flex-1 bg-white">
            <ProductList
                listHeader={<ProductListHeader search={search} onChangeSearch={setSearch} />}
                searchQuery={search}
            />
        </View>
    );
};
