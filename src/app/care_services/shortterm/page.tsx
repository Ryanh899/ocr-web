// src/app/care_services/shortterm/page.tsx
import Link from 'next/link';

export default function ShortTermStaysPage() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] text-gray-800 font-sans">
      <main className="max-w-7xl mx-auto py-10">
        {/* Hero Section */}
        <section 
          className="flex flex-col md:flex-row items-center rounded-lg shadow p-6"
          style={{ backgroundColor: '#454546', color: '#fff' }}
        >
          <div className="md:w-1/2">
            <h1
              className="text-4xl font-bold mb-4"
              style={{ fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif', fontWeight: 600 }}
            >
              Short Term Stays
            </h1>
            <p
              className="text-lg mb-4"
              style={{ fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif', fontWeight: 400 }}
            >
              Our Short Term Stays provide a comfortable and supportive environment for individuals needing temporary care. Enjoy professional care services with the flexibility of a short-term arrangement.
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img
              src="/short-term-stay-photo.jpg"
              alt="Short term stay accommodations"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="mt-12">
          <div className="bg-[#f4f4f4] rounded-lg shadow-lg p-6">
            <h2
              className="text-3xl mb-4"
              style={{ color: '#454546', fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif', fontWeight: 600 }}
            >
              What We Offer
            </h2>
            <p
              className="text-lg mb-6"
              style={{ fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif', fontWeight: 400 }}
            >
              Our Short Term Stays include:
            </p>
            <ul
              className="list-disc pl-6 text-lg"
              style={{ fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif', fontWeight: 400 }}
            >
              <li>Temporary, high-quality care services</li>
              <li>Comfortable living spaces</li>
              <li>Personalized care plans</li>
              <li>Access to engaging activities and therapies</li>
              <li>Flexible stay durations</li>
            </ul>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="mt-12">
          <div className="bg-[#f4f4f4] rounded-lg shadow-lg p-6">
            <h2
              className="text-3xl mb-4"
              style={{ color: '#454546', fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif', fontWeight: 600 }}
            >
              Our Approach
            </h2>
            <p
              className="text-lg"
              style={{ fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif', fontWeight: 400 }}
            >
              We tailor our short term stays to meet the unique needs of each guest, ensuring a smooth transition with quality care and a supportive environment. Our team is dedicated to making you feel at home, even if only for a short while.
            </p>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="mt-12 text-center">
          <h2
            className="text-3xl font-bold text-[#5D4037] mb-4"
            style={{ fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif', fontWeight: 500 }}
          >
            Interested in a Short Term Stay?
          </h2>
          <p
            className="text-lg mb-6"
            style={{ fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif', fontWeight: 400 }}
          >
            Contact us today to learn more about our flexible, temporary care options.
          </p>
          <Link href="/contact">
            <button
              className="px-6 py-3 rounded border bg-[#bad535] hover:bg-[#f4f4f4] text-[#454546] transition"
              style={{ fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif', fontWeight: 400 }}
            >
              Contact Us
            </button>
          </Link>
        </section>
      </main>
    </div>
  );
}
