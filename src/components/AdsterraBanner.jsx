import React, { useEffect, useState } from 'react';

const AdsterraBanner = ({ height, width, adKey }) => {
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    setSrcDoc(`
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
    `);
  }, [adKey, height, width]);

  return (
    <iframe
      width={width}
      height={height}
      srcDoc={srcDoc}
      title={`ad-${adKey}`}
      style={{ border: 'none', overflow: 'hidden' }}
      scrolling="no"
      frameBorder="0"
    />
  );
};

export default AdsterraBanner;
