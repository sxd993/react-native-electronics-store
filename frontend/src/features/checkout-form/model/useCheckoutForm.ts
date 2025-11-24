import { useEffect, useMemo, useState } from "react";
import { useCartItems, useCartTotalPrice, useCartTotalQty } from "@/entities/cart/store/store";
import type { CheckoutFormValues, DeliveryOption, PaymentOption } from "@/entities/checkout/model/types";

type UseCheckoutFormParams = {
  defaultValues?: Partial<
    Pick<CheckoutFormValues, "fullName" | "phone" | "address" | "deliveryType" | "paymentType">
  >;
};

export const useCheckoutForm = ({ defaultValues }: UseCheckoutFormParams = {}) => {
  const items = useCartItems();
  const totalPrice = useCartTotalPrice();
  const totalQty = useCartTotalQty();

  const [deliveryType, setDeliveryType] = useState<DeliveryOption>(defaultValues?.deliveryType ?? "delivery");
  const [paymentType, setPaymentType] = useState<PaymentOption>(defaultValues?.paymentType ?? "card");
  const [fullName, setFullName] = useState(defaultValues?.fullName ?? "Иван Иванов");
  const [phone, setPhone] = useState(defaultValues?.phone ?? "+7 (999) 123-45-67");
  const [address, setAddress] = useState(defaultValues?.address ?? "Москва, Тверская улица, 12");

  useEffect(() => {
    if (!defaultValues) return;
    setDeliveryType(defaultValues.deliveryType ?? "delivery");
    setPaymentType(defaultValues.paymentType ?? "card");
    if (defaultValues.fullName) setFullName(defaultValues.fullName);
    if (defaultValues.phone) setPhone(defaultValues.phone);
    if (defaultValues.address) setAddress(defaultValues.address);
  }, [defaultValues]);

  const payload = useMemo<CheckoutFormValues>(
    () => ({
      fullName,
      phone,
      address,
      deliveryType,
      paymentType,
      totalQty,
      totalPrice,
      items,
    }),
    [address, deliveryType, fullName, items, paymentType, phone, totalPrice, totalQty]
  );

  return {
    fields: {
      fullName,
      phone,
      address,
      deliveryType,
      paymentType,
    },
    setters: {
      setFullName,
      setPhone,
      setAddress,
      setDeliveryType,
      setPaymentType,
    },
    cart: {
      items,
      totalPrice,
      totalQty,
    },
    payload,
  };
};
