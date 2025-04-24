// src/app/planning/movingorstaying/page.tsx
import Link from 'next/link';

export default function MovingOrStayingPage() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] text-gray-800 font-sans">
      {/* Hero Section: Full-width with dark background */}
      <section className="w-full bg-[#454546] text-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1
                className="text-4xl font-bold mb-4"
                style={{
                  fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
                  fontWeight: 600,
                }}
              >
                Moving or Staying
              </h1>
              <p
                className="text-lg mb-4"
                style={{
                  fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
                  fontWeight: 400,
                }}
              >
                Deciding whether to transition to an assisted living facility or remain in your current home is a significant choice. Our guide is here to help you weigh the options and determine what best meets your needs.
              </p>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <img
                src="/movingstayingphoto.jpg"
                alt="Deciding whether to move or stay"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog-Style Content */}
      <main className="max-w-3xl mx-auto py-10 px-4">
        {/* Key Considerations */}
        <section className="mt-12">
          <h2
            className="text-3xl font-bold mb-4 text-center"
            style={{
              color: '#454546',
              fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
              fontWeight: 600,
            }}
          >
            Key Considerations
          </h2>
          <p
            className="text-lg mb-4"
            style={{
              fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
              fontWeight: 400,
            }}
          >
            When evaluating your options, consider the following factors:
          </p>
          <ul
            className="list-disc pl-6 text-lg"
            style={{
              fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
              fontWeight: 400,
            }}
          >
            <li>
              <strong>Health and Safety:</strong> Assess whether your current home can safely support your evolving health needs.
            </li>
            <li>
              <strong>Social Engagement:</strong> Consider the level of social interaction and community engagement you might gain by moving.
            </li>
            <li>
              <strong>Financial Impact:</strong> Compare the costs of home modifications and in-home care versus the comprehensive services provided by an assisted living facility.
            </li>
            <li>
              <strong>Family Support:</strong> Evaluate the availability and willingness of family or caregivers to assist you if you stay at home.
            </li>
            <li>
              <strong>Quality of Life:</strong> Reflect on which option will provide a higher quality of life based on your personal values and preferences.
            </li>
          </ul>
        </section>

        {/* In-Depth Analysis */}
        <section className="mt-12">
          <h2
            className="text-3xl font-bold mb-4 text-center"
            style={{
              color: '#454546',
              fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
              fontWeight: 600,
            }}
          >
            In-Depth Analysis
          </h2>
          <p
            className="text-lg mb-4 leading-relaxed"
            style={{
              fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
              fontWeight: 400,
            }}
          >
            <strong>Staying at Home:</strong> Many individuals cherish the comfort and familiarity of their own home. With the right modifications and professional in-home care, staying can be a viable and satisfying option. However, it’s important to recognize the challenges of maintaining a safe environment and managing day-to-day responsibilities independently.
          </p>
          <p
            className="text-lg mb-4 leading-relaxed"
            style={{
              fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
              fontWeight: 400,
            }}
          >
            <strong>Moving to Assisted Living:</strong> Transitioning to an assisted living facility offers structured support, professional care, and ample opportunities for social engagement. This option is particularly beneficial if you require consistent medical supervision and prefer a community-oriented environment.
          </p>
        </section>

        {/* Decision-Making Tips */}
        <section className="mt-12">
          <h2
            className="text-3xl font-bold mb-4 text-center"
            style={{
              color: '#454546',
              fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
              fontWeight: 600,
            }}
          >
            Decision-Making Tips
          </h2>
          <p
            className="text-lg mb-4 leading-relaxed"
            style={{
              fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
              fontWeight: 400,
            }}
          >
            Take your time and involve your loved ones in the discussion. Here are some suggestions:
          </p>
          <ul
            className="list-disc pl-6 text-lg"
            style={{
              fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
              fontWeight: 400,
            }}
          >
            <li>Consult with healthcare professionals and financial advisors.</li>
            <li>Tour multiple facilities to experience the environment firsthand.</li>
            <li>Review testimonials and ask for references from current residents.</li>
            <li>Evaluate your current home for safety and accessibility improvements.</li>
            <li>List the pros and cons of each option to see which aligns with your needs.</li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="mt-12 text-center">
          <h2
            className="text-3xl font-bold text-[#5D4037] mb-4"
            style={{
              fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
              fontWeight: 500,
            }}
          >
            Ready to Explore Your Options?
          </h2>
          <p
            className="text-lg mb-6 leading-relaxed"
            style={{
              fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
              fontWeight: 400,
            }}
          >
            Contact us to discuss your situation and learn more about the benefits of assisted living. Our team is here to help you make the best decision for your loved one.
          </p>
          <Link href="/contact">
            <button
              className="px-6 py-3 rounded border bg-[#bad535] hover:bg-[#f4f4f4] text-[#454546] transition"
              style={{
                fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
                fontWeight: 400,
              }}
            >
              Contact Us
            </button>
          </Link>
        </section>
      </main>
    </div>
  );
}
