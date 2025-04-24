"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function GettingStartedPage() {
  const rooms: Record<string, {
    name: string;
    img: string;
  }> = {
    private: {
      name: 'Private Bedroom',
      img: '/entroom2.jpeg',
    },
    shared: {
      name: 'Shared Bedroom',
      img: '/entroom2.jpeg',
    },
    recreation: {
      name: 'Recreation Room',
      img: '/entroom2.jpeg',
    },
    dining: {
      name: 'Dining Room',
      img: '/entroom2.jpeg',
    }
  };

  const [selectedRoom, setSelectedRoom] = useState<keyof typeof rooms | null>(null);

  const closeModal = () => setSelectedRoom(null);

  return (
    <div className="min-h-screen bg-white text-[#3b5d7d] font-sans">
      <main className="max-w-6xl mx-auto py-16 px-6">
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-semibold mb-4" style={{ fontFamily: 'Montserrat' }}>
            Getting Started
          </h1>
          <p className="text-lg text-[#555] max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat' }}>
            Let us help you take the first step toward finding the right care and community.
          </p>
        </section>

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


        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-6" style={{ fontFamily: 'Montserrat' }}>
            Explore Our Community
          </h2>
          <p className="text-md text-[#444] text-center" style={{ fontFamily: 'Montserrat' }}>
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
              />
              <div
                className="absolute bg-[#3b5d7d]/10 rounded cursor-pointer hover:bg-[#3b5d7d]/20 transition"
                style={{ top: '32%', left: '3%', width: '100px', height: '140px' }}
                onClick={() => setSelectedRoom('shared')}
              />
              <div
                className="absolute bg-[#3b5d7d]/10 rounded cursor-pointer hover:bg-[#3b5d7d]/20 transition"
                style={{ bottom: '5%', left: '3%', width: '270px', height: '145px' }}
                onClick={() => setSelectedRoom('recreation')}
              />
              <div
                className="absolute bg-[#3b5d7d]/10 rounded cursor-pointer hover:bg-[#3b5d7d]/20 transition"
                style={{ bottom: '5%', left: '37%', width: '275px', height: '145px' }}
                onClick={() => setSelectedRoom('dining')}
              />
            </div>
          </div>
        </section>
      </main>

      {selectedRoom && rooms[selectedRoom] && (
        <div className="fixed inset-0 bg-white/70 backdrop-blur-xs flex items-center justify-center z-50">
          <div className=" shadow-lg max-w-2xl relative">
            <button
              onClick={closeModal}
              className="top-2 right-2 text-gray-500 hover:text-gray-800 text-xxl font-bold"
            >
              &times;
            </button>
            {/* <h3 className="text-2xl font-semibold mb-4 text-center">{rooms[selectedRoom].name}</h3> */}
            <Image
              src={rooms[selectedRoom].img}
              alt={rooms[selectedRoom].name}
              width={600}
              height={400}
              className="rounded"
            />
          </div>
        </div>
      )}

    </div>
  );
}
