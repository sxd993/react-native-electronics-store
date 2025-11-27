
import { CatalogView } from "@/widgets/catalog-view/ui/CatalogView";
import { CatalogHeader } from "@/widgets/catalog-header";
import { useState } from "react";
import { View } from "react-native";

export const CatalogPage = () => {
    const [search, setSearch] = useState("");

    return (
        <View className="flex-1">
            <CatalogView
                search={search}
                onChangeSearch={setSearch}
            />
        </View>
    )
};

