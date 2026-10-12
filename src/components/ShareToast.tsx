'use client';

import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

interface ShareToastProps {
  message: string;
  type?: 'success' | 'info';
  onClose: () => void;
}

export default function ShareToast({
  message,
  type = 'success',
  onClose,
}: ShareToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2800);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-slate-900/90 text-white shadow-xl backdrop-blur-md border border-white/10 animate-fade-in text-sm font-medium">
      {type === 'success' ? (
        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
      ) : (
        <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
      )}
      <span>{message}</span>
    </div>
  );
}
