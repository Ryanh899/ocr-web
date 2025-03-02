// src/app/contact-form/page.tsx
'use client'

import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log('Form Data:', formData);
    // You can replace the above with API calls or other processing logic
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2
        className="text-2xl font-bold mb-4"
        style={{ fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif' }}
      >
        Schedule a Visit
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4" style={{ fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif' }}>
        <div>
          <label htmlFor="firstName" className="block mb-1">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block mb-1">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block mb-1">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="date" className="block mb-1">Preferred Date (Optional)</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="time" className="block mb-1">Preferred Time (Optional)</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 rounded bg-blue-500 text-white"
          style={{ fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif', fontWeight: 400 }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
