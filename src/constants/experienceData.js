export const EXPERIENCE_DATA = [
  {
    id: "jspark",
    index: "01",
    startDate: "2026-02-01",
    endDate: null,
    period: "FEB 2026 — PRESENT",
    role: "SOFTWARE ENGINEER",
    company: "JSPARK",
    status: "CURRENT ROLE",
    summary:
      "Building backend services, web applications, and fast APIs for client products and internal tools.",
    highlights: [
      "Building backend APIs and database models for JSPARK.AI and client projects.",
      "Speeding up website load times and connecting real-time updates using WebSockets.",
      "Setting up automated testing and cloud deployments so updates roll out smoothly.",
    ],
    stack: ["Go (Golang)", "Next.js", "TypeScript", "Docker", "Redis", "AWS"],
  },
  {
    id: "xenelsoft",
    index: "02",
    startDate: "2024-11-01",
    endDate: "2026-02-01",
    period: "NOV 2024 — FEB 2026",
    role: "SOFTWARE DEVELOPER",
    company: "XENELSOFT TECHNOLOGIES",
    status: "COMPLETED",
    summary:
      "Built government dashboards and flood prediction data systems using Go and modern databases.",
    highlights: [
      "Built OPSVision, an interactive map dashboard for NCRB to view national crime statistics.",
      "Developed OPSHydra to process weather sensors and calculate early flood warnings.",
      "Added Redis caching to database queries, making page loads 40% faster.",
    ],
    stack: ["Go (Golang)", "PostgreSQL", "PostGIS", "TimescaleDB", "Redis", "React"],
  },
  {
    id: "globallogic",
    index: "03",
    startDate: "2022-12-01",
    endDate: "2024-11-01",
    period: "DEC 2022 — NOV 2024",
    role: "SOFTWARE ENGINEER",
    company: "GLOBALLOGIC INC.",
    status: "COMPLETED",
    summary:
      "Built secure login systems and machine-learning document reading tools for enterprise clients.",
    highlights: [
      "Built a fast OTP verification service to keep user logins safe and quick.",
      "Created an OCR document reading tool with 98% accuracy on scanned documents.",
      "Wrote modular microservices and automated tests to ensure high software quality.",
    ],
    stack: ["Go", "Node.js", "Docker", "REST APIs", "Microservices", "CI/CD"],
  },
];

export default EXPERIENCE_DATA;
