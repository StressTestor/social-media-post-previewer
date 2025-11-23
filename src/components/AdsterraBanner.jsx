import React, { useEffect, useRef } from 'react';

const AdsterraBanner = ({ height, width, adKey }) => {
  const containerRef = useRef(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current || scriptLoadedRef.current) return;

    // Clear container
    containerRef.current.innerHTML = '';

    // Create config script
    const configScript = document.createElement('script');
    configScript.type = 'text/javascript';
    configScript.innerHTML = `
      atOptions = {
        'key' : '${adKey}',
        'format' : 'iframe',
        'height' : ${height},
        'width' : ${width},
        'params' : {}
      };
    `;

    // Create ad script
    const adScript = document.createElement('script');
    adScript.type = 'text/javascript';
    adScript.src = `//www.highperformanceformat.com/${adKey}/invoke.js`;
    adScript.async = true;

    // Append scripts
    containerRef.current.appendChild(configScript);
    containerRef.current.appendChild(adScript);

    scriptLoadedRef.current = true;

    return () => {
      scriptLoadedRef.current = false;
    };
  }, [adKey, height, width]);

  return (
    <div
      ref={containerRef}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    />
  );
};

export default AdsterraBanner;
