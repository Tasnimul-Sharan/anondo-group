import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import SectionBadge from "./SectionBadge";

export default function Contact() {
  return (
    <section className="relative w-full py-32 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* LEFT SIDE – Corporate Info */}
          <div className="max-w-xl">
            {/* <span className="inline-block px-4 py-1.5 text-xs tracking-widest uppercase bg-primary/10 text-primary rounded-full font-semibold">
              Contact Anondo Group
            </span> */}
            <SectionBadge text="Contact Anondo Group" />
            <h2 className="mt-6 text-5xl font-bold text-gray-900 leading-tight">
              Let’s Build Something <br />
              <span className="text-primary">Meaningful Together</span>
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed text-lg">
              Whether you are exploring business partnerships, investment
              opportunities, or project collaborations, our team is ready to
              assist you. Connect with Anondo Group and let’s create lasting
              impact.
            </p>

            <div className="mt-14 space-y-6">
              {/* Address */}
              <div className="flex items-start gap-6 p-6 bg-white rounded-3xl border border-gray-100 hover:shadow-xl transition duration-500">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-lg">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">
                    Corporate Office
                  </p>
                  <p className="text-gray-600 text-sm mt-1">
                    Printers Building, 11–14th floor, 5, Rajuk Avenue,
                    Motijheel,
                    <br />
                    1000 Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-6 p-6 bg-white rounded-3xl border border-gray-100 hover:shadow-xl transition duration-500">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-lg">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">Phone</p>
                  <p className="text-gray-600 text-sm mt-1">+880 1313-775333, +880 1313-775334, +880 1313-775335</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-6 p-6 bg-white rounded-3xl border border-gray-100 hover:shadow-xl transition duration-500">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-lg">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">Email</p>
                  <p className="text-gray-600 text-sm mt-1">
                    info@anondogroup.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE – Premium Form */}
          <div className="relative bg-white/70 backdrop-blur-xl border border-white/40 rounded-[32px] p-10 ">
            {/* Decorative Border Glow */}
            <div className="absolute inset-0 rounded-[32px] border border-primary/10 pointer-events-none"></div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-10">
              Send a Confidential Inquiry
            </h3>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-2xl border border-gray-200 px-5 py-4
                             focus:outline-none focus:ring-2 focus:ring-primary/30
                             transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-2xl border border-gray-200 px-5 py-4
                             focus:outline-none focus:ring-2 focus:ring-primary/30
                             transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full rounded-2xl border border-gray-200 px-5 py-4
                             focus:outline-none focus:ring-2 focus:ring-primary/30
                             transition"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white font-semibold
                           py-4 rounded-2xl hover:shadow-xl
                           hover:scale-[1.02] transition duration-300"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
