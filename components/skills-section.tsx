"use client"

import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Globe, Database, Smartphone, Shield } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Automation Tools",
      skills: [
        { name: "Selenium WebDriver", level: 95, color: "bg-purple-600" },
        { name: "Cypress", level: 90, color: "bg-purple-600" },
        { name: "Playwright", level: 85, color: "bg-purple-600" },
        { name: "Appium", level: 80, color: "bg-purple-600" },
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 90, color: "bg-green-600" },
        { name: "Python", level: 85, color: "bg-green-600" },
        { name: "JavaScript", level: 80, color: "bg-green-600" },
        { name: "TypeScript", level: 75, color: "bg-green-600" },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Docker", level: 85, color: "bg-blue-600" },
        { name: "Kubernetes", level: 70, color: "bg-blue-600" },
        { name: "AWS", level: 75, color: "bg-blue-600" },
        { name: "Azure", level: 65, color: "bg-blue-600" },
        { name: "Git", level: 90, color: "bg-blue-600" },
      ],
    },
    {
      title: "Methodologies",
      skills: [
        { name: "Agile", level: 95, color: "bg-orange-600" },
        { name: "Scrum", level: 90, color: "bg-orange-600" },
        { name: "Kanban", level: 85, color: "bg-orange-600" },
        { name: "Waterfall", level: 70, color: "bg-orange-600" },
      ],
    },
  ]

  const competencyAreas = [
    {
      title: "Web Testing",
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      keywords: ["Cross-browser", "Responsive", "Accessibility", "UI/UX"],
    },
    {
      title: "API Testing",
      icon: <Database className="w-8 h-8 text-green-600" />,
      keywords: ["REST API", "GraphQL", "SOAP", "Microservices"],
    },
    {
      title: "Mobile Testing",
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
      keywords: ["iOS", "Android", "Cross-platform", "Device Testing"],
    },
    {
      title: "Security Testing",
      icon: <Shield className="w-8 h-8 text-yellow-600" />,
      keywords: ["OWASP", "Penetration", "Vulnerability", "Compliance"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across testing technologies and methodologies
          </p>
        </div>

        {/* Skills Progress Bars */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-2 group">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress
                    value={skill.level}
                    className="h-2 group-hover:h-3 transition-all duration-300"
                    indicatorClassName={`${skill.color} group-hover:scale-x-105 transition-transform duration-300`}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Competency Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {competencyAreas.map((area, index) => (
            <Card
              key={index}
              className="text-center p-6 shadow-sm border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-0 flex flex-col items-center">
                <div className="mb-4">{area.icon}</div>
                <CardTitle className="text-lg font-semibold mb-3">{area.title}</CardTitle>
                <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
                  {area.keywords.map((keyword, kwIndex) => (
                    <span key={kwIndex} className="px-2 py-1 rounded-md bg-gray-100 text-gray-700">
                      {keyword}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
