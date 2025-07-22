import { Button } from "@/components/ui/button"
import { Github, LinkIcon } from "lucide-react"
import Link from "next/link"

export function SocialLinks() {
  return (
    <div className="flex justify-center gap-6 animate-fade-in-up">
      <Button
        asChild
        className="px-6 py-3 text-lg font-semibold bg-card border border-border text-foreground hover:bg-muted hover:border-emerald-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        <Link href="https://github.com/parthusandeep" target="_blank" rel="noopener noreferrer">
          <Github className="mr-2 h-6 w-6" /> GitHub
        </Link>
      </Button>
      <Button
        asChild
        className="px-6 py-3 text-lg font-semibold bg-card border border-border text-foreground hover:bg-muted hover:border-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        <Link href="https://leetcode.com/u/sandeep_123code/" target="_blank" rel="noopener noreferrer">
          <LinkIcon className="mr-2 h-6 w-6" /> LeetCode
        </Link>
      </Button>
    </div>
  )
}
