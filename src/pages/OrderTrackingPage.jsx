import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from '../components/Layout';
import mockOrders from '../data/mockOrders';

function OrderTrackingPage() {
  const { orderId } = useParams();
  const { t } = useTranslation();
  const [currentStatus, setCurrentStatus] = useState(0);
  const [estimatedTime, setEstimatedTime] = useState(25);

  const order = mockOrders.find(o => o.id === parseInt(orderId));

  const statuses = [
    { key: 'placed', label: t('tracking.placed') || 'Order Placed' },
    { key: 'confirmed', label: t('tracking.confirmed') },
    { key: 'preparing', label: 'Preparing' },
    { key: 'onTheWay', label: t('tracking.onTheWay') },
    { key: 'delivered', label: t('tracking.delivered') }
  ];

  useEffect(() => {
    if (order && order.status !== 'Delivered') {
      const interval = setInterval(() => {
        setCurrentStatus(prev => {
          if (prev < statuses.length - 1) {
            setEstimatedTime(prevTime => Math.max(0, prevTime - 5));
            return prev + 1;
          }
          return prev;
        });
      }, 10000); // Update every 10 seconds for demo

      return () => clearInterval(interval);
    }
  }, [order, statuses.length]);

  if (!order) {
    return (
      <Layout>
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-6">Order not found</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-6">Order #{order.id}</h1>

        <div className="bg-card rounded-lg shadow-md p-4 mb-6">
          <h2 className="text-xl font-bold mb-4">{order.vendorName}</h2>
          
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">{t('tracking.estimatedTime')}</span>
              <span className="text-primary font-bold">{estimatedTime} {t('common.min')}</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-500"
                style={{ width: `${(currentStatus / (statuses.length - 1)) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="space-y-4">
            {statuses.map((status, index) => (
              <div key={status.key} className={`flex items-center space-x-3 ${index <= currentStatus ? 'text-primary' : 'text-muted-foreground'}`}>
                <div className={`w-4 h-4 rounded-full ${index <= currentStatus ? 'bg-primary' : 'bg-muted'}`}></div>
                <span className={index === currentStatus ? 'font-bold' : ''}>{status.label}</span>
                {index === currentStatus && (
                  <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">Current</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-lg shadow-md p-4 mb-6">
          <h3 className="text-lg font-bold mb-2">{t('tracking.orderDetails')}</h3>
          <ul className="space-y-1">
            {order.items.map((item, index) => (
              <li key={index} className="flex justify-between">
                <span>{item.name} ({item.quantity}x)</span>
                <span>{t('common.aed')} {(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="border-t pt-2 mt-2">
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>{t('common.aed')} {order.total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {currentStatus >= 3 && (
          <div className="bg-card rounded-lg shadow-md p-4">
            <h3 className="text-lg font-bold mb-2">{t('tracking.driver')}</h3>
            <div className="flex items-center space-x-3">
              <img src="https://via.placeholder.com/50" alt="Driver" className="w-12 h-12 rounded-full" />
              <div>
                <p className="font-medium">Ahmed Al-Rashid</p>
                <p className="text-sm text-muted-foreground">Toyota Camry - ABC 123</p>
              </div>
              <button className="ml-auto px-4 py-2 bg-primary text-primary-foreground rounded-md">
                Call
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default OrderTrackingPage;

