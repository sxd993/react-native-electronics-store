import { client } from "@/shared/api/client";

export const getProducts = () => client.get('/products').then((res) => res.data)