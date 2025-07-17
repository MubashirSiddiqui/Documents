"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

export function ProjectsSection() {
  const projects = [
    {
      title: "Golootlo - High-Traffic Discounts Platform",
      description:
        "Ensured flawless transactions for subscription platform processing 35K+ daily payments through end-to-end testing of 10+ payment gateway integrations (including CyberSource)",
      image: "/images/golootlo.jpg",
      liveUrl: "https://golootlo.pk/",
      githubUrl: "#",
      featured: true,
      company: "DECAGON PAKISTAN",
      period: "2019 - Present",
    },
    {
      title: "Ministry of Health - Public Health Program",
      description:
        "Developed and automated scripted solutions to generate 500+ standardized monographs for the Ministry of Health (KSA) application, ensuring consistent documentation quality and reducing manual processing time by 70%.",
      image: "/images/project1.jpg",
      liveUrl: "https://www.moh.gov.sa",
      githubUrl: "#",
      featured: true,
      company: "Ministry of Health",
      period: "2019 - Present",
    },
    {
      title: "Katshing - Mobile subscription",
      description:
        "Conducted UI/UX testing for consistency, validated responsive design on multiple devices and browsers, and tested subscription workflows (sign-up, payments, renewals, cancellations.) ",
      image: "/images/project2.jpg",
      liveUrl: "",
      githubUrl: "#",
      featured: false,
      period: "2019",
    },
    {
      title: "Total Parco Mobile Application",
      description:
        "Created water tanker ordering interface with geolocation-based pricing algorithm. Reduced manual booking errors by 40% handling 1,000+ daily orders.",
      image: "/images/project3.jpg",
      liveUrl: "https://play.google.com/store/apps/details?id=com.altpay.infini.consumerapp&hl=en",
      githubUrl: "#",
      featured: false,
      period: "2024",
    },
    {
      title: "Extensia - Volunteer Management System",
      description:
        "Executed full-cycle QA for Total Parco’s mobile app: validated UI/UX compliance, multi-device responsiveness (phones/tablets), payment/loyalty integrations, and offline-mode robustness to ensure flawless customer transactions",
      image: "/images/project4.jpg",
      liveUrl: "https://extensia.cloud/",
      githubUrl: "#",
      featured: false,
      period: "2025",
    },
  ]
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating various technologies and problem-solving approaches.
          </p>
        </div>
        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-lg">{project.title}</span>
                  <Badge className="bg-gradient-to-r from-teal-600 to-teal-600">Featured</Badge>
                </CardTitle>
                <div className="text-sm text-muted-foreground">
                  {project.company} • {project.period}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <div className="text-sm text-muted-foreground">{project.period}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex w-full">
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {/*  
          <div className="mt-12 text-center">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white" asChild>
              <a href="/all-projects">View All Projects</a>
            </Button>
          </div>
          */}
        </div>
      </div>
    </section>
  )
}
