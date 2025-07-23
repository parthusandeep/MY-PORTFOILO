import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

interface Project {
  title: string
  description: string
  githubLink?: string
  liveLink?: string
  tags: string[]
}

const projects: Project[] = [
  {
    title: "MERN E-commerce Platform",
    description:
      "A full-stack  swag swiggy clone application built with the MERN stack, featuring user authentication, product listings, shopping cart, and order management.",
    githubLink:" https://github.com/parthusandeep/-Swiggy-Clone-swag-React", // Replace with your actual link
    liveLink: "https://swiggy-clone-swag-react-ziz2.vercel.app/", // Replace with your actual link
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
  },
  {
    title: "Real-time Backend Dashboard for Firm Application",
    description:
      "A real-time backend dashboard firm application using Mern. Implemented secure user authentication and protected routes using JWT and middleware..",
    githubLink: "https://github.com/parthusandeep/SWAG-99_BACKEND-reactdash", // Replace with your actual link
    liveLink: "https://swag-99-backend-reactdash-k8aq.vercel.app/", // Replace with your actual link
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Personal Portfolio Website",
    description:
      "This very portfolio website, showcasing my skills and projects, built with Next.js, Tailwind CSS, and shadcn/ui.",
    githubLink: "https://github.com/parthusandeep/MY-PORTFOILO", // Replace with your actual link
    liveLink: "#", // This is the current site, so no external live link needed
    tags: ["React","Node.js","Express.js","Next.js","Mongodb","Tailwind CSS", "shadcn/ui"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="text-center animate-fade-in">
      <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 animate-fade-in">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <Card
            key={project.title}
            className="flex flex-col bg-card border border-border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 group animate-fade-in-up"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground group-hover:text-emerald-400 transition-colors">
                {project.title}
              </CardTitle>
              <CardDescription className="text-muted-foreground mt-2">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm font-medium bg-muted text-muted-foreground rounded-full group-hover:bg-purple-600 group-hover:text-white transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-3 pt-4">
              {project.githubLink && (
                <Button
                  asChild
                  variant="outline"
                  className="border-border text-muted-foreground hover:bg-muted hover:border-emerald-500 transition-all bg-transparent"
                >
                  <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </Link>
                </Button>
              )}
              {project.liveLink && (
                <Button
                  asChild
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 transition-all"
                >
                  <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
