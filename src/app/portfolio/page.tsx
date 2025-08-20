import { ProjectCard } from '@/app/components/project-card';
import AiDescriptionGenerator from '@/app/components/ai-description-generator';
import { Globe } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'Doggy Day Care Web Site',
    description: 'A complete website for a doggy day care service, featuring a ai dog breed information tool and contact form.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/bickbark.jpg',
    liveUrl: 'https://www.bicknellsdoglove.org/',
    githubUrl: 'https://github.com/chrisbee2812/BicknellsBarkers/tree/main',
    imageHint: 'doggy day care',
    targetProp: '_blank'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application to help teams stay organized and productive with boards, lists, and cards.',
    techStack: ['React', 'Firebase', 'Sass', 'React DnD'],
    imageUrl: 'https://placehold.co/600x400.png',
    liveUrl: '#',
    githubUrl: '#',
    imageHint: 'task management',
    targetProp: '_blank'
  },
  {
    title: 'Games',
    description: 'A few games, Hangman, Sudoku and Tiles to keep your brain working...',
    techStack: ['Next.js', 'Tailwind CSS', 'React'],
    imageUrl: '/games.png',
    liveUrl: '/portfolio/games',
    githubUrl: '',
    imageHint: 'developer portfolio',
    targetProp: ''
  },
    {
    title: 'Web Dev cheat sheets',
    description: 'A collection of web development cheat sheets for quick reference on HTML, CSS, JavaScript, and more.',
    techStack: ['React', 'CSS Modules', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/cheatsheets.png',
    liveUrl: '/portfolio/cheat-sheets',
    githubUrl: '',
    imageHint: 'weather forecast',
    targetProp: ''
  },
];

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <div className="space-y-4 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
          My Work
        </h1>
        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
          Here are some of the projects I've worked on.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      <div className="mt-24">
        <AiDescriptionGenerator />
      </div>
    </div>
  );
}
