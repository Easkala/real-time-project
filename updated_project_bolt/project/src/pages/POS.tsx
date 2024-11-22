import React, { useState } from 'react';
import { Search, Plus, Minus, ShoppingCart, CreditCard } from 'lucide-react';
import { format } from 'date-fns';

interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
}

interface CartItem extends Product {
  quantity: number;
}

const dummyProducts: Product[] = [
  { id: '1', name: 'Power Drill - DeWalt', price: 7999, stock: 45 },
  { id: '2', name: 'Hammer - Stanley', price: 599, stock: 100 },
  { id: '3', name: 'Paint Brush Set', price: 299, stock: 200 },
  { id: '4', name: 'Measuring Tape', price: 199, stock: 150 },
];

export default function POS() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = dummyProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (product: Product) => {
    setCart(currentCart => {
      const existingItem = currentCart.find(item => item.id === product.id);
      if (existingItem) {
        return currentCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...currentCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart(currentCart =>
      currentCart
        .map(item =>
          item.id === productId
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="flex h-[calc(100vh-5rem)] gap-6">
      <div className="flex-1 flex flex-col">
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto pb-6">
          {filteredProducts.map(product => (
            <button
              key={product.id}
              onClick={() => addToCart(product)}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-left"
            >
              <h3 className="font-medium text-gray-900">{product.name}</h3>
              <p className="text-gray-500">Stock: {product.stock}</p>
              <p className="text-lg font-semibold text-blue-600">₹{product.price}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="w-96 bg-white rounded-lg shadow-lg p-6 flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium text-gray-900">Current Sale</h2>
          <span className="text-sm text-gray-500">{format(new Date(), 'dd MMM yyyy')}</span>
        </div>

        <div className="flex-1 overflow-y-auto">
          {cart.map(item => (
            <div key={item.id} className="flex items-center justify-between py-2">
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-500">₹{item.price} × {item.quantity}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <Minus className="h-4 w-4 text-gray-500" />
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <Plus className="h-4 w-4 text-gray-500" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t pt-4 mt-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-medium text-gray-900">Total</span>
            <span className="text-2xl font-bold text-blue-600">₹{total}</span>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2">
            <CreditCard className="h-5 w-5" />
            Complete Sale
          </button>
        </div>
      </div>
    </div>
  );
}