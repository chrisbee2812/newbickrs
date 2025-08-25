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
    title: 'Games',
    description: 'A few games, Hangman, Sudoku and Tiles to keep your brain working...',
    techStack: ['Next.js', 'Tailwind CSS', 'React'],
    imageUrl: '/games.png',
    liveUrl: '/portfolio/games',
    githubUrl: '',
    imageHint: 'a few games',
    targetProp: ''
  },
  {
    title: 'Personal Trainer Website',
    description: 'Created to advertise a personal trainers services, includes a contact form and small gallery.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/fitfemme.webp',
    liveUrl: 'https://the-fit-femme.vercel.app/',
    githubUrl: 'https://github.com/chrisbee2812/TheFitFemme',
    imageHint: 'fit femme',
    targetProp: '_blank'
  },
    {
    title: 'Web Dev cheat sheets',
    description: 'A collection of web development cheat sheets for quick reference on HTML, CSS, JavaScript, and more.',
    techStack: ['React', 'CSS Modules', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/cheatsheets.png',
    liveUrl: '/portfolio/cheat-sheets',
    githubUrl: '',
    imageHint: 'web dev cheat sheets',
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
