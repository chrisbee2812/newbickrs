'use client';
import { useState } from 'react';
import { jsSnippets, CheatSheetItem } from '@/app/lib/cheat-sheets/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/app/components/ui/card';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import { Button } from '@/app/components/ui/button';
import JsPlayground from '@/app/components/cheat-sheets/ui/js-playground';

export default function JavascriptPage() {
  const [selectedSnippet, setSelectedSnippet] = useState(jsSnippets[0]);
  
  return (
    <div className="grid h-full grid-cols-1 gap-6 md:grid-cols-3">
      <Card className="md:col-span-1 flex flex-col">
        <CardHeader>
          <CardTitle>JavaScript Snippets</CardTitle>
          <CardDescription>Select a snippet to use in the playground.</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <ScrollArea className="h-[calc(100vh-16rem)]">
            <div className="space-y-2 pr-4">
              {jsSnippets.map((snippet) => (
                <Button
                  key={snippet.id}
                  variant={selectedSnippet.id === snippet.id ? 'secondary' : 'ghost'}
                  className="w-full justify-start text-left"
                  onClick={() => setSelectedSnippet(snippet)}
                >
                  {snippet.name}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
      <div className="md:col-span-2">
        <Card className="h-full">
          <CardHeader>
            <CardTitle>{selectedSnippet.name}</CardTitle>
            <CardDescription>{selectedSnippet.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <JsPlayground key={selectedSnippet.id} initialCode={selectedSnippet.snippet} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
