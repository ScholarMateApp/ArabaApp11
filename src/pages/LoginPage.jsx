
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LoginForm from '../features/authentication/components/LoginForm';

function LoginPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="w-full max-w-md p-8 space-y-6 bg-card rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center">{t('auth.welcomeMessage')}</h1>
        <LoginForm />
        <p className="text-sm text-center">
          {t('auth.signup')}? <Link to="/signup" className="text-primary hover:underline">{t('auth.signup')}</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;

