import React from 'react';
import { useTranslation } from 'react-i18next';

function AddToCartButton({ productId }) {
  const { t } = useTranslation();

  const handleAddToCart = () => {
    // Implement add to cart logic here
    console.log(`Product ${productId} added to cart`);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
    >
      {t('common.addToCart')}
    </button>
  );
}

export default AddToCartButton;


