import { Search, X } from "lucide-react-native";
import { Pressable, TextInput, View } from "react-native";

type SearchInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

export const SearchInput = ({ value, onChangeText, placeholder = "Поиск по каталогу" }: SearchInputProps) => {
  const showClear = value.length > 0;

  return (
    <View className="relative">
      <View className="absolute left-4 top-3.5">
        <Search size={18} color="#111827" />
      </View>

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9ca3af"
        className="bg-white rounded-2xl pl-11 pr-11 py-3 text-base text-gray-900 border border-gray-200 shadow-sm"
      />

      {showClear && (
        <Pressable
          onPress={() => onChangeText("")}
          className="absolute right-3 top-2.5 p-2 rounded-full bg-black active:opacity-85"
        >
          <X size={14} color="#fff" />
        </Pressable>
      )}
    </View>
  );
};
