"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
       

          <p className="text-muted-foreground text-sm">
            © {currentYear} Mubashir SIddiqui. All rights reserved.
          </p>
        
     
      </div>
    </footer>
  )
}
