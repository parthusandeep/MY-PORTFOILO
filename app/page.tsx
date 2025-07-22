import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { SocialLinks } from "@/components/social-links"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen text-foreground">
      <main className="container mx-auto px-4 py-12 space-y-24">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <section id="contact" className="text-center">
          <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-500 animate-fade-in">
            Contact
          </h2>
          <div className="mt-16 max-w-2xl mx-auto animate-fade-in-up">
            <h3 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Send Me a Message
            </h3>
            <ContactForm />
          </div>
          <div className="mt-12">
            {" "}
            {/* Added margin-top for spacing */}
            <h3 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
              {"Connect with Me"}
            </h3>
            <SocialLinks />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
