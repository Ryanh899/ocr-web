// src/app/about.tsx
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#3b5d7d] font-sans">
      <main className="max-w-6xl mx-auto py-16 px-6">
        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4" style={{ fontFamily: 'Montserrat' }}>
              About Our Countryside Resort
            </h1>
            <p className="text-lg text-[#555]" style={{ fontFamily: 'Montserrat' }}>
              Where compassionate memory care meets comfort, warmth, and community. With over two decades of expertise,
              our dedicated team creates a nurturing environment that feels like home.
            </p>
          </div>
          <div>
            <img
              src="/staff-photo.jpg"
              alt="Caring staff with a resident"
              className="w-full rounded shadow"
            />
          </div>
        </section>

        {/* Our Story */}
        <section className="bg-[#f9f9f9] rounded-lg shadow p-8 mb-16">
          <h2 className="text-3xl font-semibold mb-4" style={{ fontFamily: 'Montserrat' }}>
            Our Story
          </h2>
          <p className="text-lg text-[#555]" style={{ fontFamily: 'Montserrat' }}>
            Founded on the principles of dignity and empathy, our memory care facility has evolved into a trusted haven
            for families seeking exceptional senior care. Every chapter of our story is rooted in heartfelt service and a
            deep understanding of each resident’s journey.
          </p>
        </section>

        {/* Mission & Values */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-2xl font-semibold mb-3" style={{ fontFamily: 'Montserrat' }}>
              Our Mission
            </h3>
            <p className="text-md text-[#555]" style={{ fontFamily: 'Montserrat' }}>
              We enrich lives through personalized memory care, genuine human connection, and an unwavering commitment to
              dignity, safety, and joy in everyday life.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-2xl font-semibold mb-3" style={{ fontFamily: 'Montserrat' }}>
              Our Values
            </h3>
            <ul className="list-disc pl-6 text-md text-[#555]" style={{ fontFamily: 'Montserrat' }}>
              <li>Compassionate Care</li>
              <li>Respect & Dignity</li>
              <li>Personalized Attention</li>
              <li>Commitment to Excellence</li>
            </ul>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="bg-[#f0f4f8] rounded-lg shadow p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4" style={{ fontFamily: 'Montserrat' }}>
            Meet Our Team
          </h2>
          <p className="text-lg text-[#555] mb-6" style={{ fontFamily: 'Montserrat' }}>
            Our team is the heart of our community. Each member brings compassion, expertise, and a shared commitment to
            elevating the quality of life for every resident.
          </p>
          <Link href="/careers">
            <button className="bg-[#3b5d7d] text-white px-6 py-3 rounded hover:bg-[#2d4a65] transition">
              Join Our Team
            </button>
          </Link>
        </section>
      </main>
    </div>
  );
}
