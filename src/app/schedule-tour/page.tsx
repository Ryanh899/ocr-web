'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ScheduleTourPage() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);

    const res = await fetch('https://formspree.io/f/mgvkklae', {
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
    <div className="min-h-screen bg-white text-[#3b5d7d] font-sans">
      <main className="max-w-4xl mx-auto py-16 px-6">
        {/* Header */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-semibold mb-4" style={{ fontFamily: 'Montserrat' }}>
            Schedule a Tour
          </h1>
          <p className="text-lg text-[#555]" style={{ fontFamily: 'Montserrat' }}>
            We'd love to meet you! Complete the form below and we'll reach out to confirm your visit.
          </p>
        </section>

        {/* Form or Success Message */}
        <section className="bg-[#f9f9f9] rounded-lg shadow p-8 mb-12">
          {status === 'success' ? (
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4 text-green-700" style={{ fontFamily: 'Montserrat' }}>
                Thank you!
              </h2>
              <p className="mb-6" style={{ fontFamily: 'Montserrat' }}>
                Your tour request has been received. We'll reach out shortly to confirm the details.
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
                <label className="block text-md mb-1" style={{ fontFamily: 'Montserrat' }}>Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-md mb-1" style={{ fontFamily: 'Montserrat' }}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-md mb-1" style={{ fontFamily: 'Montserrat' }}>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                  placeholder="(123) 456-7890"
                />
              </div>
              <div>
                <label className="block text-md mb-1" style={{ fontFamily: 'Montserrat' }}>Preferred Tour Date</label>
                <input
                  type="date"
                  name="tour_date"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-md mb-1" style={{ fontFamily: 'Montserrat' }}>Preferred Time</label>
                <input
                  type="time"
                  name="tour_time"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-md mb-1" style={{ fontFamily: 'Montserrat' }}>Additional Notes</label>
                <textarea
                  name="notes"
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                  rows={4}
                  placeholder="Let us know anything helpful before your visit..."
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
                Submit Request
              </button>
            </form>
          )}
        </section>

        {/* Contact Option */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-3" style={{ fontFamily: 'Montserrat' }}>
            Have Questions First?
          </h2>
          <p className="text-md text-[#555] mb-6" style={{ fontFamily: 'Montserrat' }}>
            Feel free to reach out before booking — we’re happy to talk with you.
          </p>
          <Link href="/contact">
            <button className="bg-[#b85042] text-white px-6 py-3 rounded hover:bg-[#a33f35] transition">
              Contact Us
            </button>
          </Link>
        </section>
      </main>
    </div>
  );
}
