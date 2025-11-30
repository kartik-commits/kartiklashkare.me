export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-100 dark:from-black dark:via-zinc-950 dark:to-slate-950">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-gray-200 dark:border-gray-800"></div>
          <div className="absolute inset-0 rounded-full border-4 border-t-black dark:border-t-white animate-spin"></div>
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
}
