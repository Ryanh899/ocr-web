'use client';

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);

    const res = await fetch('https://formspree.io/f/xldbbwdv', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    });

    if (res.ok) {
      setStatus('success');
      form.reset();
    } else {
      setStatus('error');
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | Our Countryside Resort</title>
        <meta
          name="description"
          content="Get in touch with Our Countryside Resort to learn more about our memory care services, schedule a tour, or inquire about availability."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.ourcountrysideresort.com/contact" />
        <meta property="og:title" content="Contact Us | Our Countryside Resort" />
        <meta
          property="og:description"
          content="Contact Our Countryside Resort for memory care information, scheduling a visit, or asking questions. We’re here to help."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ourcountrysideresort.com/contact" />
        <meta property="og:image" content="https://www.ourcountrysideresort.com/og-image.jpg" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Our Countryside Resort",
            url: "https://www.ourcountrysideresort.com",
            telephone: "(951) 657-3557",
            email: "ocr.memorycare@gmail.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "18111 Haines St",
              addressLocality: "Perris",
              addressRegion: "CA",
              postalCode: "92570",
              addressCountry: "US"
            }
          })
        }} />
      </Head>

      <div className="min-h-screen bg-white text-[#3b5d7d] font-sans">
        <main className="max-w-4xl mx-auto py-16 px-6">
          {/* Page Title */}
          <section className="text-center mb-12">
            <h1 className="text-4xl font-semibold mb-4 font-montserrat">
              Contact Us
            </h1>
            <p className="text-lg text-[#555] font-montserrat">
              We are here here to answer your questions and help guide your next step with care and clarity.
            </p>
          </section>

          {/* Contact Form */}
          <section className="bg-[#f9f9f9] rounded-lg shadow p-8 mb-12" aria-labelledby="contact-form-heading">
            {status === 'success' ? (
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4 text-green-700 font-montserrat">
                  Thank you!
                </h2>
                <p className="mb-6 font-montserrat">
                  Your message has been sent successfully. We will be in touch shortly.
                </p>
                <Link href="/">
                  <button className="bg-[#3b5d7d] text-white px-6 py-3 rounded hover:bg-[#2d4a65] transition">
                    Return to Homepage
                  </button>
                </Link>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit} aria-describedby="form-instructions">
                <div>
                  <label htmlFor="name" className="block text-md mb-1 font-montserrat">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-md mb-1 font-montserrat">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-md mb-1 font-montserrat">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-md mb-1 font-montserrat">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                    placeholder="How can we help you?"
                  />
                </div>
                {status === 'error' && (
                  <p className="text-red-500 font-montserrat">
                    Something went wrong. Please try again later.
                  </p>
                )}
                <button
                  type="submit"
                  className="bg-[#3b5d7d] text-white px-6 py-3 rounded hover:bg-[#2d4a65] transition font-montserrat"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </section>

          {/* Contact Info */}
          <section className="text-center" aria-labelledby="direct-contact-heading">
            <h2 className="text-2xl font-semibold mb-4 font-montserrat" id="direct-contact-heading">
              Prefer to reach out directly?
            </h2>
            <p className="text-md text-[#555] mb-2 font-montserrat">
              📞 <strong>Phone:</strong> (951) 657-3557
            </p>
            <p className="text-md text-[#555] mb-2 font-montserrat">
              📧 <strong>Email:</strong> ocr.memorycare@gmail.com
            </p>
            <p className="text-md text-[#555] mb-8 font-montserrat">
              📍 <strong>Address:</strong> 18111 Haines St, Perris, CA 92570
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/schedule-tour">
                <button className="bg-[#b85042] text-white px-6 py-3 rounded hover:bg-[#a33f35] transition">
                  Schedule a Tour
                </button>
              </Link>
              <Link href="/getting_started">
                <button className="bg-[#3b5d7d] text-white px-6 py-3 rounded hover:bg-[#2d4a65] transition">
                  Getting Started
                </button>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
