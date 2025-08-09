'use client';
import { useState } from 'react';
import { htmlTags, CheatSheetItem } from '@/app/lib/cheat-sheets/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/app/components/ui/card';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import { Button } from '@/app/components/ui/button';
import CodeEditor from '@/app/components/cheat-sheets/ui/code-editor';
import HtmlPreview from '@/app/components/cheat-sheets/ui/html-preview';

export default function HtmlPage() {
  const [selectedTag, setSelectedTag] = useState(htmlTags[0]);
  const [code, setCode] = useState(selectedTag.snippet);

  const handleSelectTag = (tag: CheatSheetItem) => {
    setSelectedTag(tag);
    setCode(tag.snippet);
  };

  return (
    <div className="grid h-full grid-cols-1 gap-6 md:grid-cols-3">
      <Card className="md:col-span-1 flex flex-col">
        <CardHeader>
          <CardTitle>HTML Elements</CardTitle>
          <CardDescription>Select an element to see details.</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <ScrollArea className="h-[calc(100vh-16rem)]">
            <div className="space-y-2 pr-4">
              {htmlTags.map((tag) => (
                <Button
                  key={tag.id}
                  variant={selectedTag.id === tag.id ? 'secondary' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => handleSelectTag(tag)}
                >
                  {tag.name}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
      <div className="grid grid-rows-2 gap-6 md:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>{selectedTag.name}</CardTitle>
            <CardDescription>{selectedTag.description}</CardDescription>
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
            <HtmlPreview code={code} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
