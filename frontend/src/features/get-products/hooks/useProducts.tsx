import { Product } from '@/entities';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../api/getProducts';


export const useProductList = () => {

    const { data, error, isLoading } = useQuery<Product[]>({
        queryKey: ['products'],
        queryFn: getProducts
    })

    return {
        products: data,
        error,
        isLoading
    }
}