import Link from 'next/link';

export default function ScheduleTourPage() {
  return (
    <div className="min-h-screen bg-white text-[#3b5d7d] font-sans">
      <main className="max-w-4xl mx-auto py-16 px-6">
        {/* Intro */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-semibold mb-4" style={{ fontFamily: 'Montserrat' }}>
            Schedule a Tour
          </h1>
          <p className="text-lg text-[#555]" style={{ fontFamily: 'Montserrat' }}>
            We'd love to meet you! Please complete the form below and we'll be in touch to confirm your visit.
          </p>
        </section>

        {/* Tour Form */}
        <section className="bg-[#f9f9f9] rounded-lg shadow p-8 mb-12">
          <form className="space-y-6">
            <div>
              <label className="block text-md mb-1" style={{ fontFamily: 'Montserrat' }}>Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-md mb-1" style={{ fontFamily: 'Montserrat' }}>Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-md mb-1" style={{ fontFamily: 'Montserrat' }}>Phone Number</label>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-gray-300 rounded"
                placeholder="(123) 456-7890"
              />
            </div>
            <div>
              <label className="block text-md mb-1" style={{ fontFamily: 'Montserrat' }}>Preferred Tour Date</label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-md mb-1" style={{ fontFamily: 'Montserrat' }}>Preferred Time</label>
              <input
                type="time"
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-md mb-1" style={{ fontFamily: 'Montserrat' }}>Additional Notes</label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded"
                rows={4}
                placeholder="Tell us anything you'd like us to know ahead of time..."
              />
            </div>
            <button
              type="submit"
              className="bg-[#3b5d7d] text-white px-6 py-3 rounded hover:bg-[#2d4a65] transition"
              style={{ fontFamily: 'Montserrat' }}
            >
              Submit Request
            </button>
          </form>
        </section>

        {/* Questions? */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-3" style={{ fontFamily: 'Montserrat' }}>
            Have Questions First?
          </h2>
          <p className="text-md text-[#555] mb-6" style={{ fontFamily: 'Montserrat' }}>
            Feel free to reach out before booking — we’re happy to talk with you.
          </p>
          <Link href="/contact">
            <button className="bg-[#b85042] text-white px-6 py-3 rounded hover:bg-[#a33f35] transition">
              Contact Us
            </button>
          </Link>
        </section>
      </main>
    </div>
  );
}
