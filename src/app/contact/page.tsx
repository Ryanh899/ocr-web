// src/app/contact/page.tsx
export default function ContactPage() {
    return (
      <div>
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="mb-4">
          For tours, admissions, or any inquiries, please reach out to us:
        </p>
        <p className="mb-2"><strong>Phone:</strong> (123) 456-7890</p>
        <p className="mb-2"><strong>Email:</strong> info@seniorcarecenter.com</p>
        <p className="mb-2"><strong>Address:</strong> 123 Memory Lane, Care City, ST 00000</p>
        <h3 className="text-2xl font-semibold mt-6 mb-2">Send Us a Message</h3>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="w-full border p-2 rounded" 
              placeholder="Your Name" 
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="w-full border p-2 rounded" 
              placeholder="you@example.com" 
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-medium">Message</label>
            <textarea 
              id="message" 
              name="message" 
              className="w-full border p-2 rounded" 
              placeholder="Your message" 
              rows={4}
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    )
  }
  