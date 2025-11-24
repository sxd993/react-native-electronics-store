import { Pressable, Text, View } from "react-native";
import { ArrowLeft } from "lucide-react-native";
import type { ReactNode } from "react";

type HeaderProps = {
  onBack: () => void;
  title?: ReactNode;
};

export const Header = ({ onBack, title }: HeaderProps) => {
  return (
    <View className="flex-row items-center bg-white px-6 min-h-16">
      <Pressable
        onPress={onBack}
        className="flex-row items-center gap-2"
      >
        <ArrowLeft size={18} color="#0f172a" />
      </Pressable>
      <View className="flex-1 items-center">
        {typeof title === "string" ? (
          <Text
            className="text-2xl font-semibold text-gray-900 leading-tight text-center"
            numberOfLines={1}
          >
            {title}
          </Text>
        ) : (
          title
        )}
      </View>
    </View>
  );
};
