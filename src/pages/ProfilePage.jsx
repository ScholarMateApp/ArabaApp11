
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useTheme } from '../components/theme-provider';

function ProfilePage() {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <h1 className="text-3xl font-bold mb-6">{t('profile.profile')}</h1>

      <div className="bg-card rounded-lg shadow-md p-4 space-y-4">
        <div className="flex items-center space-x-4">
          <img src="https://via.placeholder.com/100" alt="User Avatar" className="w-24 h-24 rounded-full object-cover" />
          <div>
            <h2 className="text-xl font-bold">John Doe</h2>
            <p className="text-muted-foreground">john.doe@example.com</p>
          </div>
        </div>

        <ul className="space-y-2">
          <li>
            <Link to="/profile/personal-info" className="flex justify-between items-center py-2 px-3 rounded-md hover:bg-secondary">
              <span>{t('profile.personalInfo')}</span>
              <span>&gt;</span>
            </Link>
          </li>
          <li>
            <Link to="/profile/addresses" className="flex justify-between items-center py-2 px-3 rounded-md hover:bg-secondary">
              <span>{t('profile.addresses')}</span>
              <span>&gt;</span>
            </Link>
          </li>
          <li>
            <Link to="/profile/payment-methods" className="flex justify-between items-center py-2 px-3 rounded-md hover:bg-secondary">
              <span>{t('profile.paymentMethods')}</span>
              <span>&gt;</span>
            </Link>
          </li>
          <li>
            <Link to="/order-history" className="flex justify-between items-center py-2 px-3 rounded-md hover:bg-secondary">
              <span>{t('profile.orderHistory')}</span>
              <span>&gt;</span>
            </Link>
          </li>
          <li>
            <Link to="/profile/notifications" className="flex justify-between items-center py-2 px-3 rounded-md hover:bg-secondary">
              <span>{t('profile.notifications')}</span>
              <span>&gt;</span>
            </Link>
          </li>
          <li>
            <div className="flex justify-between items-center py-2 px-3 rounded-md">
              <span>{t('profile.languageSettings')}</span>
              <select onChange={(e) => changeLanguage(e.target.value)} value={i18n.language} className="bg-input text-foreground rounded-md px-2 py-1">
                <option value="en">English</option>
                <option value="ar">العربية</option>
                <option value="ur">اردو</option>
                <option value="zh">中文</option>
              </select>
            </div>
          </li>
          <li>
            <div className="flex justify-between items-center py-2 px-3 rounded-md">
              <span>{t('profile.darkMode')}</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" checked={theme === 'dark'} onChange={toggleTheme} />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
              </label>
            </div>
          </li>
          <li>
            <Link to="/profile/help-support" className="flex justify-between items-center py-2 px-3 rounded-md hover:bg-secondary">
              <span>{t('profile.helpSupport')}</span>
              <span>&gt;</span>
            </Link>
          </li>
          <li>
            <button className="w-full text-left py-2 px-3 rounded-md text-error hover:bg-error/10">
              {t('profile.logout')}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProfilePage;


