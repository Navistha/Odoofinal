import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import LoginScreen from './components/auth/LoginScreen';
import SignupScreen from './components/auth/SignupScreen';
import Dashboard from './components/screens/Dashboard';
import CreateTrip from './components/screens/CreateTrip';
import MyTrips from './components/screens/MyTrips';
import BudgetBreakdown from './components/screens/BudgetBreakdown';
import Settings from './components/screens/Settings';

const AppContent = () => {
  const { user } = useAuth();
  const [authMode, setAuthMode] = useState('login');
  const [activeScreen, setActiveScreen] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (!user) {
    return authMode === 'login' ? (
      <LoginScreen onSwitchToSignup={() => setAuthMode('signup')} />
    ) : (
      <SignupScreen onSwitchToLogin={() => setAuthMode('login')} />
    );
  }

  const renderScreen = () => {
    switch (activeScreen) {
      case 'dashboard':
        return <Dashboard onScreenChange={setActiveScreen} />;
      case 'create-trip':
        return <CreateTrip onScreenChange={setActiveScreen} />;
      case 'my-trips':
        return <MyTrips onScreenChange={setActiveScreen} />;
      case 'budget':
        return <BudgetBreakdown />;
      case 'settings':
        return <Settings />;
      case 'calendar':
        return (
          <div className="p-6 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Calendar View</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">View your trips in calendar format</p>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 text-center">
              <p className="text-gray-500 dark:text-gray-400">Calendar view coming soon...</p>
            </div>
          </div>
        );
      case 'shared':
        return (
          <div className="p-6 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Shared Trips</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">Discover trips shared by other travelers</p>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 text-center">
              <p className="text-gray-500 dark:text-gray-400">Shared trips feature coming soon...</p>
            </div>
          </div>
        );
      default:
        return <Dashboard onScreenChange={setActiveScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      <Sidebar
        activeScreen={activeScreen}
        onScreenChange={setActiveScreen}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      
      <div className="flex-1 flex flex-col">
        <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-y-auto">
          {renderScreen()}
        </main>
      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
