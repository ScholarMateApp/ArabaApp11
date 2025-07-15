
import React from 'react';
import { useTranslation } from 'react-i18next';
import mockNotifications from '../data/mockNotifications';

function NotificationsPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <h1 className="text-3xl font-bold mb-6">{t('profile.notifications')}</h1>

      {mockNotifications.length === 0 ? (
        <p className="text-center text-muted-foreground">No notifications found.</p>
      ) : (
        <div className="space-y-4">
          {mockNotifications.map((notification) => (
            <div key={notification.id} className={`bg-card rounded-lg shadow-md p-4 ${notification.read ? 'opacity-70' : ''}`}>
              <h2 className="text-xl font-bold mb-1">{notification.title}</h2>
              <p className="text-muted-foreground text-sm mb-2">{notification.date}</p>
              <p>{notification.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default NotificationsPage;


