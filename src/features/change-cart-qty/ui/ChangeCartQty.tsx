import { Minus, Plus } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';
import { useCartStore } from '@/entities/cart/store/store';

type ChangeCartQtyProps = {
    itemId: number;
    qty: number;
};

export const ChangeCartQty = ({ itemId, qty }: ChangeCartQtyProps) => {
    const changeQty = useCartStore((state) => state.changeQty);

    return (
        <View className="flex-row items-center gap-3">
            <Pressable
                className="w-8 h-8 rounded-full bg-gray-100 items-center justify-center active:opacity-70"
                onPress={() => changeQty(itemId, qty - 1)}
            >
                <Minus width={16} color="#111" />
            </Pressable>
            <Text className="text-base font-semibold text-gray-900">{qty}</Text>
            <Pressable
                className="w-8 h-8 rounded-full bg-gray-100 items-center justify-center active:opacity-70"
                onPress={() => changeQty(itemId, qty + 1)}
            >
                <Plus width={16} color="#111" />
            </Pressable>
        </View>
    );
};
