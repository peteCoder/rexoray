import {
  Briefcase,
  Building,
  Factory,
  Leaf,
  Truck,
  Calendar,
} from "lucide-react";
import Heading from "./Heading";

const services = [
  {
    icon: <Building className="w-10 h-10 text-primary" />,
    title: "General Contracting",
    description:
      "Delivering top-quality construction and infrastructure solutions with precision and professionalism.",
  },
  {
    icon: <Factory className="w-10 h-10 text-primary" />,
    title: "Manufacturing",
    description:
      "Innovative manufacturing processes to meet diverse industrial and commercial needs.",
  },
  {
    icon: <Leaf className="w-10 h-10 text-primary" />,
    title: "Agriculture",
    description:
      "Sustainable agricultural projects designed to boost food production and economic growth.",
  },
  {
    icon: <Truck className="w-10 h-10 text-primary" />,
    title: "Transportation",
    description:
      "Efficient logistics and transportation services ensuring timely and safe delivery.",
  },
  {
    icon: <Briefcase className="w-10 h-10 text-primary" />,
    title: "Petroleum Marketing",
    description:
      "Reliable petroleum supply and distribution services tailored to your energy needs.",
  },
  {
    icon: <Calendar className="w-10 h-10 text-primary" />,
    title: "Event Management",
    description:
      "Creating unforgettable events with seamless planning and flawless execution.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        {/* Section Heading */}
        <Heading
          title="Our Services"
          text="At REXORAY ACE LTD, we provide innovative and reliable solutions
          across multiple sectors, delivering exceptional value to our clients."
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary cursor-pointer"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
