import AppIcon from "assets/images/icon.png";
import { MapPin } from "lucide-react-native";
import { Image, Pressable, Text, View } from "react-native";

type AppHeaderBarProps = {
  onChangeCity?: () => void;
  city?: string;
};

export const AppHeaderBar = ({ onChangeCity, city = "Ваш город" }: AppHeaderBarProps) => {
  return (
    <View className="bg-white border-b border-gray-100 px-3 pt-12 pb-5 shadow-sm">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-3">
          <Image source={AppIcon} className="w-12 h-12 rounded-xl" />
          <View>
            <Text className="text-lg font-semibold text-gray-900 leading-tight">
              E-commerce shop
            </Text>
            <Text className="text-sm text-gray-500 mt-0.5">
              Найдём лучшее рядом с вами
            </Text>
          </View>
        </View>

        <Pressable
          onPress={onChangeCity}
          className="flex-row items-center gap-2 px-3 py-2 rounded-full bg-gray-900 active:opacity-90"
          hitSlop={8}
        >
          <MapPin size={16} color="#fff" />
          <Text className="text-white font-semibold text-sm">{city}</Text>
        </Pressable>
      </View>
    </View>
  );
};
