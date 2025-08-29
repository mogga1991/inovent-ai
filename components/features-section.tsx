"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Zap, TrendingUp, Shield, Clock, Users } from "lucide-react"

const features = [
  {
    icon: CheckCircle,
    title: "Strategy-First, Client-Focused",
    description: "We begin with your unique challenges and design solutions that drive measurable business value.",
    benefits: ["Custom Strategy", "Business Value", "Measurable Results"]
  },
  {
    icon: Users,
    title: "Cross-Industry Expertise",
    description: "Our team has delivered AI solutions in healthcare, finance, retail, logistics, education and more.",
    benefits: ["Healthcare", "Finance", "Retail", "Logistics"]
  },
  {
    icon: Zap,
    title: "Full-Stack Capabilities",
    description: "From data engineering and ML to generative AI and automation, we offer end-to-end services under one roof.",
    benefits: ["Data Engineering", "Machine Learning", "Generative AI", "Automation"]
  },
  {
    icon: Shield,
    title: "Certified & Trusted",
    description: "Our consultants maintain certifications across major platforms (AWS, Azure, Salesforce, Microsoft Copilot).",
    benefits: ["AWS Certified", "Azure Certified", "Salesforce", "Microsoft Copilot"]
  },
  {
    icon: TrendingUp,
    title: "Based in Salt Lake City",
    description: "We serve clients in Utah and nationwide, offering on-site workshops and remote engagements.",
    benefits: ["Local Presence", "On-site Workshops", "Remote Engagement", "Nationwide Service"]
  },
  {
    icon: Clock,
    title: "Continuous Improvement",
    description: "We monitor performance, provide feedback loops and refine your AI initiatives to maximise ROI.",
    benefits: ["Performance Monitoring", "Feedback Loops", "ROI Optimization", "Continuous Refinement"]
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm">
            Why Choose InnoventAI
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Strategy-First, Client-Focused
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We begin with your unique challenges and design solutions that drive measurable business value, 
            backed by cross-industry expertise and full-stack capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <Badge key={benefitIndex} variant="outline" className="text-xs">
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
