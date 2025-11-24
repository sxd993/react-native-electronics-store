import { BadgeCheck } from "lucide-react-native";
import { useEffect, useRef, useState } from "react";
import { Alert, Pressable, Text, View } from "react-native";
import type { CheckoutFormValues } from "@/entities/checkout/model/types";

type CheckoutConfirmProps = {
  payload: CheckoutFormValues;
  onSubmit?: (values: CheckoutFormValues) => Promise<void> | void;
  isLoading?: boolean;
};

export const CheckoutConfirm = ({ payload, onSubmit, isLoading }: CheckoutConfirmProps) => {
  const [showToast, setShowToast] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleCheckout = async () => {
    if (isLoading) return;

    try {
      await onSubmit?.(payload);
      setShowToast(true);
      timerRef.current = setTimeout(() => setShowToast(false), 2600);
      Alert.alert("Заказ оформлен", "Мы уже отправили подтверждение в приложение.");
    } catch (error) {
      Alert.alert("Не удалось оформить заказ", "Попробуйте еще раз.");
      console.error("checkout error", error);
    }
  };

  return (
    <>
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
          disabled={isLoading}
          className={`w-full py-4 rounded-2xl items-center border ${
            isLoading
              ? "bg-emerald-200 border-emerald-200"
              : "bg-emerald-400 border-emerald-500 shadow-lg shadow-emerald-500/40 active:opacity-85"
          }`}
        >
          <Text className="text-lg font-semibold text-emerald-950">
            {isLoading ? "Обрабатываем..." : "Подтвердить и оплатить"}
          </Text>
        </Pressable>
      </View>
    </>
  );
};
