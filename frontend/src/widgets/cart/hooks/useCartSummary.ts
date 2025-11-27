import { useCartBottomSheetStore } from '@/entities/cart/store/BottomSheetCart.store';
import { useCartTotalPrice } from '@/entities/cart/store/store';

export const useCartSummary = () => {

    const totalPrice = useCartTotalPrice();
    const openBottomSheet = useCartBottomSheetStore((state) => state.open);

    const onOpenBottomSheet = () => {
        openBottomSheet();
    };

    return {
        totalPrice,
        onOpenBottomSheet,
    };

};
