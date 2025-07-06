import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import { Product, urlFor } from '../lib/sanity';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  viewMode?: 'grid' | 'list';
}

const ProductCard: React.FC<ProductCardProps> = ({ product, viewMode = 'grid' }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addToCart({
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.images?.[0] ? 
        (typeof product.images[0] === 'string' ? 
          product.images[0] : 
          urlFor(product.images[0]).width(400).height(400).url()
        ) : '/placeholder-product.jpg'
    });
  };

  const productImage = product.images?.[0] 
    ? (typeof product.images[0] === 'string' ? 
        product.images[0] : 
        urlFor(product.images[0]).width(400).height(400).url()
      )
    : 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=400';

  if (viewMode === 'list') {
    return (
      <Link to={`/products/${product.slug?.current || product._id}`} className="block">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 flex">
          <div className="w-48 h-48 flex-shrink-0">
            <img
              src={productImage}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="bg-gray-100 px-2 py-1 rounded">
                    {product.category}
                  </span>
                  {product.inStock ? (
                    <span className="text-green-600">Stokta</span>
                  ) : (
                    <span className="text-red-600">Tükendi</span>
                  )}
                </div>
              </div>
              
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900 mb-4">
                  ₺{product.price}
                </p>
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-600 hover:text-red-600 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Sepete Ekle</span>
                  </button>
                </div>
              </div>
            </div>
            
            {product.colors && product.colors.length > 0 && (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Renkler:</span>
                <div className="flex space-x-1">
                  {product.colors.slice(0, 4).map((color, index) => (
                    <div
                      key={index}
                      className="w-4 h-4 rounded-full border border-gray-300"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                  {product.colors.length > 4 && (
                    <span className="text-xs text-gray-500">+{product.colors.length - 4}</span>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/products/${product.slug?.current || product._id}`} className="block group">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 group-hover:-translate-y-1">
        <div className="relative overflow-hidden">
          <img
            src={productImage}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
              <button className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Eye className="w-5 h-5" />
              </button>
              <button className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col space-y-2">
            {product.featured && (
              <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs font-medium">
                Öne Çıkan
              </span>
            )}
            {!product.inStock && (
              <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                Tükendi
              </span>
            )}
          </div>
          
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="absolute bottom-4 right-4 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
          >
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
              {product.name}
            </h3>
            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
              {product.category}
            </span>
          </div>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between">
            <p className="text-xl font-bold text-gray-900">
              ₺{product.price}
            </p>
            
            {product.colors && product.colors.length > 0 && (
              <div className="flex space-x-1">
                {product.colors.slice(0, 3).map((color, index) => (
                  <div
                    key={index}
                    className="w-4 h-4 rounded-full border border-gray-300"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
                {product.colors.length > 3 && (
                  <span className="text-xs text-gray-500 ml-1">+{product.colors.length - 3}</span>
                )}
              </div>
            )}
          </div>
          
          {product.sizes && product.sizes.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1">
              {product.sizes.slice(0, 4).map((size, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                >
                  {size}
                </span>
              ))}
              {product.sizes.length > 4 && (
                <span className="text-xs text-gray-500">+{product.sizes.length - 4}</span>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;