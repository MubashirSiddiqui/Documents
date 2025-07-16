"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
  {
    title: "Senior QA Engineer",
    company: "GOLOOTLO - DECAGON PAKISTAN PVT. LTD",
    location: "Karachi, Pakistan",
    period: "Nov 2019 – Present",
    description:
      "Leading quality assurance efforts for a high-traffic discount platform, ensuring robust performance and reliability for 20M+ users through comprehensive testing strategies and automation.",
        technologies: ["Postman", "JMeter", "SQL", "MongoDB","Redis Cache","Elastic Search","Android Studio", "Cypress","Charles Proxy","Firebase","MongoDB","New Relic","Burp Suite", "Appium"],
    achievements: [
      "Developed and executed test plans and test cases for web & mobile applications, supporting 20M+ users.",
      "Implemented automated testing frameworks using Selenium and Cypress, reducing regression testing time by 40%.",
      "Managed and tracked defects using Jira, ensuring timely resolution and improving product quality.",
      "Performed performance and load testing using JMeter and improving system stability under peak loads.",
      "Collaborated closely with development and product teams to define requirements and ensure testability of new features.",
      "Mentored 6+ junior QA engineers, enhancing team's testing capabilities and overall productivity by 30%.",
      "Contributed to the continuous integration/continuous delivery (CI/CD) pipeline by integrating automated tests.",
      "Conducted extensive manual functional, regression, and exploratory testing across web and mobile platforms.",
      "Performed cross-browser and cross-device compatibility testing to ensure consistent user experience.",
      "Executed user acceptance testing (UAT) with stakeholders to validate features against business requirements.",
    ],
  },

  {
    title: "QA Engineer (Part-time Project based)",
    company: "BINARY REVOLUTIONS PVT. LTD",
    location: "Karachi, Pakistan",
    period: "Sept 2019 – Mar 2022",
    description:
      "Specialized in developing and implementing automated solutions for critical application functionalities.",      
    technologies: ["Selenium", "Cypress", "Jira", "BugZilla", "Postman", "JMeter", "SQL", "Pycharm"],
    achievements: [
      "Implemented scripted functionality to generate monographs for the Ministry of Health application (KSA).",
      "Provided 100+ bug reports to development teams, facilitating efficient issue resolution and product improvement.",
      "Led the integration of 3rd-party payment systems and subscription models, streamlining financial transactions.",
    ],
  },

    {
      title: "QA Automation Engineer",
      company: "RIKSOF PVT. Ltd",
      location: "Karachi, Pakistan",
      period: "Mar 2019 – Oct 2019",
      description:
        "Collaborated with multiple clients to develop test scripts for ERP solutions and manually tested game applications.",
      technologies: ["Slack", "MySQL", "Selenium", "Appium", "Netbeans", "Trello"],
      achievements:  [
      "Developed test cases in Java, utilizing Selenium WebDriver to ensure the reliability and functionality of web applications.",
      "Performed mobile application testing using Appium, ensuring seamless user experiences across diverse platforms.",
      "Maintained detailed test documentation for traceability of testing activities.",
    ],
    },
    {
      title: "Junior SQA Engineer (Remote)",
      company: "Oventum Technologies",
      location: "Auckland, New Zealand",
      period: "Aug 2018 – Feb 2019",
      description: "Assist in testing web and mobile applications by executing test cases, reporting bugs, and ensuring software quality under supervision.",
      technologies: ["MS Office", "Slack", "Trello", "Postman"],
      achievements: [
      "Created customized Odoo Enterprise ERP applications for multiple clients to ensure quality assurance.",
      "Developed and tested Odoo addons, projects, products, and interfaces, guaranteeing seamless functionality.",
      "Enhanced user experience by documenting system processes for end-users.",
      "Provided customer support and guidance on Odoo module functionality, ensuring high client satisfaction.",
      ],
    },
  ]

  const education = [
    {
      degree: "MS in Computer Science and Information Technology",
      school: "NED University of Engineering and Technology",
      location: "Karachi, Pakistan",
      period: "2021 – 2022",
      description: "Advanced studies in computer science with focus on software engineering and system architecture.",
      achievements: ["Image Processing & Computer Vision", "Natural Language Programing","Cloud Computing", "Data Mining"],
    },
    {
      degree: "BS in Computer Science",
      school: "University of Karachi",
      location: "Karachi, Pakistan",
      period: "2014 – 2017",
      description:
        "Comprehensive computer science education with strong foundation in programming and software development.",
      achievements: ["Software Development", "Computer Networks","Database Systems", "Web Technologies"],
    },
  ]


  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience & Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background that shaped my expertise in backend engineering...
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-8">Professional Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <Badge variant="outline" className="w-fit">
                        <Calendar className="h-3 w-3 mr-1" />
                        {exp.period}
                      </Badge>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <span className="font-medium">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {exp.location}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    <div className="mb-4">
                      <h5 className="font-medium mb-2">Key Achievements:</h5>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                    <div className="text-muted-foreground">
                      <div className="font-medium">{edu.school}</div>
                      <div className="flex items-center text-sm">
                        <MapPin className="h-3 w-3 mr-1" />
                        {edu.location}
                      </div>
                      <div className="flex items-center text-sm">
                        <Calendar className="h-3 w-3 mr-1" />
                        {edu.period}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-3">{edu.description}</p>
                    <div>
                      <h5 className="font-medium mb-2 text-sm">Achievements:</h5>
                      <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Certifications */}
             <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Certifications</h4>
              <div className="space-y-3">
                <Card className="p-4">
                  <div className="text-sm font-medium">Software Testing and Automation</div>
                  <div className="text-xs text-muted-foreground">University of Minnesota • 2022</div>
                </Card>
                <Card className="p-4">
                  <div className="text-sm font-medium">Software Design and Architecture</div>
                  <div className="text-xs text-muted-foreground">Unviersity of Alberta • 2022</div>
                </Card>
                <Card className="p-4">
                  <div className="text-sm font-medium">The Future of Payment Technologies</div>
                  <div className="text-xs text-muted-foreground">University of Michigan • 2021</div>
                </Card>
                <Card className="p-4">
                  <div className="text-sm font-medium">AWS Fundamentals: Building Serverless Applications</div>
                  <div className="text-xs text-muted-foreground">Amazon Web Services • 2020</div>
                </Card>
                <Card className="p-4">
                  <div className="text-sm font-medium">FinTech: Foundations, Payments and Regulations</div>
                  <div className="text-xs text-muted-foreground">University of Pennsylvania • 2020</div>
                </Card>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </section>
  )
}
