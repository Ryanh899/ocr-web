import Link from 'next/link';

export default function ServicesAmenitiesPage() {
  return (
    <div className="min-h-screen bg-white text-[#3b5d7d] font-sans">
      <main className="max-w-6xl mx-auto py-16 px-6">

        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4" style={{ fontFamily: 'Montserrat' }}>
              Services & Amenities
            </h1>
            <p className="text-lg text-[#555]" style={{ fontFamily: 'Montserrat' }}>
              At Our Countryside Resort, we specialize in compassionate Memory Care and Hospice Support. Our supportive services and comfortable amenities are designed to provide peace of mind and meaningful quality of life for residents and their families.
            </p>
          </div>
          <div>
            <img
              src="/entroom2.jpeg"
              alt="Overview of our services and amenities"
              className="w-full rounded shadow"
            />
          </div>
        </section>

        {/* Our Services */}
        <section className="bg-[#f9f9f9] rounded-lg shadow p-8 mb-16">
          <h2 className="text-3xl font-semibold mb-4" style={{ fontFamily: 'Montserrat' }}>
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
        <section className="bg-[#f0f4f8] rounded-lg shadow p-8 mb-16">
          <h2 className="text-3xl font-semibold mb-4" style={{ fontFamily: 'Montserrat' }}>
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
        <section className="text-center bg-white">
          <h2 className="text-3xl font-semibold mb-4" style={{ fontFamily: 'Montserrat' }}>
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
      </main>
    </div>
  );
}
