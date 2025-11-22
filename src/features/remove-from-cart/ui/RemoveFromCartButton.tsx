import { Trash2 } from 'lucide-react-native';
import { Pressable } from 'react-native';
import { useCartStore } from '@/entities/cart/store/store';

type RemoveFromCartButtonProps = {
    itemId: number;
};

export const RemoveFromCartButton = ({ itemId }: RemoveFromCartButtonProps) => {
    const remove = useCartStore((state) => state.remove);

    return (
        <Pressable
            className="w-9 h-9 rounded-full bg-gray-100 items-center justify-center active:opacity-70"
            onPress={() => remove(itemId)}
        >
            <Trash2 width={18} color="#111" />
        </Pressable>
    );
};
