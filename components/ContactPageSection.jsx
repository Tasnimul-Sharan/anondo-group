import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactPageSection() {
  return (
    <section className="relative w-full py-28 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left – Contact Info */}
          <div className="max-w-xl">
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
              Let’s <span className="text-primary">Connect</span>
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed">
              Have a project in mind, a business inquiry, or just want to say
              hello? We’d love to hear from you.
            </p>

            <div className="mt-12 space-y-6">
              {/* Address */}
              <div className="flex gap-5 p-5 rounded-2xl bg-white border border-primary/20 transition-all transform duration-500">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Office Address</p>
                  <p className="text-gray-600 text-sm">
                    327, Purbo Rampura Abdullah Bag
                    <br />
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-5 p-5 rounded-2xl bg-white border border-primary/20 transition-all transform duration-500">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-gray-600 text-sm">+880 1765 733715</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-5 p-5 rounded-2xl bg-white border border-primary/20 transition-all transform duration-500">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600 text-sm">redithgroup@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right – Contact Form */}
          <div className="bg-white/80 backdrop-blur border border-primary/20 rounded-3xl p-8 lg:p-10">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Send Us a Message
            </h3>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3
                             focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3
                             focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full rounded-xl border border-gray-300 px-4 py-3
                             focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white font-semibold
                           py-3 rounded-xl hover:bg-primary-dark transition-all transform duration-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
