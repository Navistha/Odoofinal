import React, { useState } from 'react';
import { Plus, Calendar, MapPin, DollarSign, Edit, Trash2, Share, Eye } from 'lucide-react';

const MyTrips = ({ onScreenChange }) => {
  const [trips] = useState([
    {
      id: 1,
      name: 'European Adventure',
      destinations: ['Paris', 'Rome', 'Barcelona'],
      startDate: '2024-06-15',
      endDate: '2024-06-25',
      budget: 2500,
      spent: 2150,
      status: 'upcoming',
      image: 'https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?w=400&h=200&fit=crop',
      description: 'Exploring the beautiful cities of Europe'
    },
    {
      id: 2,
      name: 'Asian Discovery',
      destinations: ['Tokyo', 'Seoul', 'Bangkok'],
      startDate: '2024-08-10',
      endDate: '2024-08-20',
      budget: 3200,
      spent: 0,
      status: 'planning',
      image: 'https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?w=400&h=200&fit=crop',
      description: 'Cultural immersion in Asia'
    },
    {
      id: 3,
      name: 'India Heritage Tour',
      destinations: ['Delhi', 'Agra', 'Jaipur'],
      startDate: '2024-03-01',
      endDate: '2024-03-10',
      budget: 1800,
      spent: 1650,
      status: 'completed',
      image: 'https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg?w=400&h=200&fit=crop',
      description: 'Golden Triangle tour of India'
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'planning':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'completed':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'upcoming':
        return 'Upcoming';
      case 'planning':
        return 'Planning';
      case 'completed':
        return 'Completed';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">My Trips</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage and view all your travel plans</p>
        </div>
        <button
          onClick={() => onScreenChange('create-trip')}
          className="mt-4 sm:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center transition-colors"
        >
          <Plus className="h-5 w-5 mr-2" />
          New Trip
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Upcoming Trips</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">1</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
              <MapPin className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Cities Visited</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">9</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <DollarSign className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Budget</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">₹7,500</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trips Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trips.map(trip => (
          <div key={trip.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <img
                src={trip.image}
                alt={trip.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(trip.status)}`}>
                  {getStatusText(trip.status)}
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{trip.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{trip.description}</p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <MapPin className="h-4 w-4 mr-2" />
                  {trip.destinations.join(', ')}
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(trip.startDate).toLocaleDateString()} - {new Date(trip.endDate).toLocaleDateString()}
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <DollarSign className="h-4 w-4 mr-2" />
                  ₹{trip.spent.toLocaleString()} / ₹{trip.budget.toLocaleString()}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                  <span>Budget Progress</span>
                  <span>{Math.round((trip.spent / trip.budget) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full"
                    style={{ width: `${Math.min((trip.spent / trip.budget) * 100, 100)}%` }}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between items-center">
                <button className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm">
                  <Eye className="h-4 w-4 mr-1" />
                  View
                </button>
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                    <Share className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-500 dark:hover:text-red-400">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {trips.length === 0 && (
        <div className="text-center py-12">
          <MapPin className="h-16 w-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No trips yet</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Start planning your first adventure!</p>
          <button
            onClick={() => onScreenChange('create-trip')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center mx-auto"
          >
            <Plus className="h-5 w-5 mr-2" />
            Create Your First Trip
          </button>
        </div>
      )}
    </div>
  );
};

export default MyTrips;
