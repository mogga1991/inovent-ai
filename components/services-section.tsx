"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    title: "AI Consulting Services",
    description: "Custom strategies, readiness assessments and roadmaps tailored to your business needs.",
    features: ["Strategy Development", "Readiness Assessment", "Custom Roadmaps"],
    icon: ""
  },
  {
    title: "AI Automation & Workflow Optimization",
    description: "Design and build automations to save time and cut costs across your organization.",
    features: ["Process Automation", "Workflow Design", "Cost Reduction"],
    icon: ""
  },
  {
    title: "Generative AI & LLM Consulting",
    description: "Integrate large language models and generative AI for innovation and efficiency.",
    features: ["LLM Integration", "Generative AI", "Innovation Strategy"],
    icon: ""
  },
  {
    title: "AI Training & Upskilling",
    description: "Workshops for executives, teams and IT administrators to build AI literacy.",
    features: ["Executive Training", "Team Workshops", "AI Literacy"],
    icon: ""
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Services Offered
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI consulting services designed to unlock efficiency, innovation and growth 
            through strategic automation, training and implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {service.features.map((feature, featureIndex) => (
                    <Badge key={featureIndex} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
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
