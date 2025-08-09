'use client';
import { useState } from 'react';
import { tailwindClasses, CheatSheetItem } from '@/app/lib/cheat-sheets/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/app/components/ui/card';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import { Button } from '@/app/components/ui/button';
import CodeEditor from '@/app/components/cheat-sheets/ui/code-editor';
import HtmlPreview from '@/app/components/cheat-sheets/ui/html-preview';

const tailwindCdn = '<script src="https://cdn.tailwindcss.com"></script>';

export default function TailwindPage() {
  const [selectedClass, setSelectedClass] = useState(tailwindClasses[0]);
  const [code, setCode] = useState(selectedClass.snippet);

  const handleSelectClass = (item: CheatSheetItem) => {
    setSelectedClass(item);
    setCode(item.snippet);
  };
  
  const previewCode = `${tailwindCdn}\n<body class="bg-background p-4 flex items-center justify-center min-h-screen">\n${code}\n</body>`;

  return (
    <div className="grid h-full grid-cols-1 gap-6 md:grid-cols-3">
      <Card className="md:col-span-1 flex flex-col">
        <CardHeader>
          <CardTitle>Tailwind Classes</CardTitle>
          <CardDescription>Select a class to see an example.</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <ScrollArea className="h-[calc(100vh-16rem)]">
            <div className="space-y-2 pr-4">
              {tailwindClasses.map((item) => (
                <Button
                  key={item.id}
                  variant={selectedClass.id === item.id ? 'secondary' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => handleSelectClass(item)}
                >
                  {item.name}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
      <div className="grid grid-rows-2 gap-6 md:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>{selectedClass.name}</CardTitle>
            <CardDescription>{selectedClass.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeEditor value={code} onChange={setCode} language="html" />
          </CardContent>
        </Card>
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Live Preview</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <HtmlPreview code={previewCode} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
