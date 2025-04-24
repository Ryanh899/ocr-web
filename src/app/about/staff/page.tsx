// src/app/about/staff/page.tsx
import Link from 'next/link';

export default function StaffPage() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] text-gray-800 font-sans">
      <main className="max-w-7xl mx-auto py-10">
        {/* Hero Section */}
        <section
          className="flex flex-col items-center rounded-lg shadow p-6 text-center"
          style={{ backgroundColor: '#454546', color: '#fff' }}
        >
          <h1
            className="text-4xl font-bold mb-4"
            style={{
              fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
              fontWeight: 600,
            }}
          >
            Meet Our Family
          </h1>
          <p
            className="text-lg"
            style={{
              fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
              fontWeight: 400,
            }}
          >
            A small, family owned business dedicated to exceptional care.
          </p>
        </section>

        {/* Owners Section */}
        <section className="mt-12">
          <div className="bg-[#f4f4f4] rounded-lg shadow-lg p-6">
            <h2
              className="text-3xl mb-6"
              style={{
                color: '#454546',
                fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
                fontWeight: 600,
              }}
            >
              Our Owners
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Owner Husband */}
              <div className="flex flex-col items-center">
                <img
                  src="/owner.jpg"
                  alt="Owner Husband"
                  className="w-40 h-40 object-cover rounded-full shadow-lg mb-4"
                />
                <h3
                  className="text-2xl font-semibold"
                  style={{ fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif' }}
                >
                  Robert Thompson
                </h3>
                <p
                  className="text-lg"
                  style={{ fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif' }}
                >
                  Owner
                </p>
                <p
                  className="text-center mt-2 text-sm"
                  style={{ fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif' }}
                >
                  Bringing our family values to every corner of our community.
                </p>
              </div>
              {/* Owner Wife */}
              <div className="flex flex-col items-center">
                <img
                  src="/owner-wife.jpg"
                  alt="Owner Wife"
                  className="w-40 h-40 object-cover rounded-full shadow-lg mb-4"
                />
                <h3
                  className="text-2xl font-semibold"
                  style={{ fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif' }}
                >
                  Mary Thompson
                </h3>
                <p
                  className="text-lg"
                  style={{ fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif' }}
                >
                  Owner
                </p>
                <p
                  className="text-center mt-2 text-sm"
                  style={{ fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif' }}
                >
                  Nurturing our community with love and dedication.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="mt-12">
          <div className="bg-[#f4f4f4] rounded-lg shadow-lg p-6">
            <h2
              className="text-3xl mb-6"
              style={{
                color: '#454546',
                fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
                fontWeight: 600,
              }}
            >
              Leadership
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Director */}
              <div className="flex flex-col items-center">
                <img
                  src="/director.jpg"
                  alt="Director"
                  className="w-40 h-40 object-cover rounded-full shadow-lg mb-4"
                />
                <h3
                  className="text-2xl font-semibold"
                  style={{ fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif' }}
                >
                  John Smith
                </h3>
                <p
                  className="text-lg"
                  style={{ fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif' }}
                >
                  Director
                </p>
                <p
                  className="text-center mt-2 text-sm"
                  style={{ fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif' }}
                >
                  Leading our team with vision and care.
                </p>
              </div>
              {/* Assistant Director */}
              <div className="flex flex-col items-center">
                <img
                  src="/assistant-director.jpg"
                  alt="Assistant Director"
                  className="w-40 h-40 object-cover rounded-full shadow-lg mb-4"
                />
                <h3
                  className="text-2xl font-semibold"
                  style={{ fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif' }}
                >
                  Jane Smith
                </h3>
                <p
                  className="text-lg"
                  style={{ fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif' }}
                >
                  Assistant Director
                </p>
                <p
                  className="text-center mt-2 text-sm"
                  style={{ fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif' }}
                >
                  Supporting our mission with unwavering dedication.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Caregivers Section */}
        <section className="mt-12">
          <div className="bg-[#f4f4f4] rounded-lg shadow-lg p-6">
            <h2
              className="text-3xl mb-6"
              style={{
                color: '#454546',
                fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
                fontWeight: 600,
              }}
            >
              Our Caregivers
            </h2>
            <p
              className="text-lg mb-4"
              style={{ fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif' }}
            >
              Our dedicated caregivers are the heart of our community.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {/* Caregiver Card */}
              <div className="flex flex-col items-center">
                <img
                  src="/nurse1.jpg"
                  alt="Caregiver"
                  className="w-32 h-32 object-cover rounded-full shadow-lg mb-2"
                />
                <h3
                  className="text-xl font-semibold"
                  style={{ fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif' }}
                >
                  Emily Davis
                </h3>
                <p style={{ fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif' }}>
                  Caregiver
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/nurse2.jpg"
                  alt="Caregiver"
                  className="w-32 h-32 object-cover rounded-full shadow-lg mb-2"
                />
                <h3
                  className="text-xl font-semibold"
                  style={{ fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif' }}
                >
                  Michael Brown
                </h3>
                <p style={{ fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif' }}>
                  Caregiver
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/nurse3.jpg"
                  alt="Caregiver"
                  className="w-32 h-32 object-cover rounded-full shadow-lg mb-2"
                />
                <h3
                  className="text-xl font-semibold"
                  style={{ fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif' }}
                >
                  Sarah Johnson
                </h3>
                <p style={{ fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif' }}>
                  Caregiver
                </p>
              </div>
              {/* Additional caregiver cards can be added here */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
