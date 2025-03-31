import React from 'react';

const ProductTable = () => {
  const products = [
    {
      id: 1,
      image: 'path/to/image1.jpg',
      name: 'Curology Face wash',
      category: 'books',
      date: 'Thu, Jan 12 2025',
      status: 'InStock',
      price: '$275',
    },
    {
      id: 2,
      image: 'path/to/image2.jpg',
      name: 'Body Lotion',
      category: 'books',
      date: 'Thu, Jan 10 2025',
      status: 'Out of Stock',
      price: '$89',
    },
    {
      id: 3,
      image: 'path/to/image3.jpg',
      name: 'Smart Watch',
      category: 'fashionbooks',
      date: 'Thu, Jan 12 2025',
      status: 'InStock',
      price: '$125',
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Products</th>
          <th>Date</th>
          <th>Status</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
                />
                <div>
                  <div>{product.name}</div>
                  <div style={{ fontSize: '12px', color: '#888' }}>{product.category}</div>
                </div>
              </div>
            </td>
            <td>{product.date}</td>
            <td>
              <span
                style={{
                  color: product.status === 'InStock' ? 'green' : 'red',
                  fontWeight: 'bold',
                }}
              >
                {product.status}
              </span>
            </td>
            <td>{product.price}</td>
            <td>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>⋮</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
