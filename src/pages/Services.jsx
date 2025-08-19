import smileImg from "../assets/happy-european-woman-broad-smile-feels-excitement.jpg";
import checkupsImg from "../assets/services/checkups.jpg";
import whiteningImg from "../assets/services/whitening.jpg";
import fillingsImg from "../assets/services/fillings.jpg";
import implantsImg from "../assets/services/implants.jpg";
import orthodonticsImg from "../assets/services/orthodontics.jpg";
import diagnosticsImg from "../assets/services/diagnostics.jpg";

export default function Services() {
  const activities = [
    { title: "Dental Checkups & Cleanings", img: checkupsImg },
    { title: "Teeth Whitening", img: whiteningImg },
    { title: "Fillings & Restorations", img: fillingsImg },
    { title: "Implants & Crowns", img: implantsImg },
    { title: "Orthodontics", img: orthodonticsImg },
    { title: "Diagnostics", img: diagnosticsImg },
  ];

  return (
    <div className="bg-gray-50 py-12 px-6 flex justify-center">
      <div className="w-full max-w-5xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Activities
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition duration-300"
            >
              <img
                src={activity.img}
                alt={activity.title}
                className="w-full object-cover"

                style={{ height: 'calc(23vh - 4rem)' }}
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
    </div>
  );
}
