import { Resume } from "../assets";
import { calculateTotalExperience } from "../utils/dateUtils";

const expInfo = calculateTotalExperience("2022-12-01");

export const PROFILE_DATA = {
  brand: "NARVDESHWAR",
  role: "SOFTWARE ENGINEER",
  discipline: "DISTRIBUTED SYSTEMS & BACKEND ARCHITECTURE",
  directive: "BUILDING MISSION-CRITICAL SYSTEMS & RESILIENT DATA PIPELINES",
  summary:
    "Software engineer with over 3.9 years specializing in Golang, high-throughput microservices, and distributed cloud architectures. Focused on precision, fault tolerance, and low latency.",
  status: {
    state: "ONLINE",
    label: "AVAILABLE FOR WORK",
    period: "2026",
    timezone: "Asia/Kolkata",
    tzAbbr: "IST",
    location: "INDIA",
  },
  telemetry: [
    { label: "CORE FOCUS", value: "Distributed Backends" },
    { label: "PRIMARY STACK", value: "Go • Cloud Native • SQL/NoSQL" },
    { label: "PROD EXPERIENCE", value: expInfo.label },
  ],
  links: {
    email: "narvdeshwaar@gmail.com",
    github: "https://github.com/Narvdeshwar",
    linkedin: "https://www.linkedin.com/in/narvdeshwar/",
    resume: Resume,
  },
};

export default PROFILE_DATA;
