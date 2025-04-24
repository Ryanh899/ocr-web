// src/app/planning/faqs/page.tsx
import Link from 'next/link';

export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] text-gray-800 font-sans">
      {/* Hero Section: Full-width with dark background, centered text, no image */}
      <section className="w-full bg-[#454546] text-white py-12 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1
            className="text-5xl font-bold mb-4"
            style={{
              fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
              fontWeight: 700,
            }}
          >
            Frequently Asked Questions
          </h1>
          <p
            className="text-lg mb-4 leading-relaxed"
            style={{
              fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
              fontWeight: 400,
            }}
          >
            Have questions about assisted living? Explore our most frequently asked questions to find the information you need.
          </p>
        </div>
      </section>

      {/* Blog-Style Content */}
      <main className="max-w-3xl mx-auto py-10 px-4">
        {/* What is Assisted Living? */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: '#454546' }}>
            What is Assisted Living?
          </h2>
          <p className="text-lg mb-4 leading-relaxed">
            Assisted living is a type of housing designed for older adults who need help with daily activities but do not require the intensive medical care provided in a nursing home. Residents receive personalized care, meals, social engagement, and a safe living environment.
          </p>
          <p className="text-lg mt-4">
            <a
              href="https://www.nia.nih.gov/health/assisted-living"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Learn more from the National Institute on Aging
            </a>
          </p>
        </section>

        {/* How Much Does Assisted Living Cost? */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: '#454546' }}>
            How Much Does Assisted Living Cost?
          </h2>
          <p className="text-lg mb-4 leading-relaxed">
            The cost of assisted living varies by location and level of care needed. On average, the national median cost is **$4,995 per month**. Factors such as private vs. shared accommodations, specialized care, and additional services can affect the total cost.
          </p>
          <p className="text-lg mt-4">
            <a
              href="https://www.genworth.com/aging-and-you/finances/cost-of-care.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View the Genworth Cost of Care Survey for detailed pricing
            </a>
          </p>
        </section>

        {/* What Services Are Included in Assisted Living? */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: '#454546' }}>
            What Services Are Included in Assisted Living?
          </h2>
          <p className="text-lg mb-4 leading-relaxed">
            Assisted living communities provide a range of services designed to support independence while offering needed care. Common services include:
          </p>
          <ul className="list-disc pl-6 text-lg">
            <li>Personalized assistance with daily activities (bathing, dressing, etc.)</li>
            <li>Housekeeping and laundry services</li>
            <li>Nutritious chef-prepared meals</li>
            <li>24/7 security and emergency response</li>
            <li>Medication management</li>
            <li>Social activities and wellness programs</li>
          </ul>
        </section>

        {/* How Do I Pay for Assisted Living? */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: '#454546' }}>
            How Do I Pay for Assisted Living?
          </h2>
          <p className="text-lg mb-4 leading-relaxed">
            There are several ways to cover the cost of assisted living, including:
          </p>
          <ul className="list-disc pl-6 text-lg">
            <li>Personal savings and retirement funds</li>
            <li>Long-term care insurance</li>
            <li>Medicaid (varies by state)</li>
            <li>Veterans benefits</li>
            <li>Home equity options</li>
          </ul>
          <p className="text-lg mt-4">
            <a
              href="https://www.aplaceformom.com/caregiver-resources/articles/how-to-pay-for-assisted-living"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Explore funding options for assisted living
            </a>
          </p>
        </section>

        {/* Call to Action */}
        <section className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-[#5D4037] mb-4">
            Have More Questions?
          </h2>
          <p className="text-lg mb-6 leading-relaxed">
            Our team is here to help! Contact us today to learn more about assisted living and how we can support your loved one’s needs.
          </p>
          <Link href="/contact">
            <button className="px-6 py-3 rounded border bg-[#bad535] hover:bg-[#f4f4f4] text-[#454546] transition">
              Contact Us
            </button>
          </Link>
        </section>
      </main>
    </div>
  );
}
