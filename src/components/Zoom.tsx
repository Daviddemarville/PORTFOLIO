import React, { useState } from 'react';

interface ZoomProps {
  src: string;
  alt?: string;
  className?: string;
}

const Zoom: React.FC<ZoomProps> = ({ src, alt, className }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={className}
        onClick={toggleZoom}
      />

      {isZoomed && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center cursor-zoom-out"
          onClick={toggleZoom}
        >
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-full rounded-lg shadow-2xl transition-transform duration-300 transform scale-100"
          />
        </div>
      )}
    </>
  );
};

export default Zoom;

