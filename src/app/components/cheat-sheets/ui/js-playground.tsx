'use client';

import { useState, useTransition, useEffect } from 'react';
import CodeEditor from './code-editor';
import { Button } from '@/app/components/ui/button';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { explainJavascriptCode } from '@/ai/flows/explain-javascript-code';
import { useToast } from '@/app/hooks/use-toast';
import { Loader2, Play, Sparkles } from 'lucide-react';

interface JsPlaygroundProps {
  initialCode: string;
}

export default function JsPlayground({ initialCode }: JsPlaygroundProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<string[]>([]);
  const [explanation, setExplanation] = useState<string | null>(null);
  const [isExplaining, startExplainTransition] = useTransition();
  const { toast } = useToast();

  useEffect(() => {
    setCode(initialCode);
    setOutput([]);
    setExplanation(null);
  }, [initialCode]);

  const runCode = () => {
    setOutput([]);
    const logs: string[] = [];
    const originalLog = console.log;
    
    // Temporarily override console.log to capture output
    console.log = (...args) => {
      logs.push(args.map(arg => {
        try {
          return JSON.stringify(arg, null, 2);
        } catch (e) {
          return String(arg);
        }
      }).join(' '));
    };

    try {
      // Use a function constructor for safer evaluation than direct eval
      new Function(code)();
    } catch (error: any) {
      logs.push(`Error: ${error.message}`);
    } finally {
      // Restore original console.log
      console.log = originalLog;
      setOutput(logs);
    }
  };

  const handleExplain = () => {
    setExplanation(null);
    startExplainTransition(async () => {
      try {
        const res = await explainJavascriptCode({ code });
        setExplanation(res.explanation);
      } catch (error) {
        console.error(error);
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'Could not generate an explanation.',
        });
      }
    });
  };

  return (
    <div className="space-y-4">
      <CodeEditor value={code} onChange={setCode} language="javascript" height="h-36" />
      <div className="flex gap-2">
        <Button onClick={runCode}>
          <Play className="mr-2 h-4 w-4" />
          Run
        </Button>
        <Button variant="outline" onClick={handleExplain} disabled={isExplaining}>
          {isExplaining ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Sparkles className="mr-2 h-4 w-4" />
          )}
          Explain Code
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Console Output</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-48">
              <pre className="text-sm p-2 bg-muted rounded-md min-h-[4rem] font-code">
                {output.join('\n') || 'Click "Run" to see output.'}
              </pre>
            </ScrollArea>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>AI Explanation</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-48">
              <div className="text-sm prose prose-sm dark:prose-invert max-w-none">
                {isExplaining && <p className='text-muted-foreground'>Generating explanation...</p>}
                {explanation ? (
                    <div dangerouslySetInnerHTML={{ __html: explanation.replace(/\n/g, '<br />') }} />
                ) : <p className='text-muted-foreground'>Click "Explain Code" to get an AI-powered explanation.</p>}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
