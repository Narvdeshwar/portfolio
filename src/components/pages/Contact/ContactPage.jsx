import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import socialUrl from "../../../constants/socialurls";

const ContactPage = () => {
  return (
    <section className="pt-40 pb-20 px-6 min-h-screen flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full">

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-[10vw] md:text-[8vw] leading-[0.85] font-bold text-white tracking-tighter mb-8">
            CONTACT
          </h1>
          <p className="text-xl text-gray-400 font-light max-w-2xl">
            Interested in working together? Drop me a line.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">

          {/* Left: Form */}
          <div className="order-2 md:order-1">
            <form className="flex flex-col gap-8">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="NAME"
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white font-mono placeholder:text-gray-600 focus:outline-none focus:border-blue-500 transition-colors uppercase tracking-widest text-sm"
                />
              </div>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white font-mono placeholder:text-gray-600 focus:outline-none focus:border-blue-500 transition-colors uppercase tracking-widest text-sm"
                />
              </div>
              <div className="relative group">
                <textarea
                  rows="4"
                  placeholder="YOUR MESSAGE"
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white font-mono placeholder:text-gray-600 focus:outline-none focus:border-blue-500 transition-colors uppercase tracking-widest text-sm resize-none"
                />
              </div>

              <button className="self-start mt-8 px-10 py-4 bg-white text-black font-medium tracking-wide uppercase hover:bg-blue-500 hover:text-white transition-all flex items-center gap-2">
                Send Message <ArrowUpRight size={16} />
              </button>
            </form>
          </div>

          {/* Right: Info */}
          <div className="order-1 md:order-2 flex flex-col gap-12">

            <div>
              <span className="block text-sm font-mono text-gray-500 uppercase tracking-widest mb-4">
                Contact Details
              </span>
              <a href="mailto:narvdeshwaar@gmail.com" className="block text-2xl md:text-3xl font-display text-white hover:text-blue-500 transition-colors mb-2">
                narvdeshwaar@gmail.com
              </a>
            </div>

            <div>
              <span className="block text-sm font-mono text-gray-500 uppercase tracking-widest mb-4">
                Socials
              </span>
              <div className="flex flex-col gap-2">
                {[
                  { name: 'LinkedIn', url: socialUrl.linkedin },
                  { name: 'GitHub', url: socialUrl.github },
                  { name: 'Twitter', url: socialUrl.twitter }
                ].map((social, i) => (
                  <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group text-gray-400 hover:text-white transition-colors">
                    <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <span className="text-lg font-display">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <span className="block text-sm font-mono text-gray-500 uppercase tracking-widest mb-4">
                Location
              </span>
              <p className="text-lg text-gray-300">
                India <br /> Available Worldwide
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactPage;
