import { useCartTotalPrice } from '@/entities/cart/store/store';
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import { Text, View } from 'react-native';
import { CartList } from '@/widgets/cart/ui/CartList';
import { useCartBottomSheetModal } from '../model/useCartBottomSheetModal';

export const CartBottomSheetModal = () => {
    const { bottomSheetModalRef, snapPoints, handleChange, handleDismiss } = useCartBottomSheetModal();
    const totalPrice = useCartTotalPrice();

    return (
        <BottomSheetModal
            ref={bottomSheetModalRef}
            snapPoints={snapPoints}
            index={1}
            onChange={handleChange}
            onDismiss={handleDismiss}
        >
            <BottomSheetView className="flex-1 p-4">
                <Text className="text-lg font-semibold mb-4">Корзина</Text>
                <CartList />
                <View className="mt-4 flex-row items-center justify-between">
                    <Text className="text-base text-gray-600">Итого</Text>
                    <Text className="text-xl font-semibold text-gray-900">{totalPrice.toFixed(2)}$</Text>
                </View>
            </BottomSheetView>
        </BottomSheetModal>
    );
};
