import { CreditCard } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";
import type { PaymentOption } from "@/entities/checkout/model/types";

type PaymentOptionsProps = {
  value: PaymentOption;
  onChange: (value: PaymentOption) => void;
};

export const PaymentOptions = ({ value, onChange }: PaymentOptionsProps) => {
  return (
    <View className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100">
      <View className="flex-row items-center gap-2 mb-3">
        <CreditCard size={18} color="#0f172a" />
        <Text className="text-lg font-semibold text-gray-900">Оплата</Text>
      </View>
      <Text className="text-sm text-gray-500 mb-3">Безопасно, шифрование 256-bit</Text>

      <View className="flex-row gap-2">
        <OptionTile
          active={value === "card"}
          onPress={() => onChange("card")}
          title="Картой онлайн"
          description="Apple Pay / Google Pay"
          tone="dark"
        />
        <OptionTile
          active={value === "cash"}
          onPress={() => onChange("cash")}
          title="Наличными"
          description="Курьеру или в пункте"
          tone="dark"
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
  tone: "blue" | "dark";
};

const OptionTile = ({ title, description, active, onPress, tone }: OptionTileProps) => {
  const activeTone = tone === "blue" ? "bg-blue-600 border-blue-600" : "bg-gray-900 border-gray-900";
  return (
    <Pressable
      onPress={onPress}
      className={`flex-1 px-4 py-3 rounded-2xl border ${active ? activeTone : "bg-gray-50 border-gray-200"}`}
    >
      <View className="flex-row items-center gap-2">
        <Text className={`font-semibold ${active ? "text-white" : "text-gray-900"}`}>{title}</Text>
      </View>
      <Text className={`mt-1 text-sm ${active ? "text-white/80" : "text-gray-500"}`}>{description}</Text>
    </Pressable>
  );
};
