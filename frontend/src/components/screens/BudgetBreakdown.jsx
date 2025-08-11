import React, { useState } from 'react';
import { DollarSign, PieChart, TrendingUp, Plane, Hotel, MapPin, Utensils, Tag } from 'lucide-react';

const BudgetBreakdown = () => {
  const [selectedDiscount, setSelectedDiscount] = useState('regular');

  const budgetData = {
    total: 45000,
    categories: [
      { name: 'Transportation', amount: 18000, icon: Plane, color: 'bg-blue-500' },
      { name: 'Accommodation', amount: 12000, icon: Hotel, color: 'bg-green-500' },
      { name: 'Activities', amount: 8000, icon: MapPin, color: 'bg-purple-500' },
      { name: 'Food & Dining', amount: 7000, icon: Utensils, color: 'bg-orange-500' }
    ]
  };

  const discountOptions = [
    { id: 'regular', label: 'Regular', discount: 0, description: 'Regular fares' },
    { id: 'student', label: 'Student', discount: 15, description: 'Extra discounts/baggage' },
    { id: 'senior', label: 'Senior Citizen', discount: 600, description: 'Up to ₹600 off', flat: true },
    { id: 'armed', label: 'Armed Forces', discount: 600, description: 'Up to ₹600 off', flat: true },
    { id: 'medical', label: 'Doctor & Nurses', discount: 600, description: 'Up to ₹600 off', flat: true }
  ];

  const calculateSavings = (option) => {
    if (option.flat) {
      return option.discount;
    }
    return (budgetData.total * option.discount) / 100;
  };

  const selectedOption = discountOptions.find(opt => opt.id === selectedDiscount);
  const totalSavings = calculateSavings(selectedOption);
  const finalAmount = budgetData.total - totalSavings;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Budget & Cost Breakdown</h1>
        <p className="text-gray-600 dark:text-gray-400">Track your expenses and find savings</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <DollarSign className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Budget</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">₹{budgetData.total.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
              <Tag className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Savings</p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">₹{totalSavings.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <TrendingUp className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Final Amount</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">₹{finalAmount.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Category Breakdown */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <PieChart className="h-6 w-6 text-gray-600 dark:text-gray-400 mr-3" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Expense Categories</h2>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {budgetData.categories.map((category, index) => {
                const percentage = (category.amount / budgetData.total) * 100;
                const Icon = category.icon;
                
                return (
                  <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    <div className="flex items-center flex-1">
                      <div className={`p-2 ${category.color} rounded-lg mr-4`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 dark:text-white">{category.name}</h3>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
                          <div
                            className={`h-2 rounded-full ${category.color}`}
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-right ml-4">
                      <p className="font-semibold text-gray-900 dark:text-white">₹{category.amount.toLocaleString()}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{percentage.toFixed(1)}%</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Special Discounts */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <Tag className="h-6 w-6 text-gray-600 dark:text-gray-400 mr-3" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Special Discounts</h2>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              {discountOptions.map((option) => {
                const savings = calculateSavings(option);
                const isSelected = selectedDiscount === option.id;

                return (
                  <div
                    key={option.id}
                    onClick={() => setSelectedDiscount(option.id)}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      isSelected
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-400'
                        : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center">
                          <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                            isSelected
                              ? 'border-blue-500 bg-blue-500'
                              : 'border-gray-300 dark:border-gray-600'
                          }`}>
                            {isSelected && <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5" />}
                          </div>
                          <h3 className="font-medium text-gray-900 dark:text-white">{option.label}</h3>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 ml-7">{option.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-green-600 dark:text-green-400">
                          {savings > 0 ? `₹${savings.toLocaleString()} off` : 'No discount'}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Razorpay Payment */}
            <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Ready to book?</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Secure payment processing with Razorpay
              </p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors">
                Pay ₹{finalAmount.toLocaleString()} - Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Daily Breakdown */}
      <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Daily Cost Breakdown</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            {Array.from({ length: 7 }, (_, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">Day {i + 1}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Transport: ₹2,500</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Stay: ₹1,700</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Food: ₹1,000</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Activities: ₹1,100</p>
                <div className="border-t border-gray-200 dark:border-gray-600 mt-2 pt-2">
                  <p className="font-semibold text-gray-900 dark:text-white">₹6,300</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetBreakdown;
