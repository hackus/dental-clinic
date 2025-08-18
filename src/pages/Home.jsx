export default function Home() {
  return (
    <section
      className="relative bg-cover bg-center h-[80vh] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1588776814546-3ebd4c50e7a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Brighten Your Smile with Expert Dental Care
        </h2>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Professional and friendly dental services in Chișinău. Healthy teeth,
          happy smiles!
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100"
        >
          Book an Appointment
        </a>
      </div>
    </section>
  );
}