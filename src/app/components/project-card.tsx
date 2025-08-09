import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Github, Globe, SendHorizontal } from 'lucide-react';

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
  imageHint: string;
  targetProp: string; // Changed to React.ReactNode to allow for custom components like Link
};

export function ProjectCard({
  title,
  description,
  techStack,
  imageUrl,
  liveUrl,
  githubUrl,
  imageHint,
  targetProp
}: ProjectCardProps) {
  let linkTarget: React.ReactNode;
  if (targetProp === '') {
    linkTarget = <Link href={liveUrl}><SendHorizontal className="mr-2 h-4 w-4" />Go to {title} page</Link>;
  } else {
    linkTarget = <Link href={liveUrl} target="_blank" rel="noopener noreferrer"><Globe className="mr-2 h-4 w-4" /> Live Demo</Link>;
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader>
        <div className="aspect-video overflow-hidden rounded-lg border">
          <Image
            src={imageUrl}
            alt={title}
            width={600}
            height={400}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            data-ai-hint={imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardTitle className="font-headline text-2xl">{title}</CardTitle>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end space-x-4">
        {/* <Button variant="outline" asChild>        
          <Link href={githubUrl} target={targetProp} rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" /> Code
          </Link>
        </Button> */}
        <Button asChild>
          {linkTarget}
        </Button>
      </CardFooter>
    </Card>
  );
}
