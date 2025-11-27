import { Tabs, } from "react-native-collapsible-tab-view";
import { useProducts } from "@/features/get-products";
import { ProductCard } from "@/entities/product/ui/ProductCard";
import { CatalogHeader } from "@/widgets/catalog/catalog-header/CatalogHeader";

type Props = {
    search: string;
    onChangeSearch: (s: string) => void;
    city?: string;
    onChangeCity?: () => void;
};

export const CatalogView = ({ search, onChangeSearch, city, onChangeCity }: Props) => {
    const { products } = useProducts();
    const filtered = products?.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Tabs.Container
            renderTabBar={() => null}
        >
            <Tabs.Tab name="Products">
                <Tabs.FlatList
                    data={filtered}
                    numColumns={2}
                    keyExtractor={p => p.id.toString()}
                    columnWrapperStyle={{ justifyContent: "space-between" }}
                    renderItem={({ item }) => (
                        <ProductCard product={item} />
                    )}
                    ListHeaderComponent={
                        <CatalogHeader
                            search={search}
                            onChangeSearch={onChangeSearch}
                            onChangeCity={onChangeCity}
                            city={city}
                        />
                    }
                    contentContainerStyle={{
                        paddingHorizontal: 16,
                        gap: 16
                    }}
                />
            </Tabs.Tab>
        </Tabs.Container>
    );
};
