import React from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpen, FolderOpen, LayoutDashboard, Settings, UploadCloud } from 'lucide-react';

export const Sidebar = () => {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: FolderOpen, label: 'Folders', path: '/folders' },
    { icon: UploadCloud, label: 'Upload', path: '/upload' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-zinc-800/60 bg-zinc-950/80 backdrop-blur-2xl transition-transform sm:translate-x-0 hidden sm:block">
      <div className="flex h-full flex-col px-4 py-6">
        <div className="flex items-center gap-3 px-2 mb-10">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100">
            <BookOpen className="h-6 w-6 text-zinc-900" />
          </div>
          <span className="text-xl font-semibold tracking-tight text-zinc-100">SAT Manager</span>
        </div>

        <nav className="flex-1 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-zinc-800/80 text-zinc-100 shadow-sm'
                    : 'text-zinc-400 hover:bg-zinc-800/40 hover:text-zinc-200'
                }`
              }
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto pt-8">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="font-medium text-zinc-200">Storage</span>
              <span className="text-zinc-400">1.2 GB</span>
            </div>
            <div className="h-2 w-full rounded-full bg-zinc-800">
              <div className="h-2 w-[24%] rounded-full bg-indigo-500"></div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
