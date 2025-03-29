import { FaStar, FaYoutube, FaMosque } from "react-icons/fa";
import { MdHotel } from "react-icons/md";

const StatsSection = () => {
  const stats = [
    {
      title: "Rate 4.8 on Trustpilot",
      description: "Based on hundreds of customer reviews.",
      icon: <FaStar className="text-green-500 text-3xl" />,
    },
    {
      title: "5000+ Pilgrims Served",
      description: "Helping Muslims fulfill their Hajj & Umrah journey.",
      icon: <FaMosque className="text-yellow-500 text-3xl" />,
    },
    {
      title: "10K+ YouTube Viewers Monthly",
      description: "Guiding travelers with expert content.",
      icon: <FaYoutube className="text-red-500 text-3xl" />,
    },
    {
      title: "70+ Exclusive Hotel Partnerships",
      description: "From budget to 5-star stays near Haram.",
      icon: <MdHotel className="text-blue-500 text-3xl" />,
    },
  ];

  return (
    <section className="py-20 px-cont max-w-cont">
      <h1 className="text-2xl mb-16 sm:text-4xl font-medium text-center text-brand-secondary">Al Habib Travel in <span className="py-2 bg-gradient-to-r from-transparent via-brand-primary-100 to-transparent">Numbers</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white text-gray-800 p-6 rounded-lg shadow-lg border-t-4 border-orange-500 flex flex-col items-center text-center"
          >
            {stat.icon}
            <h3 className="text-lg font-semibold mt-4">{stat.title}</h3>
            <p className="text-sm mt-2">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
