import { ArrowUpRight } from "lucide-react";

function ContactComp() {
    return (
        <section className="py-32 px-6 border-t border-white/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

                <span className="text-sm font-mono text-blue-500 uppercase tracking-widest mb-6 animate-pulse">
                    ● Open for Work
                </span>

                <h2 className="text-[12vw] leading-[0.8] font-bold text-white tracking-tighter mb-10 selection:bg-blue-500 selection:text-white">
                    LET'S TALK
                </h2>

                <p className="max-w-2xl text-xl md:text-2xl text-gray-400 font-light mb-12 text-balance">
                    Have a project in mind or just want to discuss the latest in tech?
                    I’m always open to new opportunities and collaborations.
                </p>

                <a
                    href="mailto:narvdeshwaar@gmail.com"
                    className="group relative inline-flex items-center gap-4 px-10 py-5 bg-white text-black font-medium text-lg rounded-full overflow-hidden transition-all hover:bg-gray-200"
                >
                    <span className="relative z-10">Say Hello</span>
                    <ArrowUpRight className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>

                <div className="flex gap-8 mt-20">
                    {['LinkedIn', 'GitHub', 'Twitter', 'Instagram'].map((social, idx) => (
                        <a key={idx} href="#" className="text-sm font-mono text-gray-500 hover:text-white uppercase tracking-widest transition-colors">
                            {social}
                        </a>
                    ))}
                </div>

            </div>

            {/* Subtle decorative background text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.02]">
                <span className="text-[20vw] font-bold">CONTACT</span>
            </div>
        </section>
    );
}

export default ContactComp;
