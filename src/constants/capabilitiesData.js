export const CAPABILITIES_DATA = [
  {
    id: "backend-logic",
    index: "01",
    pillar: "BACKEND & LOGIC",
    directive: "SERVER ARCHITECTURE",
    summary:
      "Writing clean server-side code and APIs that run fast, handle errors gracefully, and support heavy user traffic.",
    skills: ["Go (Golang)", "Node.js", "TypeScript", "REST APIs", "gRPC", "Microservices"],
    status: "CORE FOCUS",
  },
  {
    id: "databases-caching",
    index: "02",
    pillar: "DATABASES & CACHING",
    directive: "FAST DATA STORAGE",
    summary:
      "Storing and retrieving data quickly using relational databases, Redis caching, and real-time event queues.",
    skills: ["PostgreSQL", "TimescaleDB", "PostGIS", "Redis", "RabbitMQ", "Apache Kafka", "MongoDB"],
    status: "HIGH SPEED",
  },
  {
    id: "cloud-devops",
    index: "03",
    pillar: "CLOUD & DEVOPS",
    directive: "DEPLOYMENT & HOSTING",
    summary:
      "Packaging applications in Docker containers and hosting them reliably on cloud providers so they stay online 24/7.",
    skills: ["Docker", "AWS (EC2, S3, RDS)", "Google Cloud", "CI/CD", "Git", "Linux"],
    status: "PRODUCTION",
  },
  {
    id: "frontend-ui",
    index: "04",
    pillar: "FRONTEND & UI",
    directive: "WEB DASHBOARDS",
    summary:
      "Building clean, responsive user interfaces and dashboards that look sharp and work smoothly on all screen sizes.",
    skills: ["React", "Next.js", "D3.js", "TailwindCSS", "Vite", "Framer Motion"],
    status: "MODERN WEB",
  },
];

export default CAPABILITIES_DATA;
