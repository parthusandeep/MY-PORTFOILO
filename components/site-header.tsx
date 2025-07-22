"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MobileSidebar } from "@/components/mobile-sidebar"
import { Menu } from "lucide-react"
import { useState } from "react"

export function SiteHeader() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          href="#"
          className="flex items-center gap-2 font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-500"
        >
          MY Portfolio
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-emerald-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(true)}>
            <Menu className="h-6 w-6 text-foreground" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
          <MobileSidebar isOpen={isSidebarOpen} onOpenChange={setIsSidebarOpen} navLinks={navLinks} />
        </div>
      </div>
    </header>
  )
}
