import { Pressable, Text, View } from "react-native";
import { ArrowLeft } from "lucide-react-native";

type CheckoutHeaderProps = {
  onBack: () => void;
};

export const CheckoutHeader = ({ onBack }: CheckoutHeaderProps) => {
  return (
    <View className="flex-row items-center justify-between bg-white px-3">
      <Pressable
        onPress={onBack}
        className="flex-row items-center gap-2 px-3 py-2 rounded-full border border-gray-200 active:opacity-80"
      >
        <ArrowLeft size={18} color="#0f172a" />
        <Text className="text-gray-900 font-semibold">Назад</Text>
      </Pressable>
      <Text className="text-4xl font-semibold text-gray-900 leading-tight">Оформление</Text>
    </View>
  );
};
