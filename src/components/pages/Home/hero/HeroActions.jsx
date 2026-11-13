import Button from "../../../atoms/Button";
import PROFILE_DATA from "../../../../constants/profileData";

export default function HeroActions() {
  return (
    <div className="flex flex-wrap items-center gap-4 pt-2">
      <Button href="#work" variant="primary" size="default">
        INSPECT SYSTEMS
      </Button>
      <Button
        href={`mailto:${PROFILE_DATA.links.email}`}
        variant="secondary"
        size="default"
      >
        INITIATE CONTACT
      </Button>
    </div>
  );
}
