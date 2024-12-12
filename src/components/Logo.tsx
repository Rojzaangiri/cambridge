import React from 'react';
import { theme } from '../constants/theme';

export function Logo({ className = 'h-12 w-12' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path
          d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0z"
          fill={theme.colors.primary.DEFAULT}
        />
        <path
          d="M50 10c-22.1 0-40 17.9-40 40s17.9 40 40 40 40-17.9 40-40-17.9-40-40-40z"
          fill="white"
        />
        <path
          d="M50 15L20 65h60L50 15z"
          fill={theme.colors.secondary.DEFAULT}
        />
        <path
          d="M50 25L30 60h40L50 25z"
          fill={theme.colors.accent.DEFAULT}
        />
        <rect x="35" y="40" width="30" height="20" fill="white" />
        <path
          d="M40 45h20v10H40z"
          fill={theme.colors.primary.dark}
        />
      </svg>
    </div>
  );
}