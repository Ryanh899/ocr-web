import Link from 'next/link'

// src/app/page.tsx
export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] text-gray-800 font-sans">

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto py-10">
        <section
          className="flex flex-col md:flex-row items-center rounded-lg shadow p-6"
          style={{ backgroundColor: '#454546', color: '#fff', paddingLeft: '30px' }}
        >
          <div className="md:w-1/2">
            {/* Reduced margin for h1 */}
            <h1
              className="text-2xl text-[#fff] mb-2"
              style={{
                fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
                fontWeight: '300',
                paddingBottom: '0px'
              }}
            >
              Senior Living & Memory Care
            </h1>
            {/* Increased margin for "Join Our Community" */}
            <p
              className="text-3xl text-[#fff] mb-8"
              style={{
                fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
                fontWeight: '500',
                paddingTop: '0px'
              }}
            >
              Join Our Community
            </p>
            {/* Increased margin for the next paragraph */}
            <p
              className="text-md mb-10"
              style={{
                fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
                fontWeight: '400'
              }}
            >
              Chef Prepared Meals, 24-hour Support, and 20 years of experience make us the best place for your loved ones.
            </p>
            <div>
              <Link href="/contact-form">
                <button
                  className="px-4 py-2 rounded border bg-[#bad535] hover:bg-[#ffff] text-[#454546] font-normal"
                  style={{
                    fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
                    fontWeight: 400,
                    fontSize: '20px',
                    width: '50%',
                    paddingTop: '15px',
                    paddingBottom: '15px'
                  }}
                >
                  Schedule a Tour Today!
                </button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 md:pl-0">
            <img
              src="/landing1.jpg"
              alt="A warm, welcoming view of the senior care facility with smiling residents and caring staff"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Quality Care Section */}
        <section className="mt-12">
          <div className="bg-[#f4f4f4] rounded-lg shadow-lg p-6">
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
              {/* Image Block */}
              <div className="md:w-1/2">
                <img
                  src="/qualitycare.webp"
                  alt="A beautifully plated, chef-prepared meal served in the dining area"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              {/* Text Block */}
              <div className="md:w-1/2">
                <div className="mb-6">
                  <h2
                    style={{
                      color: '#454546',
                      fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
                      fontWeight: 600,
                    }}
                    className="text-3xl mb-4"
                  >
                    Quality Care
                  </h2>
                  <p
                    style={{
                      color: '#454546',
                      fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
                      fontWeight: 400,
                    }}
                    className="text-lg"
                  >
                    Our personalized care plans include health monitoring, medication management, engaging activities, social interaction, and 24-hour care to ensure safety and comfort.
                  </p>
                </div>
                <Link href="/about">
                <button style={{
                    fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
                    fontWeight: 400,
                    border: '1px, #454546 solid'
                  }} className="mt-4 px-4 py-2 rounded hover:bg-[#454546] hover:text-[#f4f4f4] transition">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Events & Activities Section */}
        <section className="mt-12">
          <div className="bg-[#f4f4f4] rounded-lg shadow-lg p-6">
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
              {/* Text Block */}
              <div className="md:w-1/2">
                <div className="mb-6">
                  <h2
                    style={{
                      color: '#454546',
                      fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
                      fontWeight: 600,
                    }}
                    className="text-3xl mb-4"
                  >
                    Events &amp; Activities
                  </h2>
                  <p
                    style={{
                      color: '#454546',
                      fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
                      fontWeight: 400,
                    }}
                    className="text-lg"
                  >
                    Our dynamic calendar features art, music, and gentle exercise classes tailored for memory care residents. These engaging activities spark joy, stimulate memories, and build a close-knit community.
                  </p>
                </div>
                <Link href="/activities-calendar">
                <button style={{
                    fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
                    fontWeight: 400,
                    border: '1px, #454546 solid'
                  }} className="mt-4 px-4 py-2 rounded hover:bg-[#454546] hover:text-[#f4f4f4] transition">
                    View Calendar
                  </button>
                </Link>
              </div>
              {/* Image Block */}
              <div className="md:w-1/2">
                <img
                  src="/activities.jpg"
                  alt="Residents participating in a lively community event at the facility"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="mt-12">
          <div className="bg-[#f4f4f4] rounded-lg shadow-lg p-6">
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
              {/* Image Block */}
              <div className="md:w-1/2">
                <img
                  src="/senioreating.jpg"
                  alt="Friendly staff assisting a resident with daily activities in a warm environment"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              {/* Text Block */}
              <div className="md:w-1/2">
                <div className="mb-6">
                  <h2
                    style={{
                      color: '#454546',
                      fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
                      fontWeight: 600,
                    }}
                    className="text-3xl mb-4"
                  >
                    Our Services
                  </h2>
                  <p
                    style={{
                      color: '#454546',
                      fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
                      fontWeight: 400,
                    }}
                    className="text-lg"
                  >
                    We provide personalized memory care, flexible short-term stays, and compassionate hospice services.
                    Our multidisciplinary approach ensures every resident receives dignified, exceptional care in a warm, home-like setting.
                  </p>
                </div>
                <Link href="/services">
                  <button style={{
                    fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
                    fontWeight: 400,
                    border: '1px, #454546 solid'
                  }} className="mt-4 px-4 py-2 rounded hover:bg-[#454546] hover:text-[#f4f4f4] transition">
                    Explore Services
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>


        {/* Final Call to Action Section */}
        <section className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-[#5D4037] mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-lg mb-6">
            Contact us today to schedule a tour or learn more about our exceptional memory care programs.
          </p>
          <div className="space-x-6">
            <a
              href="/schedule-tour"
              className="bg-[#5D4037] text-white px-6 py-3 rounded hover:bg-opacity-90 transition"
            >
              Schedule a Tour
            </a>
            <a
              href="/contact"
              className="bg-[#5D4037] text-white px-6 py-3 rounded hover:bg-opacity-90 transition"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
