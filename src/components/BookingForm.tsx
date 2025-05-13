import React, { useState } from 'react';

interface BookingFormProps {
  onSubmit: (data: {
    name: string;
    phone: string;
    address: string;
    service: string;
  }) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    service: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="font-outfit">
      <div className="mb-6">
        <label className="block font-semibold text-lg mb-2">Full name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your first name here..."
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-4 rounded-xl border-2 border-[#bdb0a1] text-lg bg-transparent"
        />
      </div>
      <div className="mb-6">
        <label className="block font-semibold text-lg mb-2">Phone number</label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number here..."
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full p-4 rounded-xl border-2 border-[#bdb0a1] text-lg bg-transparent"
        />
      </div>
      <div className="mb-6">
        <label className="block font-semibold text-lg mb-2">Address</label>
        <input
          type="text"
          name="address"
          placeholder="Enter your address here..."
          value={form.address}
          onChange={handleChange}
          required
          className="w-full p-4 rounded-xl border-2 border-[#bdb0a1] text-lg bg-transparent"
        />
      </div>
      <div className="mb-8">
        <label className="block font-semibold text-lg mb-2">Service</label>
        <input
          type="text"
          name="service"
          placeholder="Enter the service you are looking for here..."
          value={form.service}
          onChange={handleChange}
          required
          className="w-full p-4 rounded-xl border-2 border-[#bdb0a1] text-lg bg-transparent"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#d4af37] text-[#181818] rounded-xl text-xl font-semibold py-4"
      >
        Submit
      </button>
    </form>
  );
};

export default BookingForm;
