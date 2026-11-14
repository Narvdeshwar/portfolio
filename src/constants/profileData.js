import { Resume } from "../assets";
import { calculateTotalExperience } from "../utils/dateUtils";

const expInfo = calculateTotalExperience("2022-12-01");

export const PROFILE_DATA = {
  brand: "NARVDESHWAR",
  role: "SOFTWARE ENGINEER",
  specialization: "BACKEND & DISTRIBUTED SYSTEMS",
  headline: "BUILDING FAST, RELIABLE SYSTEMS & SCALABLE WEB APPS",
  summary:
    "Software engineer with over 3.9 years of experience. I build fast backend systems, clean APIs, and databases that handle high traffic without breaking.",
  status: {
    state: "ONLINE",
    label: "AVAILABLE FOR WORK",
    period: "2026",
    timezone: "Asia/Kolkata",
    tzAbbr: "IST",
    location: "INDIA",
  },
  keyFacts: [
    { label: "PRIMARY FOCUS", value: "Backend & Systems" },
    { label: "CORE TOOLS", value: "Go • PostgreSQL • Cloud • React" },
    { label: "TOTAL EXPERIENCE", value: expInfo.label },
  ],
  links: {
    email: "narvdeshwaar@gmail.com",
    github: "https://github.com/Narvdeshwar",
    linkedin: "https://www.linkedin.com/in/narvdeshwar/",
    resume: Resume,
  },
};

export default PROFILE_DATA;
