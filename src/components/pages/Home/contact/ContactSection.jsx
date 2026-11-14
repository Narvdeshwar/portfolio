import Container from "../../../atoms/Container";
import ContactHeader from "./ContactHeader";
import ContactChannels from "./ContactChannels";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-label="Direct Transmission"
      className="relative w-full py-20 bg-[#000000]"
    >
      <Container className="flex flex-col gap-10">
        <ContactHeader />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ContactChannels />
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
