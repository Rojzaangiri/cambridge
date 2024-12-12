import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, User, Bell, ClipboardList, FileText } from 'lucide-react';
import type { User } from '../../types';

interface SidebarProps {
  user: User;
}

export function Sidebar({ user }: SidebarProps) {
  return (
    <aside className="w-64 bg-white shadow-md h-[calc(100vh-4rem)] fixed">
      <nav className="p-4 space-y-2">
        <SidebarLink to="/dashboard" icon={BookOpen} label="Dashboard" />
        
        {user.role === 'admin' && (
          <>
            <SidebarLink to="/users" icon={User} label="User Management" />
            <SidebarLink to="/notices" icon={Bell} label="Notices" />
          </>
        )}
        
        {user.role === 'teacher' && (
          <SidebarLink to="/assignments" icon={ClipboardList} label="Assignments" />
        )}
        
        {user.role === 'student' && (
          <SidebarLink to="/report-cards" icon={FileText} label="Report Cards" />
        )}
      </nav>
    </aside>
  );
}

interface SidebarLinkProps {
  to: string;
  icon: React.ElementType;
  label: string;
}

function SidebarLink({ to, icon: Icon, label }: SidebarLinkProps) {
  return (
    <Link
      to={to}
      className="flex items-center space-x-2 p-2 hover:bg-primary-light/10 rounded text-primary-dark"
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </Link>
  );
}