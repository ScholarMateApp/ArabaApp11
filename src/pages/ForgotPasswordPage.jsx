
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function ForgotPasswordPage() {
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle forgot password logic here
    console.log('Forgot password submitted');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="w-full max-w-md p-8 space-y-6 bg-card rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center">{t('auth.forgotPassword')}</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="text-sm font-medium">
              {t('auth.email')}
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 mt-2 border rounded-md bg-input text-foreground border-border"
              placeholder={t('auth.email')}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-center text-primary-foreground bg-primary rounded-md hover:bg-primary/90"
          >
            {t('common.submit')}
          </button>
        </form>
        <p className="text-sm text-center">
          <Link to="/login" className="text-primary hover:underline">{t('auth.login')}</Link>
        </p>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;


