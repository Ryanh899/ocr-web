"use client";
import Link from 'next/link';
import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | Our Countryside Resort Memory Care</title>
        <meta
          name="description"
          content="Learn about Our Countryside Resort's mission, story, and compassionate staff who provide exceptional memory care in Perris, California."
        />
        <meta
          name="keywords"
          content="About Our Countryside Resort, Memory Care Team, Senior Care, Assisted Living, Perris CA"
        />
        <link rel="canonical" href="https://ourcountrysideresort.com/about" />
        <meta property="og:title" content="About Us | Our Countryside Resort" />
        <meta property="og:description" content="Meet the team and discover the mission behind Our Countryside Resort’s exceptional memory care." />
        <meta property="og:url" content="https://ourcountrysideresort.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/staff.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Our Countryside Resort" />
        <meta name="twitter:description" content="Dedicated memory care and assisted living in a warm countryside setting." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Our Countryside Resort",
            image: "https://ourcountrysideresort.com/staff.jpeg",
            "@id": "https://ourcountrysideresort.com",
            url: "https://ourcountrysideresort.com/about",
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
              "Learn about the mission, values, and compassionate care team at Our Countryside Resort, a trusted memory care and assisted living community in Perris, California.",
          })}
        </script>
      </Head>

      <main className="min-h-screen bg-white text-[#3b5d7d] font-sans">
        <div className="max-w-6xl mx-auto py-16 px-6">
          {/* Hero Section */}
          <section className="grid md:grid-cols-2 gap-10 items-center mb-16" aria-labelledby="about-heading">
            <div>
              <h1 id="about-heading" className="text-4xl md:text-5xl font-semibold mb-4" style={{ fontFamily: 'Montserrat' }}>
                About Our Countryside Resort
              </h1>
              <p className="text-lg text-[#555]" style={{ fontFamily: 'Montserrat' }}>
                Where compassionate memory care meets comfort, warmth, and community. With over two decades of expertise,
                our dedicated team creates a nurturing environment that feels like home.
              </p>
            </div>
            <div>
              <img
                src="/staff2.jpeg"
                alt="Our caring memory care staff and resident sharing a moment"
                className="w-full rounded shadow"
              />
            </div>
          </section>

          {/* Our Story */}
          <section className="bg-[#f9f9f9] rounded-lg shadow p-8 mb-16" aria-labelledby="our-story">
            <h2 id="our-story" className="text-3xl font-semibold mb-4" style={{ fontFamily: 'Montserrat' }}>
              Our Story
            </h2>
            <p className="text-lg text-[#555]" style={{ fontFamily: 'Montserrat' }}>
              Founded on the principles of dignity and empathy, our memory care facility has evolved into a trusted haven
              for families seeking exceptional senior care. Every chapter of our story is rooted in heartfelt service and a
              deep understanding of each resident’s journey.
            </p>
          </section>

          {/* Mission & Values */}
          <section className="grid md:grid-cols-2 gap-8 mb-16" aria-labelledby="mission-values">
            <article className="bg-white rounded-lg shadow p-6" aria-labelledby="mission-heading">
              <h3 id="mission-heading" className="text-2xl font-semibold mb-3" style={{ fontFamily: 'Montserrat' }}>
                Our Mission
              </h3>
              <p className="text-md text-[#555]" style={{ fontFamily: 'Montserrat' }}>
                We enrich lives through personalized memory care, genuine human connection, and an unwavering commitment to
                dignity, safety, and joy in everyday life.
              </p>
            </article>
            <article className="bg-white rounded-lg shadow p-6" aria-labelledby="values-heading">
              <h3 id="values-heading" className="text-2xl font-semibold mb-3" style={{ fontFamily: 'Montserrat' }}>
                Our Values
              </h3>
              <ul className="list-disc pl-6 text-md text-[#555]" style={{ fontFamily: 'Montserrat' }}>
                <li>Compassionate Care</li>
                <li>Respect & Dignity</li>
                <li>Personalized Attention</li>
                <li>Commitment to Excellence</li>
              </ul>
            </article>
          </section>

          {/* Meet the Team */}
          <section className="bg-[#f0f4f8] rounded-lg shadow p-8 text-center" aria-labelledby="team-heading">
            <h2 id="team-heading" className="text-3xl font-semibold mb-4" style={{ fontFamily: 'Montserrat' }}>
              Meet Our Team
            </h2>
            <p className="text-lg text-[#555] mb-6" style={{ fontFamily: 'Montserrat' }}>
              Our team is the heart of our community. Each member brings compassion, expertise, and a shared commitment to
              elevating the quality of life for every resident.
            </p>
            <Link href="/join-team">
              <button className="bg-[#3b5d7d] text-white px-6 py-3 rounded hover:bg-[#2d4a65] transition">
                Join Our Team
              </button>
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
