import { Tabs, } from "react-native-collapsible-tab-view";
import { ProductListHeader } from "@/widgets/products-list/ProductListHeader";
import { useProductList } from "@/features/get-products";
import { ProductCard } from "@/entities/product/ui/ProductCard";

type Props = {
    search: string;
    onChangeSearch: (s: string) => void;
};

export const CatalogView = ({ search, onChangeSearch }: Props) => {
    const { products } = useProductList();
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
                        <ProductListHeader
                            search={search}
                            onChangeSearch={onChangeSearch}
                        />
                    }
                    stickyHeaderIndices={[0]}
                    contentContainerStyle={{
                        gap: 16,
                        paddingHorizontal: 24,
                        paddingBottom: 120,
                    }}
                />
            </Tabs.Tab>
        </Tabs.Container>
    );
};


