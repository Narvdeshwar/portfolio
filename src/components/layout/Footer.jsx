import socialUrl from "../../constants/socialurls";

function Footer() {
  return (
    <footer className="py-8  border-white/10 bg-[#121212] text-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

        <div className="text-gray-600 text-xs font-mono uppercase tracking-wider">
          Designed & Built by Narvdeshwar
        </div>

        <div className="text-gray-600 text-xs font-mono">
          &copy; 2026
        </div>

      </div>
    </footer>
  );
}

export default Footer;
