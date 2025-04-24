// src/app/care_services/memorycare/page.tsx
import Link from 'next/link';

export default function MemoryCarePage() {
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
              Memory Care
            </h1>
            <p
              className="text-lg mb-4"
              style={{ fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif', fontWeight: 400 }}
            >
              Our specialized Memory Care program provides compassionate, personalized support for individuals facing memory challenges. We create a secure, engaging environment that promotes dignity, independence, and quality of life.
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img
              src="/memorycare-photo.webp"
              alt="Memory care environment with engaging activities"
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
              Our Memory Care program includes:
            </p>
            <ul
              className="list-disc pl-6 text-lg"
              style={{ fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif', fontWeight: 400 }}
            >
              <li>24/7 Personalized Care</li>
              <li>Safe and Secure Environment</li>
              <li>Engaging Activities & Therapies</li>
              <li>Specialized Nutritional Support</li>
              <li>Memory-Enhancing Programs</li>
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
              We believe in a holistic approach to memory care that prioritizes both medical support and emotional well-being. Our experienced staff work closely with families to tailor care plans that meet the unique needs of each resident, ensuring a nurturing environment that fosters independence and connection.
            </p>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="mt-12 text-center">
          <h2
            className="text-3xl font-bold text-[#5D4037] mb-4"
            style={{ fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif', fontWeight: 500 }}
          >
            Ready to Learn More?
          </h2>
          <p
            className="text-lg mb-6"
            style={{ fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif', fontWeight: 400 }}
          >
            Contact us today to schedule a tour or speak with our Memory Care specialists.
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
