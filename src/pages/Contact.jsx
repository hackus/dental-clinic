export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto text-center">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Contact Us</h2>
      <p className="text-gray-700 mb-4">
        📍 Strada Clinicii 10, Chișinău, Moldova
      </p>
      <p className="text-gray-700 mb-4">
        📞 Phone: +373 600 000 000
      </p>
      <p className="text-gray-700 mb-4">
        📧 Email: contact@dentalclinic.md
      </p>

      <iframe
        className="w-full h-64 mt-4 rounded-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!..."
        loading="lazy"
        allowFullScreen
      ></iframe>
    </section>
  );
}
