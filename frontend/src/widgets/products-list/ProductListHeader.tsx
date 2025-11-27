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
    <View className=" flex-row items-center">
      <SearchInput value={search} onChangeText={onChangeSearch} />
      <View className="ml-4">
        <FiltersBar />
      </View>
    </View>
  );
};
