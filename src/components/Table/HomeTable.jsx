import React from 'react';
import { Edit, Trash } from 'lucide-react';

const products = [
  { id: 1, name: "Gabriela Cashmere Blazer", sku: "T14116", price: "$113.99", quantity: 1113 },
  { id: 2, name: "Loewe blend Jacket - Blue", sku: "T14117", price: "$120.99", quantity: 721 },
  { id: 3, name: "Sandro - Jacket - Black", sku: "T14118", price: "$99.99", quantity: 407 },
  { id: 4, name: "Adidas By Stella McCartney", sku: "T14119", price: "$150.99", quantity: 1203 },
  { id: 5, name: "Meteo Hooded Wool Jacket", sku: "T14120", price: "$200.99", quantity: 306 },
  { id: 6, name: "Hida Down Ski Jacket - Red", sku: "T14121", price: "$180.99", quantity: 201 },
  { id: 7, name: "Dolce & Gabbana", sku: "T14122", price: "$250.99", quantity: 108 },
];

export default function HomeTable() {
  return (
    <div className="p-4">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Product Name</th>
            <th className="p-2 border">SKU</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Quantity</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id} className="hover:bg-gray-50">
              <td className="p-2 border">{product.name}</td>
              <td className="p-2 border">{product.sku}</td>
              <td className="p-2 border">{product.price}</td>
              <td className="p-2 border">{product.quantity}</td>
              <td className="p-2 border">
                <button className="p-1 bg-blue-500 text-white rounded mr-2">
                  <Edit size={16} />
                </button>
                <button className="p-1 bg-red-500 text-white rounded">
                  <Trash size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}