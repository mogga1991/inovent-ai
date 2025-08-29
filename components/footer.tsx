"use client"

import Link from "next/link"

import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react"

const footerLinks = {
  company: [
    { name: "About Us", href: "#features" },
    { name: "Our Process", href: "#process" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" }
  ],
  services: [
    { name: "AI Consulting Services", href: "#services" },
    { name: "AI Automation", href: "#services" },
    { name: "Generative AI & LLM", href: "#services" },
    { name: "AI Training & Upskilling", href: "#services" }
  ],
  resources: [
    { name: "AI Blueprint", href: "#process" },
    { name: "Case Studies", href: "#testimonials" },
    { name: "AI Training Resources", href: "#features" },
    { name: "Blog & Insights", href: "#hero" }
  ],
  support: [
    { name: "AI Readiness Assessment", href: "#process" },
    { name: "Contact Support", href: "#contact" },
    { name: "Training Programs", href: "#features" },
    { name: "Implementation Support", href: "#process" }
  ]
}

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" }
]

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">I</span>
              </div>
              <span className="text-xl font-bold text-foreground">InnoventAI</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              AI consulting services that blend automation, strategy and training to unlock efficiency, 
              innovation and growth. Based in Salt Lake City, serving clients nationwide.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>hello@innoventai.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Salt Lake City, UT</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4 capitalize">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              © 2024 InnoventAI. All rights reserved.
            </span>
            <div className="flex gap-4">
              <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Badge variant="outline" className="text-xs">
              AWS Certified
            </Badge>
            <Badge variant="outline" className="text-xs">
              Microsoft Copilot Partner
            </Badge>
            
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-4 h-4" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
