import React, { useEffect, useRef } from 'react';

const AdsterraBanner = ({ height, width, adKey }) => {
  const containerRef = useRef(null);
  const containerId = `adsterra-${adKey}-${width}x${height}`;

  useEffect(() => {
    // Create config script
    const configScript = document.createElement('script');
    configScript.type = 'text/javascript';
    configScript.id = `config-${containerId}`;
    configScript.text = `
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
    adScript.id = `invoke-${containerId}`;
    adScript.src = `//www.highperformanceformat.com/${adKey}/invoke.js`;

    // Append to container (Adsterra will render iframe here)
    if (containerRef.current) {
      containerRef.current.appendChild(configScript);
      containerRef.current.appendChild(adScript);
    }

    // Cleanup function
    return () => {
      const config = document.getElementById(`config-${containerId}`);
      const invoke = document.getElementById(`invoke-${containerId}`);
      if (config) config.remove();
      if (invoke) invoke.remove();
    };
  }, [adKey, height, width, containerId]);

  return (
    <div
      ref={containerRef}
      id={containerId}
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
