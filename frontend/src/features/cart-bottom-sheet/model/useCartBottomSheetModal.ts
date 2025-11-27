import { useCartBottomSheetIsOpen, useCartBottomSheetStore } from '@/entities/cart/store/BottomSheetCart.store';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useEffect, useMemo, useRef } from 'react';

export const useCartBottomSheetModal = () => {
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const isOpen = useCartBottomSheetIsOpen();
    const close = useCartBottomSheetStore((state) => state.close);
    const snapPoints = useMemo(() => [ '85%'], []);

    useEffect(() => {
        if (isOpen) {
            bottomSheetModalRef.current?.present();
        } else {
            bottomSheetModalRef.current?.dismiss();
        }
    }, [isOpen]);

    const handleChange = (index: number) => {
        if (index === -1) close();
    };

    const handleDismiss = () => {
        close();
    };

    return {
        bottomSheetModalRef,
        snapPoints,
        handleChange,
        handleDismiss,
    };
};
