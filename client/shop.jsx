import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 'ebook',
    name: 'Frontend Portfolio eBook',
    description: 'A practical guide to building high-converting portfolios.',
    price: '$15',
    href: '/checkout?product=ebook',
    image: '/images/ebook.jpg', // Optional image
  },
  {
    id: 'template',
    name: 'React Portfolio Template',
    description: 'Clean, responsive, and modern portfolio template built with React and Tailwind CSS.',
    price: '$25',
    href: '/checkout?product=template',
    image: '/images/template.jpg',
  }
];

export default function Shop() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold mb-12 text-center">Shop</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {products.map(product => (
          <div key={product.id} className="bg-white border rounded-xl shadow hover:shadow-lg transition p-6">
            {product.image && (
              <img src={product.image} alt={product.name} className="rounded-lg mb-4" />
            )}
            <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-lg font-bold mb-4">{product.price}</p>
            <Link to={product.href}>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                Buy Now
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
