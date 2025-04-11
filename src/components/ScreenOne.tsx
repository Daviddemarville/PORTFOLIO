import React from 'react';

const ScreenOne = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="screen-one bg-zinc-200/75 rounded-lg shadow-lg w-full h-full mt-4">
      {children}
    </div>
  );
};

export default ScreenOne;
