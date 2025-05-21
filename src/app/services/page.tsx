"use client";
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

export default function ServicesAmenitiesPage() {
  return (
    <>
      <Head>
        <title>Services & Amenities | Our Countryside Resort Memory Care</title>
        <meta
          name="description"
          content="Discover the compassionate services and comfortable amenities at Our Countryside Resort, designed to enhance the lives of residents and their families."
        />
        <meta
          name="keywords"
          content="memory care, hospice support, assisted living services, senior care amenities, Our Countryside Resort, respite care, memory care services, senior living Perris CA"
        />
        <link rel="canonical" href="https://ourcountrysideresort.com/services-amenities" />
        <meta property="og:title" content="Services & Amenities | Our Countryside Resort" />
        <meta
          property="og:description"
          content="Explore Our Countryside Resort's personalized memory care services, hospice support, and luxurious amenities in a peaceful countryside setting."
        />
        <meta property="og:url" content="https://ourcountrysideresort.com/services-amenities" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/entroom5.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services & Amenities | Our Countryside Resort" />
        <meta name="twitter:description" content="Our Countryside Resort offers personalized memory care, hospice support, and an array of amenities to enhance the lives of seniors." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Our Countryside Resort",
            image: "https://ourcountrysideresort.com/entroom5.jpeg",
            "@id": "https://ourcountrysideresort.com",
            url: "https://ourcountrysideresort.com/services-amenities",
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
              "At Our Countryside Resort, we provide specialized memory care and hospice support services in a comfortable, home-like environment. Our amenities are designed for the comfort and well-being of our residents.",
          })}
        </script>
      </Head>

      <main className="min-h-screen bg-white text-[#3b5d7d] font-sans">
        <div className="max-w-6xl mx-auto py-16 px-6">
          {/* Hero Section */}
          <section className="grid md:grid-cols-2 gap-10 items-center mb-16" aria-labelledby="services-amenities-heading">
            <div>
              <h1 id="services-amenities-heading" className="text-4xl md:text-5xl font-semibold mb-4" style={{ fontFamily: 'Montserrat' }}>
                Services & Amenities
              </h1>
              <p className="text-lg text-[#555]" style={{ fontFamily: 'Montserrat' }}>
                At Our Countryside Resort, we specialize in compassionate Memory Care and Hospice Support. Our supportive services and comfortable amenities are designed to provide peace of mind and meaningful quality of life for residents and their families.
              </p>
            </div>
            <div>
              {/* <img
                src="/entroom5.jpeg"
                alt="Overview of Our Countryside Resort's services and amenities, showcasing a welcoming environment"
                className="w-full rounded shadow"
              /> */}
              <Image
                src="/entroom5.jpeg"
                alt="Overview of Our Countryside Resort's services and amenities, showcasing a welcoming environment"
                className="w-full rounded shadow"
                priority 
                quality={75} 
              />
            </div>
          </section>

          {/* Our Services */}
          <section className="bg-[#f9f9f9] rounded-lg shadow p-8 mb-16" aria-labelledby="our-services">
            <h2 id="our-services" className="text-3xl font-semibold mb-4" style={{ fontFamily: 'Montserrat' }}>
              Our Services
            </h2>
            <p className="text-lg text-[#555]" style={{ fontFamily: 'Montserrat' }}>
              We provide personalized care services that meet the unique physical, emotional, and cognitive needs of our residents:
            </p>
            <ul className="list-disc pl-6 mt-4 text-lg text-[#555]" style={{ fontFamily: 'Montserrat' }}>
              <li><strong>Specialized Memory Care</strong> with structured routines and individualized attention</li>
              <li><strong>Compassionate Hospice Support</strong> for end-of-life care with dignity and warmth</li>
              <li>24-Hour Support & Assistance with daily needs</li>
              <li>Medication Management coordinated with healthcare providers</li>
              <li>Chef-Prepared Meals made fresh daily</li>
              <li>Flexible Short-Term Stays and respite options</li>
            </ul>
          </section>

          {/* Amenities */}
          <section className="bg-[#f0f4f8] rounded-lg shadow p-8 mb-16" aria-labelledby="amenities-heading">
            <h2 id="amenities-heading" className="text-3xl font-semibold mb-4" style={{ fontFamily: 'Montserrat' }}>
              Comfortable Amenities
            </h2>
            <p className="text-lg text-[#555]" style={{ fontFamily: 'Montserrat' }}>
              Our thoughtfully designed spaces offer warmth, ease, and a sense of home:
            </p>
            <ul className="list-disc pl-6 mt-4 text-lg text-[#555]" style={{ fontFamily: 'Montserrat' }}>
              <li>Peaceful, Landscaped Outdoor Areas</li>
              <li>Comfortable Community Dining Rooms</li>
              <li>Activity Rooms for Recreation & Connection</li>
              <li>On-site Wellness Center for holistic care</li>
              <li>Cozy Lounges and Quiet Spaces</li>
              <li>Complimentary Local Transportation</li>
            </ul>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-white" aria-labelledby="cta-heading">
            <h2 id="cta-heading" className="text-3xl font-semibold mb-4" style={{ fontFamily: 'Montserrat' }}>
              Experience the Difference
            </h2>
            <p className="text-lg text-[#7a7a7a] max-w-xl mx-auto mb-8" style={{ fontFamily: 'Montserrat' }}>
              Schedule a tour today and learn how our compassionate services and comfortable setting support meaningful living every day.
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
