"use client"

import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Globe, Database, Smartphone, Shield, DatabaseBackup, ArrowLeftRight, Monitor, Palette, File } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Automation Tools",
      skills: [
        { name: "Selenium WebDriver", level: 70, color: "bg-teal-600" },
        { name: "Cypress", level: 75, color: "bg-teal-600" },
        { name: "Playwright", level: 70, color: "bg-teal-600" },
        { name: "Appium", level: 75, color: "bg-teal-600" },
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 65, color: "bg-green-600" },
        { name: "Python", level: 75, color: "bg-green-600" },
        { name: "JavaScript", level: 65, color: "bg-green-600" },
        { name: "TypeScript", level: 65, color: "bg-green-600" },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Postman", level: 85, color: "bg-blue-600" },
        { name: "Jmeter", level: 70, color: "bg-blue-600" },
        { name: "Trello", level: 65, color: "bg-blue-600" },
        { name: "Git", level: 75, color: "bg-blue-600" },
      ],
    },
    {
      title: "Methodologies",
      skills: [
        { name: "Manual Testing", level: 95, color: "bg-orange-600" },
        { name: "Functional Testing", level: 90, color: "bg-orange-600" },
        { name: "Performance Testing", level: 85, color: "bg-orange-600" },
        { name: "Automation Testing", level: 70, color: "bg-orange-600" },
      ],
    },
  ]

  const competencyAreas = [
    {
      title: "Web Testing",
      icon: <Globe className="w-8 h-8 text-teal-600" />,
      keywords: ["Cross-browser", "Responsive", "Localization", "UI/UX", "Compatibility"],
    },
    {
      title: "API Testing",
      icon: <ArrowLeftRight className="w-8 h-8 text-red-400" />,
      keywords: ["REST API", "GraphQL", "SOAP", "Microservices"],
    },
    {
      title: "Mobile Testing",
      icon: <Smartphone className="w-8 h-8 text-blue-400" />,
      keywords: ["iOS", "Android", "Huawei", "goDroid"],
    },
    {
      title: "Performance & Security Testing",
      icon: <Shield className="w-8 h-8 text-yellow-600" />,
      keywords: ["Jmeter", "BurpSuite", "SSL-Pinning", "AWS KMS Keys"],
    },

     {
      title: "Database & Caching",
      icon: <Database className="w-8 h-8 text-purple-600" />,
      keywords: ["MYSQL","MongoDB", "Elastic Search", "Redis Cache", "Kibana"],
    },
    {
      title: "Data & Services Monitoring",
      icon: <Monitor className="w-8 h-8 text-yellow-400" />,
      keywords: ["Firebase Analytics", "New Relic", "POSTMAN"],
    },
    {
      title: "Documentation & Management",
      icon: <File className="w-8 h-8 text-teal-400" />,
      keywords: ["MS-Office","Trello","JIRA", "You Track"],
    },
    {
      title: " Frontend Testing & Designing",
      icon: <Palette className="w-8 h-8 text-indigo-700" />,
      keywords: ["React.js", "Next.js","Figma","Adobe Photoshop"],
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
