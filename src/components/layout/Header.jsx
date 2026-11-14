import { useState, useEffect } from "react";
import Container from "../atoms/Container";
import Button from "../atoms/Button";
import PROFILE_DATA from "../../constants/profileData";
import NAV_ITEMS from "../../constants/navdata";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 border-b ${
        scrolled
          ? "bg-[#000000]/95 backdrop-blur-md border-[#262626]"
          : "bg-[#000000] border-transparent"
      }`}
    >
      <Container className="h-[60px] flex items-center justify-between">
        {/* Brand */}
        <a
          href="#hero"
          className="font-inter text-base font-semibold tracking-[-0.3px] text-[#FFFFFF] hover:text-[#4BE1C4] transition-colors"
        >
          {PROFILE_DATA.brand}
          <span className="text-[#4BE1C4]">.</span>
        </a>

        {/* Navigation items */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-plex-label text-[13px] text-[#A6A6A6] hover:text-[#FFFFFF] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <Button
            href={PROFILE_DATA.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            variant="primary"
          >
            RESUME
          </Button>
        </div>
      </Container>
    </header>
  );
}
