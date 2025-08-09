"use client"
import { SidebarTrigger } from "@/app/components/ui/sidebar"
import { AiSearchDialog } from "@/app/components/cheat-sheets/ai/ai-search-dialog"

export default function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="md:hidden" />
      </div>
      <div className="flex items-center gap-4">
        <AiSearchDialog />
      </div>
    </header>
  )
}
