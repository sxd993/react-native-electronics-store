
import { useState } from "react";
import { ScrollView  } from "react-native";
import { ProductList } from "@/widgets/products-list/ProductList";
import { ProductListHeader } from "@/widgets/products-list/ProductListHeader";
import { CatalogHeader } from "@/widgets/catalog-header";

export const CatalogPage = () => {
    const [search, setSearch] = useState("");

    return (
        <ScrollView  className="flex-1 bg-white">
            <CatalogHeader/>
            <ProductList
                listHeader={<ProductListHeader search={search} onChangeSearch={setSearch} />}
                searchQuery={search}
            />
        </ScrollView >
    );
};
