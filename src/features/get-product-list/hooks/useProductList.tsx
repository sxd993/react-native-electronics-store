import { Product } from '@/entities';
import { fetchProducts } from '@/shared';
import { useQuery } from '@tanstack/react-query';


export const useProductList = () => {

    const { data, error, isLoading } = useQuery<Product[]>({
        queryKey: ['products'],
        queryFn: fetchProducts
    })

    return {
        products: data,
        error,
        isLoading
    }
}