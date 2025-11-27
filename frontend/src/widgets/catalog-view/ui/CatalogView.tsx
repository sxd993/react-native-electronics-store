import { Tabs, } from "react-native-collapsible-tab-view";
import { ProductListHeader } from "@/widgets/products-list/ProductListHeader";
import { useProductList } from "@/features/get-products";
import { ProductCard } from "@/entities/product/ui/ProductCard";
import { ChooseCityWidget } from "@/widgets/choose-city";
import { CatalogHeader } from "@/widgets/catalog-header/CatalogHeader";

type Props = {
    search: string;
    onChangeSearch: (s: string) => void;
    city?: string;
    onChangeCity?: () => void;
};

export const CatalogView = ({ search, onChangeSearch, city, onChangeCity }: Props) => {
    const { products } = useProductList();
    const filtered = products?.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Tabs.Container
            renderTabBar={() => null}
            renderHeader={() => <CatalogHeader search={search} onChangeSearch={onChangeSearch} onChangeCity={onChangeCity} />}
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
                    contentContainerStyle={{
                        gap: 16,
                        paddingHorizontal: 16,
                        paddingBottom: 120,
                        paddingTop: 12,
                    }}
                />
            </Tabs.Tab>
        </Tabs.Container>
    );
};

