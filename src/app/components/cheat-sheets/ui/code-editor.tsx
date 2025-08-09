'use client';

import { Textarea } from "@/app/components/ui/textarea";

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  language: 'html' | 'css' | 'javascript' | 'bash';
  height?: string;
}

export default function CodeEditor({ value, onChange, language, height = "h-48" }: CodeEditorProps) {
  return (
    <div className="relative">
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`font-code text-sm bg-muted border-0 resize-none ${height}`}
        spellCheck="false"
      />
      <div className="absolute top-2 right-2 text-xs text-muted-foreground bg-background/50 px-2 py-1 rounded-md pointer-events-none">{language}</div>
    </div>
  );
}
