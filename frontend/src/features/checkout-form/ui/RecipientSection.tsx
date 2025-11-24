import { Phone } from "lucide-react-native";
import { Text, TextInput, View } from "react-native";

type RecipientSectionProps = {
  fullName: string;
  phone: string;
  onChangeFullName: (value: string) => void;
  onChangePhone: (value: string) => void;
};

export const RecipientSection = ({ fullName, phone, onChangeFullName, onChangePhone }: RecipientSectionProps) => {
  return (
    <View className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100">
      <View className="flex-row items-center justify-between mb-3">
        <View className="flex-row items-center gap-2">
          <Phone size={18} color="#0f172a" />
          <Text className="text-lg font-semibold text-gray-900">Получатель</Text>
        </View>
        <View className="px-3 py-1.5 rounded-full bg-gray-100">
          <Text className="text-xs font-semibold text-gray-800">Связаться</Text>
        </View>
      </View>
      <View className="bg-gray-50 border border-gray-200 rounded-2xl p-4 space-y-4">
        <View className="pb-4 border-b border-gray-200">
          <Text className="text-xs text-gray-500 mb-2">ФИО</Text>
          <TextInput
            value={fullName}
            onChangeText={onChangeFullName}
            className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-base text-gray-900"
          />
        </View>
        <View>
          <Text className="text-xs text-gray-500 mb-2">Телефон</Text>
          <TextInput
            value={phone}
            onChangeText={onChangePhone}
            keyboardType="phone-pad"
            className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-base text-gray-900"
          />
        </View>
      </View>
    </View>
  );
};
