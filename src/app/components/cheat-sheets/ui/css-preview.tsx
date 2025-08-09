'use client';

interface CssPreviewProps {
  html: string;
  css: string;
}

export default function CssPreview({ html, css }: CssPreviewProps) {
  const fullHtml = `
    <html>
      <head>
        <style>
          body { 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            height: 100vh; 
            margin: 0;
            background-color: white;
          }
          ${css}
        </style>
      </head>
      <body>
        ${html}
      </body>
    </html>
  `;

  return (
    <div className="w-full h-full bg-white rounded-md border overflow-hidden">
      <iframe
        srcDoc={fullHtml}
        title="CSS Preview"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
        className="w-full h-full"
      />
    </div>
  );
}
