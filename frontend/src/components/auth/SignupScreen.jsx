import React, { useState } from 'react';
import { Eye, EyeOff, Globe } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const SignupScreen = ({ onSwitchToLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const { signup, isLoading } = useAuth();

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      await signup(name, email, password);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <div className="bg-blue-600 dark:bg-blue-500 p-3 rounded-full">
              <Globe className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">Create your account</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Join Globe Trotter and start planning amazing trips
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 py-8 px-6 shadow-lg rounded-xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Full Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`
                    appearance-none block w-full px-3 py-2 border rounded-md shadow-sm 
                    placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 
                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white
                    ${errors.name ? 'border-red-300 dark:border-red-600' : 'border-gray-300 dark:border-gray-600'}
                  `}
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`
                    appearance-none block w-full px-3 py-2 border rounded-md shadow-sm 
                    placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 
                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white
                    ${errors.email ? 'border-red-300 dark:border-red-600' : 'border-gray-300 dark:border-gray-600'}
                  `}
                  placeholder="Enter your email"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`
                    appearance-none block w-full px-3 py-2 border rounded-md shadow-sm 
                    placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 
                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white
                    ${errors.password ? 'border-red-300 dark:border-red-600' : 'border-gray-300 dark:border-gray-600'}
                  `}
                  placeholder="Create a password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                  )}
                </button>
                {errors.password && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.password}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`
                    appearance-none block w-full px-3 py-2 border rounded-md shadow-sm 
                    placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 
                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white
                    ${errors.confirmPassword ? 'border-red-300 dark:border-red-600' : 'border-gray-300 dark:border-gray-600'}
                  `}
                  placeholder="Confirm your password"
                />
                {errors.confirmPassword && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.confirmPassword}</p>}
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed dark:focus:ring-offset-gray-800"
              >
                {isLoading ? 'Creating account...' : 'Create account'}
              </button>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={onSwitchToLogin}
                  className="font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300"
                >
                  Sign in
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupScreen;
