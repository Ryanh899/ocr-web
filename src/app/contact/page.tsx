import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-[#3b5d7d] font-sans">
      <main className="max-w-4xl mx-auto py-16 px-6">
        {/* Page Title */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-semibold mb-4" style={{ fontFamily: 'Montserrat' }}>
            Contact Us
          </h1>
          <p className="text-lg text-[#555]" style={{ fontFamily: 'Montserrat' }}>
            We’re here to answer your questions and help guide your next step with care and clarity.
          </p>
        </section>

        {/* Contact Form */}
        <section className="bg-[#f9f9f9] rounded-lg shadow p-8 mb-12">
          <form className="space-y-6">
            <div>
              <label className="block text-md mb-1" style={{ fontFamily: 'Montserrat' }}>Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-md mb-1" style={{ fontFamily: 'Montserrat' }}>Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-md mb-1" style={{ fontFamily: 'Montserrat' }}>Phone</label>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-gray-300 rounded"
                placeholder="(123) 456-7890"
              />
            </div>
            <div>
              <label className="block text-md mb-1" style={{ fontFamily: 'Montserrat' }}>Message</label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded"
                rows={5}
                placeholder="How can we help you?"
              />
            </div>
            <button
              type="submit"
              className="bg-[#3b5d7d] text-white px-6 py-3 rounded hover:bg-[#2d4a65] transition"
              style={{ fontFamily: 'Montserrat' }}
            >
              Submit Inquiry
            </button>
          </form>
        </section>

        {/* Contact Info */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Montserrat' }}>
            Prefer to reach out directly?
          </h2>
          <p className="text-md text-[#555] mb-2" style={{ fontFamily: 'Montserrat' }}>
            📞 <strong>Phone:</strong> (555) 123-4567
          </p>
          <p className="text-md text-[#555] mb-2" style={{ fontFamily: 'Montserrat' }}>
            📧 <strong>Email:</strong> info@ourcountrysideresort.com
          </p>
          <p className="text-md text-[#555] mb-8" style={{ fontFamily: 'Montserrat' }}>
            📍 <strong>Address:</strong> 123 Memory Lane, Tranquil Town, ST 00000
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/schedule-tour">
              <button className="bg-[#b85042] text-white px-6 py-3 rounded hover:bg-[#a33f35] transition">
                Schedule a Tour
              </button>
            </Link>
            <Link href="/getting_started">
              <button className="bg-[#3b5d7d] text-white px-6 py-3 rounded hover:bg-[#2d4a65] transition">
                Getting Started
              </button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
