import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, User } from 'lucide-react';
import { Logo } from '../common/Logo';
import { UserMenu } from './UserMenu';
import { theme } from '../../constants/theme';
import type { User } from '../../types';

interface NavbarProps {
  user: User | null;
}

export function Navbar({ user }: NavbarProps) {
  return (
    <nav className="bg-primary text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <Logo className="h-10 w-10" />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg leading-tight">
                {theme.schoolName}
              </span>
              <span className="text-xs italic text-primary-light">
                {theme.motto}
              </span>
            </div>
          </Link>
          
          {user && (
            <div className="flex items-center space-x-4">
              <Link to="/notifications" className="hover:text-primary-light">
                <Bell className="h-5 w-5" />
              </Link>
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>{user.name}</span>
              </div>
              <UserMenu />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}