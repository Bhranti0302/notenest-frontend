const PageLoader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F7FC]">
      <div className="flex flex-col items-center gap-6">
        {/* Animated Logo */}
        <div className="relative flex items-center justify-center">
          {/* Glow effect */}
          <div className="absolute w-24 h-24 rounded-full bg-violet-400/20 blur-2xl animate-pulse" />

          {/* Logo container */}
          <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center shadow-xl shadow-violet-500/30 animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-10 h-10"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6" />
              <path d="M8 13h8" />
              <path d="M8 17h6" />
            </svg>
          </div>

          {/* Spinning ring */}
          <div className="absolute -inset-2 rounded-[2rem] border-2 border-transparent border-t-violet-500 border-r-indigo-400 animate-spin" />
        </div>

        {/* Brand name */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold tracking-tight text-slate-800">
            Note<span className="text-violet-600">Nest</span>
          </h1>

          <p className="text-sm text-slate-500 font-medium">
            Preparing your workspace...
          </p>
        </div>

        {/* Loading dots */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-violet-600 animate-bounce [animation-delay:-0.3s]" />
          <span className="w-2 h-2 rounded-full bg-violet-600 animate-bounce [animation-delay:-0.15s]" />
          <span className="w-2 h-2 rounded-full bg-violet-600 animate-bounce" />
        </div>
      </div>
    </div>
  );
};
