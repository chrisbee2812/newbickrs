'use client';

interface HtmlPreviewProps {
  code: string;
}

export default function HtmlPreview({ code }: HtmlPreviewProps) {
  return (
    <div className="w-full h-full bg-white rounded-md border overflow-hidden">
      <iframe
        srcDoc={code}
        title="HTML Preview"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
        className="w-full h-full"
      />
    </div>
  );
}
