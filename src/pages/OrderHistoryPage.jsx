
import React from 'react';
import { useTranslation } from 'react-i18next';
import mockOrders from '../data/mockOrders';

function OrderHistoryPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <h1 className="text-3xl font-bold mb-6">{t('profile.orderHistory')}</h1>

      {mockOrders.length === 0 ? (
        <p className="text-center text-muted-foreground">No orders found.</p>
      ) : (
        <div className="space-y-4">
          {mockOrders.map((order) => (
            <div key={order.id} className="bg-card rounded-lg shadow-md p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold">{order.vendorName}</h2>
                <span className={`px-3 py-1 rounded-full text-sm ${order.status === 'Delivered' ? 'bg-success text-success-foreground' : 'bg-secondary text-secondary-foreground'}`}>
                  {order.status}
                </span>
              </div>
              <p className="text-muted-foreground mb-2">{order.date}</p>
              <ul className="list-disc list-inside mb-4">
                {order.items.map((item, index) => (
                  <li key={index} className="text-sm">
                    {item.name} ({item.quantity}x) - {t('common.aed')} {item.price.toFixed(2)}
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center font-bold">
                <span>{t('cart.total')}</span>
                <span>{t('common.aed')} {order.total.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default OrderHistoryPage;


