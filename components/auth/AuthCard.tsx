import React from 'react';

interface AuthCardProps {
  children: React.ReactNode;
}

export default function AuthCard({ children }: AuthCardProps) {
  return (
    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
      {children}
    </div>
  );
}
