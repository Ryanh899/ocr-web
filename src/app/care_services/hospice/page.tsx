// src/app/care_services/hospice/page.tsx
import Link from 'next/link';

export default function HospicePage() {
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
              Hospice Care
            </h1>
            <p
              className="text-lg mb-4"
              style={{ fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif', fontWeight: 400 }}
            >
              Our Hospice Care program offers compassionate support and dignified end-of-life care. We focus on comfort, quality of life, and providing support for both patients and their families during this sensitive time.
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img
              src="/hospice-photo.jpg"
              alt="Hospice care environment"
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
              Our Hospice Care services include:
            </p>
            <ul
              className="list-disc pl-6 text-lg"
              style={{ fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif', fontWeight: 400 }}
            >
              <li>24/7 compassionate care</li>
              <li>Pain and symptom management</li>
              <li>Emotional and spiritual support</li>
              <li>Family counseling and bereavement support</li>
              <li>Comfortable, homelike environment</li>
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
              We provide personalized hospice care focused on ensuring comfort, dignity, and quality of life. Our dedicated team works closely with patients and families to create a supportive environment that honors their wishes during this challenging time.
            </p>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="mt-12 text-center">
          <h2
            className="text-3xl font-bold text-[#5D4037] mb-4"
            style={{ fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif', fontWeight: 500 }}
          >
            Compassionate Care When It Matters Most
          </h2>
          <p
            className="text-lg mb-6"
            style={{ fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif', fontWeight: 400 }}
          >
            Contact us today to learn more about our Hospice Care services and how we can support your family during this sensitive time.
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
