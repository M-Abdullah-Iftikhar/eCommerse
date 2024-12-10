import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center my-20 md:my-0 md:min-h-screen">
      <div className="relative">
        <div className="h-10 w-10 rounded-full border-t-8 border-b-8 border-yellow-400"></div>
        <div className="absolute top-0 left-0 h-10 w-10 rounded-full border-t-8 border-b-8 border-red-600 animate-spin"></div>
      </div>
    </div>
  );
};

export default Loader;
