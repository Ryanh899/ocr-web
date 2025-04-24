// src/app/planning/financial/page.tsx
import Link from 'next/link';

export default function FinancialPlanningPage() {
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
                Financial Planning for Assisted Living
              </h1>
              <p
                className="text-lg mb-4"
                style={{
                  fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
                  fontWeight: 400,
                }}
              >
                Navigating the financial aspects of assisted living can be challenging. Our guide provides key 
                information and resources to help you plan effectively for your loved one’s care.
              </p>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <img
                src="/financial-photo.jpg"
                alt="Financial planning and budgeting"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog-Style Content */}
      <main className="max-w-3xl mx-auto py-10 px-4">
        {/* Understanding Costs Section */}
        <section className="mt-12">
          <h2 
            className="text-3xl font-bold mb-4 text-center"
            style={{ color: '#454546', fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif', fontWeight: 600 }}
          >
            Understanding Assisted Living Costs
          </h2>
          <p className="text-lg mb-4 leading-relaxed">
            Assisted living expenses typically cover housing, care services, meals, and additional fees for specialized 
            programs. Knowing what is included—and what may incur extra costs—is an essential first step.
          </p>
          <ul className="list-disc pl-6 text-lg">
            <li>Base care and housing</li>
            <li>Medical and emergency fees</li>
            <li>Wellness programs</li>
            <li>Additional services</li>
          </ul>
        </section>

        {/* Budgeting & Funding Section */}
        <section className="mt-12">
          <h2 
            className="text-3xl font-bold mb-4 text-center"
            style={{ color: '#454546', fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif', fontWeight: 600 }}
          >
            Budgeting and Funding Options
          </h2>
          <p className="text-lg mb-4 leading-relaxed">
            There are several ways to finance assisted living, including personal savings, insurance, and government aid. 
            Understanding these options can help you make informed financial decisions.
          </p>
          <ul className="list-disc pl-6 text-lg">
            <li>Personal savings and retirement funds</li>
            <li>Long-term care insurance policies</li>
            <li>Medicaid, VA benefits, and other government programs</li>
            <li>Alternative financing options, such as home equity</li>
          </ul>
        </section>

        {/* Long-Term Financial Planning Section */}
        <section className="mt-12">
          <h2 
            className="text-3xl font-bold mb-4 text-center"
            style={{ color: '#454546', fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif', fontWeight: 600 }}
          >
            Long-Term Financial Planning
          </h2>
          <p className="text-lg mb-4 leading-relaxed">
            Planning for the future is essential. Evaluating your long-term care needs and aligning them with your 
            financial resources will provide peace of mind for both you and your family.
          </p>
          <ul className="list-disc pl-6 text-lg">
            <li>Retirement and investment planning</li>
            <li>Long-term care funds and annuities</li>
            <li>Estate and will preparation</li>
          </ul>
        </section>

        {/* Tax Benefits & Financial Assistance Section */}
        <section className="mt-12">
          <h2 
            className="text-3xl font-bold mb-4 text-center"
            style={{ color: '#454546', fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif', fontWeight: 600 }}
          >
            Tax Benefits & Financial Assistance
          </h2>
          <p className="text-lg mb-4 leading-relaxed">
            Many families are unaware that they may qualify for tax deductions or financial assistance programs to 
            offset the cost of assisted living.
          </p>
          <ul className="list-disc pl-6 text-lg">
            <li>Tax deductions for care-related expenses</li>
            <li>State and federal assistance programs</li>
            <li>Non-profit financial support services</li>
          </ul>
        </section>

        {/* Legal and Estate Considerations Section */}
        <section className="mt-12">
          <h2 
            className="text-3xl font-bold mb-4 text-center"
            style={{ color: '#454546', fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif', fontWeight: 600 }}
          >
            Legal and Estate Considerations
          </h2>
          <p className="text-lg mb-4 leading-relaxed">
            Protecting your assets and ensuring your future wishes are honored requires proper legal planning.
          </p>
          <ul className="list-disc pl-6 text-lg">
            <li>Setting up a power of attorney</li>
            <li>Creating or updating your will</li>
            <li>Understanding trusts and elder law protections</li>
          </ul>
        </section>

        {/* Additional Resources Section */}
        <section className="mt-12">
          <h2 
            className="text-3xl font-bold mb-4 text-center"
            style={{ color: '#454546', fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif', fontWeight: 600 }}
          >
            Additional Resources
          </h2>
          <p className="text-lg mb-4 leading-relaxed">
            Explore these trusted articles and guides to help you navigate financial planning for assisted living.
          </p>
          <ul className="list-disc pl-6 text-lg">
            <li>
              <a 
                href="https://www.aarp.org/caregiving/financial-legal/info-2017/assisted-living-costs.html" 
                target="_blank" rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                AARP: How to Pay for Assisted Living
              </a>
            </li>
            <li>
              <a 
                href="https://www.investopedia.com/terms/l/longtermcareinsurance.asp" 
                target="_blank" rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Investopedia: Long-Term Care Insurance
              </a>
            </li>
            <li>
              <a 
                href="https://www.nia.nih.gov/health/costs-long-term-care" 
                target="_blank" rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                National Institute on Aging: Long-Term Care Costs
              </a>
            </li>
          </ul>
        </section>

        {/* Call to Action Section */}
        <section className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-[#5D4037] mb-4">
            Need Assistance with Financial Planning?
          </h2>
          <p className="text-lg mb-6 leading-relaxed">
            Our team is here to help you navigate the financial challenges of assisted living. Contact us today to 
            discuss your options.
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
