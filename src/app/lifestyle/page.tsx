"use client";
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

export default function LifestylePage() {
  return (
    <>
      <Head>
        <title>Lifestyle at Our Countryside Resort | Senior Living Community</title>
        <meta
          name="description"
          content="Explore the vibrant lifestyle at Our Countryside Resort, where residents enjoy a supportive community, engaging activities, wellness programs, and delicious chef-prepared meals."
        />
        <meta
          name="keywords"
          content="senior living, lifestyle community, memory care lifestyle, wellness programs, senior living activities, daily activities for seniors, assisted living community, Our Countryside Resort"
        />
        <link rel="canonical" href="https://ourcountrysideresort.com/about/lifestyle" />
        <meta property="og:title" content="Lifestyle at Our Countryside Resort | Senior Living Community" />
        <meta
          property="og:description"
          content="At Our Countryside Resort, we offer a vibrant and enriching lifestyle designed for seniors to live well, engage in meaningful activities, and connect with a warm community."
        />
        <meta property="og:url" content="https://ourcountrysideresort.com/about/lifestyle" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/frontsign.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lifestyle at Our Countryside Resort | Senior Living Community" />
        <meta name="twitter:description" content="Discover a lifestyle full of meaningful engagement, wellness programs, and gourmet meals at Our Countryside Resort." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Our Countryside Resort",
            image: "https://ourcountrysideresort.com/frontsign.jpeg",
            "@id": "https://ourcountrysideresort.com",
            url: "https://ourcountrysideresort.com/about/lifestyle",
            telephone: "+1-951-657-3557",
            address: {
              "@type": "PostalAddress",
              streetAddress: "18111 Haines St",
              addressLocality: "Perris",
              addressRegion: "CA",
              postalCode: "92570",
              addressCountry: "US",
            },
            description:
              "The lifestyle at Our Countryside Resort is all about enriching engagement, wellness, delicious meals, and a vibrant community that fosters connection and creativity.",
          })}
        </script>
      </Head>

      <main className="min-h-screen bg-white text-[#3b5d7d] font-sans">
        <div className="max-w-6xl mx-auto py-16 px-6">
          {/* Hero Section */}
          <section className="grid md:grid-cols-2 gap-10 items-center mb-16" aria-labelledby="lifestyle-heading">
            <div>
              <h1 id="lifestyle-heading" className="text-4xl md:text-5xl font-semibold mb-4" style={{ fontFamily: 'Montserrat' }}>
                A Lifestyle That Feels Like Home
              </h1>
              <p className="text-lg text-[#555]" style={{ fontFamily: 'Montserrat' }}>
                At Our Countryside Resort, we provide more than just care — we offer a vibrant, supportive community where
                residents can thrive. Every day is thoughtfully designed to inspire connection, creativity, and joy.
              </p>
            </div>
            <div>
              {/* <img
                src="/frontsign.jpeg"
                alt="Residents enjoying daily activities in a warm community setting at Our Countryside Resort"
                className="w-full rounded shadow"
              /> */}
              <Image
                src="/frontsign.jpeg"
                alt="Residents enjoying daily activities in a warm community setting at Our Countryside Resort"                className="w-full rounded shadow"
                priority
                quality={75}
              />
            </div>
          </section>

          {/* A Day in the Life */}
          <section className="bg-[#f9f9f9] rounded-lg shadow p-8 mb-16" aria-labelledby="day-in-life">
            <h2 id="day-in-life" className="text-3xl font-semibold mb-4" style={{ fontFamily: 'Montserrat' }}>
              A Day in the Life
            </h2>
            <p className="text-lg text-[#555]" style={{ fontFamily: 'Montserrat' }}>
              Mornings might begin with light stretching or a group breakfast, followed by creative workshops, musical
              programs, or gardening in the fresh air. Evenings are peaceful, with delicious chef-prepared meals and
              opportunities to unwind with friends and staff.
            </p>
          </section>

          {/* Community & Activities */}
          <section className="grid md:grid-cols-2 gap-8 mb-16" aria-labelledby="community-activities">
            <div className="bg-[#f0f4f8] rounded-lg shadow p-6">
              <h3 className="text-2xl font-semibold mb-3" style={{ fontFamily: 'Montserrat' }}>
                Meaningful Community Engagement
              </h3>
              <p className="text-md text-[#555]" style={{ fontFamily: 'Montserrat' }}>
                Social bonds and community involvement are at the heart of our lifestyle. From birthday celebrations and
                themed events to family gatherings and outings, there&apos;s always something special to look forward to.
              </p>
            </div>
            <div className="bg-[#f0f4f8] rounded-lg shadow p-6">
              <h3 className="text-2xl font-semibold mb-3" style={{ fontFamily: 'Montserrat' }}>
                Enriching Daily Activities
              </h3>
              <p className="text-md text-[#555]" style={{ fontFamily: 'Montserrat' }}>
                Residents participate in thoughtfully curated activities tailored to their abilities and interests —
                including art classes, music therapy, interactive games, and gentle fitness programs that promote cognitive
                wellness and movement.
              </p>
            </div>
          </section>

          {/* Wellness & Nutrition */}
          <section className="bg-[#f9f9f9] rounded-lg shadow p-8 mb-16" aria-labelledby="wellness-nutrition">
            <h2 id="wellness-nutrition" className="text-3xl font-semibold mb-4" style={{ fontFamily: 'Montserrat' }}>
              Wellness & Nutrition
            </h2>
            <p className="text-lg text-[#555]" style={{ fontFamily: 'Montserrat' }}>
              Our residents enjoy chef-prepared meals crafted with care and attention to dietary needs, preferences, and
              nutrition. Combined with holistic wellness offerings — from health checks to mindfulness — we support a
              well-rounded, fulfilling lifestyle.
            </p>
          </section>

          {/* Call to Action */}
          <section className="text-center" aria-labelledby="cta-heading">
            <h2 id="cta-heading" className="text-3xl font-semibold mb-4" style={{ fontFamily: 'Montserrat' }}>
              Ready to Embrace a Vibrant Lifestyle?
            </h2>
            <p className="text-lg text-[#7a7a7a] max-w-xl mx-auto mb-8" style={{ fontFamily: 'Montserrat' }}>
              Discover how our engaging community blends comfort, care, and joyful living.
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
        </div>
      </main>
    </>
  );
}
