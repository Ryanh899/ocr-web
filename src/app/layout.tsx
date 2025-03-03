// src/app/layout.tsx
import './globals.css'
import Link from 'next/link'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Our Countryside Resort - Senior Memory Care',
  description: 'Professional, welcoming memory care for seniors.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Import Montserrat with weights 300 and 400 (and 700 if needed) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;350;400;500;550;600;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="font-sans">
        <header style={{ background: '#f8f8f8' }} className="text-black py-3 px-4">
          <div className="flex items-center justify-between px-4">
            <h1 style={{ fontFamily: 'cursive', fontSize: '2rem', color: '#454546' }}>
              Our Countryside Resort
            </h1>
            <nav>
              <ul
                style={{ fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif' }}
                className="flex space-x-4 text-black"
              >
                <li><Link className="hover:underline" href="/career">Careers</Link></li>
                <li><Link className="hover:underline" href="/payment">Payments</Link></li>
                <li><Link className="hover:underline" href="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <div
          className="bg-white flex items-center justify-between"
          style={{ paddingTop: '10px', paddingBottom: '10px', paddingLeft: '40px', paddingRight: '10px' }}
        >
          <nav>
            <ul
              style={{ fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif' }}
              className="flex space-x-4 text-black"
            >
              {/* Lifestyle Dropdown */}
              <li className="relative group">
                <Link href="/about" className="inline-block py-2 hover:underline">
                  Lifestyle <span className="ml-1 text-xs" style={{ color: '#454546' }}>▼</span>
                </Link>
                <ul className="absolute left-0 mt-2 w-40 bg-white shadow-md border rounded hidden group-hover:block text-s">
                  <li>
                    <Link href="/about/lifestyle" className="block px-4 py-2 hover:bg-gray-100">
                      Our Lifestyle
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/services" className="block px-4 py-2 hover:bg-gray-100">
                      Services and Amenities
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/cuisine" className="block px-4 py-2 hover:bg-gray-100">
                      Cuisine
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/ownership" className="block px-4 py-2 hover:bg-gray-100">
                      Ownership
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/staff" className="block px-4 py-2 hover:bg-gray-100">
                      Our Staff
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Care Services Dropdown */}
              <li className="relative group">
                <Link href="/care_services" className="inline-block py-2 hover:underline">
                  Care Services <span className="ml-1 text-xs" >▼</span>
                </Link>
                <ul className="absolute left-0 mt-2 w-40 bg-white shadow-md border rounded hidden group-hover:block text-s">
                  <li>
                    <Link href="/care_services/memorycare" className="block px-4 py-2 hover:bg-gray-100">
                      Memory Care
                    </Link>
                  </li>
                  <li>
                    <Link href="/care_services/shortterm" className="block px-4 py-2 hover:bg-gray-100">
                      Short Term Stays
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Making a Plan Dropdown */}
              <li className="relative group">
                <Link href="/planning" className="inline-block py-2 hover:underline">
                  Making a Plan <span className="ml-1 text-xs" style={{ color: '#454546' }}>▼</span>
                </Link>
                <ul className="absolute left-0 mt-2 w-40 bg-white shadow-md border rounded hidden group-hover:block text-s">
                  <li>
                    <Link href="/planning/financial" className="block px-4 py-2 hover:bg-gray-100">
                      Financial Planning
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/movingorstaying" className="block px-4 py-2 hover:bg-gray-100">
                      Moving vs Staying
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/compare" className="block px-4 py-2 hover:bg-gray-100">
                      Compare Options
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/disasterprepare" className="block px-4 py-2 hover:bg-gray-100">
                      Disaster Preparedness
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/faqs" className="block px-4 py-2 hover:bg-gray-100">
                      FAQs
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Financial Help Dropdown */}
              <li className="relative group">
                <Link href="/caregivers" className="inline-block py-2 hover:underline">
                  Caregiver's Guide <span className="ml-1 text-xs" style={{ color: '#454546' }}>▼</span>
                </Link>
                <ul className="absolute left-0 mt-2 w-40 bg-white shadow-md border rounded hidden group-hover:block text-s">
                  <li>
                    <Link href="/caregivers/seniorhealth" className="block px-4 py-2 hover:bg-gray-100">
                      Senior Aging and Health
                    </Link>
                  </li>
                  <li>
                    <Link href="/caregivers/familydynamics" className="block px-4 py-2 hover:bg-gray-100">
                      Family Dynamics
                    </Link>
                  </li>
                  <li>
                    <Link href="/caregivers/decision" className="block px-4 py-2 hover:bg-gray-100">
                      Making the Decision
                    </Link>
                  </li>
                  <li>
                    <Link href="/caregivers/financialhelp" className="block px-4 py-2 hover:bg-gray-100">
                      Financials
                    </Link>
                  </li>
                  <li>
                    <Link href="/caregivers/diseaseinfo" className="block px-4 py-2 hover:bg-gray-100">
                      Alzheimer's and Dementia
                    </Link>
                  </li>
                  <li>
                    <Link href="/caregivers/wheretobegin" className="block px-4 py-2 hover:bg-gray-100">
                      Where to Begin
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <div>
            <Link href="/contact-form">
              <button
                className="px-4 py-2 rounded border border-gray-300 bg-[#bad535] hover:bg-[#ffff] text-[#454546] font-normal"
                style={{
                  fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
                  fontWeight: 400,
                }}
              >
                Schedule a Visit
              </button>
            </Link>
          </div>
        </div>
        {/* page start */}
        <main>
          {children}
        </main>
        {/* footer start */}
        <footer className="bg-[#5D4037] text-white text-center p-4">
          <div className="container mx-auto ">
            © {new Date().getFullYear()} Our Countryside Resort. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}
