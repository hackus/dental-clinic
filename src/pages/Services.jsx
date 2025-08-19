import smileImg from "../assets/happy-european-woman-broad-smile-feels-excitement.jpg";
import checkupsImg from "../assets/services/checkups.jpg";
import whiteningImg from "../assets/services/whitening.jpg";
import fillingsImg from "../assets/services/fillings.jpg";
import implantsImg from "../assets/services/implants.jpg";
import orthodonticsImg from "../assets/services/orthodontics.jpg";
import diagnosticsImg from "../assets/services/diagnostics.jpg";

export default function Services() {
//   const services = [
//     "Dental Checkups & Cleanings",
//     "Teeth Whitening",
//     "Fillings & Restorations",
//     "Implants & Crowns",
//     "Orthodontics",
//   ];
//
//   return (
//     <section
//     className="relative bg-cover bg-center h-[80vh] flex"
//       style={{
//         backgroundImage: `url(${smileImg})`,
//       }}
//     >
//     <div className="flex items-center h-64">
//       <h2 className="text-2xl font-bold text-gray-600 ml-4 mb-0 mr-6">
//         Our Services
//       </h2>
//       <ul className="list-disc list-inside space-y-2 text-gray-700">
//         {services.map((service, index) => (
//           <li key={index}>{service}</li>
//         ))}
//       </ul>
//     </div>
//     </section>
//   );

const activities = [
    { title: "Dental Checkups & Cleanings", img: checkupsImg },
    { title: "Teeth Whitening", img: whiteningImg },
    { title: "Fillings & Restorations", img: fillingsImg },
    { title: "Implants & Crowns", img: implantsImg },
    { title: "Orthodontics", img: orthodonticsImg },
    { title: "Diagnostics", img: diagnosticsImg },
  ];


  return (
    <div className="bg-gray-50 py-5 px-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Our Activities
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition duration-300"
          >
            <img
              src={activity.img}
              alt={activity.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-700">
                {activity.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
