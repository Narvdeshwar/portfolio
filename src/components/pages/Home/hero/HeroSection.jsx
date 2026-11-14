import Container from "../../../atoms/Container";
import HeroStatus from "./HeroStatus";
import HeroHeadline from "./HeroHeadline";
import HeroSummary from "./HeroSummary";
import HeroActions from "./HeroActions";
import HeroTelemetry from "./HeroTelemetry";

export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Overview"
      className="relative w-full pt-28 pb-16 bg-[#000000] border-b border-[#262626]"
    >
      <Container className="flex flex-col gap-10">
        <HeroStatus />
        <HeroHeadline />
        <HeroSummary />
        <HeroActions />
        <HeroTelemetry />
      </Container>
    </section>
  );
}
