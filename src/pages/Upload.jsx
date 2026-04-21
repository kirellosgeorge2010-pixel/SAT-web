import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { UploadCloud, File, CheckCircle2, X } from 'lucide-react';

export const Upload = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [success, setSuccess] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (selectedFile) => {
    setFile(selectedFile);
    setSuccess(false);
    setProgress(0);
  };

  const simulateUpload = () => {
    if (!file) return;
    setUploading(true);
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 10;
      setProgress(currentProgress);
      if (currentProgress >= 100) {
        clearInterval(interval);
        setUploading(false);
        setSuccess(true);
      }
    }, 200);
  };

  const resetUpload = () => {
    setFile(null);
    setSuccess(false);
    setProgress(0);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20 pt-10">
      
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-zinc-50 mb-3">Upload Materials</h1>
        <p className="text-zinc-400">Add notes, practice tests, or grammar sheets to your SAT workspace.</p>
      </div>

      {!success ? (
        <Card 
          className={`border-2 border-dashed transition-all duration-300 ${
            isDragging 
              ? 'border-indigo-500 bg-indigo-500/5' 
              : 'border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 hover:border-zinc-700'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
            
            <div className={`h-20 w-20 rounded-full flex items-center justify-center mb-6 transition-colors duration-300 ${
              isDragging ? 'bg-indigo-500/20 text-indigo-400' : 'bg-zinc-800/80 text-zinc-400'
            }`}>
              <UploadCloud className="h-10 w-10" />
            </div>

            <h3 className="text-xl font-semibold text-zinc-200 mb-2">
              Drag & drop your files here
            </h3>
            <p className="text-zinc-500 mb-8 max-w-sm mx-auto text-sm">
              Support for PDF, DOCX, TXT, PNG, and JPEG. Maximum file size 50MB.
            </p>

            <div className="relative">
              <input 
                type="file" 
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    handleFileSelect(e.target.files[0]);
                  }
                }}
              />
              <Button variant="secondary" className="pointer-events-none">
                Browse Files
              </Button>
            </div>
          </div>
        </Card>
      ) : null}

      {/* Upload Progress / Success State */}
      {(file || success) && (
        <Card className="animate-in slide-in-from-bottom-2 fade-in">
          <div className="flex items-center gap-4">
            <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${
              success ? 'bg-emerald-500/10 text-emerald-400' : 'bg-zinc-800 text-zinc-300'
            }`}>
              {success ? <CheckCircle2 className="h-6 w-6" /> : <File className="h-6 w-6" />}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-zinc-200 truncate pr-4">
                  {file?.name || 'document.pdf'}
                </span>
                {success ? (
                  <button onClick={resetUpload} className="text-zinc-500 hover:text-zinc-300 transition-colors">
                    <X className="h-4 w-4" />
                  </button>
                ) : (
                  <span className="text-xs text-zinc-500">{progress}%</span>
                )}
              </div>
              
              {!success ? (
                <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-indigo-500 transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              ) : (
                <p className="text-xs text-emerald-400/80 font-medium">Upload complete</p>
              )}
            </div>
          </div>

          {!success && !uploading && progress === 0 && (
            <div className="mt-6 flex justify-end gap-3">
              <Button variant="ghost" onClick={resetUpload}>Cancel</Button>
              <Button onClick={simulateUpload}>Upload File</Button>
            </div>
          )}
        </Card>
      )}

    </div>
  );
};
