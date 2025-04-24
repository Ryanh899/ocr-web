// src/app/planning/compare-options/page.tsx
import Link from 'next/link';

export default function CompareOptionsPage() {
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
                Comparing Care Options
              </h1>
              <p
                className="text-lg mb-4"
                style={{
                  fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
                  fontWeight: 400,
                }}
              >
                Choosing the right care option is crucial for your loved one's well-being. This guide compares assisted living, in-home care, and nursing homes to help you make an informed decision.
              </p>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <img
                src="/compare-photo.jpg"
                alt="Comparing care options"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog-Style Content */}
      <main className="max-w-3xl mx-auto py-10 px-4">
        {/* Assisted Living */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: '#454546' }}>
            Assisted Living
          </h2>
          <p className="text-lg mb-4 leading-relaxed">
            Assisted living facilities provide housing, personal care services, and support with daily activities. They are ideal for individuals who require some assistance but wish to maintain a level of independence.
          </p>
          <ul className="list-disc pl-6 text-lg">
            <li>Private or semi-private apartments</li>
            <li>Assistance with activities of daily living (ADLs)</li>
            <li>Social and recreational activities</li>
            <li>24-hour supervision and security</li>
          </ul>
          <p className="text-lg mt-4">
            <a
              href="https://www.nia.nih.gov/health/assisted-living"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Learn more about assisted living from the National Institute on Aging
            </a>
          </p>
        </section>

        {/* In-Home Care */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: '#454546' }}>
            In-Home Care
          </h2>
          <p className="text-lg mb-4 leading-relaxed">
            In-home care involves professional caregivers providing assistance in the individual's own home. This option is suitable for those who prefer to stay in familiar surroundings while receiving the necessary support.
          </p>
          <ul className="list-disc pl-6 text-lg">
            <li>Personalized care plans</li>
            <li>Assistance with ADLs</li>
            <li>Medication management</li>
            <li>Companionship and social interaction</li>
          </ul>
          <p className="text-lg mt-4">
            <a
              href="https://www.aplaceformom.com/caregiver-resources/articles/assisted-living-vs-home-care"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Explore the differences between assisted living and in-home care
            </a>
          </p>
        </section>

        {/* Nursing Homes */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: '#454546' }}>
            Nursing Homes
          </h2>
          <p className="text-lg mb-4 leading-relaxed">
            Nursing homes offer 24-hour medical care and supervision for individuals with significant health issues or those recovering from surgery or illness. They provide a higher level of medical care compared to assisted living facilities.
          </p>
          <ul className="list-disc pl-6 text-lg">
            <li>Skilled nursing care</li>
            <li>Rehabilitation services</li>
            <li>Assistance with ADLs</li>
            <li>Medical monitoring and treatments</li>
          </ul>
          <p className="text-lg mt-4">
            <a
              href="https://www.nia.nih.gov/health/what-are-nursing-homes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Detailed information on nursing homes from the National Institute on Aging
            </a>
          </p>
        </section>

        {/* Cost Comparison */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: '#454546' }}>
            Cost Comparison
          </h2>
          <p className="text-lg mb-4 leading-relaxed">
            Understanding the financial implications of each care option is essential. Costs vary based on location, level of care required, and additional services.
          </p>
          <ul className="list-disc pl-6 text-lg">
            <li><strong>Assisted Living:</strong> National median monthly cost: $4,995</li>
            <li><strong>In-Home Care:</strong> National median hourly cost: $30 ($5,720/month for full-time care)</li>
            <li><strong>Nursing Homes:</strong> Semi-private room: $7,908/month | Private room: $9,034/month</li>
          </ul>
          <p className="text-lg mt-4">
            <a
              href="https://www.genworth.com/aging-and-you/finances/cost-of-care.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View detailed cost comparisons at Genworth's Cost of Care Survey
            </a>
          </p>
        </section>

        {/* Call to Action */}
        <section className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-[#5D4037] mb-4">
            Need Help Choosing the Right Care?
          </h2>
          <p className="text-lg mb-6 leading-relaxed">
            Our team can assist you in finding the best care solution for your loved one. Contact us today for more information and personalized recommendations.
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
