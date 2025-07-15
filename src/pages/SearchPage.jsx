import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import VendorCard from '../features/marketplace/components/VendorCard';
import mockVendors from '../data/mockVendors';
import mockProducts from '../data/mockProducts';

function SearchPage() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('vendors'); // 'vendors' or 'products'
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [sortBy, setSortBy] = useState('name');

  const filteredVendors = mockVendors.filter(vendor =>
    vendor.name.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'deliveryTime') return parseInt(a.deliveryTime) - parseInt(b.deliveryTime);
    return a.name.localeCompare(b.name);
  });

  const filteredProducts = mockProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    product.price >= priceRange[0] && product.price <= priceRange[1]
  ).sort((a, b) => {
    if (sortBy === 'price') return a.price - b.price;
    return a.name.localeCompare(b.name);
  });

  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-6">{t('navigation.search')}</h1>

        <div className="mb-6">
          <input
            type="text"
            placeholder={t('marketplace.searchPlaceholder')}
            className="w-full px-4 py-2 rounded-md bg-input text-foreground border border-border"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex space-x-4 mb-6 overflow-x-auto">
          <button
            onClick={() => setSearchType('vendors')}
            className={`px-4 py-2 rounded-md whitespace-nowrap ${searchType === 'vendors' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}
          >
            Vendors
          </button>
          <button
            onClick={() => setSearchType('products')}
            className={`px-4 py-2 rounded-md whitespace-nowrap ${searchType === 'products' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}
          >
            Products
          </button>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-input text-foreground border border-border"
          >
            <option value="name">Name</option>
            {searchType === 'vendors' && (
              <>
                <option value="rating">Rating</option>
                <option value="deliveryTime">Delivery Time</option>
              </>
            )}
            {searchType === 'products' && (
              <option value="price">Price</option>
            )}
          </select>
        </div>

        {searchType === 'products' && (
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Price Range: {t('common.aed')} {priceRange[0]} - {t('common.aed')} {priceRange[1]}
            </label>
            <input
              type="range"
              min="0"
              max="50"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="w-full"
            />
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {searchType === 'vendors' ? (
            filteredVendors.map(vendor => (
              <Link to={`/vendor/${vendor.id}`} key={vendor.id}>
                <VendorCard vendor={vendor} />
              </Link>
            ))
          ) : (
            filteredProducts.map(product => (
              <div key={product.id} className="bg-card rounded-lg shadow-md p-4">
                <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-md mb-2" />
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-muted-foreground">{t('common.aed')} {product.price.toFixed(2)}</p>
              </div>
            ))
          )}
        </div>

        {((searchType === 'vendors' && filteredVendors.length === 0) || 
          (searchType === 'products' && filteredProducts.length === 0)) && (
          <p className="text-center text-muted-foreground mt-8">No results found.</p>
        )}
      </div>
    </Layout>
  );
}

export default SearchPage;

