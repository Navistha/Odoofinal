import React, { useState } from 'react';
import { Calendar, MapPin, Camera, Save } from 'lucide-react';

const CreateTrip = ({ onScreenChange }) => {
  const [tripData, setTripData] = useState({
    name: '',
    startDate: '',
    endDate: '',
    description: '',
    coverPhoto: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setTripData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!tripData.name.trim()) {
      newErrors.name = 'Trip name is required';
    }
    if (!tripData.startDate) {
      newErrors.startDate = 'Start date is required';
    }
    if (!tripData.endDate) {
      newErrors.endDate = 'End date is required';
    }
    if (
      tripData.startDate &&
      tripData.endDate &&
      new Date(tripData.startDate) >= new Date(tripData.endDate)
    ) {
      newErrors.endDate = 'End date must be after start date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onScreenChange('my-trips');
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Create New Trip
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Start planning your next adventure
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <form onSubmit={handleSubmit} className="p-8">
          <div className="space-y-6">
            {/* Trip Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Trip Name *
              </label>
              <input
                type="text"
                value={tripData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="My Amazing Trip"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                  dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400
                  ${errors.name ? 'border-red-300 dark:border-red-600' : 'border-gray-300 dark:border-gray-600'}`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Date Range */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Start Date *
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={tripData.startDate}
                    onChange={(e) => handleInputChange('startDate', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                      dark:bg-gray-700 dark:border-gray-600 dark:text-white
                      ${errors.startDate ? 'border-red-300 dark:border-red-600' : 'border-gray-300 dark:border-gray-600'}`}
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500 pointer-events-none" />
                </div>
                {errors.startDate && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.startDate}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  End Date *
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={tripData.endDate}
                    onChange={(e) => handleInputChange('endDate', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                      dark:bg-gray-700 dark:border-gray-600 dark:text-white
                      ${errors.endDate ? 'border-red-300 dark:border-red-600' : 'border-gray-300 dark:border-gray-600'}`}
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500 pointer-events-none" />
                </div>
                {errors.endDate && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.endDate}
                  </p>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Description
              </label>
              <textarea
                value={tripData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows={4}
                placeholder="Tell us about your trip..."
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              />
            </div>

            {/* Cover Photo */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Cover Photo (Optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center hover:border-blue-400 dark:hover:border-blue-500 transition-colors cursor-pointer">
                <Camera className="h-12 w-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Click to upload or drag and drop
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4 pt-8 border-t border-gray-200 dark:border-gray-700 mt-8">
            <button
              type="button"
              onClick={() => onScreenChange('dashboard')}
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center"
            >
              <Save className="h-5 w-5 mr-2" />
              Create Trip
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTrip;
