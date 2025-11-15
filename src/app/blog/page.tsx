'use client';

import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import type { BlogCardProps } from '@/app/lib/blogs-data';
import { blogs } from '@/app/lib/blogs-data';
import BlogDetailsDialog from '@/app/components/blog-details-dialog';

export default function PortfolioPage() {
        
      const [selectedBlog, setSelectedBlog] = useState<BlogCardProps | null>(null);
      const [isBlogDialogOpen, setIsBlogDialogOpen] = useState(false);
    
      
    const handleBlogCardClick = (blog: BlogCardProps) => {
        setSelectedBlog(blog);
        setIsBlogDialogOpen(true);
      };
    
      const handleBlogDialogClose = () => {
        setIsBlogDialogOpen(false);
        setSelectedBlog(null);
      };
    
    
  return (
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="space-y-4 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
            Blog - My Learning (for now)
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
            As a part of my learning journey, I will be documenting my experiences and insights here. Stay tuned for updates!
          </p>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
            Although learning for a year now, i have decided to retrace my steps and document from the begining, so expect basic tutorials and articles at first.
          </p>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
            I'm doing this as much for myself as for anyone else, as teaching is one of the best ways to solidify knowledge.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {blogs.map((blog) => (
            <Card className="overflow-hidden transition-all hover:shadow-lg">
                <CardHeader>
                    <div className="flex flex-col aspect-auto overflow-hidden rounded-lg border bg-primary/10">
                        <CardTitle className="font-headline text-2xl p-4">{blog.header}</CardTitle>
                        <div className="flex flex-col p-4 pl-8">
                            {blog.headerSubs.map((sub) => (
                                <Badge key={sub} variant="secondary" className="mb-2 text-xl">
                                    {sub}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex flex-row overflow-hidden rounded-lg border bg-primary/10 p-4">
                        <CardTitle className="font-headline text-2xl px-2">{blog.title}</CardTitle>
                        <Badge className="ml-6" key={blog.date} variant="secondary">
                            {blog.date}
                        </Badge>
                    </div>
                    <p className="text-muted-foreground">{blog.description}</p>
                </CardContent>
                <CardFooter className="flex justify-end space-x-4">
                    <Button className="self-baseline" onClick={() => handleBlogCardClick(blog)}>
                        View Blog
                    </Button>
                </CardFooter>
            </Card>
          ))}
        </div>

        
      {selectedBlog && (
        <BlogDetailsDialog
          blog={selectedBlog}
          open={isBlogDialogOpen}
          onOpenChange={handleBlogDialogClose}
        />
      )}

      </div>
  );
}