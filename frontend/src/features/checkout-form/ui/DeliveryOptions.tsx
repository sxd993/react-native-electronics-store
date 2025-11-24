import { Home, MapPin, Truck } from "lucide-react-native";
import type { ReactNode } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import type { DeliveryOption } from "@/entities/checkout/model/types";

type DeliveryOptionsProps = {
  value: DeliveryOption;
  onChange: (value: DeliveryOption) => void;
  address: string;
  onChangeAddress: (value: string) => void;
};

export const DeliveryOptions = ({ value, onChange, address, onChangeAddress }: DeliveryOptionsProps) => {
  return (
    <View className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100">
      <View className="flex-row items-center gap-2 mb-3">
        <MapPin size={18} color="#0f172a" />
        <Text className="text-lg font-semibold text-gray-900">Доставка</Text>
      </View>
      <Text className="text-sm text-gray-500 mb-3">Согласуем время после оплаты</Text>

      <View className="flex-row gap-2 mb-4">
        <OptionTile
          active={value === "delivery"}
          onPress={() => onChange("delivery")}
          title="Курьер"
          description="1-2 рабочих дня"
          icon={<Truck size={16} color={value === "delivery" ? "#ecfeff" : "#0f172a"} />}
          tone="blue"
        />
        <OptionTile
          active={value === "pickup"}
          onPress={() => onChange("pickup")}
          title="Самовывоз"
          description="Сегодня после 16:00"
          icon={<Home size={16} color={value === "pickup" ? "#ecfeff" : "#0f172a"} />}
          tone="blue"
        />
      </View>

      <View>
        <Text className="text-xs text-gray-500 mb-2">Адрес</Text>
        <TextInput
          value={address}
          onChangeText={onChangeAddress}
          className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-base text-gray-900"
        />
      </View>
    </View>
  );
};

type OptionTileProps = {
  title: string;
  description: string;
  active: boolean;
  onPress: () => void;
  icon?: ReactNode;
  tone: "blue" | "dark";
};

const OptionTile = ({ title, description, active, onPress, icon, tone }: OptionTileProps) => {
  const activeTone = tone === "blue" ? "bg-blue-600 border-blue-600" : "bg-gray-900 border-gray-900";
  return (
    <Pressable
      onPress={onPress}
      className={`flex-1 px-4 py-3 rounded-2xl border ${active ? activeTone : "bg-gray-50 border-gray-200"}`}
    >
      <View className="flex-row items-center gap-2">
        {icon}
        <Text className={`font-semibold ${active ? "text-white" : "text-gray-900"}`}>{title}</Text>
      </View>
      <Text className={`mt-1 text-sm ${active ? "text-white/80" : "text-gray-500"}`}>{description}</Text>
    </Pressable>
  );
};
