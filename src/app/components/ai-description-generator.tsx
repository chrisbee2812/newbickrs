'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { generateDescriptionAction } from '@/app/portfolio/actions';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Wand2 } from 'lucide-react';

const initialState = {
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
       {pending ? 'Generating...' : <> <Wand2 className="mr-2 h-4 w-4" /> Generate </>}
    </Button>
  );
}

export default function AiDescriptionGenerator() {
  const [state, formAction] = useActionState(generateDescriptionAction, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message && !state.errors) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="font-headline text-3xl flex items-center gap-2">
          <Wand2 className="h-8 w-8 text-primary" />
          AI Project Description Generator
        </CardTitle>
        <CardDescription>
          Stuck on what to write? Enter your project name and tech stack to generate a description.
        </CardDescription>
      </CardHeader>
      <form ref={formRef} action={formAction}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="projectName">Project Name</Label>
            <Input id="projectName" name="projectName" placeholder="e.g., Skill Showcase" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="techStack">Tech Stack</Label>
            <Input id="techStack" name="techStack" placeholder="e.g., Next.js, TypeScript, Tailwind CSS" required />
          </div>
          {state.message && (
            <div className="space-y-2">
              <Label htmlFor="generatedDescription">Generated Description</Label>
              <Textarea id="generatedDescription" readOnly value={state.message} rows={5} />
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-end">
          <SubmitButton />
        </CardFooter>
      </form>
    </Card>
  );
}
