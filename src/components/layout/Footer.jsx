import Container from "../atoms/Container";
import PROFILE_DATA from "../../constants/profileData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#000000] border-t border-[#262626] py-12">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <span className="font-plex-caption text-[#FFFFFF]">
            {PROFILE_DATA.brand}
          </span>
          <span className="text-xs text-[#A6A6A6]">
            Architected with precision. Dark intelligence system standard.
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={PROFILE_DATA.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-plex-caption text-[#A6A6A6] hover:text-[#4BE1C4] transition-colors"
          >
            GITHUB
          </a>
          <a
            href={PROFILE_DATA.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-plex-caption text-[#A6A6A6] hover:text-[#4BE1C4] transition-colors"
          >
            LINKEDIN
          </a>
          <a
            href={`mailto:${PROFILE_DATA.links.email}`}
            className="font-plex-caption text-[#A6A6A6] hover:text-[#4BE1C4] transition-colors"
          >
            EMAIL
          </a>
        </div>

        <span className="font-plex-caption text-[#A6A6A6]">
          &copy; {currentYear}
        </span>
      </Container>
    </footer>
  );
}
