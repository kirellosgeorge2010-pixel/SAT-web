import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { Dashboard } from './pages/Dashboard';
import { FolderView } from './pages/FolderView';
import { Upload } from './pages/Upload';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="folders" element={<Navigate to="/" replace />} />
          <Route path="folders/:id" element={<FolderView />} />
          <Route path="upload" element={<Upload />} />
          <Route path="settings" element={<div className="p-8 text-zinc-400">Settings Page (Coming Soon)</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
