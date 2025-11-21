import { Product } from '@/entities';

const mockProducts: Product[] = [
  {
    id: 1,
    title: 'Minimal Backpack',
    description: 'Compact everyday pack with padded laptop sleeve.',
    price: 79.99,
    image: 'https://static.street-beat.ru/upload/iblock/0f1/3rdlxkidxqpoxu89gdptyhel22lj7030.jpg',
  },
  {
    id: 2,
    title: 'Wireless Earbuds',
    description: 'ANC, long battery life, quick-charge case.',
    price: 129.99,
    image: 'https://static.re-store.ru/upload/resize_cache/iblock/54e/100500_800_140cd750bba9870f18aada2478b24840a/uxhp1ei5e9h56ufud1jbg00m2p661tdh.jpg',
  },
  {
    id: 3,
    title: 'Smart Water Bottle',
    description: 'Tracks hydration and reminds you to drink.',
    price: 49.99,
    image: 'https://hidratespark.com/cdn/shop/articles/20220511_SB_Available-at-Apple_Cover.jpg?crop=center&height=1200&v=1690993120&width=1200',
  },
];

export const fetchProducts = async (): Promise<Product[]> => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return mockProducts;
};
