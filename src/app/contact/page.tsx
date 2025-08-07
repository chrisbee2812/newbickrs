import { ContactForm } from '@/app/components/contact-form';

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-16 sm:py-24">
      <div className="space-y-4 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
          Get in Touch
        </h1>
        <p className="text-lg text-muted-foreground md:text-xl">
          Have a question or want to work together? Send me a message!
        </p>
      </div>
      <div className="mt-12">
        <ContactForm />
      </div>
    </div>
  );
}
