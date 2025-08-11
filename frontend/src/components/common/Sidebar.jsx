import React from 'react';
import { Home, Plus, MapPin, Calendar, DollarSign, Settings, Share } from 'lucide-react';

const Sidebar = ({ activeScreen, onScreenChange, isOpen, onClose }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'create-trip', label: 'Create Trip', icon: Plus },
    { id: 'my-trips', label: 'My Trips', icon: MapPin },
    { id: 'calendar', label: 'Calendar', icon: Calendar },
    { id: 'budget', label: 'Budget', icon: DollarSign },
    { id: 'shared', label: 'Shared Trips', icon: Share },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const handleItemClick = (screenId) => {
    onScreenChange(screenId);
    if (window.innerWidth < 768) {
      onClose();
    }
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static inset-y-0 left-0 z-30
          w-64 bg-white dark:bg-gray-900 
          border-r border-gray-200 dark:border-gray-700
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        <nav className="mt-8 px-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleItemClick(item.id)}
                    className={`
                      w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors
                      ${
                        activeScreen === item.id
                          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }
                    `}
                  >
                    <Icon className="h-5 w-5 mr-3" />
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
