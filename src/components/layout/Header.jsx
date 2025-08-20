import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons for mobile menu
import navdata from "../../constants/navdata";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="h-[70px] flex justify-between items-center w-[90%] mx-auto relative sticky top-0">
      {/* Logo */}
      <div className="flex items-baseline">
        <p className="text-2xl italic font-semibold border-[#cb42c3] border-b-4 rounded-xl shadow-2xl">
          &nbsp;Narvdeshwar&nbsp;
        </p>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-6 items-center">
        {navdata.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="text-white hover:text-[#C778DD] transition-all italic"
          >
            <span className="text-[#cb42c3] font-bold">#</span>
            {item.title}
          </Link>
        ))}
        <select className="bg-[#cb42c3] text-white px-2 py-1 rounded outline-none cursor-pointer font-bold">
          <option value="english">EN</option>
          <option value="hindi">HI</option>
        </select>
      </nav>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-[70px] right-0 bg-[#1a1a1a] w-48 rounded-lg shadow-lg p-4 flex flex-col gap-4 md:hidden z-50">
          {navdata.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-[#C778DD] transition-all italic"
            >
              <span className="text-[#cb42c3] font-bold">#</span>
              {item.title}
            </Link>
          ))}
          <select className="bg-[#cb42c3] text-white px-2 py-1 rounded outline-none cursor-pointer font-bold">
            <option value="english">EN</option>
            <option value="hindi">HI</option>
          </select>
        </div>
      )}
    </header>
  );
}

export default Header;
