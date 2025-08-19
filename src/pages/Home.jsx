import smileImg from "../assets/happy-european-woman-broad-smile-feels-excitement.jpg";

export default function Home() {
  return (
    <section
      className="relative py-12 px-6 bg-cover bg-center h-[90vh] flex items-center justify-center"
      style={{
        backgroundImage: `url(${smileImg})`,
      }}
    >
       {/* Overlay */}
       <div className="absolute inset-0 bg-blue-900 bg-opacity-40"></div>

       {/* Content */}
       <div className="z-10 text-white px-6 mt-80">
         <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
           Brighten Your Smile with Expert Dental Care
         </h2>
         <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto drop-shadow-md">
           Professional and friendly dental services in Chișinău. Healthy teeth,
           happy smiles!
         </p>
         <a
           href="/dental-clinic/#/contact"
           className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100"
         >
           Book an Appointment
         </a>
       </div>
    </section>
  );
}
