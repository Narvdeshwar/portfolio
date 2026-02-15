
import { jspark, jsparkprime } from "../assets";

export const projectsData = [
  // --- Selected Work (Live Traffic & Clients) ---
  {
    slug: "jspark-ai",
    category: "selected",
    title: "JSPARK AI",
    description: "AI-driven landing page & company portfolio hub.",
    longDescription: "A comprehensive digital presence for an AI consultancy firm. Built with a focus on futuristic aesthetics and high-performance rendering.",
    image: jspark,
    technologies: ["React", "TailwindCSS", "Framer Motion", "Vite"],
    links: { live: "https://jspark.ai", github: "" },
    stats: { traffic: "12k/mo", status: "Live" }
  },
  {
    slug: "jspark-prime",
    category: "selected",
    title: "JSPARK Prime",
    description: "Premium client portfolio showcase platform.",
    longDescription: "A secondary platform for JSPARK, focusing on showcasing high-ticket client success stories with a minimal, luxury design language.",
    image: jsparkprime,
    technologies: ["Next.js", "React", "TailwindCSS"],
    links: { live: "https://jsparkprime.com/", github: "" },
    stats: { traffic: "5k/mo", status: "Live" }
  },
  {
    slug: "legal-check",
    category: "selected",
    title: "Legal Check Calc",
    description: "Complex legal calculation tools for financial compliance.",
    longDescription: "A suite of calculators for legal professionals to determine fees, interest, and compliance metrics. Optimized for accuracy and ease of use.",
    image: jspark, // Placeholder
    technologies: ["React", "TypeScript", "Vercel", "Shadcn UI"],
    links: { live: "https://legal-check-calculators.vercel.app/", github: "" },
    stats: { traffic: "2.5k/mo", status: "Beta" }
  },

  // --- Engineering Labs (Backend & Systems) ---
  {
    slug: "distributed-task-queue",
    category: "engineering",
    title: "Distributed Task Queue",
    description: "High-performance async task processing with RabbitMQ.",
    longDescription: "A robust system designed to handle thousands of concurrent tasks. It features a custom retry mechanism, dead-letter queues, and real-time monitoring via WebSockets.",
    image: jspark, // Placeholder
    technologies: ["Golang", "RabbitMQ", "Redis", "Docker", "MongoDB"],
    links: { live: "#", github: "https://github.com/Narvdeshwar/distributed-task-queue" },
    stats: { stars: "45", status: "Active" }
  },
  {
    slug: "saas-iot-platform",
    category: "engineering",
    title: "SaaS IoT Platform",
    description: "Real-time sensor ingestion pipeline handling 10k+ events/sec.",
    longDescription: "An industrial IoT solution capable of ingesting high-frequency sensor data. Uses TimescaleDB for efficient time-series storage and gRPC for internal service communication.",
    image: jsparkprime, // Placeholder
    technologies: ["Golang", "TimescaleDB", "gRPC", "Kafka"],
    links: { live: "#", github: "https://github.com/Narvdeshwar/iot-platform-core" },
    stats: { stars: "32", status: "Building" }
  },
  {
    slug: "ncrb-bi-dashboard",
    category: "engineering",
    title: "NCRB BI Dashboard",
    description: "Crime analytics intelligence dashboard for government agencies.",
    longDescription: "A data-heavy BI tool used for visualizing crime statistics across regions. Features include heatmaps, trend analysis charts, and automated PDF reporting.",
    image: jsparkprime, // Placeholder
    technologies: ["React", "D3.js", "Redux", "PostGIS"],
    links: { live: "#", github: "https://github.com/Narvdeshwar/ncrb-analytics" },
    stats: { stars: "28", status: "Stable" }
  }
];

export default projectsData;
