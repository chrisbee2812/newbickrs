import { ProjectCard } from '@/app/components/project-card';
import AiDescriptionGenerator from '@/app/components/ai-description-generator';
import { Globe } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform with features like product catalog, shopping cart, and payment integration.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    imageUrl: 'https://placehold.co/600x400.png',
    liveUrl: '#',
    githubUrl: '#',
    imageHint: 'online shopping',
    targetProp: ''
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application to help teams stay organized and productive with boards, lists, and cards.',
    techStack: ['React', 'Firebase', 'Sass', 'React DnD'],
    imageUrl: 'https://placehold.co/600x400.png',
    liveUrl: '#',
    githubUrl: '#',
    imageHint: 'task management',
    targetProp: ''
  },
  {
    title: 'Games',
    description: 'A few games, Hangman, Sudoku and Tiles to keep your brain working...',
    techStack: ['Next.js', 'Tailwind CSS', 'React'],
    imageUrl: 'https://placehold.co/600x400.png',
    liveUrl: '#',
    githubUrl: '#',
    imageHint: 'developer portfolio',
    targetProp: ''
  },
    {
    title: 'Web Dev cheat sheets',
    description: 'A collection of web development cheat sheets for quick reference on HTML, CSS, JavaScript, and more.',
    techStack: ['React', 'OpenWeatherMap API', 'CSS Modules'],
    imageUrl: 'https://placehold.co/600x400.png',
    liveUrl: '#',
    githubUrl: '#',
    imageHint: 'weather forecast',
    targetProp: ''
  },
];

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <div className="space-y-4 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
          Web Dev Cheat Sheets
        </h1>
        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
          This started as a personal project to keep track of useful web development resources and has grown into a collection of cheat sheets for quick reference on HTML, CSS, JavaScript, and more.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
