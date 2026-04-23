const LoadingNav = () => {
  return (
    <div className="flex items-center gap-2">
      {/* Pulse dot */}
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
      </span>

      {/* Text */}
      <span className="text-sm text-gray-400">Checking...</span>
    </div>
  );
};

export default LoadingNav;
