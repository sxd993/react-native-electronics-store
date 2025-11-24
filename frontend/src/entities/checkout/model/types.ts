import type { CartItem } from "@/entities/cart/model/cart.types";

export type DeliveryOption = "delivery" | "pickup";
export type PaymentOption = "card" | "cash";

export type CheckoutFormValues = {
  fullName: string;
  phone: string;
  address: string;
  deliveryType: DeliveryOption;
  paymentType: PaymentOption;
  totalQty: number;
  totalPrice: number;
  items: CartItem[];
};
