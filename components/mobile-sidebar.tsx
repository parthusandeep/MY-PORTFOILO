"use client"

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { X } from "lucide-react"

interface MobileSidebarProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  navLinks: { name: string; href: string }[]
}

export function MobileSidebar({ isOpen, onOpenChange, navLinks }: MobileSidebarProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-[250px] sm:w-[300px] bg-background border-r border-border">
        <SheetHeader className="flex flex-row items-center justify-between px-4 py-2">
          <SheetTitle className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-500">
            Portfolio
          </SheetTitle>
          <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)}>
            <X className="h-6 w-6 text-foreground" />
            <span className="sr-only">Close menu</span>
          </Button>
        </SheetHeader>
        <nav className="flex flex-col gap-4 p-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-foreground hover:text-emerald-400 transition-colors py-2"
              onClick={() => onOpenChange(false)} // Close sidebar on link click
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
