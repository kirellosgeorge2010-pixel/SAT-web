import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { UploadCloud, FileText, ArrowRight, TrendingUp } from 'lucide-react';
import { statsData, foldersData, recentFiles } from '../data/mockData';

export const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      
      {/* Hero Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-50 mb-2">
            Welcome back.
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl">
            Here's what's happening with your SAT prep today. You're on track to hit your study goals.
          </p>
        </div>
        <Button onClick={() => navigate('/upload')} className="gap-2 self-start sm:self-auto shadow-lg shadow-zinc-900/50">
          <UploadCloud className="h-5 w-5" />
          Upload Notes
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statsData.map((stat, i) => (
          <Card key={i} className="flex flex-col relative overflow-hidden group hover:border-zinc-700/50 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="text-zinc-400 text-sm font-medium">{stat.label}</span>
            <div className="mt-4 flex items-end justify-between">
              <span className="text-3xl font-bold text-zinc-100 tracking-tight">{stat.value}</span>
              <div className="flex items-center text-xs font-medium text-emerald-400/90 bg-emerald-400/10 px-2 py-1 rounded-md">
                <TrendingUp className="h-3 w-3 mr-1" />
                {stat.trend}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Folders Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-zinc-100">Study Folders</h2>
          <Button variant="ghost" size="sm" className="text-sm">View all</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {foldersData.map((folder) => (
            <Card 
              key={folder.id} 
              className="group cursor-pointer hover:border-zinc-700 hover:bg-zinc-800/40 transition-all p-5"
              onClick={() => navigate(`/folders/${folder.id}`)}
            >
              <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${folder.bg} ${folder.color} mb-4 group-hover:scale-105 transition-transform`}>
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-zinc-100 text-lg mb-1">{folder.name}</h3>
              <p className="text-sm text-zinc-500 font-medium">{folder.fileCount} files</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Files */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-zinc-100">Recent Uploads</h2>
        </div>
        <Card className="p-0 overflow-hidden">
          <div className="divide-y divide-zinc-800/60">
            {recentFiles.map((file) => (
              <div key={file.id} className="flex items-center justify-between p-4 hover:bg-zinc-800/40 transition-colors group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-zinc-200 transition-colors">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-zinc-200 group-hover:text-zinc-100">{file.name}</h4>
                    <div className="flex items-center gap-2 text-xs text-zinc-500 mt-1">
                      <span>{file.size}</span>
                      <span>•</span>
                      <span>{file.date}</span>
                      <span>•</span>
                      <span className="text-zinc-400">{file.folder}</span>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </Card>
      </div>

    </div>
  );
};
