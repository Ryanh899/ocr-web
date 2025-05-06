"use client";
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';

export default function HomePage() {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <>
      <Head>
        <title>Our Countryside Resort | Memory Care & Assisted Living in Perris, CA</title>
        <meta
          name="description"
          content="Our Countryside Resort provides compassionate memory care and assisted living in a peaceful countryside setting. Schedule a tour today!"
        />
        <meta
          name="keywords"
          content="Memory Care, Assisted Living, Elder Care, Senior Living, Dementia Support, Alzheimer's Care, Perris CA"
        />
        <link rel="canonical" href="https://ourcountrysideresort.com/" />
        <meta property="og:title" content="Our Countryside Resort | Memory Care & Assisted Living" />
        <meta property="og:description" content="Compassionate memory care and assisted living in Perris, CA." />
        <meta property="og:url" content="https://ourcountrysideresort.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/frontview-splash2.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Countryside Resort" />
        <meta name="twitter:description" content="Compassionate memory care in the countryside." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Our Countryside Resort",
            image: "https://ourcountrysideresort.com/frontview-splash2.jpeg",
            "@id": "https://ourcountrysideresort.com",
            url: "https://ourcountrysideresort.com",
            telephone: "+1-951-657-3557",
            address: {
              "@type": "PostalAddress",
              streetAddress: "18111 Haines St",
              addressLocality: "Perris",
              addressRegion: "CA",
              postalCode: "92570",
              addressCountry: "US",
            },
            description: "Compassionate memory care and assisted living in a peaceful countryside setting.",
          })}
        </script>
      </Head>

      <main className="min-h-screen bg-white text-[#3b5d7d] font-sans">
        {/* Hero Section */}
        <section className="w-full bg-cover bg-center min-h-[55vh]" style={{ backgroundImage: 'url(/frontview-splash2.jpeg)' }}>
          <div className="bg-[#ffffffcc] backdrop-blur-xs p-25 pt-35 min-h-[55vh]">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'Montserrat' }}>
                Welcome to Our Countryside Resort Memory Care
              </h1>
              <p className="text-xl md:text-2xl font-small mb-6" style={{ fontFamily: 'Montserrat' }}>
                Compassionate Assisted Living Designed for Dignity
              </p>
              <p className="text-md md:text-lg font-normal mb-10 text-[#7a7a7a]" style={{ fontFamily: 'Montserrat' }}>
                Experience a peaceful environment, personalized care, and 20+ years of trusted service.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <Link href="/schedule-tour">
                  <button className="bg-[#3b5d7d] text-white px-6 py-3 rounded hover:bg-[#2d4a65] transition">
                    Schedule a Tour
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="bg-[#b85042] text-white px-6 py-3 rounded hover:bg-[#a33f35] transition">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-6 bg-[#f9f9f9]" aria-labelledby="why-choose-us">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="why-choose-us" className="text-3xl font-semibold mb-4" style={{ fontFamily: 'Montserrat' }}>
                Why Families Choose Us
              </h2>
              <ul className="space-y-4 text-lg text-[#555]">
                <li>✔ Personalized memory care programs</li>
                <li>✔ Chef-prepared meals daily</li>
                <li>✔ 24/7 caring and certified staff</li>
                <li>✔ Engaging daily activities for cognitive wellness</li>
                <li>✔ Comfortable, home-like environment</li>
              </ul>
            </div>
            <div>
              <article className="bg-white p-6 rounded shadow">
                <h3 className="text-xl font-medium mb-3" style={{ fontFamily: 'Montserrat' }}>
                  "Our mission is to provide compassionate, dignified care that honors the individuality of each resident."
                </h3>
                <p className="text-md text-[#7a7a7a] italic">
                  – Robert Ramos, Founder & Owner
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 px-6 bg-white" aria-labelledby="our-services">
          <div className="max-w-6xl mx-auto text-center">
            <h2 id="our-services" className="text-3xl font-semibold mb-10" style={{ fontFamily: 'Montserrat' }}>
              Our Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Memory Care', desc: 'Specialized programs tailored for each resident’s needs and preferences.' },
                { title: 'Respite Care', desc: 'Short-term stays with full access to services and amenities.' },
                { title: 'Hospice Support', desc: 'Compassionate, end-of-life care with dignity and respect.' },
              ].map((service, index) => (
                <div key={index} className="bg-[#f9f9f9] p-6 rounded shadow hover:shadow-lg transition">
                  <h3 className="text-xl font-semibold mb-3 text-[#3b5d7d]" style={{ fontFamily: 'Montserrat' }}>
                    {service.title}
                  </h3>
                  <p className="text-md text-[#7a7a7a]" style={{ fontFamily: 'Montserrat' }}>{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement Section */}
        <section className="py-16 px-6 bg-[#f0f4f8]">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6" style={{ fontFamily: 'Montserrat' }}>
              Life at Our Countryside Resort
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-[#555] mb-10" style={{ fontFamily: 'Montserrat' }}>
              Residents enjoy engaging activities like art, music, and social interactions — all designed to stimulate memory and encourage social connection.
            </p>
            <button
              onClick={() => setShowCalendar(true)}
              className="bg-[#3b5d7d] text-white px-6 py-3 rounded hover:bg-[#2d4a65] transition"
            >
              View Calendar
            </button>
          </div>
        </section>

        {/* Modal */}
        {showCalendar && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" role="dialog" aria-modal="true">
            <div className="relative bg-white rounded-lg shadow-lg p-4 max-w-4xl w-full mx-4">
              <button
                onClick={() => setShowCalendar(false)}
                className="absolute top-3 right-3 text-white bg-black/60 rounded-full w-10 h-10 flex items-center justify-center text-3xl hover:bg-black/80 transition"
                aria-label="Close Calendar"
              >
                &times;
              </button>
              <div className="relative w-150 h-250 mx-auto">
                <Image
                  src="/activity-calendar.png"
                  alt="Activity calendar showing events for residents"
                  fill
                  className="object-contain rounded"
                />
              </div>
            </div>
          </div>
        )}

        {/* Final CTA */}
        <section className="py-16 px-6 text-center bg-white">
          <h2 className="text-3xl font-semibold mb-4 text-[#3b5d7d]" style={{ fontFamily: 'Montserrat' }}>
            Ready to Experience the Difference?
          </h2>
          <p className="text-lg text-[#7a7a7a] max-w-xl mx-auto mb-8" style={{ fontFamily: 'Montserrat' }}>
            Contact us today to schedule a tour or learn more about our exceptional memory care services.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/schedule-tour">
              <button className="bg-[#3b5d7d] text-white px-6 py-3 rounded hover:bg-[#2d4a65] transition">
                Schedule a Tour
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-[#b85042] text-white px-6 py-3 rounded hover:bg-[#a33f35] transition">
                Contact Us
              </button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
