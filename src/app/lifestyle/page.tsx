// src/app/about/lifestyle.tsx
import Link from 'next/link';

export default function LifestylePage() {
  return (
    <div className="min-h-screen bg-white text-[#3b5d7d] font-sans">
      <main className="max-w-6xl mx-auto py-16 px-6">
        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4" style={{ fontFamily: 'Montserrat' }}>
              A Lifestyle That Feels Like Home
            </h1>
            <p className="text-lg text-[#555]" style={{ fontFamily: 'Montserrat' }}>
              At Our Countryside Resort, we provide more than just care — we offer a vibrant, supportive community where
              residents can thrive. Every day is thoughtfully designed to inspire connection, creativity, and joy.
            </p>
          </div>
          <div>
            <img
              src="/frontsign.jpeg"
              alt="Residents enjoying daily activities in a warm community setting"
              className="w-full rounded shadow"
            />
          </div>
        </section>

        {/* A Day in the Life */}
        <section className="bg-[#f9f9f9] rounded-lg shadow p-8 mb-16">
          <h2 className="text-3xl font-semibold mb-4" style={{ fontFamily: 'Montserrat' }}>
            A Day in the Life
          </h2>
          <p className="text-lg text-[#555]" style={{ fontFamily: 'Montserrat' }}>
            Mornings might begin with light stretching or a group breakfast, followed by creative workshops, musical
            programs, or gardening in the fresh air. Evenings are peaceful, with delicious chef-prepared meals and
            opportunities to unwind with friends and staff.
          </p>
        </section>

        {/* Community & Activities */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#f0f4f8] rounded-lg shadow p-6">
            <h3 className="text-2xl font-semibold mb-3" style={{ fontFamily: 'Montserrat' }}>
              Meaningful Community Engagement
            </h3>
            <p className="text-md text-[#555]" style={{ fontFamily: 'Montserrat' }}>
              Social bonds and community involvement are at the heart of our lifestyle. From birthday celebrations and
              themed events to family gatherings and outings, there's always something special to look forward to.
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
        <section className="bg-[#f9f9f9] rounded-lg shadow p-8 mb-16">
          <h2 className="text-3xl font-semibold mb-4" style={{ fontFamily: 'Montserrat' }}>
            Wellness & Nutrition
          </h2>
          <p className="text-lg text-[#555]" style={{ fontFamily: 'Montserrat' }}>
            Our residents enjoy chef-prepared meals crafted with care and attention to dietary needs, preferences, and
            nutrition. Combined with holistic wellness offerings — from health checks to mindfulness — we support a
            well-rounded, fulfilling lifestyle.
          </p>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4" style={{ fontFamily: 'Montserrat' }}>
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
      </main>
    </div>
  );
}
