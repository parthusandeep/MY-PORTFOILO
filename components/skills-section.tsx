import {
  Code,
  Braces,
  Palette,
  GitBranch,
  Github,
  Database,
  Server,
  LayoutGrid,
  Terminal,
  FileCode,
  Brain,
} from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const skills = [
  { name: "HTML", icon: <FileCode className="h-8 w-8 text-orange-500" /> },
  { name: "CSS", icon: <Palette className="h-8 w-8 text-blue-500" /> },
  { name: "JavaScript", icon: <Code className="h-8 w-8 text-yellow-500" /> },
  { name: "Node.js", icon: <Server className="h-8 w-8 text-green-500" /> },
  { name: "React", icon: <Braces className="h-8 w-8 text-cyan-400" /> },
  { name: "Express.js", icon: <LayoutGrid className="h-8 w-8 text-gray-400" /> },
  { name: "MongoDB", icon: <Database className="h-8 w-8 text-green-600" /> },
  { name: "C++", icon: <Terminal className="h-8 w-8 text-blue-600" /> },
  { name: "Git", icon: <GitBranch className="h-8 w-8 text-red-500" /> },
  { name: "GitHub", icon: <Github className="h-8 w-8 text-foreground" /> },
  { name: "LeetCode", icon: <Brain className="h-8 w-8 text-yellow-600" /> },
]

export function SkillsSection() {
  return (
    <section id="skills" className="text-center animate-fade-in">
      <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 animate-fade-in">
        My Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <Card
            key={skill.name}
            className="flex flex-col items-center p-6 bg-card border border-border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 group animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardHeader className="p-0 mb-4">
              <div className="p-3 rounded-full bg-background group-hover:bg-gradient-to-r from-emerald-500 to-purple-500 transition-all duration-300">
                {skill.icon}
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <CardTitle className="text-xl font-semibold text-foreground group-hover:text-white transition-colors duration-300">
                {skill.name}
              </CardTitle>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
