
import { MapPin } from "lucide-react-native";
import { Image, Pressable, Text, View } from "react-native";
import { FiltersBar } from "@/features/filters";
import { SearchInput } from "@/features/search";

type CatalogHeaderProps = {
    onChangeCity?: () => void;
    city?: string;
    search: string;
    onChangeSearch: (value: string) => void;
};

export const CatalogHeader = ({
    search,
    onChangeSearch,
}: CatalogHeaderProps) => {
    return (
        <View>
            <View className="flex-row items-center px-4 mt-4">
                <SearchInput value={search} onChangeText={onChangeSearch} />
                <View className="ml-4">
                    <FiltersBar />
                </View>
            </View>
        </View>
    );
};