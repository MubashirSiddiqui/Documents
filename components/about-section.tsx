"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Zap, Users, Shield, Bug, Gauge, Database } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about delivering exceptional software quality through innovative testing strategies and automation frameworks. I believe quality is not just about finding bugs, but preventing them.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Started my career as a manual tester and evolved into a comprehensive QA engineer with expertise in automation, performance testing, and quality assurance processes. I've worked with startups to enterprise companies, helping them build robust testing frameworks and maintain high-quality standards.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              My approach combines technical expertise with strategic thinking, ensuring that quality is built into every stage of the development lifecycle. I'm passionate about mentoring junior testers and promoting a culture of quality within development teams.
            </p>

            <h4 className="text-xl font-semibold mb-4">What I Bring:</h4>
            <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-6">
              <li>Comprehensive test strategy development</li>
              <li>Advanced automation framework design</li>
              <li>Performance and security testing expertise</li>
              <li>CI/CD pipeline integration and optimization</li>
            </ul>
          </div>

          <div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Key Achievements</h3>
              <div className="grid gap-3">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Tested 100+ Apps</h4>
                    <p className="text-sm text-muted-foreground">
                      Exceeded client expectations by ensuring 100+ defect-free app releases through rigorous testing protocols, meeting all critical deadlines.</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Boosted Customer Satisfaction</h4>
                    <p className="text-sm text-muted-foreground">
                      Boosted customer satisfaction by 25% through proactive defect prevention, rapid issue triage, and data-driven quality improvements.
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Cut Crash Rates</h4>
                    <p className="text-sm text-muted-foreground">
                      Reduced app crashes by 40% with effective issue analysis and bug fixes.
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Technical Leadership & Mentorship</h4>
                    <p className="text-sm text-muted-foreground">
                      Led QA teams in implementing shift-left testing, risk-based approaches, and quality metrics tracking across development lifecycles                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}