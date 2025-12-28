'use client'; //hy client component? because we are using react query
import { useQuery } from '@tanstack/react-query';
import { Product } from '@/app/lib/types';
//this function return Promise<Product[]> not just Product[] because it is an async function means the data may not be ready when the function is called
async function fetchProducts(): Promise<Product[]> {
  const response = await fetch('https://fakestoreapi.com/products');
  if (!response.ok) throw new Error('Failed to fetch');
  return response.json();
}

export function useProducts() {
  return useQuery({
    queryKey: ['products'], // Unique ID for caching: means the browsersend the request once to the server and cache the response so next time it will be faster(no other unecessary requests)
    queryFn: fetchProducts,  // Function to get data
  });
}