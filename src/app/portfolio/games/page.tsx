import { ProjectCard } from '@/app/components/project-card';
import { Globe, Type } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'Hangman',
    description: 'Traditional hangman game, using AI to generate words based on winning streaks.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'OpenAI API'],
    imageUrl: '/hangman.png',
    liveUrl: '/portfolio/games/hangman',
    githubUrl: '#',
    imageHint: 'hangman game',
    targetProp: ''
  },
  {
    title: 'Sudoku',
    description: 'Traditional Sudoku game, with AI to generate puzzles based on difficulty levels.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Sudoku Solver Algorithm'],
    imageUrl: '/sudoku.png',
    liveUrl: '/portfolio/games/sudoku',
    githubUrl: '#',
    imageHint: 'sudoku puzzle',
    targetProp: ''
  },
  {
    title: 'Tiles',
    description: 'Tiles, a traditional memory game.',
    techStack: ['Next.js', 'Tailwind CSS', 'React'],
    imageUrl: '/tiles.png',
    liveUrl: '/portfolio/games/tiles',
    githubUrl: '#',
    imageHint: 'developer portfolio',
    targetProp: ''
  },
    
];

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <div className="space-y-4 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
          Games I have created
        </h1>
        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
          Here are a few games i have created to keep your mind ticking.
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
