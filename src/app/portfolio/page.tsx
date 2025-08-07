import { ProjectCard } from '@/app/components/project-card';
import AiDescriptionGenerator from '@/app/components/ai-description-generator';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform with features like product catalog, shopping cart, and payment integration.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    imageUrl: 'https://placehold.co/600x400.png',
    liveUrl: '#',
    githubUrl: '#',
    imageHint: 'online shopping',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application to help teams stay organized and productive with boards, lists, and cards.',
    techStack: ['React', 'Firebase', 'Sass', 'React DnD'],
    imageUrl: 'https://placehold.co/600x400.png',
    liveUrl: '#',
    githubUrl: '#',
    imageHint: 'task management',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my skills and projects, built with a focus on performance and design.',
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    imageUrl: 'https://placehold.co/600x400.png',
    liveUrl: '#',
    githubUrl: '#',
    imageHint: 'developer portfolio',
  },
    {
    title: 'Weather App',
    description: 'A simple and elegant weather application that provides real-time weather data for any location.',
    techStack: ['React', 'OpenWeatherMap API', 'CSS Modules'],
    imageUrl: 'https://placehold.co/600x400.png',
    liveUrl: '#',
    githubUrl: '#',
    imageHint: 'weather forecast',
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
