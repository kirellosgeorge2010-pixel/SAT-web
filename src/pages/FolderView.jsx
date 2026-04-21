import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Search, Filter, ArrowLeft, MoreVertical, FileText, Download, Trash2 } from 'lucide-react';
import { foldersData, recentFiles } from '../data/mockData';

export const FolderView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const folder = foldersData.find(f => f.id === id) || foldersData[0];
  const files = recentFiles.filter(f => f.folder === folder.name);
  
  // If no files match exactly, just show all to simulate data
  const displayFiles = files.length > 0 ? files : recentFiles;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      
      {/* Header */}
      <div>
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-sm text-zinc-400 hover:text-zinc-200 transition-colors mb-4 group"
        >
          <ArrowLeft className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" />
          Back
        </button>
        <div className="flex items-center gap-4">
          <div className={`h-16 w-16 rounded-2xl flex items-center justify-center ${folder.bg} ${folder.color}`}>
            <FileText className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-zinc-50">{folder.name}</h1>
            <p className="text-zinc-400 mt-1">{displayFiles.length} files in this folder</p>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
          <Input placeholder={`Search in ${folder.name}...`} className="pl-10" />
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <Button variant="outline" className="flex-1 sm:flex-none gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button className="flex-1 sm:flex-none">
            Upload Here
          </Button>
        </div>
      </div>

      {/* File Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayFiles.map((file, i) => (
          <Card key={i} className="group p-5 hover:border-zinc-700 hover:bg-zinc-800/40 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="h-10 w-10 rounded-lg bg-zinc-800/80 flex items-center justify-center text-zinc-300">
                <FileText className="h-5 w-5" />
              </div>
              <button className="text-zinc-500 hover:text-zinc-300 p-1 rounded-md hover:bg-zinc-800 transition-colors">
                <MoreVertical className="h-4 w-4" />
              </button>
            </div>
            
            <h3 className="font-medium text-zinc-200 group-hover:text-zinc-100 truncate mb-1">
              {file.name}
            </h3>
            <div className="flex items-center gap-2 text-xs text-zinc-500 mb-6">
              <span>{file.type.toUpperCase()}</span>
              <span>•</span>
              <span>{file.size}</span>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-zinc-800/60 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button variant="secondary" size="sm" className="flex-1 h-8 text-xs gap-1.5">
                <Download className="h-3.5 w-3.5" />
                Download
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-400 hover:text-red-300 hover:bg-red-400/10">
                <Trash2 className="h-3.5 w-3.5" />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {displayFiles.length === 0 && (
        <div className="text-center py-20">
          <div className="mx-auto h-16 w-16 rounded-2xl bg-zinc-900/50 flex items-center justify-center text-zinc-600 mb-4">
            <FileText className="h-8 w-8" />
          </div>
          <h3 className="text-lg font-medium text-zinc-300 mb-1">No files here yet</h3>
          <p className="text-zinc-500 text-sm">Upload some materials to get started.</p>
        </div>
      )}
    </div>
  );
};
