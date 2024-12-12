import React from 'react';
import { useAuthStore } from '../store/authStore';

export function Dashboard() {
  const { user } = useAuthStore();

  return (
    <div className="space-y-6">
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user?.name}!</h1>
        <p className="mt-2 text-gray-600">
          {user?.role === 'student' && 'View your assignments and grades'}
          {user?.role === 'teacher' && 'Manage your classes and assignments'}
          {user?.role === 'admin' && 'Manage users and school resources'}
        </p>
      </div>
      
      {/* Add role-specific dashboard content here */}
    </div>
  );
}