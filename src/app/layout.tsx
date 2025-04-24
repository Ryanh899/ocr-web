// layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Our Countryside Resort',
  description: 'Compassionate Memory Care in the Countryside',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} bg-white text-[#3b5d7d] font-sans`}>
        {/* Header */}
        <header className="bg-white bg-opacity-90 backdrop-blur-sm z-50 sticky top-0 shadow-sm">
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
        <main className="relative z-10">{children}</main>

        {/* Footer */}
        <footer className="bg-[#f0f4f8] text-[#3b5d7d] py-10">
          <div className="max-w-6xl mx-auto px-6 text-center space-y-4" style={{ fontFamily: 'Montserrat' }}>
            <p>© {new Date().getFullYear()} Our Countryside Resort. All rights reserved.</p>
            <p className="text-sm text-[#7a7a7a]">Compassionate Assisted Living in the Countryside</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
