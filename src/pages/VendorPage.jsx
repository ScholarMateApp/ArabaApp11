import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import mockVendors from '../data/mockVendors';
import mockProducts from '../data/mockProducts';
import useCartStore from '../store/cartStore';

function VendorPage() {
  const { vendorId } = useParams();
  const { t } = useTranslation();
  const vendor = mockVendors.find(v => v.id === parseInt(vendorId));
  const products = mockProducts.filter(product => product.vendorId === parseInt(vendorId));
  const addToCart = useCartStore((state) => state.addToCart);

  if (!vendor) {
    return <div>Vendor not found</div>;
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <header className="mb-6">
        <img src={vendor.image} alt={vendor.name} className="w-full h-48 object-cover rounded-lg mb-4" />
        <h1 className="text-3xl font-bold">{vendor.name}</h1>
        <div className="flex items-center text-sm text-muted-foreground">
          <span>{t('common.rating')}: {vendor.rating}</span>
          <span className="mx-2">|</span>
          <span>{vendor.deliveryTime} {t('common.min')}</span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="bg-card rounded-lg shadow-md p-4 flex flex-col justify-between">
            <div>
              <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-md mb-2" />
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-sm text-muted-foreground">{product.description || 'Delicious food item'}</p>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="font-bold">{t('common.aed')} {product.price.toFixed(2)}</span>
              <button
                onClick={() => addToCart(product)}
                className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {t('common.addToCart')}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VendorPage;


