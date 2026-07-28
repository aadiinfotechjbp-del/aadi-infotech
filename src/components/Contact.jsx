import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    rackType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formState.name || !formState.phone || !formState.rackType || !formState.message) {
      alert('Please fill in all fields');
      setIsSubmitting(false);
      return;
    }

    // Create mailto link
    const subject = `Enquiry for ${formState.rackType} Rack`;
    const body = `Name: ${formState.name}\nPhone: ${formState.phone}\nRack Type: ${formState.rackType}\n\nMessage:\n${formState.message}`;
    const mailtoLink = `mailto:aadiinfotechjbp@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open email client
    window.location.href = mailtoLink;

    // Reset form and show success message
    setFormState({
      name: '',
      phone: '',
      rackType: '',
      message: ''
    });
    setIsSubmitting(false);
    setMessageSent(true);

    // Hide success message after 3 seconds
    setTimeout(() => {
      setMessageSent(false);
    }, 3000);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-primary-50 text-primary-600 rounded-lg">
                  <span className="text-xs font-medium">📍</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Address</h3>
                  <p className="text-sm text-gray-600">
                    213, Mohit Chamber, Chanchalabai College, 1514, Wright Town, Jabalpur - 482001 (M.P.)
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-primary-50 text-primary-600 rounded-lg">
                  <span className="text-xs font-medium">📞</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Phone</h3>
                  <p className="text-sm text-gray-600">
                    <a href="tel:0761-4046744" className="text-primary-600 hover:underline">0761-4046744</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-primary-50 text-primary-600 rounded-lg">
                  <span className="text-xs font-medium">📱</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Mobile</h3>
                  <p className="text-sm text-gray-600">
                    <a href="tel:+919425468444" className="text-primary-600 hover:underline">+91 94254 68444</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-primary-50 text-primary-600 rounded-lg">
                  <span className="text-xs font-medium">✉️</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <p className="text-sm text-gray-600">
                    <a href="mailto:aadiinfotechjbp@gmail.com" className="text-primary-600 hover:underline">aadiinfotechjbp@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
            <p className="text-gray-600 mb-6">
              Please fill out the form below and we'll get back to you as soon as possible.
            </p>
            {messageSent && (
              <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                Your message has been sent! Your email client should open shortly.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="rackType" className="block text-sm font-medium text-gray-700 mb-2">
                  Rack Type Needed
                </label>
                <select
                  id="rackType"
                  name="rackType"
                  value={formState.rackType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">Select Rack Type</option>
                  <option value="Wall Mount">Wall Mount</option>
                  <option value="Floor Mount">Floor Mount</option>
                  <option value="DVR Storage">DVR Storage</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                >
                </textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
