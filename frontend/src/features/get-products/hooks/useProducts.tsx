import { Product } from '@/entities';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../api/getProducts';

export const useProducts = () => {
  const { data, error, isLoading, refetch, isRefetching } = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  return {
    products: data,
    error,
    isLoading,
    isRefetching,
    refetch,
  };
};
