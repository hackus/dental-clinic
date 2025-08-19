import dentalTeamImg from "../assets/about/team.jpg";

export default function AboutUs() {
  return (
    <div className="bg-gray-50 py-12 px-6 h-full">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        About Us
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={dentalTeamImg}
            alt="Our Dental Team"
            className="rounded-2xl shadow-lg object-cover w-full max-w-md"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Welcome to SmileCare Dental Clinic
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            At <span className="font-semibold">SmileCare Dental Clinic</span>,
            we are committed to providing high-quality dental care in a warm
            and friendly environment. Our team of experienced dentists and
            hygienists use the latest technology to ensure your comfort and
            health.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            We believe that a beautiful smile is the key to confidence and
            overall well-being. From routine check-ups to cosmetic treatments,
            we tailor our services to meet the unique needs of every patient.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our mission is simple: to keep your smile healthy and bright for
            years to come.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-5xl mx-auto mt-16">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-8">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Care</h3>
            <p className="text-gray-600">
              We treat every patient with compassion and respect, like family.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quality</h3>
            <p className="text-gray-600">
              Using modern technology and best practices, we deliver excellent care.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Trust</h3>
            <p className="text-gray-600">
              We build long-lasting relationships through honesty and professionalism.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
