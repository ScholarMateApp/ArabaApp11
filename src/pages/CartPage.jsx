
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import useCartStore from '../store/cartStore';

function CartPage() {
  const { t } = useTranslation();
  const cartItems = useCartStore((state) => state.items);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = 10; // Mock delivery fee
  const total = subtotal + deliveryFee;

  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-6">{t('cart.title')}</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground mb-4">Your cart is empty.</p>
            <Link to="/" className="px-6 py-3 bg-primary text-primary-foreground rounded-md">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-card rounded-lg shadow-md p-4 flex items-center space-x-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                <div className="flex-1">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p className="text-muted-foreground">{t('common.aed')} {item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity === 1}
                    className="px-3 py-1 rounded-md bg-secondary text-secondary-foreground disabled:opacity-50"
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1 rounded-md bg-secondary text-secondary-foreground"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="px-3 py-1 rounded-md bg-destructive text-destructive-foreground ml-2"
                  >
                    {t('cart.remove')}
                  </button>
                </div>
              </div>
            ))}

            <div className="bg-card rounded-lg shadow-md p-4 space-y-2">
              <div className="flex justify-between">
                <span>{t('cart.subtotal')}</span>
                <span>{t('common.aed')} {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>{t('cart.deliveryFee')}</span>
                <span>{t('common.aed')} {deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-xl border-t pt-2">
                <span>{t('cart.total')}</span>
                <span>{t('common.aed')} {total.toFixed(2)}</span>
              </div>
              <button className="w-full px-4 py-3 mt-4 font-semibold text-center text-primary-foreground bg-primary rounded-md hover:bg-primary/90">
                {t('cart.checkout')}
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default CartPage;


