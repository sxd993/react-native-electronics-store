import { ShoppingBag } from "lucide-react-native";
import { ScrollView, Text, View } from "react-native";
import { CartItemsList } from "@/entities/cart/ui/CartItemsList";
import { CartSummary } from "@/entities/cart/ui/CartSummary";
import type { CheckoutFormValues, DeliveryOption, PaymentOption } from "@/entities/checkout/model/types";
import { CheckoutConfirm } from "@/features/checkout-confirm";
import { DeliveryOptions, PaymentOptions, RecipientSection, useCheckoutForm } from "@/features/checkout-form";

type CheckoutProps = {
  onSubmit?: (values: CheckoutFormValues) => Promise<void> | void;
  defaultValues?: Partial<
    Pick<CheckoutFormValues, "fullName" | "phone" | "address" | "deliveryType" | "paymentType">
  >;
  isLoading?: boolean;
};

export const Checkout = ({ onSubmit, defaultValues, isLoading }: CheckoutProps) => {
  const { fields, setters, cart, payload } = useCheckoutForm({ defaultValues });
  const { fullName, phone, address, deliveryType, paymentType } = fields;
  const { setFullName, setPhone, setAddress, setDeliveryType, setPaymentType } = setters;
  const { items, totalQty, totalPrice } = cart;

  return (
    <>
      <ScrollView
        className="flex-1"
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
      </ScrollView>

      <CheckoutConfirm onSubmit={onSubmit} payload={payload} isLoading={isLoading} />
    </>
  );
};
