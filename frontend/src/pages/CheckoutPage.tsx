import { useEffect, useRef, useState, type ReactNode } from "react";
import { Alert, Pressable, ScrollView, Text, TextInput, View, type KeyboardTypeOptions } from "react-native";
import {
  ArrowLeft,
  BadgeCheck,
  CreditCard,
  Home,
  MapPin,
  Phone,
  ShieldCheck,
  ShoppingBag,
  Truck,
} from "lucide-react-native";
import { router } from "expo-router";
import { useCartItems, useCartTotalPrice, useCartTotalQty } from "@/entities/cart/store/store";

type DeliveryOption = "delivery" | "pickup";
type PaymentOption = "card" | "cash";

export const CheckoutPage = () => {
  const [deliveryType, setDeliveryType] = useState<DeliveryOption>("delivery");
  const [paymentType, setPaymentType] = useState<PaymentOption>("card");
  const [showToast, setShowToast] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const items = useCartItems();
  const totalPrice = useCartTotalPrice();
  const totalQty = useCartTotalQty();

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleCheckout = () => {
    setShowToast(true);
    timerRef.current = setTimeout(() => setShowToast(false), 2600);
    Alert.alert("Заказ оформлен", "Мы уже отправили подтверждение в приложение.");
  };

  return (
    <View className="flex-1 bg-white">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 120, paddingHorizontal: 24, paddingTop: 24, rowGap: 24 }}
      >
        <View className="flex-row items-center justify-between">
          <Pressable
            onPress={() => router.back()}
            className="flex-row items-center gap-2 px-3 py-2 rounded-full bg-gray-100 border border-gray-200 active:opacity-80"
          >
            <ArrowLeft size={18} color="#0f172a" />
            <Text className="text-gray-900 font-semibold">Назад</Text>
          </Pressable>
          <Text className="text-gray-500 text-sm">Доставка 1-2 дня</Text>
        </View>

        <View>
          <Text className="text-4xl font-semibold text-gray-900 leading-tight">Оформление</Text>
          <Text className="text-base text-gray-500 mt-2">
            Заполните контакты, выберите доставку и оплату. После подтверждения придёт пуш.
          </Text>
        </View>

        <SectionCard
          title="Получатель"
          icon={<Phone size={18} color="#0f172a" />}
          actionLabel="Связаться"
        >
          <View className="bg-gray-50 border border-gray-200 rounded-2xl p-4 space-y-4">
            <InputField label="ФИО" defaultValue="Иван Иванов" showDivider />
            <InputField
              label="Телефон"
              defaultValue="+7 (999) 123-45-67"
              keyboardType="phone-pad"
            />
          </View>
        </SectionCard>

        <SectionCard
          title="Доставка"
          icon={<MapPin size={18} color="#0f172a" />}
          helper="Согласуем время после оплаты"
        >
          <View className="flex-row gap-2 mb-4">
            <OptionTile
              active={deliveryType === "delivery"}
              onPress={() => setDeliveryType("delivery")}
              title="Курьер"
              description="1-2 рабочих дня"
              icon={<Truck size={16} color={deliveryType === "delivery" ? "#ecfeff" : "#0f172a"} />}
              tone="blue"
            />
            <OptionTile
              active={deliveryType === "pickup"}
              onPress={() => setDeliveryType("pickup")}
              title="Самовывоз"
              description="Сегодня после 16:00"
              icon={<Home size={16} color={deliveryType === "pickup" ? "#ecfeff" : "#0f172a"} />}
              tone="blue"
            />
          </View>
          <InputField label="Адрес" defaultValue="Москва, Тверская улица, 12" />
        </SectionCard>

        <SectionCard
          title="Оплата"
          icon={<CreditCard size={18} color="#0f172a" />}
          helper="Безопасно, шифрование 256-bit"
        >
          <View className="flex-row gap-2">
            <OptionTile
              active={paymentType === "card"}
              onPress={() => setPaymentType("card")}
              title="Картой онлайн"
              description="Apple Pay / Google Pay"
              tone="dark"
            />
            <OptionTile
              active={paymentType === "cash"}
              onPress={() => setPaymentType("cash")}
              title="Наличными"
              description="Курьеру или в пункте"
              tone="dark"
            />
          </View>
          <View className="mt-4 flex-row items-center gap-2 px-3 py-3 bg-gray-50 rounded-2xl border border-gray-200">
            <ShieldCheck size={16} color="#0f172a" />
            <Text className="text-sm text-gray-700">Данные карты не сохраняются и шифруются</Text>
          </View>
        </SectionCard>

        <SectionCard
          title="Состав заказа"
          icon={<ShoppingBag size={18} color="#0f172a" />}
          actionLabel={`${totalQty} шт`}
        >
          <View className="space-y-3">
            {items.length === 0 ? (
              <Text className="text-gray-500">Корзина пока пуста, добавьте товары перед оплатой.</Text>
            ) : (
              items.map((item) => (
                <View key={item.id} className="flex-row items-center justify-between">
                  <View className="flex-1 mr-3">
                    <Text className="text-base font-semibold text-gray-900" numberOfLines={1}>
                      {item.title}
                    </Text>
                    <Text className="text-sm text-gray-500 mt-0.5">
                      {item.qty} шт · {item.price.toFixed(2)}$
                    </Text>
                  </View>
                  <Text className="text-base font-semibold text-gray-900">
                    {(item.qty * item.price).toFixed(2)}$
                  </Text>
                </View>
              ))
            )}
          </View>

          <View className="h-px bg-gray-200 my-4" />

          <View className="flex-row items-center justify-between">
            <Text className="text-base text-gray-600">Итого к оплате</Text>
            <Text className="text-2xl font-semibold text-gray-900">{totalPrice.toFixed(2)}$</Text>
          </View>
        </SectionCard>
      </ScrollView>

      {showToast && (
        <View className="absolute left-0 right-0 top-6 px-6">
          <View className="flex-row items-center gap-3 bg-emerald-500 rounded-2xl px-4 py-3 shadow-lg shadow-emerald-500/40">
            <BadgeCheck size={18} color="#ecfeff" />
            <Text className="text-white font-semibold">Заказ оформлен — уведомление отправлено</Text>
          </View>
        </View>
      )}

      <View className="px-6 pb-6 pt-3 absolute left-0 right-0 bottom-0 bg-white/95 border-t border-gray-100">
        <Pressable
          onPress={handleCheckout}
          className="w-full py-4 bg-emerald-400 rounded-2xl items-center border border-emerald-500 shadow-lg shadow-emerald-500/40 active:opacity-85"
        >
          <Text className="text-lg font-semibold text-emerald-950">Подтвердить и оплатить</Text>
        </Pressable>
      </View>
    </View>
  );
};

type SectionCardProps = {
  title: string;
  icon?: ReactNode;
  actionLabel?: string;
  helper?: string;
  children: ReactNode;
};

const SectionCard = ({ title, icon, actionLabel, helper, children }: SectionCardProps) => {
  return (
    <View className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100">
      <View className="flex-row items-center justify-between mb-3">
        <View className="flex-row items-center gap-2">
          {icon}
          <Text className="text-lg font-semibold text-gray-900">{title}</Text>
        </View>
        {actionLabel && (
          <View className="px-3 py-1.5 rounded-full bg-gray-100">
            <Text className="text-xs font-semibold text-gray-800">{actionLabel}</Text>
          </View>
        )}
      </View>
      {helper && <Text className="text-sm text-gray-500 mb-3">{helper}</Text>}
      {children}
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
  const activeTone =
    tone === "blue"
      ? "bg-blue-600 border-blue-600"
      : "bg-gray-900 border-gray-900";
  return (
    <Pressable
      onPress={onPress}
      className={`flex-1 px-4 py-3 rounded-2xl border ${active ? activeTone : "bg-gray-50 border-gray-200"}`}
    >
      <View className="flex-row items-center gap-2">
        {icon}
        <Text className={`font-semibold ${active ? "text-white" : "text-gray-900"}`}>{title}</Text>
      </View>
      <Text className={`mt-1 text-sm ${active ? "text-white/80" : "text-gray-500"}`}>
        {description}
      </Text>
    </Pressable>
  );
};

type InputFieldProps = {
  label: string;
  defaultValue?: string;
  keyboardType?: KeyboardTypeOptions;
  showDivider?: boolean;
};

const InputField = ({ label, defaultValue, keyboardType = "default", showDivider }: InputFieldProps) => {
  return (
    <View className={showDivider ? "pb-4 border-b border-gray-200" : ""}>
      <Text className="text-xs text-gray-500 mb-2">{label}</Text>
      <TextInput
        defaultValue={defaultValue}
        keyboardType={keyboardType}
        className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-base text-gray-900"
      />
    </View>
  );
};
