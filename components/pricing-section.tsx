"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"

const plans = [
  {
    name: "AI Readiness Assessment",
    description: "Perfect for businesses exploring AI implementation",
    price: "Free",
    period: "Blueprint",
    features: [
      "AI Readiness Assessment",
      "High-Impact Use Case Identification",
      "Custom AI Strategy Roadmap",
      "Training Recommendations",
      "Implementation Timeline"
    ],
    popular: false
  },
  {
    name: "AI Strategy & Implementation",
    description: "Ideal for companies ready to implement AI solutions",
    price: "Custom",
    period: "Quote",
    features: [
      "Everything in Assessment",
      "AI Strategy Development",
      "Custom AI Development",
      "Integration & Deployment",
      "Change Management Support",
      "Training & Upskilling",
      "Ongoing Optimization"
    ],
    popular: true
  },
  {
    name: "AI Center of Excellence",
    description: "For organizations building internal AI capabilities",
    price: "Custom",
    period: "Quote",
    features: [
      "Everything in Strategy",
      "Internal AI Training Program",
      "AI Governance Framework",
      "Performance Monitoring",
      "Continuous Improvement",
      "Dedicated AI Consultant",
      "24/7 Support & Monitoring"
    ],
    popular: false
  }
]

export function PricingSection() {
  return (
    <section id="process" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm">
            Our Process
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Step-by-Step AI Implementation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From AI readiness assessment to building your internal AI Center of Excellence, 
            we guide you through every step of your AI transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                plan.popular ? 'ring-2 ring-primary shadow-lg' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-2 flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-6">
                  {plan.description}
                </CardDescription>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.period !== "quote" && (
                    <span className="text-muted-foreground">/{plan.period}</span>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/90'}`}
                  size="lg"
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ready to discover how AI can transform your business?
          </p>
          <Button variant="outline" size="lg">
            Get Your Free AI-First Blueprint
          </Button>
        </div>
      </div>
    </section>
  )
}
