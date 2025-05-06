import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-[#3b5d7d] px-4">
      <h1 className="text-4xl font-semibold mb-4" style={{ fontFamily: 'Montserrat' }}>
        Thank You!
      </h1>
      <p className="text-lg text-center text-[#555] max-w-xl mb-8" style={{ fontFamily: 'Montserrat' }}>
        We appreciate you reaching out to us. A member of our team will contact you shortly to follow up on your inquiry.
      </p>
      <Link href="/">
        <button className="bg-[#3b5d7d] text-white px-6 py-3 rounded hover:bg-[#2d4a65] transition" style={{ fontFamily: 'Montserrat' }}>
          Return to Homepage
        </button>
      </Link>
    </div>
  );
}
