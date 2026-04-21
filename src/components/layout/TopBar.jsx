import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

export const TopBar = () => {
  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-zinc-800/60 bg-zinc-950/80 px-6 backdrop-blur-2xl">
      <div className="flex w-full max-w-md items-center gap-2">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
          <Input 
            placeholder="Search notes, folders, and documents..." 
            className="pl-10 bg-zinc-900/50 border-zinc-800/80"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" className="h-10 w-10 rounded-full p-0 relative">
          <Bell className="h-5 w-5 text-zinc-400" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-indigo-500"></span>
        </Button>
        <div className="h-8 w-px bg-zinc-800"></div>
        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-950">
          <User className="h-5 w-5 text-zinc-300" />
        </button>
      </div>
    </header>
  );
};
