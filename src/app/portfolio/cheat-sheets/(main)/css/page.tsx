'use client';
import { useState } from 'react';
import { cssProperties, CheatSheetItem } from '@/app/lib/cheat-sheets/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/app/components/ui/card';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import { Button } from '@/app/components/ui/button';
import CodeEditor from '@/app/components/cheat-sheets/ui/code-editor';
import CssPreview from '@/app/components/cheat-sheets/ui/css-preview';

const defaultHtml = '<div class="preview-box">\n  Styled Box\n</div>';
const baseCss = `
.preview-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  background: hsl(var(--primary) / 0.2);
  border: 2px dashed hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  font-weight: bold;
}
`;

export default function CssPage() {
  const [selectedProp, setSelectedProp] = useState(cssProperties[0]);
  const [htmlCode, setHtmlCode] = useState(defaultHtml);
  const [cssCode, setCssCode] = useState(selectedProp.snippet);

  const handleSelectProp = (prop: CheatSheetItem) => {
    setSelectedProp(prop);
    setCssCode(prop.snippet);
  };

  const fullCss = `${baseCss}\n\n.preview-box { ${cssCode} }`;

  return (
    <div className="grid h-full grid-cols-1 gap-6 md:grid-cols-3">
      <Card className="md:col-span-1 flex flex-col">
        <CardHeader>
          <CardTitle>CSS Properties</CardTitle>
          <CardDescription>Select a property to see an example.</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <ScrollArea className="h-[calc(100vh-16rem)]">
            <div className="space-y-2 pr-4">
              {cssProperties.map((prop) => (
                <Button
                  key={prop.id}
                  variant={selectedProp.id === prop.id ? 'secondary' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => handleSelectProp(prop)}
                >
                  {prop.name}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 gap-6 md:col-span-2">
        <Card>
            <CardHeader>
                <CardTitle>{selectedProp.name}</CardTitle>
                <CardDescription>{selectedProp.description}</CardDescription>
            </CardHeader>
            <CardContent className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <CodeEditor value={cssCode} onChange={setCssCode} language="css" height="h-32" />
                <CodeEditor value={htmlCode} onChange={setHtmlCode} language="html" height="h-32" />
            </CardContent>
        </Card>
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Live Preview</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow flex items-center justify-center">
            <CssPreview html={htmlCode} css={fullCss} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
