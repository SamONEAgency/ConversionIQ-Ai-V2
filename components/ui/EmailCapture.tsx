'use client';

import React, { useState } from 'react';
import { Button } from './Button';
import { Mail } from 'lucide-react';

export function EmailCapture() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Handle email submission here
    setTimeout(() => {
      setIsLoading(false);
      setEmail('');
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
      <div className="flex-1 relative">
        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-full h-14 pl-12 pr-4 rounded-full border-2 border-slate-200 focus:border-brand-pink focus:outline-none text-brand-blurple placeholder:text-slate-400"
        />
      </div>
      <Button type="submit" variant="primary" isLoading={isLoading}>
        Try for Free
      </Button>
    </form>
  );
}
