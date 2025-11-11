"use client";

import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/app/components/ui/dialog";
import { ScrollArea } from "@/app/components/ui/scroll-area";
import type { BlogCardProps } from '@/app/lib/blogs-data';

interface BlogDetailsDialogProps {
  blog: BlogCardProps;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function BlogDetailsDialog({ blog, open, onOpenChange }: BlogDetailsDialogProps) {

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
               
        <DialogContent className="sm:max-w-[625px]">
          <ScrollArea className="max-h-[90vh]"> 
            <DialogHeader className="p-6 text-left">
              <DialogTitle className="font-headline text-primary text-3xl">{blog.title}</DialogTitle>
              <DialogDescription asChild className="text-muted-foreground text-base pt-4 space-y-4">
                <div>
                  {blog.blogText && blog.blogText.map((paragraph, index) => (
                    <p key={index} className="whitespace-pre-line">{paragraph}</p>
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>
          </ScrollArea>
        </DialogContent>
      
    </Dialog>
  );
}
