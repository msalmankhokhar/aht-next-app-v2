'use client';

import { useState, FormEvent } from 'react';
import { LuCheck as Check, LuLoader as Loader2 } from 'react-icons/lu';

const UK_AIRPORTS = [
  'London Heathrow (LHR)',
  'London Gatwick (LGW)',
  'Manchester (MAN)',
  'Birmingham (BHX)',
  'Glasgow (GLA)',
  'Edinburgh (EDI)',
  'Bristol (BRS)',
  'Newcastle (NCL)',
  'Liverpool (LPL)',
  'Leeds Bradford (LBA)',
];

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  adults: number;
  children: number;
  infants: number;
  departureAirport: string;
  duration: number;
  travelMonth: string;
  localTransport: boolean;
};

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    adults: 1,
    children: 0,
    infants: 0,
    departureAirport: '',
    duration: 14,
    travelMonth: '',
    localTransport: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === 'number') {
      const numValue = parseInt(value, 10) || 0;
      setFormData((prev) => ({ ...prev, [name]: numValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Here you would typically send the data to your backend
    // For now, we'll just simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-lg p-6 shadow-xl h-full flex flex-col justify-center items-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <Check className="text-green-600" size={32} />
        </div>
        <h3 className="text-xl font-bold text-center mb-2">Quote Request Received</h3>
        <p className="text-gray-600 text-center mb-6">
          Thank you for your request. Our team will get back to you shortly with your personalized quotation.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="px-4 py-2 bg-brand-secondary text-white rounded-sm hover:bg-brand-secondary-700 transition-colors"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-xl">
      <h3 className="text-xl font-bold mb-4 text-brand-secondary">Get a Free Quote</h3>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="fullName" className="text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-brand-primary"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-brand-primary"
              placeholder="example@email.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-brand-primary"
              placeholder="+44 XXXX XXX XXX"
            />
          </div>
          <div>
            <label htmlFor="departureAirport" className="block text-sm font-medium text-gray-700 mb-1">
              Departure Airport
            </label>
            <select
              id="departureAirport"
              name="departureAirport"
              required
              value={formData.departureAirport}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-brand-primary bg-white"
            >
              <option value="" disabled>Select departure airport</option>
              {UK_AIRPORTS.map((airport) => (
                <option key={airport} value={airport}>
                  {airport}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Passengers
          </label>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label htmlFor="adults" className="block text-xs text-gray-500 mb-1">
                Adults
              </label>
              <input
                id="adults"
                name="adults"
                type="number"
                min="1"
                required
                value={formData.adults}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-brand-primary"
              />
            </div>
            <div>
              <label htmlFor="children" className="block text-xs text-gray-500 mb-1">
                Children
              </label>
              <input
                id="children"
                name="children"
                type="number"
                min="0"
                value={formData.children}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-brand-primary"
              />
            </div>
            <div>
              <label htmlFor="infants" className="block text-xs text-gray-500 mb-1">
                Infants
              </label>
              <input
                id="infants"
                name="infants"
                type="number"
                min="0"
                value={formData.infants}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-brand-primary"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
              Duration (Days)
            </label>
            <input
              id="duration"
              name="duration"
              type="number"
              min="1"
              required
              value={formData.duration}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-brand-primary"
            />
          </div>
          <div>
            <label htmlFor="travelMonth" className="block text-sm font-medium text-gray-700 mb-1">
              Month of Travel
            </label>
            <select
              id="travelMonth"
              name="travelMonth"
              required
              value={formData.travelMonth}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-brand-primary bg-white"
            >
              <option value="" disabled>Select month</option>
              {MONTHS.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center">
          <input
            id="localTransport"
            name="localTransport"
            type="checkbox"
            checked={formData.localTransport}
            onChange={handleChange}
            className="h-4 w-4 text-brand-primary focus:ring-brand-primary border-gray-300 rounded"
          />
          <label htmlFor="localTransport" className="ml-2 block text-sm text-gray-700">
            Include local transportation
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-6 bg-brand-secondary text-white font-bold rounded-sm hover:bg-brand-secondary-600 transition-colors flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={20} className="animate-spin mr-2" />
              Processing...
            </>
          ) : (
            `Get Quote - It's Free`
          )}
        </button>
      </form>
    </div>
  );
}
