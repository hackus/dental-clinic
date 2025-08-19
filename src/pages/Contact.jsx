import { useState } from "react";

export default function ContactUs() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();

      const subject = encodeURIComponent(`Contact Form Message from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage:\n${message}`
      );

      window.location.href = `mailto:contact@smilecare.md?subject=${subject}&body=${body}`;
    };

  return (
    <div className="bg-gray-50 py-12 px-6 h-full">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Contact Us
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Get in Touch
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-600 mb-2">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Phone</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+373 600 00000"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Message</label>
              <textarea
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info + Map */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Clinic Information
            </h2>
            <p className="text-gray-600 mb-2">
              📍 <span className="font-medium">Address:</span>
              Strada Stefan cel Mare 123, Chișinău, Moldova
            </p>
            <p className="text-gray-600 mb-2">
              ☎️ <span className="font-medium">Phone:</span> +373 600 00000
            </p>
            <p className="text-gray-600">
              ✉️ <span className="font-medium">Email:</span> contact@smilecare.md
            </p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow-lg h-64">
            Address
            <div className="w-full h-full flex items-center justify-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7665.9753726817435!2d28.8688594150023!3d46.97942966544945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c979463acc2c47%3A0xf129f021d456d9c5!2sZimbru%20Stadium!5e1!3m2!1sen!2s!4v1755629451852!5m2!1sen!2s"
                  width="100%" heith="100%">
              </iframe>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
