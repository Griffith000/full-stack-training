// Create this file: components/ProductCard.tsx
'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Product } from '@/app/lib/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      {/* Image */}
      <CardHeader className="p-0">
        <img
          src={product.image}
          alt={product.title}
          className="h-48 w-full object-contain bg-gray-100 p-4"
        />
      </CardHeader>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">
          {product.title}
        </h3>
        
        <div className="flex justify-between items-center mt-4">
          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>
          <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
            {product.category}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}