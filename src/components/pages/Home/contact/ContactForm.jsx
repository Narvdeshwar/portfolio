import { useState } from "react";
import Button from "../../../atoms/Button";
import PROFILE_DATA from "../../../../constants/profileData";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:${PROFILE_DATA.links.email}?subject=Message from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailto;
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 md:p-8 border border-[#262626] bg-[#000000]">
      <div className="flex flex-col gap-1">
        <label htmlFor="contact-name" className="font-plex-caption text-[11px] text-[#A6A6A6]">
          YOUR NAME
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Alex Sharma"
          className="w-full h-[41px] px-3 bg-[#0D0D0D] border border-[#262626] rounded-[3px] text-sm text-[#FFFFFF] placeholder-[#525252] focus:outline-none focus:border-[#4BE1C4] transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="contact-email" className="font-plex-caption text-[11px] text-[#A6A6A6]">
          YOUR EMAIL
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="alex@company.com"
          className="w-full h-[41px] px-3 bg-[#0D0D0D] border border-[#262626] rounded-[3px] text-sm text-[#FFFFFF] placeholder-[#525252] focus:outline-none focus:border-[#4BE1C4] transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="contact-message" className="font-plex-caption text-[11px] text-[#A6A6A6]">
          YOUR MESSAGE
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={3}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project or role..."
          className="w-full p-3 bg-[#0D0D0D] border border-[#262626] rounded-[3px] text-sm text-[#FFFFFF] placeholder-[#525252] focus:outline-none focus:border-[#4BE1C4] transition-colors resize-none"
        />
      </div>

      <Button type="submit" variant="primary" size="default" className="mt-2 w-full">
        SEND MESSAGE
      </Button>
    </form>
  );
}
