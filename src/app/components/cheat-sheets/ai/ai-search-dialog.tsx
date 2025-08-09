'use client';
import { useState, useTransition, useEffect } from 'react';
import { findRelevantCodeSnippet } from '@/ai/flows/find-relevant-code-snippet';
import { Button } from '@/app/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/app/components/ui/dialog';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { useToast } from '@/app/hooks/use-toast';
import { Loader2, Search, Sparkles } from 'lucide-react';
import { ScrollArea } from '@/app/components/ui/scroll-area';

export function AiSearchDialog() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<{ codeSnippet: string; explanation: string } | null>(null);
  const { toast } = useToast();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult(null);
    startTransition(async () => {
      try {
        const res = await findRelevantCodeSnippet({ query });
        setResult(res);
      } catch (error) {
        console.error(error);
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'Could not find a relevant snippet. Please try another query.',
        });
      }
    });
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full justify-start text-muted-foreground sm:w-auto">
          <Search className="mr-2 h-4 w-4" />
          <span>Search...</span>
          <kbd className="pointer-events-none ml-4 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            AI Code Assistant
          </DialogTitle>
          <DialogDescription>
            Ask a question in plain English to find relevant code snippets.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSearch}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="query" className="text-right">
                Query
              </Label>
              <Input
                id="query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="col-span-3"
                placeholder="e.g., how to create a css grid"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button type="submit" disabled={isPending || !query}>
              {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Search
            </Button>
          </div>
        </form>
        <ScrollArea className="max-h-[40vh] mt-4">
            {isPending && (
            <div className="flex flex-col items-center gap-2">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="text-muted-foreground">Searching for snippets...</p>
            </div>
            )}
            {result && (
            <div className="space-y-4 pr-4">
                <div>
                <h3 className="font-semibold">Explanation</h3>
                <p className="text-sm text-muted-foreground">{result.explanation}</p>
                </div>
                <div>
                <h3 className="font-semibold">Code Snippet</h3>
                <pre className="mt-2 rounded-md bg-muted p-4">
                    <code className="font-code text-sm">{result.codeSnippet}</code>
                </pre>
                </div>
            </div>
            )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
