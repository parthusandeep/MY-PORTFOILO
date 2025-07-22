import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { TypewriterEffect } from "@/components/typewriter-effect"

export function HeroSection() {
  const roles = ["MERN Stack Developer", "React Enthusiast", "Vibe Coder"]

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center md:justify-center md:gap-x-12 min-h-[calc(100vh-8rem)] text-center md:text-left px-4 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-pulse-slow"></div>
      <div className="relative z-10 space-y-6 md:w-1/2">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight animate-fade-in-up">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-500">
            Parthu Sandeep
          </span>
        </h1>
        <p className="text-2xl md:text-4xl font-semibold text-foreground animate-fade-in-up animation-delay-200">
          {" "}
          <span className="text-emerald-400">
            <TypewriterEffect words={roles} speed={100} delayBetweenWords={2000} />
          </span>
          .
        </p>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto md:mx-0 animate-fade-in-up animation-delay-400">
          Crafting robust and engaging web experiences with a passion for clean code and innovative solutions.
        </p>
        <div className="flex justify-center md:justify-start gap-4 pt-6 animate-fade-in-up animation-delay-600">
          <Button
            asChild
            className="px-8 py-3 text-lg font-semibold bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Link href="#skills">
              My Skills <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="px-8 py-3 text-lg font-semibold border-2 border-purple-500 text-purple-300 hover:bg-purple-900 hover:text-purple-100 transition-all duration-300 transform hover:scale-105 shadow-lg bg-transparent"
          >
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
      </div>
      <div className="relative z-10 mt-12 md:mt-0 md:w-1/2 flex justify-center md:justify-center animate-fade-in-up animation-delay-800">
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-transparent hover:animate-border-glow">
          <img
            src="/white photo.jpg"
            alt="Sandeep's profile photo"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}
