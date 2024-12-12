import { useCallback } from 'react';
import { useAuthStore } from '../store/authStore';
import type { User } from '../types';

export function useAuth() {
  const { setUser } = useAuthStore();

  const login = useCallback(async (email: string, password: string) => {
    // TODO: Implement actual API call
    const mockUser: User = {
      id: '1',
      email,
      name: 'John Doe',
      role: 'student',
      status: 'approved'
    };
    
    setUser(mockUser);
  }, [setUser]);

  const logout = useCallback(() => {
    setUser(null);
  }, [setUser]);

  return { login, logout };
}