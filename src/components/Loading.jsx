import React from "react";

function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center space-x-2">
      <div className="w-4 h-4 rounded-full animate-pulse bg-violet-600"></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-violet-600"></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-violet-600"></div>
    </div>
  );
}

export default Loading;
