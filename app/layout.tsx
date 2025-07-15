import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Your Name | Senior QA Engineer",
  description:
    "8+ years experience in quality assurance, test automation, and CI/CD pipelines. Expert in Selenium, Cypress, Playwright, and building robust testing frameworks for enterprise applications.",
  keywords:
    "senior QA engineer, test automation, Selenium, Cypress, Playwright, QA lead, quality assurance, software testing, CI/CD, Muhammad Aashir ul Haque",
  authors: [{ name: "Your Name" }],
  openGraph: {
    type: "website",
    url: "https://yourwebsite.github.io/",
    title: "Your Name | Senior QA Engineer",
    description:
      "8+ years experience in quality assurance and test automation. Expert in building robust testing frameworks for enterprise applications.",
    images: [
      {
        url: "https://yourwebsite.github.io/images/cover.jpg",
        width: 1200,
        height: 630,
        alt: "Your Name - Senior QA Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name | Senior QA Engineer",
    description:
      "8+ years experience in quality assurance and test automation. Expert in building robust testing frameworks for enterprise applications.",
    images: ["https://yourwebsite.github.io/images/cover.jpg"],
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect x='15' y='25' width='20' height='50' rx='2' fill='%234f46e5'/><rect x='40' y='15' width='20' height='60' rx='2' fill='%234f46e5'/><rect x='65' y='30' width='20' height='45' rx='2' fill='%234f46e5'/><circle cx='25' cy='20' r='3' fill='%23fff'/><circle cx='50' cy='10' r='3' fill='%23fff'/><circle cx='75' cy='25' r='3' fill='%23fff'/></svg>",
  },
  metadataBase: new URL("https://yourwebsite.github.io"),
  alternates: {
    canonical: "https://yourwebsite.github.io/",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-PWEQ5RJ569" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PWEQ5RJ569');
          `}
        </Script>

        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Your Name" />

        {/* Schema.org JSON-LD */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Your Name",
              jobTitle: "Senior QA Engineer",
              url: "https://yourwebsite.github.io",
              sameAs: [
                "https://www.linkedin.com/in/yourprofile",
                "https://github.com/yourusername",
                "https://stackoverflow.com/users/youruserid",
              ],
              description:
                "Senior QA Engineer with 8+ years of experience in test automation, quality assurance, and building CI/CD pipelines. Expert in Selenium, Cypress, Playwright, and JIRA.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Your City",
                addressRegion: "Your State",
                addressCountry: "Your Country",
              },
              email: "mailto:youremail@domain.com",
              telephone: "+1-XXX-XXX-XXXX",
              image: "https://yourwebsite.github.io/images/cover.jpg",
              knowsAbout: [
                "Test Automation",
                "Quality Assurance",
                "Selenium",
                "Cypress",
                "Playwright",
                "CI/CD Pipelines",
                "JIRA",
                "Test Management"
              ]
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}