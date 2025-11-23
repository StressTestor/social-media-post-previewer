import React, { useEffect, useRef } from 'react';

const AdsterraBanner = ({ height, width, adKey }) => {
  const bannerRef = useRef(null);

  useEffect(() => {
    if (!bannerRef.current) return;

    const iframe = bannerRef.current;
    const iframeDoc = iframe.contentWindow.document;

    if (iframeDoc.body.innerHTML.length > 0) return;

    const adContent = `
      <html>
        <body style="margin:0;padding:0;display:flex;justify-content:center;align-items:center;">
          <script type="text/javascript">
            atOptions = {
              'key' : '${adKey}',
              'format' : 'iframe',
              'height' : ${height},
              'width' : ${width},
              'params' : {}
            };
          </script>
          <script type="text/javascript" src="//www.highperformanceformat.com/${adKey}/invoke.js"></script>
        </body>
      </html>
    `;

    try {
      iframeDoc.open();
      iframeDoc.write(adContent);
      iframeDoc.close();
    } catch (e) {
      console.error('Adsterra iframe error:', e);
    }

  }, [adKey, height, width]);

  return (
    <iframe
      ref={bannerRef}
      width={width}
      height={height}
      title={`ad-${adKey}`}
      style={{ border: 'none', overflow: 'hidden' }}
      scrolling="no"
      frameBorder="0"
      sandbox="allow-scripts allow-popups"
    />
  );
};

export default AdsterraBanner;
