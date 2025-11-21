import React from 'react';

const AdPlaceholder = ({ width, height, className = "" }) => {
    return (
        <div
            className={`border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center text-gray-400 font-medium text-sm ${className}`}
            style={{ width: width, height: height }}
        >
            Ad Space
        </div>
    );
};

export default AdPlaceholder;
