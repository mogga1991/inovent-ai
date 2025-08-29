"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function CTASection() {
  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to discover how AI can transform your business?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Get your Free AI-First Blueprint – a customised plan outlining high-impact AI opportunities, 
            training recommendations and a step-by-step implementation roadmap.
          </p>
          
          <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="text-lg px-8 py-6 h-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Get Your Free AI-First Blueprint
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-6 h-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Schedule a Consultation
                </Button>
              </div>
              <p className="text-sm opacity-75 mt-4">
                No commitment required • Custom AI strategy roadmap • Training recommendations
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
