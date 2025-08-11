import React from 'react';
import { Plus, MapPin, Calendar, DollarSign, TrendingUp } from 'lucide-react';

const Dashboard = ({ onScreenChange }) => {
  const recentTrips = [
    {
      id: 1,
      name: 'European Adventure',
      destinations: ['Paris', 'Rome', 'Barcelona'],
      dates: 'Jun 15 - 25, 2024',
      budget: 2500,
      image: 'https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?w=400&h=200&fit=crop'
    },
    {
      id: 2,
      name: 'Asian Discovery',
      destinations: ['Tokyo', 'Seoul', 'Bangkok'],
      dates: 'Aug 10 - 20, 2024',
      budget: 3200,
      image: 'https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?w=400&h=200&fit=crop'
    }
  ];

  const popularDestinations = [
    { name: 'Bali, Indonesia', rating: 4.8, image: 'https://images.pexels.com/photos/2474689/pexels-photo-2474689.jpeg?w=300&h=200&fit=crop' },
    { name: 'Santorini, Greece', rating: 4.9, image: 'https://images.pexels.com/photos/161901/santorini-greece-island-sunset-161901.jpeg?w=300&h=200&fit=crop' },
    { name: 'Kyoto, Japan', rating: 4.7, image: 'https://images.pexels.com/photos/1829980/pexels-photo-1829980.jpeg?w=300&h=200&fit=crop' },
    { name: 'Iceland', rating: 4.6, image: 'https://images.pexels.com/photos/1482476/pexels-photo-1482476.jpeg?w=300&h=200&fit=crop' }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 rounded-xl p-8 text-white mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
        <p className="text-blue-100 mb-6">Ready to plan your next adventure?</p>
        <button
          onClick={() => onScreenChange('create-trip')}
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
        >
          <Plus className="h-5 w-5 mr-2" />
          Plan New Trip
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Trips</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">12</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
              <Calendar className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Upcoming</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">3</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <DollarSign className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Spent</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">₹85,000</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
              <TrendingUp className="h-6 w-6 text-orange-600 dark:text-orange-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Avg per Trip</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">₹7,083</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Trips */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Recent Trips</h2>
              <button
                onClick={() => onScreenChange('my-trips')}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium"
              >
                View all
              </button>
            </div>
          </div>
          <div className="p-6 space-y-4">
            {recentTrips.map(trip => (
              <div key={trip.id} className="flex items-center space-x-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-colors">
                <img
                  src={trip.image}
                  alt={trip.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{trip.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{trip.destinations.join(', ')}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">{trip.dates}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900 dark:text-white">₹{trip.budget.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Destinations */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Popular Destinations</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4">
              {popularDestinations.map((destination, index) => (
                <div key={index} className="cursor-pointer hover:scale-105 transition-transform">
                  <div className="relative">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-32 rounded-lg object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-semibold text-sm">{destination.name}</h3>
                      <div className="flex items-center">
                        <span className="text-yellow-400 text-xs">★</span>
                        <span className="text-white text-xs ml-1">{destination.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
