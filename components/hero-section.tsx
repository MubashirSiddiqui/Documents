"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Bug, Shield, Gauge, Database } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const trackResumeDownload = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "download", {
        event_category: "Resume",
        event_label: "Mubashir_Siddiqui_Resume.pdf",
        value: 1,
      })
      window.gtag("event", "resume_download", {
        event_category: "Engagement",
        event_label: "Hero Section",
        custom_parameter_1: "resume_pdf",
      })
    }
  }

  if (!mounted) return null

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 pb-8">
      {/* Background remains unchanged */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-teal-400 dark:from-gray-900 dark:via-gray-800 dark:to-teal-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-60 w-20 h-20 bg-teal-200 dark:bg-teal-800 rounded-full opacity-20 animate-  hidden md:block"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-teal-200 dark:bg-teal-800 rounded-full opacity-20 animate-pulse delay-1000 hidden md:block"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-teal-200 dark:bg-yellow-800 rounded-full opacity-20 animate-pulse delay-2000 hidden md:block"></div>
         <div className="absolute top-60 left-20 w-20 h-20 bg-teal-200 dark:bg-dark-800 rounded-full opacity-20 animate-pulse hidden md:block"></div>
      <div className="absolute top-80 right-30 w-16 h-16 bg-teal-200 dark:bg-teal-800 rounded-full opacity-20 animate-pulse delay-1000 hidden md:block"></div>
      <div className="absolute bottom-80 left-40 w-12 h-12 bg-teal-200 dark:bg-teal-800 rounded-full opacity-20 animate-pulse delay-2000 hidden md:block"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">

          {/*<div className="availability-badge">
              <span className="pulse-dot" />
                    Available for new opportunities
              </div> */}


              <div className="availability-badge inline-flex items-center bg-indigo-100/10 dark:bg-indigo-900/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-3">
                {/* Blinking dot with custom animation */}
                  <span className="blinking-dot h-2 w-2 rounded-full bg-primary mr-2"></span>
                    Available for new opportunities
                </div>

              <style jsx>{`
                  .blinking-dot {
                    animation: blink 1.5s infinite;
                  }
                  @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                  }
                `}</style>

           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6">
  <span className="block text-foreground">Hi, I'm</span>
  <span className="block text-teal-600 dark:text-teal-400 leading-tight">
    Mubashir Siddiqui
  </span>
</h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 lg:mb-8 leading-relaxed">
              Senior QA Engineer with 8+ years ensuring flawless software delivery. Expert in test automation, CI/CD pipelines, 
              and building robust testing frameworks for enterprise applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start mb-6 lg:mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-600 to-teal-600 hover:from-teal-700 hover:to-teal-700 text-sm sm:text-base"
                asChild
              >
                <a href="#projects">View My Work</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white text-sm sm:text-base"
                asChild
              >
                <a
                  href="/downloads/Mubashir_Siddiqui_Resume.pdf"
                  download="Mubashir_Siddiqui_Resume.pdf"
                  onClick={trackResumeDownload}
                >
                  Download Resume
                </a>
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start space-x-4 lg:space-x-6">
              <Button variant="ghost" size="icon" className="hover:text-teal-600" asChild>
                <a href="https://github.com/mubashir" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 lg:h-6 lg:w-6" style={{height:'25px', width:'25px'}} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-teal-600" asChild>
                <a href="https://www.linkedin.com/in/mubashir" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 lg:h-6 lg:w-6" style={{height:'25px', width:'25px'}} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-teal-600" asChild>
                <a href="mailto:mubashir.siddiqui@example.com">
                  <Mail className="h-5 w-5 lg:h-6 lg:w-6" style={{height:'25px', width:'25px'}} />
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
                    <div className="w-[23rem] h-[23rem] sm:w-[26rem] sm:h-[26rem] md:w-[28rem] md:h-[28rem] lg:w-[28rem] lg:h-[28rem] rounded-full bg-gradient-to-r from-teal-600 to-teal-600 p-2">
           {/*<div className="w-80 h-80 sm:w-88 sm:h-88 md:w-96 md:h-96 lg:w-96 lg:h-96 rounded-full bg-gradient-to-r from-teal-600 to-teal-600 p-2">*/}
                <div className="w-full h-full rounded-full overflow-hidden bg-background">
                  <Image
                    src="/images/profile.jpg"
                    alt="Mubashir Siddiqui"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Custom CSS for slower pulse animation */}
              <style jsx>{`
                .slow-pulse {
                  animation: slow-pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                
                @keyframes slow-pulse {
                  0%, 100% {
                    opacity: 1;
                  }
                  50% {
                    opacity: 0.7;
                  }
                }
              `}</style>

              {/* QA Tech stack floating icons */}
              {/* 1. Selenium - Top Right */}
              <div
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer group slow-pulse"
                title="Selenium"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.844 1.424a.368.368 0 00-.119.266v20.62c0 .1.048.193.119.266l9.792 5.62a.368.368 0 00.369 0l9.792-5.62a.368.368 0 00.119-.266V1.69a.368.368 0 00-.119-.266L14.965.004a.368.368 0 00-.369 0l-9.792 5.62zm16.782 8.65v7.85l-8.391 4.815v-9.578l4.196-2.403v-1.69l-4.196-2.403v-1.69l8.391 4.815zm-17.564 7.85v-7.85l8.391-4.815v1.69L7.857 9.85v1.689l4.196 2.403v9.578l-8.39-4.815zm.589-9.539L12 4.813l6.749 3.872-6.749 3.872-6.749-3.872z"/>
                </svg>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
                  Selenium
                </div>
              </div>

              {/* 2. Cypress - Top Left */}
              <div
                className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 lg:-top-8 lg:-left-8 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl lg:text-2xl shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer group slow-pulse"
                style={{ animationDelay: "1s" }}
                title="Cypress"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.998 0C5.366 0 0 5.367 0 12a11.992 11.992 0 0012 12c6.633 0 12-5.367 12-12-.006-6.633-5.367-12-12-12zM6.37 14.575c.392.523.916.742 1.657.742.35 0 .699-.044.92-.175.526-.219.744-.7.744-1.79v-6.02h1.657v5.985c0 1.745-.524 2.796-1.745 3.41-.7.35-1.572.393-2.275.175-1.048-.35-1.745-1.136-2.01-2.1-.13-.525-.13-1.005 0-1.53h1.745c-.044.175-.044.35 0 .525zm8.453.175c1.136.35 2.275.35 3.015.044.525-.219.918-.612 1.136-1.136.175-.525.175-1.005 0-1.53h1.745c.044.7 0 1.397-.262 2.01-.525 1.31-1.658 2.1-3.058 2.405-1.745.35-3.45 0-4.542-.962-.7-.612-1.136-1.53-1.31-2.538-.13-1.31.175-2.623.918-3.676.7-1.005 1.79-1.658 3.015-1.92 1.31-.263 2.623 0 3.676.7.7.525 1.136 1.224 1.397 2.01.13.525.175 1.092.13 1.658h-6.633c-.044.525.044 1.048.35 1.483.262.35.7.525 1.136.525.35 0 .7-.13.918-.35.219-.219.35-.525.35-.875h1.745c0 .7-.35 1.397-.918 1.79-.525.35-1.224.525-1.92.35-.7-.175-1.31-.7-1.483-1.397-.13-.7-.044-1.397.262-2.01.35-.7.962-1.136 1.658-1.31.7-.175 1.397-.044 2.01.262.35.218.612.524.744.874.13.35.175.743.13 1.136h-4.453c-.044.35 0 .7.175 1.005.262.525.7.7 1.31.7z"/>
                </svg>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
                  Cypress
                </div>
              </div>

              {/* 3. JIRA - Middle Left */}
              <div
                className="absolute top-1/2 -left-4 sm:-left-6 lg:-left-8 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer group slow-pulse"
                style={{ animationDelay: "2s" }}
                title="JIRA"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.571 11.513H0a5.218 5.218 0 015.232-5.215h2.13v2.139a3.327 3.327 0 003.33 3.329 3.335 3.335 0 00.78-.1zm5.215-5.215h-2.13V4.16a3.33 3.33 0 00-3.327-3.33 3.33 3.33 0 00-3.327 3.33v2.138H5.232a5.215 5.215 0 000 10.43h6.339a5.215 5.215 0 005.215-5.216 5.217 5.217 0 00-5.215-5.214zm0 0a5.215 5.215 0 015.215 5.215h-5.215zm0 0a5.215 5.215 0 015.215 5.215h-5.215zm0 5.215a5.215 5.215 0 015.215 5.215h-5.215zm-5.215 0a5.215 5.215 0 015.215 5.215h-5.215zm0 0a5.215 5.215 0 015.215 5.215h-5.215z"/>
                </svg>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
                  JIRA
                </div>
              </div>

              {/* 4. Playwright - Middle Right */}
              <div
                className="absolute bottom-1/3 -right-3 sm:-right-4 lg:-right-6 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-teal-500 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer group slow-pulse"
                style={{ animationDelay: "3s" }}
                title="Playwright"
              >
                <Bug className="h-4 w-4 sm:h-5 sm:h-5 lg:w-6 lg:h-6" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
                  Playwright
                </div>
              </div>

              {/* 5. Postman - Bottom Left */}
              <div
                className="absolute -bottom-2 left-1/4 sm:-bottom-4 sm:left-1/4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer group slow-pulse"
                style={{ animationDelay: "4s" }}
                title="Postman"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5c-5.799 0-10.5-4.701-10.5-10.5S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5zm5.5-10.5c0 3.032-2.468 5.5-5.5 5.5S6.5 15.032 6.5 12 8.968 6.5 12 6.5s5.5 2.468 5.5 5.5z"/>
                </svg>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
                  Postman
                </div>
              </div>

              {/* 6. CI/CD - Bottom Right */}
              <div
                className="absolute -bottom-4 right-1/3 sm:-bottom-6 sm:right-1/3 lg:-bottom-8 lg:right-1/3 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-teal-500 to-teal-800 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer group slow-pulse"
                style={{ animationDelay: "5s" }}
                title="CI/CD"
              >
                <Gauge className="h-4 w-4 sm:h-5 sm:w-5" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
                  CI/CD
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-5 w-5 lg:h-6 lg:w-6 text-muted-foreground" />
      </div>
    </section>
  )
}