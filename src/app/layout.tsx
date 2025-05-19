// layout.tsx
import './globals.css'
import Link from 'next/link'

import { Inter, Montserrat } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

export const metadata = {
  title: 'Our Countryside Resort | Memory Care & Assisted Living',
  description: 'Compassionate memory care and assisted living in a serene countryside setting. Located in Perris, CA.',
  keywords: [
    'Memory Care',
    'Assisted Living',
    'Senior Living',
    'Elderly Care',
    'Perris CA',
    'Our Countryside Resort',
    'Alzheimer’s care',
    'Dementia support'
  ],
  authors: [{ name: 'Our Countryside Resort', url: 'https://ourcountrysideresort.com' }],
  creator: 'Our Countryside Resort',
  robots: 'index, follow',
  openGraph: {
    title: 'Our Countryside Resort',
    description: 'Compassionate memory care in the countryside.',
    url: 'https://ourcountrysideresort.com',
    siteName: 'Our Countryside Resort',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Countryside Resort',
    description: 'Compassionate memory care in the countryside.',
    creator: '@ourcountrysideresort',
  },
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://ourcountrysideresort.com" />
        <link rel="icon" href="/favicon.ico" />
        <title>Our Countryside Resort | Memory Care & Assisted Living</title>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AssistedLivingFacility",
            "name": "Our Countryside Resort",
            "description": "Compassionate memory care and assisted living in Perris, CA.",
            "url": "https://ourcountrysideresort.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "18111 Haines St",
              "addressLocality": "Perris",
              "addressRegion": "CA",
              "postalCode": "92570",
              "addressCountry": "US"
            },
            "telephone": "+1-951-657-3557", // <- Optional, if you want to include
            "sameAs": ['https://g.co/kgs/pbavMqx'] // Optional: Facebook or Google Maps URL
          })
        }} />
      </head>
      <body className={`${inter.className} ${montserrat.className} bg-white text-[#3b5d7d] font-sans`}>
        {/* Header */}
        <header role="banner" className="bg-white bg-opacity-90 backdrop-blur-sm z-50 sticky top-0 shadow-sm">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between px-6 py-4 pr-0">
            <Link href="/" className="text-center md:text-left">
              <div>
                <h1 className="text-3xl font-semibold leading-tight text-[#3b5d7d]" style={{ fontFamily: 'Montserrat' }}>
                  Our Countryside Resort
                </h1>
                <p className="text-sm text-[#7a7a7a]" style={{ fontFamily: 'Montserrat' }}>
                  Memory Care & Assisted Living
                </p>
              </div>
            </Link>

            <nav
              className="mt-4 md:mt-0 flex flex-wrap justify-center md:justify-end gap-4 items-center text-[#3b5d7d] text-md"
              style={{ fontFamily: 'Montserrat' }}
              aria-label="Main navigation"
            >
              {[
                { label: 'Our Services', href: '/services' },
                { label: 'Getting Started', href: '/getting_started' },
                { label: 'Lifestyle', href: '/lifestyle' },
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="hover:underline hover:underline-offset-4 transition-all duration-200"
                >
                  {item.label}
                </Link>
              ))}

              <Link href="/schedule-tour">
                <button className="bg-[#3b5d7d] text-white px-4 py-2 rounded hover:brightness-110 transition duration-200">
                  Schedule a Tour
                </button>
              </Link>
            </nav>
          </div>
        </header>

        {/* Page content */}
        <div id="__next">
          <main role="main" className="relative z-10">{children}</main>
        </div>
        {/* Footer */}
        <footer role="contentinfo" className="bg-[#f0f4f8] text-[#3b5d7d] py-10">
          <div className="max-w-6xl mx-auto px-6 text-center space-y-4" style={{ fontFamily: 'Montserrat' }}>
            <p>© {new Date().getFullYear()} Our Countryside Resort. All rights reserved.</p>
            <p>18111 Haines St Perris, CA 92570 || CA RCFE License #336406991 || (951) 657-3557</p>
            <p className="text-sm text-[#7a7a7a]">
              <Link href="/privacy-policy" className="underline hover:text-[#2b4d6d]">
                Privacy Policy
              </Link>
            </p>
            <p className="text-sm text-[#7a7a7a]">Compassionate Assisted Living in the Countryside</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
