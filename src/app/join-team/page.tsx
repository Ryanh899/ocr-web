'use client';

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function JoinOurTeamPage() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);

    const res = await fetch('https://formspree.io/f/mrbqqapk', {
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
        <title>Join Our Team | Our Countryside Resort</title>
        <meta
          name="description"
          content="Looking for a meaningful career in memory care? Apply now to join Our Countryside Resort’s compassionate team of professionals."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Join Our Team | Our Countryside Resort" />
        <meta
          property="og:description"
          content="We’re always hiring caring individuals. Submit your application today to join Our Countryside Resort."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ourcountrysideresort.com/join-our-team" />
        <meta property="og:site_name" content="Our Countryside Resort" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-white text-[#3b5d7d] font-sans">
        <main className="max-w-4xl mx-auto py-16 px-6">
          {/* Page Intro */}
          <section className="text-center mb-12">
            <h1 className="text-4xl font-semibold mb-4" style={{ fontFamily: 'Montserrat' }}>
              Join Our Team
            </h1>
            <p className="text-lg text-[#555]" style={{ fontFamily: 'Montserrat' }}>
              We’re always looking for passionate individuals to join our team. Please fill out the form below to submit your application.
            </p>
          </section>

          {/* Job Application Form */}
          <section className="bg-[#f9f9f9] rounded-lg shadow p-8 mb-12" aria-label="Job Application Form">
            {status === 'success' ? (
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4 text-green-700" style={{ fontFamily: 'Montserrat' }}>
                  Thank you!
                </h2>
                <p className="mb-6" style={{ fontFamily: 'Montserrat' }}>
                  Your application has been received. We’ll review it and get back to you soon.
                </p>
                <Link href="/">
                  <button className="bg-[#3b5d7d] text-white px-6 py-3 rounded hover:bg-[#2d4a65] transition">
                    Return to Homepage
                  </button>
                </Link>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-md mb-1" style={{ fontFamily: 'Montserrat' }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-md mb-1" style={{ fontFamily: 'Montserrat' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-md mb-1" style={{ fontFamily: 'Montserrat' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="request_info" className="block text-md mb-1" style={{ fontFamily: 'Montserrat' }}>
                    Tell Us About Your Interest
                  </label>
                  <textarea
                    name="request_info"
                    id="request_info"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                    rows={4}
                    placeholder="Tell us why you'd like to join our team, or share your work experience."
                  />
                </div>
                {status === 'error' && (
                  <p className="text-red-500" style={{ fontFamily: 'Montserrat' }}>
                    Something went wrong. Please try again later.
                  </p>
                )}
                <button
                  type="submit"
                  className="bg-[#3b5d7d] text-white px-6 py-3 rounded hover:bg-[#2d4a65] transition"
                  style={{ fontFamily: 'Montserrat' }}
                >
                  Submit Application
                </button>
              </form>
            )}
          </section>

          {/* Contact Option */}
          <section className="text-center">
            <h2 className="text-2xl font-semibold mb-3" style={{ fontFamily: 'Montserrat' }}>
              Have Questions?
            </h2>
            <p className="text-md text-[#555] mb-6" style={{ fontFamily: 'Montserrat' }}>
              If you have any questions, feel free to reach out to us before applying.
            </p>
            <Link href="/contact">
              <button className="bg-[#b85042] text-white px-6 py-3 rounded hover:bg-[#a33f35] transition">
                Contact Us
              </button>
            </Link>
          </section>
        </main>
      </div>
    </>
  );
}
