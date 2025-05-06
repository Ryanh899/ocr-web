// src/app/getting-started/page.tsx

'use client';

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

function SharedImageCarousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="flex flex-col items-center">
      <Image
        src={images[index]}
        alt={`Shared Bedroom ${index + 1}`}
        width={600}
        height={400}
        className="rounded mb-4"
        priority
      />
      <div className="flex gap-4">
        <button
          onClick={prev}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          aria-label="Previous image"
        >
          Prev
        </button>
        <button
          onClick={next}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          aria-label="Next image"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default function GettingStartedPage() {
  const rooms: Record<
    string,
    {
      name: string;
      img?: string;
      imgs?: string[];
    }
  > = {
    broom2: {
      name: 'Bed Room 2',
      img: '/broom2.jpeg',
    },
    shared: {
      name: 'Shared Bedroom',
      imgs: ['/broom1.jpeg', '/broom2.jpeg'],
    },
    recreation: {
      name: 'Recreation Room',
      img: '/entroombackview.jpeg',
    },
    dining: {
      name: 'Dining Room',
      img: '/entroom2.jpeg',
    },
  };

  const [selectedRoom, setSelectedRoom] = useState<keyof typeof rooms | null>(null);

  const closeModal = () => setSelectedRoom(null);

  return (
    <>
      <Head>
        <title>Getting Started | Our Countryside Resort</title>
        <meta
          name="description"
          content="Begin your journey with Our Countryside Resort. Learn about our admissions process, explore our community, and discover how we can support you."
        />
        <link rel="canonical" href="https://yourdomain.com/getting-started" />
      </Head>

      <main className="min-h-screen bg-white text-[#3b5d7d] font-sans">
        <div className="max-w-6xl mx-auto py-16 px-6">
          {/* Hero Section */}
          <section className="mb-12 text-center">
            <h1 className="text-4xl font-semibold mb-4" style={{ fontFamily: 'Montserrat' }}>
              Getting Started
            </h1>
            <p className="text-lg text-[#555] max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat' }}>
              Let us help you take the first step toward finding the right care and community.
            </p>
          </section>

          {/* Contact Options */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white border border-[#e2e8f0] rounded-2xl shadow-md p-8 flex flex-col justify-between hover:shadow-lg transition">
              <div>
                <h2 className="text-2xl font-bold text-[#3b5d7d] mb-4" style={{ fontFamily: 'Montserrat' }}>
                  Speak with Our Team
                </h2>
                <p className="text-md text-[#444]" style={{ fontFamily: 'Montserrat' }}>
                  Our admissions and marketing staff are here to guide you through your options, answer your questions, and help you understand what’s next.
                </p>
              </div>
              <div className="mt-6">
                <Link href="/contact">
                  <button className="bg-[#b85042] text-white px-6 py-3 rounded-full hover:bg-[#a33f35] transition">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>

            <div className="bg-white border border-[#e2e8f0] rounded-2xl shadow-md p-8 flex flex-col justify-between hover:shadow-lg transition">
              <div>
                <h2 className="text-2xl font-bold text-[#3b5d7d] mb-4" style={{ fontFamily: 'Montserrat' }}>
                  Explore Admissions & Financing
                </h2>
                <p className="text-md text-[#444]" style={{ fontFamily: 'Montserrat' }}>
                  We’ll walk you through our admissions process, availability, and the financial options that work best for you.
                </p>
              </div>
              <div className="mt-6">
                <Link href="/schedule-tour">
                  <button className="bg-[#3b5d7d] text-white px-6 py-3 rounded-full hover:bg-[#2d4a65] transition">
                    Schedule a Tour
                  </button>
                </Link>
              </div>
            </div>
          </section>

          {/* Explore Our Community */}
          <section className="mb-20">
            <h2 className="text-3xl font-semibold text-center mb-6" style={{ fontFamily: 'Montserrat' }}>
              Explore Our Community
            </h2>
            <p className="text-md text-[#444] text-center mb-6" style={{ fontFamily: 'Montserrat' }}>
              Click on a highlighted room to see it
            </p>
            <div className="relative flex flex-col items-center">
              <div className="relative">
                <Image
                  src="/floorplan.jpeg"
                  alt="Floor Plan"
                  width={800}
                  height={600}
                  className="rounded shadow mb-6"
                  priority
                />
                <div
                  className="absolute bg-[#3b5d7d]/10 rounded cursor-pointer hover:bg-[#3b5d7d]/20 transition"
                  style={{ top: '32%', left: '3%', width: '105px', height: '140px' }}
                  onClick={() => setSelectedRoom('shared')}
                  aria-label="Shared Bedroom"
                />
                <div
                  className="absolute bg-[#3b5d7d]/10 rounded cursor-pointer hover:bg-[#3b5d7d]/20 transition"
                  style={{ bottom: '5%', left: '3%', width: '270px', height: '145px' }}
                  onClick={() => setSelectedRoom('recreation')}
                  aria-label="Recreation Room"
                />
                <div
                  className="absolute bg-[#3b5d7d]/10 rounded cursor-pointer hover:bg-[#3b5d7d]/20 transition"
                  style={{ bottom: '5%', left: '37%', width: '275px', height: '145px' }}
                  onClick={() => setSelectedRoom('dining')}
                  aria-label="Dining Room"
                />
              </div>
            </div>
          </section>
        </div>

        {/* Modal for Room Images */}
        {selectedRoom && rooms[selectedRoom] && (
          <div className="fixed inset-0 bg-white/70 backdrop-blur-xs flex items-center justify-center z-50">
            <div className="shadow-lg max-w-2xl relative bg-white rounded p-4">
              <button
                onClick={closeModal}
                className="absolute top-2 right-4 text-white bg-black/60 rounded-full w-10 h-10 flex items-center justify-center text-3xl hover:bg-black/80 transition"
                aria-label="Close modal"
              >
                &times;
              </button>

              {/* If multiple images (shared bedroom) */}
              {rooms[selectedRoom].imgs ? (
                <SharedImageCarousel images={rooms[selectedRoom].imgs} />
              ) : (
                <Image
                  src={rooms[selectedRoom].img!}
                  alt={rooms[selectedRoom].name}
                  width={600}
                  height={400}
                  className="rounded"
                  priority
                />
              )}
            </div>
          </div>
        )}
      </main>
    </>
  );
}
