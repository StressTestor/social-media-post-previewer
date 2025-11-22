import React from 'react';

const AdBanner = ({ src, width, height, className = "" }) => {
  return (
    <div className={`flex justify-center ${className}`}>
      <iframe 
        src={src} 
        width={width} 
        height={height} 
        scrolling="no" 
        frameBorder="0"
        style={{ border: 'none', overflow: 'hidden' }}
        title="Ad"
      />
    </div>
  );
};

export default AdBanner;
