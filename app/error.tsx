'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-100 dark:from-black dark:via-zinc-950 dark:to-slate-950">
      <div className="text-center space-y-6 p-8 rounded-2xl bg-white/50 dark:bg-black/50 backdrop-blur-md border border-gray-200 dark:border-gray-800 shadow-xl max-w-md mx-4">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter">Something went wrong!</h2>
          <p className="text-muted-foreground">
            We apologize for the inconvenience. An unexpected error has occurred.
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <Button
            onClick={() => reset()}
            className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-black text-white"
          >
            Try again
          </Button>
        </div>
      </div>
    </div>
  );
}
