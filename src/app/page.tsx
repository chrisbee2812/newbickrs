import { Button } from '@/app/components/ui/button';
import { Code, MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="inline-block rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground">
            <p>Creative Web Developer</p>
          </div>
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Building Digital Experiences
          </h1>
          <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
            I'm a passionate developer focused on creating beautiful,
            responsive, and user-friendly web applications. Explore my work and
            see how I can help bring your ideas to life.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/portfolio">
                View My Work <MoveRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">
                Get in Touch <Code className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/digital-experience.jpg"
            alt="A digital image of code in waves and luminesence"
            width={600}
            height={600}
            className="rounded-full object-cover shadow-2xl"
            data-ai-hint="digital image of code in waves and luminesence"
          />
        </div>
      </div>
    </div>
  );
}
