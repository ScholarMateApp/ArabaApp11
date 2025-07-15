
import React from 'react';
import { useTranslation } from 'react-i18next';

function VendorCard({ vendor }) {
  const { t } = useTranslation();

  return (
    <div className="bg-card rounded-lg shadow-md overflow-hidden">
      <img src={vendor.image} alt={vendor.name} className="w-full h-32 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{vendor.name}</h3>
        <div className="flex items-center text-sm text-muted-foreground">
          <span>{t('common.rating')}: {vendor.rating}</span>
          <span className="mx-2">|</span>
          <span>{vendor.deliveryTime} {t('common.min')}</span>
        </div>
      </div>
    </div>
  );
}

export default VendorCard;


