import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { Navbar } from './layout/Navbar';
import { Sidebar } from './layout/Sidebar';

export function Layout() {
  const { user } = useAuthStore();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar user={user} />
      
      {user && (
        <div className="flex">
          <Sidebar user={user} />
          <main className="ml-64 flex-1 p-8">
            <Outlet />
          </main>
        </div>
      )}
      
      {!user && <Outlet />}
    </div>
  );
}