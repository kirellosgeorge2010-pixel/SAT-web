import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';

export const MainLayout = () => {
  return (
    <div className="flex min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-zinc-800">
      <Sidebar />
      <div className="flex flex-1 flex-col sm:ml-64 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/40 via-zinc-950 to-zinc-950 -z-10"></div>
        <TopBar />
        <main className="flex-1 px-6 py-8 sm:px-10 lg:px-12 max-w-7xl mx-auto w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
