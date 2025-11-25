import { View } from "react-native";
import { FiltersBar } from "@/features/filters";
import { SearchInput } from "@/features/search";

type ProductListHeaderProps = {
  search: string;
  onChangeSearch: (value: string) => void;
};

export const ProductListHeader = ({
  search,
  onChangeSearch,
}: ProductListHeaderProps) => {
  return (
    <View className="pt-6 pb-4 px-6">
      <View>
        <SearchInput value={search} onChangeText={onChangeSearch} />
      </View>
      <View className="mt-3">
        <FiltersBar />
      </View>
    </View>
  );
};
