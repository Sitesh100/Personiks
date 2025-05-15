import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface BookingFormProps {
  onSubmit: (data: {
    name: string;
    phone: string;
    address: string;
    mainService: string;
    subService: string;
  }) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    mainService: '',
    subService: '',
  });

  const [subServices, setSubServices] = useState<string[]>([]);

  // Service categories and their sub-services
  const serviceOptions = {
    Face: [
      'Double Chin Removal',
      'Buccal Fat Removal',
      'Dimple Creation',
      'Chin Augmentation',
      'Eyelid / Under Eye Bags Correction',
      'Nose Shaping (Rhinoplasty)',
      'Ear Shaping & Ear Lobe Repair',
      'Lip Correction',
      'Face Fat Grafting',
    ],
    Body: [
      'Liposuction at Personiks',
      'Axillary Breast Removal',
      'Gynecomastia / Man Boobs / Chest Fat Removal',
      'Arm Liposuction',
      'Tummy Liposuction & Tuck',
      'Mommy Makeover',
      'Thigh or Calf Liposuction',
      'HD Liposuction',
      'Butt & Hips Liposuction or Butt Lift',
      'Vaginoplasty & Labiaplasty',
    ],
    'Instant Procedures': [
      'Lipoma Removal',
      'Mole Removal',
      'Corn Removal',
      'Warts Removal',
      'Acne Scar Treatment',
      'Scar removal for past injury',
      'Genital & Anal Warts',
      'Ear Lobe Repair',
    ],
    Skin: [
      'Face Fat Grafting',
      'Unwanted Hair',
      'Facial Rejuvination',
      'Acne Scars Removal',
      'Laser Skin Pigmentation',
      'Laser Skin Toning',
      'Contour Thread Lift',
      'Chemical Peel',
      'Derma Rollor in Hyderabad',
    ],
    Hair: ['Hair Transplant', 'Hair Loss Treatment'],
    'Reconstructive Surgeries': ['Burns', 'Pilonidal Sinus Treatment'],
    Obesity: ['Surgerical', 'Non Surgerical'],
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleMainServiceChange = (value: string) => {
    setForm({
      ...form,
      mainService: value,
      subService: '', // Reset sub-service when main service changes
    });

    // Update sub-services based on selected main service
    setSubServices(serviceOptions[value as keyof typeof serviceOptions] || []);
  };

  const handleSubServiceChange = (value: string) => {
    setForm({
      ...form,
      subService: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="font-outfit">
      <div className="mb-4">
        <label className="block font-semibold text-lg mb-2">Full name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your first name here..."
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-2 rounded-xl border-2 border-[#bdb0a1] text-lg bg-transparent"
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold text-lg mb-2">Phone number</label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number here..."
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full p-2 rounded-xl border-2 border-[#bdb0a1] text-lg bg-transparent"
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold text-lg mb-2">Address</label>
        <input
          type="text"
          name="address"
          placeholder="Enter your address here..."
          value={form.address}
          onChange={handleChange}
          required
          className="w-full p-2 rounded-xl border-2 border-[#bdb0a1] text-lg bg-transparent"
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold text-lg mb-2">Service</label>
        <div className="flex gap-4">
          {/* Main Service dropdown */}
          <div className="flex-1">
            <Select
              value={form.mainService}
              onValueChange={handleMainServiceChange}
            >
              <SelectTrigger className="w-full p-5 rounded-xl border-2 border-[#bdb0a1] text-lg bg-transparent">
                <SelectValue placeholder="Select service category" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(serviceOptions).map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Sub Service dropdown */}
          <div className="flex-1">
            <Select
              value={form.subService}
              onValueChange={handleSubServiceChange}
              disabled={!form.mainService}
            >
              <SelectTrigger className="w-full p-5 rounded-xl border-2 border-[#bdb0a1] text-lg bg-transparent">
                <SelectValue
                  placeholder={
                    form.mainService
                      ? 'Select specific service'
                      : 'Select category first'
                  }
                />
              </SelectTrigger>
              <SelectContent>
                {subServices.map((subService) => (
                  <SelectItem key={subService} value={subService}>
                    {subService}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-[#d4af37] text-[#181818] rounded-xl text-xl font-semibold py-3 hover:scale-105 transition-all duration-200"
      >
        Submit
      </button>
    </form>
  );
};

export default BookingForm;
