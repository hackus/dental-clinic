export default function Services() {
  const services = [
    "Dental Checkups & Cleanings",
    "Teeth Whitening",
    "Fillings & Restorations",
    "Implants & Crowns",
    "Orthodontics",
  ];

  return (
    <section className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Services</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </section>
  );
}
