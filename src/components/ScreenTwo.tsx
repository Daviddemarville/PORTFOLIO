import React from 'react';

const ScreenTwo = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="screen-two bg-zinc-200/75 rounded-lg shadow-lg w-full h-full mt-4">
      {children}
    </div>
  );
};

export default ScreenTwo;


