// src/app/about/cuisine/page.tsx
import Link from 'next/link';

export default function CuisinePage() {
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
              style={{
                fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
                fontWeight: 600,
              }}
            >
              Our Cuisine
            </h1>
            <p
              className="text-lg mb-4"
              style={{
                fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
                fontWeight: 400,
              }}
            >
              Discover the art of dining with chef-prepared meals crafted to nourish both body and soul. Our cuisine is designed to delight your senses and meet every nutritional need.
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img
              src="/food-photo.jpg"
              alt="A beautifully plated chef-prepared meal"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Monthly Menu Section */}
        <section className="mt-12">
          <div className="bg-[#f4f4f4] rounded-lg shadow-lg p-6">
            <h2
              className="text-3xl mb-4"
              style={{
                color: '#454546',
                fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
                fontWeight: 600,
              }}
            >
              Monthly Menu
            </h2>
            <div className="mt-4">
              <img
                src="/menu-photo.png"
                alt="Calendar for the monthly menu"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
