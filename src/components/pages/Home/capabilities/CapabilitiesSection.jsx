import Container from "../../../atoms/Container";
import CapabilitiesHeader from "./CapabilitiesHeader";
import CapabilityCard from "./CapabilityCard";
import CAPABILITIES_DATA from "../../../../constants/capabilitiesData";

export default function CapabilitiesSection() {
  return (
    <section
      id="stack"
      aria-label="Technical Capabilities"
      className="relative w-full py-20 bg-[#000000] border-b border-[#262626]"
    >
      <Container className="flex flex-col gap-10">
        <CapabilitiesHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CAPABILITIES_DATA.map((capability) => (
            <CapabilityCard key={capability.id} capability={capability} />
          ))}
        </div>
      </Container>
    </section>
  );
}
