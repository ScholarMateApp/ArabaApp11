import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useTheme } from '../components/theme-provider';
import Layout from '../components/Layout';
import VendorCard from '../features/marketplace/components/VendorCard';
import mockVendors from '../data/mockVendors';

function HomePage() {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const filteredVendors = mockVendors.filter(vendor => {
    const matchesSearch = vendor.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || vendor.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="p-4">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">{t('app.name')}</h1>
          <div className="flex space-x-2">
            <button
              onClick={() => changeLanguage('en')}
              className="px-3 py-1 rounded-md bg-primary text-primary-foreground text-sm"
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage('ar')}
              className="px-3 py-1 rounded-md bg-primary text-primary-foreground text-sm"
            >
              AR
            </button>
            <button
              onClick={() => changeLanguage('ur')}
              className="px-3 py-1 rounded-md bg-primary text-primary-foreground text-sm"
            >
              UR
            </button>
            <button
              onClick={() => changeLanguage('zh')}
              className="px-3 py-1 rounded-md bg-primary text-primary-foreground text-sm"
            >
              ZH
            </button>
            <button
              onClick={toggleTheme}
              className="px-3 py-1 rounded-md bg-secondary text-secondary-foreground text-sm"
            >
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
          </div>
        </header>

        <div className="mb-6">
          <input
            type="text"
            placeholder={t('marketplace.searchPlaceholder')}
            className="w-full px-4 py-2 rounded-md bg-input text-foreground border border-border"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex space-x-4 mb-6 overflow-x-auto">
          <button
            onClick={() => setFilterCategory('all')}
            className={`px-4 py-2 rounded-md whitespace-nowrap ${filterCategory === 'all' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}
          >
            All
          </button>
          <button
            onClick={() => setFilterCategory('restaurants')}
            className={`px-4 py-2 rounded-md whitespace-nowrap ${filterCategory === 'restaurants' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}
          >
            {t('marketplace.restaurants')}
          </button>
          <button
            onClick={() => setFilterCategory('pharmacies')}
            className={`px-4 py-2 rounded-md whitespace-nowrap ${filterCategory === 'pharmacies' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}
          >
            {t('marketplace.pharmacies')}
          </button>
        </div>

        <h2 className="text-xl font-bold mb-4">{t('marketplace.featuredVendors')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredVendors.map(vendor => (
            <Link to={`/vendor/${vendor.id}`} key={vendor.id}>
              <VendorCard vendor={vendor} />
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;

