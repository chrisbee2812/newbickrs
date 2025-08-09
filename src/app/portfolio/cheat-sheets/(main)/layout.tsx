import { SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarFooter, SidebarInset } from '@/app/components/ui/sidebar';
import Header from '@/app/components/cheat-sheets/layout/header';
import { SidebarNav } from '@/app/components/cheat-sheets/layout/sidebar-nav';
import { Flame } from 'lucide-react';
import Link from 'next/link';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
            <Sidebar>
            <SidebarHeader>
                <Link href="/" className="flex items-center gap-2">
                <Flame className="text-primary" />
                <h1 className="font-headline text-lg font-semibold">Code Compass</h1>
                </Link>
            </SidebarHeader>
            <SidebarContent>
                <SidebarNav />
            </SidebarContent>
            <SidebarFooter>
                {/* Future settings button can go here */}
            </SidebarFooter>
            </Sidebar>
        <SidebarInset>
          <Header />
          <main className="flex-1 p-4 md:p-6 lg:p-8 bg-background">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
