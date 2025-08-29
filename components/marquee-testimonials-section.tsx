"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "CEO",
    company: "Mid-size manufacturing firm",
    quote: "InnoventAI identified dozens of AI and automation use cases across our company and built a roadmap that significantly boosted productivity. Their training sessions were engaging and practical – our teams adopted AI with enthusiasm.",
    avatar: ""
  },
  {
    name: "CTO",
    company: "Healthcare Technology",
    quote: "The AI strategy and implementation roadmap provided by InnoventAI transformed our operations. We've seen 10x productivity gains and 20% revenue increases within the first quarter.",
    avatar: ""
  },
  {
    name: "Operations Director",
    company: "Retail Chain",
    quote: "InnoventAI's automation solutions integrated seamlessly with our existing tech stack. The training programs empowered our teams to embrace AI confidently.",
    avatar: ""
  },
  {
    name: "VP of Innovation",
    company: "Financial Services",
    quote: "From AI readiness assessment to full implementation, InnoventAI guided us through every step. Their expertise in responsible AI governance was invaluable.",
    avatar: ""
  },
  {
    name: "IT Manager",
    company: "Logistics Company",
    quote: "The generative AI and LLM consulting services opened new possibilities for our business. InnoventAI's approach to change management ensured successful adoption.",
    avatar: ""
  },
  {
    name: "Business Analyst",
    company: "Education Technology",
    quote: "InnoventAI's AI training workshops were engaging and practical. Our teams now have the skills and confidence to leverage AI tools effectively.",
    avatar: ""
  },
  {
    name: "Product Manager",
    company: "SaaS Platform",
    quote: "The AI consulting services helped us identify high-impact use cases and build a strategic roadmap. The results exceeded our expectations.",
    avatar: ""
  },
  {
    name: "Operations Manager",
    company: "Manufacturing",
    quote: "InnoventAI's automation solutions saved us countless hours of manual work. Their continuous optimization approach ensures we maximize ROI.",
    avatar: ""
  },
  {
    name: "Digital Transformation Lead",
    company: "Consulting Firm",
    quote: "Working with InnoventAI was a game-changer. Their cross-industry expertise and full-stack capabilities delivered results we couldn't achieve internally.",
    avatar: ""
  },
  {
    name: "Technology Director",
    company: "Healthcare System",
    quote: "InnoventAI's responsible AI framework and governance consulting helped us implement AI ethically and securely. Highly recommended for healthcare organizations.",
    avatar: ""
  }
]

export function MarqueeTestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Social Proof
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our clients say about the transformative power of AI consulting and automation
          </p>
        </div>

        {/* Top Row - Moving Left */}
        <div className="mb-6 sm:mb-8 overflow-hidden">
          <div className="flex animate-marquee-left">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 mx-2 sm:mx-4 w-64 sm:w-80">
                <Card className="h-full">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <Avatar className="h-10 w-10 sm:h-12 sm:w-12 mr-3 sm:mr-4">
                        <AvatarFallback className="bg-primary text-primary-foreground font-semibold text-sm sm:text-base">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm sm:text-base">{testimonial.name}</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.company}</p>
                      </div>
                    </div>
                    <blockquote className="text-muted-foreground italic text-sm sm:text-base">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row - Moving Right */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee-right">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 mx-2 sm:mx-4 w-64 sm:w-80">
                <Card className="h-full">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <Avatar className="h-10 w-10 sm:h-12 sm:w-12 mr-3 sm:mr-4">
                        <AvatarFallback className="bg-primary text-primary-foreground font-semibold text-sm sm:text-base">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm sm:text-base">{testimonial.name}</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.company}</p>
                      </div>
                    </div>
                    <blockquote className="text-muted-foreground italic text-sm sm:text-base">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
