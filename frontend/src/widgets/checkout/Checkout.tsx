import { ShoppingBag } from "lucide-react-native";
import { Text, View, type ScrollViewProps } from "react-native";
import Animated from "react-native-reanimated";
import { CartItemsList } from "@/entities/cart/ui/CartItemsList";
import { CartSummary } from "@/entities/cart/ui/CartSummary";
import type { CheckoutFormValues } from "@/entities/checkout/model/types";
import { CheckoutConfirm } from "@/features/checkout-confirm";
import { DeliveryOptions, PaymentOptions, RecipientSection, useCheckoutForm } from "@/features/checkout-form";

type CheckoutProps = {
  onSubmit?: (values: CheckoutFormValues) => Promise<void> | void;
  defaultValues?: Partial<
    Pick<CheckoutFormValues, "fullName" | "phone" | "address" | "deliveryType" | "paymentType">
  >;
  isLoading?: boolean;
  onScroll?: ScrollViewProps["onScroll"];
  scrollEventThrottle?: number;
};

export const Checkout = ({ onSubmit, defaultValues, isLoading, onScroll, scrollEventThrottle }: CheckoutProps) => {
  const { fields, setters, cart, payload } = useCheckoutForm({ defaultValues });
  const { fullName, phone, address, deliveryType, paymentType } = fields;
  const { setFullName, setPhone, setAddress, setDeliveryType, setPaymentType } = setters;
  const { items, totalQty, totalPrice } = cart;

  return (
    <>
      <Animated.ScrollView
        className="flex-1"
        onScroll={onScroll}
        scrollEventThrottle={scrollEventThrottle ?? 16}
        contentContainerStyle={{ paddingBottom: 120, paddingHorizontal: 24, paddingTop: 24 }}
      >
        <RecipientSection
          fullName={fullName}
          phone={phone}
          onChangeFullName={setFullName}
          onChangePhone={setPhone}
        />

        <DeliveryOptions value={deliveryType} onChange={setDeliveryType} address={address} onChangeAddress={setAddress} />

        <PaymentOptions value={paymentType} onChange={setPaymentType} />

        <View className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100">
          <View className="flex-row items-center justify-between mb-3">
            <View className="flex-row items-center gap-2">
              <ShoppingBag size={18} color="#0f172a" />
              <Text className="text-lg font-semibold text-gray-900">Состав заказа</Text>
            </View>
            <View className="px-3 py-1.5 rounded-full bg-gray-100">
              <Text className="text-xs font-semibold text-gray-800">{totalQty} шт</Text>
            </View>
          </View>

          <CartItemsList items={items} />

          <View className="h-px bg-gray-200 my-4" />

          <CartSummary totalQty={totalQty} totalPrice={totalPrice} />
        </View>
      </Animated.ScrollView>

      <CheckoutConfirm onSubmit={onSubmit} payload={payload} isLoading={isLoading} />
    </>
  );
};
