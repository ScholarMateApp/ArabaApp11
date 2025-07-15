import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function LoginForm() {
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted');
  };

  return (
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
      <div>
        <label htmlFor="password" className="text-sm font-medium">
          {t('auth.password')}
        </label>
        <input
          id="password"
          type="password"
          className="w-full px-4 py-2 mt-2 border rounded-md bg-input text-foreground border-border"
          placeholder={t('auth.password')}
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <Link to="/forgot-password" className="text-sm text-primary hover:underline">
          {t('auth.forgotPassword')}
        </Link>
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 font-semibold text-center text-primary-foreground bg-primary rounded-md hover:bg-primary/90"
      >
        {t('auth.login')}
      </button>
      <button
        type="button"
        className="w-full px-4 py-2 mt-4 font-semibold text-center text-secondary-foreground bg-secondary rounded-md hover:bg-secondary/90"
      >
        {t('auth.continueWithGoogle')}
      </button>
    </form>
  );
}

export default LoginForm;


