"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Rocket, ShieldCheck, Gauge, Code, GitBranch, Bug } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Testing Tools",
      icon: <Bug className="w-5 h-5" />,
      skills: [
        { name: "Selenium", level: 95, years: 6 },
        { name: "Cypress", level: 90, years: 4 },
        { name: "Playwright", level: 85, years: 3 },
        { name: "Jest", level: 80, years: 4 },
        { name: "JMeter", level: 75, years: 5 },
      ],
    },
    {
      title: "QA Frameworks",
      icon: <ShieldCheck className="w-5 h-5" />,
      skills: [
        { name: "Test Automation", level: 95, years: 7 },
        { name: "API Testing", level: 90, years: 6 },
        { name: "BDD/TDD", level: 85, years: 5 },
        { name: "Performance Testing", level: 80, years: 4 },
        { name: "Security Testing", level: 70, years: 3 },
      ],
    },
    {
      title: "Platforms & CI/CD",
      icon: <GitBranch className="w-5 h-5" />,
      skills: [
        { name: "JIRA", level: 90, years: 7 },
        { name: "GitLab CI/CD", level: 85, years: 4 },
        { name: "Jenkins", level: 80, years: 5 },
        { name: "Postman", level: 95, years: 6 },
        { name: "BrowserStack", level: 75, years: 3 },
      ],
    },
  ]

  const achievements = [
    { value: "60%+", label: "Defect Reduction" },
    { value: "95%+", label: "Test Coverage" },
    { value: "50+", label: "Test Suites" },
    { value: "30%", label: "Faster Releases" },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise in test automation, quality assurance methodologies, and CI/CD integration with proven ability to reduce defects.
          </p>
        </div>

        {/* Achievement Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-gradient-to-r from-teal-600/10 to-teal-600/10 rounded-lg p-4 text-center min-w-[150px]">
              <div className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-600 bg-clip-text text-transparent">
                {achievement.value}
              </div>
              <div className="text-sm text-muted-foreground">{achievement.label}</div>
            </div>
          ))}
        </div>

        {/* Skills Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="hover:shadow-lg transition-shadow duration-300 group">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-teal-600 to-teal-600 text-white">
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{skill.name}</span>
                          <Badge variant="outline" className="text-xs py-0 px-2">
                            {skill.years}y
                          </Badge>
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 group-hover:h-3 transition-all duration-300"
                        indicatorClassName="bg-gradient-to-r from-teal-600 to-teal-600"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Professional Competency Summary */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-teal-600 to-teal-600 text-white">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Quality Assurance Expertise</h3>
                  <p className="text-teal-100 mb-6">
                    Demonstrated success in implementing QA processes that reduced production defects by{" "}
                    <strong>60%+</strong> while increasing test coverage to <strong>95%+</strong> across enterprise applications.
                  </p>
                  <div className="space-y-3">
                    {[
                      "50+ automated test suites covering UI, API, and integration layers",
                      "CI/CD integration reducing regression testing time by 75%",
                      "Mentored 15+ QA engineers in automation best practices",
                      "Implemented shift-left testing reducing bugs by 40%"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        </div>
                        <span className="text-teal-50">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <div className="relative w-40 h-40 mx-auto mb-4">
                    <div className="absolute inset-0 rounded-full border-4 border-white/30"></div>
                    <div
                      className="absolute inset-0 rounded-full border-4 border-white border-t-transparent animate-spin"
                      style={{ animationDuration: "3s" }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl font-bold">8+</div>
                        <div className="text-lg mt-2">Years Experience</div>
                        <div className="text-sm opacity-80 mt-1">Senior QA Engineer</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center gap-2">
                    <Badge variant="secondary" className="text-teal-600">
                      ISTQB Certified
                    </Badge>
                    <Badge variant="secondary" className="text-teal-600">
                      Agile Expert
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}