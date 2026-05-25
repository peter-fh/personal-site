import { Mail, Phone, MapPin, Globe, Code, Link, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function Resume() {
  const resumeData = {
    name: "Alex Rivera",
    title: "Senior Full Stack Engineer",
    summary: "Dedicated software engineer with 8+ years of experience building scalable web applications. Passionate about clean code, performance optimization, and mentoring junior developers. Expert in React, Node.js, and Cloud Architecture.",
    contact: {
      email: "alex.rivera@example.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      website: "alexrivera.dev",
      github: "github.com/arivera",
      linkedin: "linkedin.com/in/arivera",
    },
    skills: [
      "React", "TypeScript", "Node.js", "Next.js", "PostgreSQL", "AWS", "Docker", "Tailwind CSS", "GraphQL", "Python", "Rust"
    ],
    experience: [
      {
        company: "TechNova Solutions",
        role: "Senior Full Stack Engineer",
        period: "2021 - Present",
        description: "Leading the development of a high-traffic fintech dashboard. Reduced initial load times by 40% using Next.js and optimized data fetching patterns.",
        highlights: [
          "Architected a micro-frontend architecture using Module Federation.",
          "Implemented a real-time notification system using WebSockets.",
          "Managed a team of 5 developers, providing technical guidance and code reviews."
        ]
      },
      {
        company: "CloudStream Inc.",
        role: "Software Engineer",
        period: "2018 - 2021",
        description: "Built and maintained multiple SaaS products for enterprise clients. Focused on reliability and security.",
        highlights: [
          "Developed a custom UI library used across 10+ internal projects.",
          "Integrated Stripe for complex subscription-based billing workflows.",
          "Improved CI/CD pipelines, reducing deployment time by 50%."
        ]
      }
    ],
    education: [
      {
        school: "University of California, Berkeley",
        degree: "B.S. in Computer Science",
        year: "2018"
      }
    ],
    projects: [
      {
        name: "OpenGraph Pro",
        description: "A tool for generating dynamic social sharing images.",
        link: "github.com/arivera/opengraph-pro"
      },
      {
        name: "QuickTask",
        description: "A minimalist task management CLI tool written in Rust.",
        link: "github.com/arivera/quicktask"
      }
    ]
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8 lg:p-12 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <header className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div className="flex gap-4 items-center">
            <Avatar className="h-20 w-20 border-2 border-primary">
              <AvatarImage src="https://github.com/shadcn.png" alt={resumeData.name} />
              <AvatarFallback>AR</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">{resumeData.name}</h1>
              <p className="text-xl text-muted-foreground">{resumeData.title}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" asChild>
              <a href={`mailto:${resumeData.contact.email}`}><Mail className="mr-2" /> Email</a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href={`https://${resumeData.contact.github}`} target="_blank" rel="noreferrer"><Code className="mr-2" /> GitHub</a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href={`https://${resumeData.contact.linkedin}`} target="_blank" rel="noreferrer"><Link className="mr-2" /> LinkedIn</a>
            </Button>
          </div>
        </header>

        <Separator />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar */}
          <aside className="space-y-6">
            <section>
              <h2 className="text-sm font-semibold uppercase tracking-wider mb-3">Contact</h2>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2"><MapPin size={14} className="text-muted-foreground" /> {resumeData.contact.location}</div>
                <div className="flex items-center gap-2"><Phone size={14} className="text-muted-foreground" /> {resumeData.contact.phone}</div>
                <div className="flex items-center gap-2"><Globe size={14} className="text-muted-foreground" /> {resumeData.contact.website}</div>
              </div>
            </section>

            <section>
              <h2 className="text-sm font-semibold uppercase tracking-wider mb-3">Skills</h2>
              <div className="flex flex-wrap gap-1.5">
                {resumeData.skills.map(skill => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-sm font-semibold uppercase tracking-wider mb-3">Education</h2>
              {resumeData.education.map((edu, i) => (
                <div key={i} className="mb-2">
                  <div className="font-medium text-sm">{edu.degree}</div>
                  <div className="text-sm text-muted-foreground">{edu.school}</div>
                  <div className="text-xs text-muted-foreground">{edu.year}</div>
                </div>
              ))}
            </section>
          </aside>

          {/* Main Content */}
          <main className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-xl font-bold mb-3">Summary</h2>
              <p className="text-muted-foreground leading-relaxed">{resumeData.summary}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">Experience</h2>
              <div className="space-y-6">
                {resumeData.experience.map((exp, i) => (
                  <div key={i} className="relative pl-4 border-l border-muted pb-4 last:pb-0">
                    <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-primary" />
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold">{exp.company}</h3>
                      <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded">{exp.period}</span>
                    </div>
                    <p className="text-sm font-medium mb-2">{exp.role}</p>
                    <p className="text-sm text-muted-foreground mb-3">{exp.description}</p>
                    <ul className="text-sm space-y-1.5 list-disc list-inside text-muted-foreground">
                      {exp.highlights.map((h, j) => (
                        <li key={j}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">Featured Projects</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {resumeData.projects.map((project, i) => (
                  <Card key={i} className="group hover:border-primary transition-colors">
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-base flex items-center justify-between">
                        {project.name}
                        <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-xs text-muted-foreground mb-2">{project.description}</p>
                      <div className="text-[10px] font-mono text-primary">{project.link}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}
