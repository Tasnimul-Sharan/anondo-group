import { FaMapMarkerAlt } from "react-icons/fa";

export default function GoogleMapSection() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
      {/* Google Map */}
      <iframe
        title="Printers Building, Rajuk Avenue, Motijheel, Dhaka"
        src="https://www.google.com/maps?q=Printers%20Building,%205%20Rajuk%20Avenue,%20Motijheel,%20Dhaka&output=embed"
        className="w-full h-[500px] border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* Open in Google Maps Button */}
      <a
        href="https://www.google.com/maps/search/?api=1&query=Printers+Building,+5+Rajuk+Avenue,+Motijheel,+Dhaka"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-6 right-6 flex items-center gap-2 
                   bg-white text-gray-900 text-sm font-semibold
                   px-5 py-3 rounded-full shadow-lg 
                   hover:shadow-2xl hover:-translate-y-1
                   transition-all duration-300"
      >
        <FaMapMarkerAlt className="text-primary" />
        Open in Google Maps
      </a>
    </div>
  );
}
